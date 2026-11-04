// Necesario para que el navegador ofrezca "Instalar". No guarda datos.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
