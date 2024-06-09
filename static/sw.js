self.addEventListener("push", (event) => {
  console.log("Push Notification received", event.data.json());

  const { title, body } = event.data.json();

  const options = {
    body: body,
  };
  event.waitUntil(
    self.registration.showNotification(
      title || "Palavra do dia disponível",
      options
    )
  );
});
