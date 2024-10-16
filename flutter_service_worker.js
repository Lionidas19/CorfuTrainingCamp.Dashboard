'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5d559323cf6bba7ad66f32bb9a4793c8",
"assets/FontManifest.json": "0445787c0da67f129cd03c7496d2bcdc",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Sellix.ttf": "dcf3bbe33c33512e92337ef181f9d68f",
"assets/images/accepted.png": "44a6fa51c18135591138904321ae0a5d",
"assets/images/congrats_demo.png": "38855a624d761d1987797f5469f018c3",
"assets/images/congrats_xdex.png": "63967ba64ea0585baf29865549cad2b1",
"assets/images/emailsent_demo.png": "27a98c4533c61e69a670383c6e6f846c",
"assets/images/emailsent_xdex.png": "46f61bd56292f3711cb049753b87ff3a",
"assets/images/footer.svg": "29a48557b25dda0047a2afcf13303acd",
"assets/images/footer_xdex.png": "78939e6f30e4fe1bea4612e7d00f8e82",
"assets/images/image_taken.png": "3531bbfef5ed252dea1efe622825661c",
"assets/images/logo_chimera.png": "cc741ae7e38b0f6c10fb944ca0b910db",
"assets/images/logo_chimera.svg": "f3cbcda27752dfc043837c2094dc460f",
"assets/images/logo_demo.png": "3755712d07d9a7aefbdf95ba503d16ba",
"assets/images/logo_demo.svg": "1c57e2015256bf7df990ddf8f3194512",
"assets/images/logo_staging.png": "5022c6ea58ada995072add447e1519f8",
"assets/images/logo_staging.svg": "2ca8ab5496e4ca1994944d332189019c",
"assets/images/logo_trial.png": "0aa27e0ef221be100e80a38accb6584e",
"assets/images/logo_xdex.png": "381e212130a27c1a8bd9737abd4434fc",
"assets/images/logo_xdex.svg": "8249e4ce0a7d909f980e30b5ab091b28",
"assets/images/old_congrats_demo.png": "d643368614fe900cff0fdca4dbcd0c6e",
"assets/images/old_emailsent_demo.png": "f6b0c3b54cf156d6a955ce0af7f9bdae",
"assets/images/pending.png": "96cb723067c2b9d3c3d2210d6945ecc7",
"assets/images/qr_code_chimera.png": "b0df33ef01e70830e68becc0b102c031",
"assets/images/qr_code_demo.png": "9197285263b15f82acc56847ff106fa5",
"assets/images/qr_code_staging.png": "f3032ab4c995b14f782193f6a19cb9f9",
"assets/images/qr_code_staging_copy.jpg": "d0c83f9d31c6e3438445ef3f2db6de24",
"assets/images/qr_code_xdex.png": "0d81e04e6cb63b1d74d4a5313ec2f19c",
"assets/images/rejected.png": "d1118e7725bfba4ae49652658b29d776",
"assets/images/sellix/activity_image_sellix.png": "0af8417323b6e563d0c65a00b7f89b8e",
"assets/images/sellix/address_image_sellix.png": "3180a359289f2d08772f761cb353c67d",
"assets/images/sellix/agreement_image_sellix.png": "468142e614fdf5e15d752a979c34a251",
"assets/images/sellix/bitcoin_icon.png": "47a4a21c301ed14990df1641a490875c",
"assets/images/sellix/bitnet_icon.png": "e8554fd395a8dbc5037128378a133efa",
"assets/images/sellix/company_image_sellix.png": "5291991e561185073dcd3c87ddb96c35",
"assets/images/sellix/congrats_sellix.png": "f3fff130ee61f29e8582cd8ef844cbab",
"assets/images/sellix/country_image_sellix.png": "66d4f6ea0352f4488d192ea85ad41c7f",
"assets/images/sellix/emailsent_sellix.png": "2d7f75b1474b7d3eb9378c00a597c5ae",
"assets/images/sellix/email_image_sellix.png": "44bd447d5068a1f9b602e8f6de49dc8c",
"assets/images/sellix/email_sent_image_sellix.png": "2d7f75b1474b7d3eb9378c00a597c5ae",
"assets/images/sellix/ethereum_icon.png": "75befc4dcd32a8252b10a1b1f7aa286a",
"assets/images/sellix/footer_sellix.svg": "4a4ac7e6782f1df89400d15783f186d2",
"assets/images/sellix/iban_icon.png": "685d00eadd60c5bc8276db8a5f8dd2f6",
"assets/images/sellix/id_icon.png": "be6a2736a31a6d14b202d0040e3ed82e",
"assets/images/sellix/individual_image_sellix.png": "9daab16b632e4bc2183f93c3d93f1a03",
"assets/images/sellix/info_icon.png": "493b3893a8e351a87fbbf53bcae33389",
"assets/images/sellix/info_image_sellix.png": "4ecc4c52ebf39a7f6b29ba027c74a6ec",
"assets/images/sellix/kyc_icon.png": "94f7279682f6584e431e0c38ed0cf6df",
"assets/images/sellix/logo_sellix.png": "605c6612e251b6f974db469230d13198",
"assets/images/sellix/logo_sellix.svg": "261d05cfedbb1823f2404e88f1714efb",
"assets/images/sellix/matic_icon.png": "c7e0a410c2abf2f625d82edb76b56d58",
"assets/images/sellix/net_worth_image_sellix.png": "b57db8c5bebf43203c83918e4e7afb22",
"assets/images/sellix/origin_funds_image_sellix.png": "7716998c6270b14fd4ba8c24c5c8ed46",
"assets/images/sellix/ownership_image_sellix.png": "1384182c6810cd56d700ce18b537a303",
"assets/images/sellix/owners_image_sellix.png": "2d3e58b83a204c88f06c2b991a53a33f",
"assets/images/sellix/phone_image_sellix.png": "3ba07c5eacf43388ca09764cead3cca4",
"assets/images/sellix/qr_code_sellix.png": "abecbb31ac1b9ab34dd634628ce1f100",
"assets/images/sellix/selection_screen_image_sellix.png": "7f8da10405994c792c9efa996a047279",
"assets/images/sellix/solana_icon.png": "1db852b0a5de0cc597b757c9c40fafdf",
"assets/images/sellix/start_verification_image_sellix.png": "376e19581f5a6c90c7e000136bc9259b",
"assets/images/sellix/thank_you_image_sellix.png": "ce7dcf08cf0e5fd468d30ba3ad69530d",
"assets/images/sellix/tron_icon.png": "3d01375b6c8f20efb7180b8e6b14181b",
"assets/images/sellix/usan_icon.png": "b5cf441444daf3815368410ca578d008",
"assets/images/sellix/usrn_icon.png": "9fe39329d890822925d518a9d91040b9",
"assets/images/sellix/vault_image_sellix.png": "777277404f8d5cf36673bd5e9c6eb597",
"assets/images/sellix/veriff_icon.png": "db9c8eb9bcb069db65da65ef9fb66f8c",
"assets/images/sellix/wallet_image_sellix.png": "0335464dcf617e1315ee5b063817d519",
"assets/images/sellix/website_image_sellix.png": "57f994b3ce8a14c248de820e6368fa17",
"assets/NOTICES": "520733266d87c32af13c3c23554d629b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "92c407341981eadf05485dec0edec7ed",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "cccc317329e253efaeead3992af53d48",
"/": "cccc317329e253efaeead3992af53d48",
"loader.png": "42433162ed8226df250f3ebe1bfaca41",
"main.dart.js": "29cbdc90560df097a6342779f5b46dcb",
"manifest.json": "d0ebce0616ec1d250a088f1ecc73e9e6",
"scripts.js": "a674af3a12a6a35bd2d6dc8f3586d8c0",
"veriff.html": "f37bbbc7305fe0c96f42e2ddb706104f",
"version.json": "855fdbd12bbf45b64acf5b2174dc452e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
