/* ============================================================
   Service Worker
   目的は2つ。
   1. Chrome にインストール可能なアプリとして認識させる
   2. 電車の中など、電波のないところでも学習を続けられるようにする

   方式は stale-while-revalidate。
   まずキャッシュから即座に返し、裏で取り直してキャッシュを更新する。
   だから表示は常に速く、更新は次回の起動で反映される。

   更新のために手で何かする必要はない。
   ファイルを差し替えて push すれば、次にアプリを開いたときに裏で取り直され、
   その次の起動から新しい内容になる。

   CACHE の名前は、キャッシュを入れておく箱の名前。
   古い箱を捨てるためだけに使っている。
   名前を変えると全ファイルを取り直すので、
   「どうも古いままだ」というときの最終手段として日付を上げてもよい。
   ============================================================ */
const PREFIX = 'core-image-english-';
const CACHE = PREFIX + 'v8';

const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './diagrams.js',
  './data/particles.js',
  './data/verbs.js',
  './data/grammar.js',
  './data/words.js',
  './data/phrasals.js',
  './data/vocab.js',
  './data/vocab-pos.js',
  './data/vocab-senses.js',
  './data/vocab-art.js',
  './data/vocab-art-2.js',
  './data/vocab-art-3.js',
  './data/vocab-art-4.js',
  './data/exercises.js',
  './data/exercise-alts.js',
  './webapp-kit/webapp-kit.css',
  './webapp-kit/webapp-kit.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
  './icons/icon.svg'
];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    /* HTTPキャッシュを迂回して確実に最新を取りに行く */
    await cache.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' })));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    /* 同じオリジン（t-of.github.io）の他のアプリもキャッシュを持っているので、
       自分の接頭辞のものだけを消す */
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith(PREFIX) && k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;
  if(new URL(req.url).origin !== self.location.origin) return;

  /* 裏の取り直しを待つ約束をブラウザにさせる。
     これがないと、応答を返した直後に Service Worker が止められ、
     取り直しが途中で捨てられて更新が届かないことがある */
  const network = caches.open(CACHE).then(cache =>
    fetch(req).then(res => {
      if(res && res.ok) cache.put(req, res.clone());
      return res;
    }).catch(() => null));
  e.waitUntil(network);

  e.respondWith((async () => {
    const cache  = await caches.open(CACHE);
    const cached = await cache.match(req, { ignoreSearch: true });

    /* キャッシュがあれば即返す。更新は裏で進んでいる */
    if(cached) return cached;

    const res = await network;
    if(res) return res;

    /* オフラインで未キャッシュのページを開いた場合の保険 */
    return (await cache.match('./index.html')) ||
           new Response('オフラインです', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  })());
});
