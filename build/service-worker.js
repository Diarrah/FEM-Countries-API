importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.4/workbox-sw.js');

workbox.setConfig({debug: false});
workbox.precaching
    .precacheAndRoute([
        {"revision":"a2da617d79dc6c9c1c1e5fa293516486","url":"icons/logo-192.png"},
        {"revision":"38b7054aeb2caf61debc0d4c2c5fd377","url":"icons/logo-512.png"},
        {"revision":"28955be11029591f37a155559240f43d","url":"icons/logo-64.png"},
        {"revision":"586d2e5687aaea063335258b3289deef","url":"index.html"},
        {"revision":"5af0dceac1bf67c5268957217324a2c7","url":"static/css/main.8f02820a.chunk.css"},
        {"revision":"2720e15a370dbce37c9bba1649118dd3","url":"static/js/2.46781836.chunk.js"},
        {"revision":"e9353de4496c8d0da64186c3c2767478","url":"static/js/main.aca2beaf.chunk.js"},
        {"revision":"c95cbcf6ca24e54dace395894f4c62b8","url":"static/js/runtime-main.1125e9b2.js"},
        {"revision":"8b1e01a6492b272eea18c383cba7bd97","url":"static/media/arrow-black.8b1e01a6.svg"},
        {"revision":"852081700b1821cc2cc9d573565bd24c","url":"static/media/arrow-white.85208170.svg"},
        {"revision":"3c245e27342a36bad0d9bb5eec785a2e","url":"static/media/chevron-black.3c245e27.svg"},
        {"revision":"406e8ad942a1d57a1229ef052967e056","url":"static/media/chevron-white.406e8ad9.svg"},
        {"revision":"ca7e15e5c69c13fce1cfff96db166b43","url":"static/media/moon.ca7e15e5.svg"},
        {"revision":"c0aeb7381df4ebd63056acbfb762c7f1","url":"static/media/search-dark.c0aeb738.svg"},
        {"revision":"f6caf8dffcc8831dccb80cf57c984400","url":"static/media/search-light.f6caf8df.svg"},
        {"revision":"027ad6817940b28e104839c8ed0bd551","url":"static/media/sun.027ad681.svg"}
    ])