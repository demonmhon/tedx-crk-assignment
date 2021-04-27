/* eslint-disable no-undef */

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js'
);

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
  new RegExp(/\.(js|jsx|css)$/),
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  new RegExp(/\.(?:png|gif|jpg|jpeg|svg)$/),
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
        maxEntries: 60,
      }),
    ],
  })
);

self.addEventListener('push', (event) => {
  const title = '';
  const options = {
    body: event.data.text(),
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
