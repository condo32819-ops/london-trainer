const C='london-v1';const A=["./","index.html","chess.js","lines.js","manifest.json","icon-192.png","icon-512.png","icon-180.png","p/bB.svg","p/bK.svg","p/bN.svg","p/bP.svg","p/bQ.svg","p/bR.svg","p/wB.svg","p/wK.svg","p/wN.svg","p/wP.svg","p/wQ.svg","p/wR.svg"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request)))});
