import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// daftar aset yang akan di caching
const assetsToCache = [
  './',
  './icons/icon_72x72.png',
  './icons/icon_96x96.png',
  './icons/icon_128x128.png',
  './icons/icon_144x144.png',
  './icons/icon_192x192.png',
  './icons/icon_384x384.png',
  './icons/icon_512x512.png',
  './index.html',
  './favicon.jpeg',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  // TODO: Caching App Shell Resource
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  // TODO: Delete old caches
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  // TODO: Add/get fetch request to/from caches
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
