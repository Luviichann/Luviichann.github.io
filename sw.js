/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","ad034e694c07de79ee71bc17607ead74"],["/2023/11/05/测试/index.html","5795df787ea2ffb656537eb603b4fe2c"],["/2023/11/06/1tensors/index.html","e0e524ed2476cbca92c0880345d2aa05"],["/2023/11/06/blogs/index.html","e77e4ec0c34cad1cb78d18cba2d8f016"],["/2023/11/07/nn/index.html","16f0fe9677efb1873efefdfc5826c957"],["/2023/11/10/MNIST/index.html","a9e1f18a700eb48c8f9a66c9b6ab375b"],["/2023/11/10/datapr/index.html","5b01a5fbf4c96073662edb95d678fffc"],["/2023/11/12/css1/index.html","fcfe6d3ddc0fdb80894d911b4c0662e5"],["/2023/11/13/css2/index.html","9259465c7c635cf15045920484237232"],["/2023/11/15/css3/index.html","9b89f3e9d42b1c71c58c946b15ef0786"],["/2023/11/16/huggingface1/index.html","2b9f43dc51a1f5961ed258f7704e0c0f"],["/2023/11/17/huggingface2/index.html","cd57e5e750feefa17d15ea3f5094eede"],["/2023/11/17/huggingface3/index.html","5ab15b62be82a7771cd457963dbe6c4b"],["/2023/11/19/huggingface4/index.html","12cc552ea341ce66d852d9730da26d5d"],["/2023/11/24/css4/index.html","702ad41be98574d709b0f93a7a194800"],["/2023/11/26/ssn1/index.html","5e180f8f815ac2d1fb6bee9f7e419af7"],["/2023/11/27/miraiqqbot/index.html","6b38aa23d04f8c95808f73375f3e8077"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","3baf88b5730e765383c4760544ec019a"],["/archives/2023/11/index.html","d70f0971c6c2a4998ca1954efd5ae331"],["/archives/2023/11/page/2/index.html","c5a67716658614c4f34a925f4afda087"],["/archives/2023/index.html","77fcd6134b36f4b6c6fcbb63d1a9997a"],["/archives/2023/page/2/index.html","731c71aeecb2dcd9c8539cc98312c883"],["/archives/index.html","0f60af30781ff474cc40f21c12bddd33"],["/archives/page/2/index.html","0f313daf41e96452157d0e0364099d40"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/HuggingFace-NLP/index.html","b49c5d4a15b378071d117ed64d58e3c0"],["/categories/index.html","492445f4aa5e3be2e4ffdb073d63ecd5"],["/categories/前端/index.html","3bc7245df28c62b6c93090b6dd325b64"],["/categories/教程/index.html","edb24f2f44d548696e7fb6babf066744"],["/categories/杂项/index.html","d10a5c6faefb1331d652e5e7792d410c"],["/categories/测试文档/index.html","4aa586e0d8ecce036b9a0110f1542dad"],["/categories/深度学习/index.html","96952a60d8148bbe2a248a970756a62a"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","e7cc74519a44a7c68810e5e4a5cc6066"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","a793d61233ff51714129f904e9e4e29d"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","b285cad95b44349c539c7d4830bb81b8"],["/sw-register.js","a5fab1d683a24f1e0c4e1b7b44e551d8"],["/tags/HuggingFace/index.html","c008af86807418b396d5d98fac2089d3"],["/tags/Linux/index.html","50032961eda2a5047268d10128d64019"],["/tags/MNIST/index.html","04b765cbdfa1dc4b210101baa6dbb475"],["/tags/Mirai/index.html","1488d7484323239dfb5a24815fa22586"],["/tags/NLP/index.html","c899e424502accc33cd90d79429df901"],["/tags/Pytorch/index.html","b3b4aafa6dad71c413c205988e3b0d25"],["/tags/css/index.html","61398023be33a1b2b8c0acbf3edb7dbd"],["/tags/html/index.html","1ce5405f90b0962ae7b7c1021f610d45"],["/tags/index.html","7ab98a0aa2a0640eed1a93116869be55"],["/tags/前端/index.html","7795dd028761e5d1dda93b2cb982111e"],["/tags/张量/index.html","1ef1e59489f3dffc1eaf8b890a4e60c0"],["/tags/数据处理/index.html","31a273b8557c414f6acd9eafe5b22382"],["/tags/测试文本/index.html","41518d33478f512b8d560560f744315b"],["/tags/深度学习/index.html","25b710b200c000e1e448be5b9ea32839"],["/tags/神经网络/index.html","81181f0ce4835735f984df602ca2e575"]];
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
