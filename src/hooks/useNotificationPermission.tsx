import { useState } from "react";
import toast from "react-hot-toast";

/* const toast = {
  success: (msg: string) => console.log(msg),
  error: (msg: string) => console.log(msg),
}; */

const useNotificationPermission = () => {
  const [permission, setPermission] = useState(
    typeof window !== "undefined" && "Notification" in window
      ? Notification.permission
      : "default"
  );

  const enableNotifications = async () => {
    try {
      const publicKeyRequest = await fetch(
        "http://localhost:3000/notification/push/public_key"
      );
      const publicKeyData = await publicKeyRequest.json();

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

      const res = await fetch(
        "http://localhost:3000/notification/push/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(push),
        }
      );

      if (res.status === 201) {
        console.log("Notificações habilitadas");
        return toast.success("Notificações habilitadas");
      }

      if (res.status === 400) {
        const json = await res.json();

        if (json.message === "error-subscription-exists") {
          return toast.error("Você já está inscrito nas notificações");
        }

        return toast.error("Erro ao habilitar notificações");
      }
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
        return toast.error("Você negou as notificações, ative novamente.");
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
