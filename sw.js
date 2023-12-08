/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","a842f2622ebe127f40306982d6e599ca"],["/2023/11/05/测试/index.html","f06645f04e8771090711a02df155d679"],["/2023/11/06/1tensors/index.html","97d9a87c74626437172388bd7923670d"],["/2023/11/06/blogs/index.html","6f9d21443ca925110565ff032b29ffe9"],["/2023/11/07/nn/index.html","7abeb74c4dc0128ceff5e5aca5248fad"],["/2023/11/10/MNIST/index.html","78f6d12f8863d58e6e36724a00ea69c5"],["/2023/11/10/datapr/index.html","473b7076f59031eea8f1451e610b1929"],["/2023/11/12/css1/index.html","184b64a1fce49343a119861228338379"],["/2023/11/13/css2/index.html","3acdc851d5bcdfa2e226b3255b201187"],["/2023/11/15/css3/index.html","bc5bcee6d5e3c109dec7302ef9b72406"],["/2023/11/16/huggingface1/index.html","972d5b2cc4ce6fdcf01a087fee78ad4c"],["/2023/11/17/huggingface2/index.html","1a4a158a96b44970a82226df4252afa5"],["/2023/11/17/huggingface3/index.html","2ba372548ecf4da370bfe97cbd5c22cf"],["/2023/11/19/huggingface4/index.html","dd0d8cd1f348ffefd57f951b9bb1af7b"],["/2023/11/24/css4/index.html","ed5394fd4476f6d83ef70639f43596ed"],["/2023/11/26/ssn1/index.html","0c8c3fb8a887efb308c90964639af5e4"],["/2023/11/27/miraiqqbot/index.html","72eeaf4a1270d80b7b5896b66f10255a"],["/2023/11/30/co2/index.html","acd9c48b67e37ccd01594fd0c1a8a287"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","2e4878b999910e60437b6dadd20cd3b2"],["/archives/2023/11/index.html","5d3fd08df9efad987ae9ced4110af517"],["/archives/2023/11/page/2/index.html","0da91c3ac1ab857435ba59e151e30c6c"],["/archives/2023/index.html","914322fecff22183bf3247d7585edfcb"],["/archives/2023/page/2/index.html","e394019bbff61969ac3ccf643386eaf3"],["/archives/index.html","d39087238e5d1c07a3edc146beceebd4"],["/archives/page/2/index.html","7746e2a9bd31a73ff014dfd2c98003cb"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/HuggingFace-NLP/index.html","14db2dec7a607987429f06e9b2004f19"],["/categories/index.html","6950f051313d7a9f3c8b14e6a64e72f9"],["/categories/前端/index.html","6d5a667360dfe8fc890bfa374a09e752"],["/categories/教程/index.html","8b444003317b49e37e9b45291203e442"],["/categories/杂项/index.html","24ff6618cd92d461592792c549d8065b"],["/categories/测试文档/index.html","a69712c5745c29cd92a3c7ab6acf40ab"],["/categories/深度学习/index.html","04d942defce4ea1a96296b9bbc6a6a67"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","52ddf3db32e78c27f76cfa26bd6a0d49"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","e6ab84dd41cdd7abf9533e0852501b3d"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","51cf1369109aac352faad98cd03bf723"],["/sw-register.js","4ca3c54223eb5b4b2676e42faf4fdc9e"],["/tags/HuggingFace/index.html","e7f164666ac04b7b5d8af0081cee3464"],["/tags/Linux/index.html","a661bab86abe04d73790c845f42b1355"],["/tags/MNIST/index.html","737cda29abad3bba3be1397b84b12cdd"],["/tags/Mirai/index.html","c901089c60ce4ae65c55bb6648499eb8"],["/tags/NLP/index.html","ac82b02fb74474b0b4ca6e0464702aa8"],["/tags/Pytorch/index.html","d048507655b2819b0aedb3d6f47df46d"],["/tags/css/index.html","a11ba2a942443be5a8d5044fd8edd179"],["/tags/html/index.html","d59270e07832de445919a43dae97a454"],["/tags/index.html","c905283ffce8051f906c4cdc623386a7"],["/tags/前端/index.html","a7cf65d5e80375227a9850e15ff80c58"],["/tags/张量/index.html","31a716b95a8151cd2cb4e3317bef9f83"],["/tags/数据处理/index.html","a120ad6a08dea59da2b2c8aea6c0e955"],["/tags/测试文本/index.html","9d9cba3ce5a9a23e04ef048bcdb435be"],["/tags/深度学习/index.html","2ad0fb10d230862e297d3a467f9091c8"],["/tags/神经网络/index.html","4d5ba21a1fe7dadad1669515ecd543d5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
