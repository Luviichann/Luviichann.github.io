/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","1768bf9392ba8f6790b9f4943bb41f15"],["/2023/11/05/测试/index.html","6ae4ea22df8445ada35f1eeecf7d6f7a"],["/2023/11/06/1tensors/index.html","792155cf0b9ff1831d23c6c4b43a8b72"],["/2023/11/06/blogs/index.html","a823c0644a30a73eedf4ceceadaf0a88"],["/2023/11/07/nn/index.html","937a3f8809d78823af497f95d9c50105"],["/2023/11/10/MNIST/index.html","9981d60dfc6f68c974249da7d9f94941"],["/2023/11/10/datapr/index.html","6b656128e4f53f63c464759d618c830a"],["/2023/11/12/css1/index.html","f6180f67fe35c0123ce3457e19f9d101"],["/2023/11/13/css2/index.html","0e7d2f7d32654dec2ec1b8dfc7ef1e84"],["/2023/11/15/css3/index.html","264716efaa4aff6541a56912afbe0205"],["/2023/11/16/huggingface1/index.html","25d6ccb808c64a5a71673fa8baa21ac9"],["/2023/11/17/huggingface2/index.html","584cf316469fea3fb9fb36a27b357b2a"],["/2023/11/18/huggingface3/index.html","ac01c859725e13623b22964127641a8a"],["/2023/11/19/huggingface4/index.html","3f233a17c530cfd118ac74b6cd026a23"],["/2023/11/24/css4/index.html","b2bc6fe9205218db36081c26925921be"],["/2023/11/26/ssn1/index.html","ac4a5e21fe7468b6f4582b4709d90cdb"],["/2023/11/27/miraiqqbot/index.html","a2da5961ea8b417a838e70fd3925a813"],["/2023/12/21/ssn2/index.html","e24f04864c817e21abac4177a7e7e365"],["/2024/01/02/llm1/index.html","474748f8630ead8d229d500cdd99ea1d"],["/2024/01/20/go1/index.html","84dd01f29c5efba7e41950327c625661"],["/2024/02/02/zt1/index.html","658dd4e6f53857bf0864f40acc7d6cb9"],["/2024/02/04/go2/index.html","d44bcb6de679f305642e96e9a6ba61dd"],["/2024/02/09/go3/index.html","e5aaa3733fd4cd97d7334ef99ea9fa5a"],["/2024/02/12/go4/index.html","697c328be3b9df541b726419d6588e65"],["/2024/02/17/go5/index.html","fc02845f33da124dac47b377f05a223f"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","7ce756d18d5e4a4484a96e76034cdb16"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","f92b2ed90e189cfb8bd314d09256ca62"],["/archives/2023/11/page/2/index.html","5b39b1f9f0a8c5f11a8e67a30a2fedd2"],["/archives/2023/12/index.html","dd6cdf77ad5983d827b38629d592c3e7"],["/archives/2023/index.html","2200ef316b13c10a5e0a71cc7af13a43"],["/archives/2023/page/2/index.html","a128799f74df27d21e98104bff7f57d4"],["/archives/2024/01/index.html","144f8dca09d51adade666d8a66ddc04e"],["/archives/2024/02/index.html","82440556ce42c5f052c42f561121914f"],["/archives/2024/index.html","d57d0b0876e3a3c01b2d20db371c097a"],["/archives/index.html","cf03a0f65ac6e1018b102f4b42497c68"],["/archives/page/2/index.html","4680ec2651a8f4877455b82d413f2ce8"],["/archives/page/3/index.html","7574cbf5d41947729652b96bb886297b"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","2ea846b89d932d0f3a1afaae13ef1d1b"],["/categories/HuggingFace-NLP/index.html","78759957ddafebfe5800ea27d5aa57d1"],["/categories/index.html","b1271a14a23a39b99efad645887012c4"],["/categories/前端/index.html","fd5c8590474098a55932161cdc839be5"],["/categories/对话系列/index.html","45cd32eccfbd4b881a9916d543147e6d"],["/categories/教程/index.html","1ea00eec39cb2f3d14911da68a71971c"],["/categories/杂谈/index.html","37458f737a0571c53a5645568799dc26"],["/categories/杂项/index.html","3f16e3615ee8187aebcebc15e87ae4d2"],["/categories/测试文档/index.html","d72d41a89a076b86876bf31896c2231f"],["/categories/深度学习/index.html","f97430560da88f5dbd46938c3a2274e3"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","bf3b365c38bb4ef0edf55a30bac43a13"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","4d1719f834df92c050748b5d188558ef"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","a813be514879b3e840f5ca1f5f308fdc"],["/page/3/index.html","e3f88e16a87c9c116ce02e0d568ea1ea"],["/sw-register.js","44633bff235d7c4cafe9bc684d024502"],["/tags/Gin框架/index.html","412925f609dc1fd24f151eea9f2b99d4"],["/tags/Golang/index.html","74d11763b49ed62490d89cc59ed2e321"],["/tags/Gorm/index.html","d39f820a783c8a8a683e8d0945ee4f58"],["/tags/Go语言/index.html","104dd8be9893dc6ded266104b958b139"],["/tags/HuggingFace/index.html","bf96e566eef620cbae5700813ed261c0"],["/tags/LLM/index.html","36baec8710cd7779bb5200afc519a90f"],["/tags/Linux/index.html","4ea5f96fee17749f0743759ee39b45da"],["/tags/MNIST/index.html","c8502205b4110c904f64483db0c7ae3e"],["/tags/Mirai/index.html","f766540a00c96a6620d02e3601135c9e"],["/tags/NLP/index.html","0d3940e887af41ad693dd7307be19c40"],["/tags/Pytorch/index.html","6fc2625c440ef6c2b7c0a06473f4bf35"],["/tags/css/index.html","be3b1a74eb2a5ffaf2c8eb67e4c4f534"],["/tags/html/index.html","42b0437d57107d23517cbc5bd8f9be9e"],["/tags/index.html","fb507c989157e8ca9c1742ae1b76a3a8"],["/tags/前端/index.html","ab659babf5085c82c0a82571840e4061"],["/tags/大语言模型/index.html","126d3e5e33719c84d0e2e4ad17ddab73"],["/tags/张量/index.html","6a7cf7d32d26acc04a71fac4a2e249bf"],["/tags/数据处理/index.html","34a9190040a6cdfedce61accc2a60412"],["/tags/数据库/index.html","641489a172ac632c6c8cd8aefbb7ea3d"],["/tags/测试文本/index.html","a5c54c2653aa945f01b5a7e1016d1076"],["/tags/深度学习/index.html","e4ccc955ee0c4384c28e6ad07253491a"],["/tags/神经网络/index.html","2f39a1b02aac8afe05e5424cad778d22"]];
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
