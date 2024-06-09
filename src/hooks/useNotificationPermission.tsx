import { useState } from "react";

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
        alert("Erro ao buscar a chave publica");
        return;
      }

      if (!("serviceWorker" in navigator)) {
        alert("Seu navegador não suporta notificações");
        return;
      }

      if (!("PushManager" in window)) {
        alert("Seu navegador não suporta notificações");
        return;
      }

      const publicKey = publicKeyData.publicKey;

      const sw = await navigator.serviceWorker.ready;
      const push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicKey,
      });
      console.log(JSON.stringify(push));

      await fetch("http://localhost:3000/notification/push/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(push),
      });
    } catch (error) {
      console.error("Erro ao habilitar notificações", error);
    }
  };

  const requestPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      setPermission(permission);

      if (permission === "granted") {
        enableNotifications();
      }

      if (permission === "denied") {
        alert("Você negou as notificações");
      }
    } catch (error) {
      console.error("Erro ao solicitar permissão para notificações", error);
    }
  };

  return {
    permission,
    requestPermission,
  };
};

export default useNotificationPermission;
