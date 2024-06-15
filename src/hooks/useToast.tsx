import { OptionsObject, useSnackbar } from "notistack";

interface PromiseToastProps {
  loading: string | (() => string);
  success: string | ((data: any) => string);
  error: string | ((error: any) => string);
}

const useToast = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const toast = {
    success: (
      message: string,
      props?: OptionsObject<"default"> | undefined
    ) => {
      return enqueueSnackbar(message, { variant: "success", ...props });
    },
    error: (message: string, props?: OptionsObject<"default"> | undefined) => {
      return enqueueSnackbar(message, { variant: "error", ...props });
    },
    warning: (
      message: string,
      props?: OptionsObject<"default"> | undefined
    ) => {
      return enqueueSnackbar(message, { variant: "warning", ...props });
    },
    info: (message: string, props?: OptionsObject<"default"> | undefined) => {
      return enqueueSnackbar(message, { variant: "info", ...props });
    },

    default: (
      message: string,
      props?: OptionsObject<"default"> | undefined
    ) => {
      return enqueueSnackbar(message, { variant: "default", ...props });
    },

    loading: (
      message: string,
      props?: OptionsObject<"default"> | undefined
    ) => {
      return enqueueSnackbar(message, { variant: "loading", ...props });
    },

    dismiss: (key: string | number) => {
      return closeSnackbar(key);
    },

    promise: async (
      promise: Promise<any>,
      messageObj: PromiseToastProps,
      props?: OptionsObject<"default"> | undefined
    ) => {
      const getMessage = (
        messageOrFn: string | ((arg?: any) => string),
        arg?: any
      ) => (typeof messageOrFn === "function" ? messageOrFn(arg) : messageOrFn);

      const loadingId = enqueueSnackbar(getMessage(messageObj.loading), {
        variant: "loading",
        ...props,
      });

      try {
        const data = await promise;
        closeSnackbar(loadingId);
        enqueueSnackbar(getMessage(messageObj.success, data), {
          variant: "success",
          ...props,
        });
        return data;
      } catch (error) {
        closeSnackbar(loadingId);
        enqueueSnackbar(getMessage(messageObj.error, error), {
          variant: "error",
          ...props,
        });
      }
    },
  };

  return toast;
};

export default useToast;
