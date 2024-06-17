console.log("Service Worker Loaded...");

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cache) => {
            if (cache !== expectedCacheName) {
              return caches.delete(cache);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

self.addEventListener("push", (event) => {
  console.log("Push Notification received", event.data.json());

  const { title, body } = event.data.json();

  const options = {
    body: body,
    icon: "https://raw.githubusercontent.com/parlandin/blog-site/develop/src/images/clancy_hat.png",
    data: {
      url: "http://localhost:8000/word-day/",
    },
  };
  event.waitUntil(
    self.registration.showNotification(
      title || "Palavra do dia disponível",
      options
    )
  );
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});
