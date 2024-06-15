import { useState } from "react";
import axios from "../api/axios";
import useToast from "./useToast";

const useNotificationPermission = () => {
  const toast = useToast();

  const [permission, setPermission] = useState(
    typeof window !== "undefined" && "Notification" in window
      ? Notification.permission
      : "default"
  );

  const enableNotifications = async () => {
    try {
      const { data: publicKeyData } = await axios.get(
        "/notification/push/public_key"
      );

      if (!publicKeyData) {
        return toast.error("Erro ao buscar a chave publica");
      }

      if (!("serviceWorker" in navigator)) {
        return toast.error("Seu navegador não suporta notificações");
      }

      if (!("PushManager" in window)) {
        return toast.error("Seu navegador não suporta notificações");
      }

      const publicKey = publicKeyData.publicKey;

      const sw = await navigator.serviceWorker.ready;
      const push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicKey,
      });

      const subscriptionFunction = (): Promise<unknown> => {
        return axios.post("/notification/push/subscribe", push, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      };

      toast.promise(subscriptionFunction(), {
        loading: "Habilitando notificações...",
        success: (data) => {
          console.log("Notificações habilitadas");
          return "Notificações habilitadas";
        },
        error: (err) => {
          const message = err.response.data.message;
          if (message === "error-subscription-exists") {
            return "Você já está inscrito nas notificações";
          }
          return "Erro ao habilitar notificações";
        },
      });
    } catch (error) {
      return toast.error("Erro ao habilitar notificações");
    }
  };

  const requestPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      setPermission(permission);

      if (permission === "granted") {
        return enableNotifications();
      }

      if (permission === "denied") {
        return toast.error("Você negou as notificações, ative novamente. ");
      }
    } catch (error) {
      return toast.error("Erro ao solicitar permissão para notificações");
    }
  };

  return {
    permission,
    requestPermission,
  };
};

export default useNotificationPermission;
