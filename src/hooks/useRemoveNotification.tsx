import axios from "../api/axios";
import useToast from "./useToast";

interface PushSubscriptionKeys {
  p256dh: string;
  auth: string;
}

interface PushSubscriptionData {
  endpoint: string;
  expirationTime: number | null;
  keys: PushSubscriptionKeys;
}

const useRemoveNotification = () => {
  const toast = useToast();

  const disableNotifications = async () => {
    try {
      const sw = await navigator.serviceWorker.ready;
      const push = await sw.pushManager.getSubscription();

      if (!push) {
        toast.error("Você não tem notificações habilitadas");
        return;
      }

      const subscriptionData: PushSubscriptionData = {
        endpoint: push.endpoint,
        expirationTime: push.expirationTime,
        keys: {
          p256dh: btoa(
            String.fromCharCode(...new Uint8Array(push.getKey("p256dh")!))
          )
            .replace(/=+$/, "")
            .replace(/\+/g, "-")
            .replace(/\//g, "_"),
          auth: btoa(
            String.fromCharCode(...new Uint8Array(push.getKey("auth")!))
          )
            .replace(/=+$/, "")
            .replace(/\+/g, "-")
            .replace(/\//g, "_"),
        },
      };

      const unsubscribeFunction = (): Promise<unknown> => {
        return axios.post("/notification/push/unsubscribe", subscriptionData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      };

      toast.promise(unsubscribeFunction(), {
        loading: "Desabilitando notificações...",
        success: () => {
          console.log("Notificações desabilitadas");
          return "Notificações desabilitadas";
        },
        error: (err) => {
          console.log("Erro ao desabilitar notificações: ");
          return "Erro ao desabilitar notificações";
        },
      });

      push.unsubscribe();
    } catch (error) {
      toast.error("Erro ao desabilitar notificações");
    }
  };

  return { disableNotifications };
};

export default useRemoveNotification;
