/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","e4e62b6d0e6926bf34bbc4080d68e6b1"],["/2023/11/05/测试/index.html","b7334cc0fb336a57b345558ab82796e2"],["/2023/11/06/1tensors/index.html","134ca2c405bd47f150ba9aadab8e9ef1"],["/2023/11/06/blogs/index.html","0f8b2211936a32e1f7b3f5c2c4c38104"],["/2023/11/07/nn/index.html","a40f612a257590d78fc519896877e206"],["/2023/11/10/MNIST/index.html","f485a773eddd836fd96567c0a2c2d6bd"],["/2023/11/10/datapr/index.html","83c4021043df04a6bfecd5dedbc51d1e"],["/2023/11/12/css1/index.html","e9310dc448abc8d3729bce766cb3c6b6"],["/2023/11/13/css2/index.html","8fc4d26ab3b6b47f1ed0b6c8c8e7945b"],["/2023/11/15/css3/index.html","72554adb377494df8c8f81ad216ebeac"],["/2023/11/16/huggingface1/index.html","a708ccdc09fc237ae2d4105c7974ecfe"],["/2023/11/17/huggingface2/index.html","f3868c47d18354b63f054fa121c6000d"],["/2023/11/17/huggingface3/index.html","7587cbe6e7929c9f0416f1cc7cedfa77"],["/2023/11/19/huggingface4/index.html","c94da4b904d600dd47936de4ca3e4686"],["/2023/11/24/css4/index.html","6d962c48b746810caaeef3250e6cd128"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","676b36eef340810ee6a715056be0cebd"],["/archives/2023/11/index.html","77d24261dca83c0ced14ae4c29d73e30"],["/archives/2023/11/page/2/index.html","54128450ed0b11251ae990b3e4027d07"],["/archives/2023/index.html","543224a1786376edae87b7c3eccf250f"],["/archives/2023/page/2/index.html","f9b24d615a6e8def2f27001f22f3a86a"],["/archives/index.html","5a34edc3281ba74ab6177a9043b7d95d"],["/archives/page/2/index.html","14e5e137956bfe49ab65cb6fec7dcb3c"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/HuggingFace-NLP/index.html","2d0fd809b37dbbcb4370ca5de5f364ae"],["/categories/index.html","e7b1bd74b8c8a173b1f41413353d9957"],["/categories/前端/index.html","76be0071ff6b17fff00ee41aadeb42ad"],["/categories/教程/index.html","dd0e64777b6dc36f1a1566e26ed4daef"],["/categories/测试文档/index.html","bf0f1144d722d78282e3bb999c4dad95"],["/categories/深度学习/index.html","72a283cb6ad5e9657cc520edd3b0281b"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","37333b9fe684dc59a368417ace3af3bf"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","a52904e2f5aff2c6dcf50de86c6dece9"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","b6d40858dd450f8f2e9b84aa9e674ecc"],["/sw-register.js","c8ac5ddafad2d50a9d2dc4498e8589b7"],["/tags/HuggingFace/index.html","038e02bf281a4d4f13e18b295dbf3a76"],["/tags/MNIST/index.html","fd266289e1b5dc5cac4e4bee71604cd2"],["/tags/NLP/index.html","3d2b78555699a7e744bf8ce217d00c96"],["/tags/Pytorch/index.html","74912bb0662bc446987cd915563cfd9e"],["/tags/css/index.html","75104c2c07ce6c695078ab1fa4c9dd72"],["/tags/html/index.html","6b6eaa31c4571bedb9d763331f85dd5e"],["/tags/index.html","7148638a25621168267d071f0f3ab497"],["/tags/前端/index.html","d1cb7de9f1483dd59c972633a28f5f7e"],["/tags/张量/index.html","43f4524e8c291d8f341d1a590be8239e"],["/tags/数据处理/index.html","1126d86ab4bf0b568dd2b1aacb3fc67a"],["/tags/测试文本/index.html","56368be32b3cbbb7c2908b6d1d7a80cb"],["/tags/深度学习/index.html","4af0c32de5816b89bcdb765c4c2cd2a5"],["/tags/神经网络/index.html","e75d669b852d4c2c304a4ffb5b2f7742"]];
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
