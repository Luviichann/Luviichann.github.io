/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","49aef829052303ee28d85c25c9c65226"],["/2023/11/05/测试/index.html","3f8b1b0eac1c47d973cdd9cb7104f0ed"],["/2023/11/06/1tensors/index.html","33e65966640909a9f0e22f3a8fed66ec"],["/2023/11/06/blogs/index.html","bb4708ba7487bac142a336bd9f1ff9be"],["/2023/11/07/nn/index.html","a9d8c856745aebb596c0b3e32899c875"],["/2023/11/10/MNIST/index.html","8536836f664f3e43096db0b3e3fe0214"],["/2023/11/10/datapr/index.html","4cd16bf32f8d5b3b58b10302f70321e6"],["/2023/11/12/css1/index.html","aa1ac9f6633bafaa6f34c7fa1bffc4e3"],["/2023/11/13/css2/index.html","f41fb87101269744ba1f5ac4ad588a04"],["/2023/11/15/css3/index.html","f2a6da914dfc5b5bf783d234402fa7c3"],["/2023/11/16/huggingface1/index.html","5802c95e745dc393f4d4d53c32ecb517"],["/2023/11/17/huggingface2/index.html","29799e834a76161e48c6690135c7b672"],["/2023/11/17/huggingface3/index.html","10db3592f3e52538a177026dc00f5f80"],["/2023/11/19/huggingface4/index.html","7cae91291838ffbd38be694ce1ccf7c7"],["/2023/11/24/css4/index.html","f0ddef694c7ff2cd954fd47462537229"],["/2023/11/26/ssn1/index.html","d151730b8e715ff912c8c327a8a8924e"],["/2023/11/27/miraiqqbot/index.html","ea377132cd8c22a901e85384a313c330"],["/2023/11/30/co2/index.html","74c5d0825472a6f22936ed26f7799d94"],["/2023/12/21/ssn2/index.html","a1d9fe42be44d12588f30dea3dbab609"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","50640a5d72e2c0c89078ceaff9e6924b"],["/archives/2023/11/index.html","492eef0643341b1cd6048a279bc7af86"],["/archives/2023/11/page/2/index.html","e3e2c2dd52f1aa6f3f57a15b0368b584"],["/archives/2023/12/index.html","0847e63388b7547eb0b6a213edaa20c5"],["/archives/2023/index.html","3b5ffe21990c0a9f22fbb9f0cdfe5e38"],["/archives/2023/page/2/index.html","b7bcf6055f384d4adf4c527fff00c8b8"],["/archives/index.html","383f17d7bfc3e59bc83e0305c01ae186"],["/archives/page/2/index.html","a12c4ed676f3060f31eefc4f60ca54c3"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/HuggingFace-NLP/index.html","3a5948a81ec3947dac0d57fa849f47cf"],["/categories/index.html","8f6eddb4acb840bac8a37dafe821ad1b"],["/categories/前端/index.html","05b599d9bbe46e193b28ec087cbe337b"],["/categories/教程/index.html","8ee3d28b52e5c9a46d29233a44b59da4"],["/categories/杂项/index.html","1b5726176ed7c011416ce7d28b764260"],["/categories/测试文档/index.html","0576fc562ff497c2df6c6da688a72240"],["/categories/深度学习/index.html","05debc0b1d04fd528a27bda3c5ee68a7"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","65fd431c6967c44e13a179f59421872f"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","9bc646ae7a13ee5b39879425a52c34c1"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","369cbe7429c785318725843c45c4f620"],["/sw-register.js","8595a6b13b34c0719a55d015ae431e7a"],["/tags/HuggingFace/index.html","86f1e50ddd4aaeb6e0d7a04a2144637c"],["/tags/Linux/index.html","cc39ac08b20ab30b6185655ac3d0ced3"],["/tags/MNIST/index.html","a0340ad2924cb2d097e564c8fbd14ace"],["/tags/Mirai/index.html","6ffac94ead64c9431a826e07ad4916dd"],["/tags/NLP/index.html","6f034eb43eaa91a8a3c5983594a55ff4"],["/tags/Pytorch/index.html","ac6281567af5969600f3bb8ba22523b4"],["/tags/css/index.html","804610df96b3d3dea219453c29c6fc0c"],["/tags/html/index.html","0dd8d247a8f0f73b22ee5b44702098e7"],["/tags/index.html","a5fd5a75d0d61a656276add853ede6d3"],["/tags/前端/index.html","ad1b1b38477a421eff5188a7932bd444"],["/tags/张量/index.html","e105601f396abc7dd29a7280f790747d"],["/tags/数据处理/index.html","c914a9c64f9916212830e870c5bb6e19"],["/tags/测试文本/index.html","089963a5f6c7bfe2dbd0b9d202be1e6c"],["/tags/深度学习/index.html","78720b18cd740895e87ac9f6e3444bec"],["/tags/神经网络/index.html","b070fdffef10b38a4c3ed75e99e69129"]];
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
