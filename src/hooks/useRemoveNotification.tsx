import toast from "react-hot-toast";

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
          ),
          auth: btoa(
            String.fromCharCode(...new Uint8Array(push.getKey("auth")!))
          ),
        },
      };

      const res = await fetch(
        "http://localhost:3000/notification/push/unsubscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(subscriptionData),
        }
      );

      if (res.status === 200) {
        await push.unsubscribe();
        console.log("Notificações desabilitadas");
        toast.success("Notificações desabilitadas");
        return;
      }

      if (res.status != 200) {
        toast.error(
          "Erro ao desabilitar notificações ou você não tem notificações habilitadas"
        );
        return;
      }
    } catch (error) {
      toast.error("Erro ao desabilitar notificações");
    }
  };

  return { disableNotifications };
};

export default useRemoveNotification;
