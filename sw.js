/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","edcbffd6f1b9d9066dc3461e5bd42116"],["/2023/11/05/测试/index.html","3dff5242c2bf18cfc809fd23d4aef31c"],["/2023/11/06/1tensors/index.html","d681e7a86955601c09be54dd1487152f"],["/2023/11/06/blogs/index.html","9fa2dbe8ec05b757f2e7307d9e1eed5c"],["/2023/11/07/nn/index.html","c02d05a75dd35db72eab60f9d166306e"],["/2023/11/10/MNIST/index.html","20d7d585352fedf0386f90ababb9ba58"],["/2023/11/10/datapr/index.html","2d1b7ffa8c6cedb49285fc646f70094d"],["/2023/11/12/css1/index.html","d946c2a0a605c8208c2440a3ed191a23"],["/2023/11/13/css2/index.html","ec197b526d01917e795adb171904dfba"],["/2023/11/15/css3/index.html","d5339afeb71bffa94e9bc965bbfaa6bf"],["/2023/11/16/huggingface1/index.html","698ab1eacbcb6108fe06eb08ff5c049c"],["/2023/11/17/huggingface2/index.html","9ad459b923b26c3be1fd834ea0b4cca3"],["/2023/11/17/huggingface3/index.html","4e323bdd7a9c14bc2865a169d3de5058"],["/2023/11/19/huggingface4/index.html","4fa746f31a84dc00819fece9559c87fe"],["/2023/11/24/css4/index.html","3f7833b7431ae35a4b2c452da82e5c21"],["/2023/11/26/ssn1/index.html","1e49e27ed3fb4d388ed1c1a58a372150"],["/2023/11/27/miraiqqbot/index.html","d9f1c0534aec4bf9ea6f55e807d6daf8"],["/2023/11/30/co2/index.html","68377b39cfccc5b7aec26bfe36795077"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","191180cd9a7ae48d4823a28f58e4b4c4"],["/archives/2023/11/index.html","2ebced93fb94659881c32963ed260a93"],["/archives/2023/11/page/2/index.html","df1df854fcd107b554da119510076ea0"],["/archives/2023/index.html","7c52077a8033b129527334f9f519ae6a"],["/archives/2023/page/2/index.html","d7dc940899c49c49132bb32fd0eb29db"],["/archives/index.html","a24bfa31c87068d03b306cad59305626"],["/archives/page/2/index.html","970aedd0b554a996768d8dec2fae5ccf"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/HuggingFace-NLP/index.html","9ee4317615064f01b1a49195d8b9e3ad"],["/categories/index.html","25dbbaefebaa761458c906513e017297"],["/categories/前端/index.html","d7a35d651b0d0a851e4da5bd5312bddd"],["/categories/教程/index.html","432a6881dd726bf60587a0c078ca83f0"],["/categories/杂项/index.html","b125c7c1062b07017f883d1f5f820247"],["/categories/测试文档/index.html","7abbee2abb45b50ba880954b70e9bb1b"],["/categories/深度学习/index.html","33a018692cdc64bdffd4955226a97c46"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","32ab5d9e8e28a1ed73edb131d5376bb8"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","e6ab84dd41cdd7abf9533e0852501b3d"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","51cf1369109aac352faad98cd03bf723"],["/sw-register.js","b2c1ea70c2042eae6ba0f6f044f15f55"],["/tags/HuggingFace/index.html","056e98f585cdd252c964e6affe025707"],["/tags/Linux/index.html","93bc59600efb129c29d32003b96f35ff"],["/tags/MNIST/index.html","7067c30d3c59062bd714fa3b2c0ab282"],["/tags/Mirai/index.html","7eb72f9a8a53a1b5d3c4e45d793a7a9a"],["/tags/NLP/index.html","12c035921863f130300f1957ec8e86c4"],["/tags/Pytorch/index.html","69b53d94df45158d0259eb78acc9ac4a"],["/tags/css/index.html","483e143dffbc9cf20f942e750a8acef1"],["/tags/html/index.html","965ff9aa19354f41e09e49d754e0ec72"],["/tags/index.html","1fad4244cf74b2470fa77688e7d22a00"],["/tags/前端/index.html","8b94414b5ffac0cca1f815d0b50d50dd"],["/tags/张量/index.html","6d16955e9ce2d56ed1274586bdae257f"],["/tags/数据处理/index.html","0e16e844721148d49c70ff1bf332cff5"],["/tags/测试文本/index.html","1081409f3869530a288e2436d030adb4"],["/tags/深度学习/index.html","f7ab6f2b673bb922d1531e9521a1947c"],["/tags/神经网络/index.html","02bd0da168986aa4ef20b3e1fefba16b"]];
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
