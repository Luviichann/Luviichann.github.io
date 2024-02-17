/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","e0845fefc27f57810b7bac533053c618"],["/2023/11/05/测试/index.html","0f4306f63c600b6894faa5ebe31022cd"],["/2023/11/06/1tensors/index.html","51ccb322be6d12a3eed845ebc782b46d"],["/2023/11/06/blogs/index.html","a27a4eabfd22dd25a1906f91924fb156"],["/2023/11/07/nn/index.html","ec16bfc385ab25a1857fa59d365ea29c"],["/2023/11/10/MNIST/index.html","e21ae34c2f2054474216323e4c5a4c22"],["/2023/11/10/datapr/index.html","c03a5623aa9cd751f5b6527b0403a843"],["/2023/11/12/css1/index.html","7fee008af03d2a74f7f7fbe3357a41bb"],["/2023/11/13/css2/index.html","d701ca29ef93f056deb5ae3208749eb4"],["/2023/11/15/css3/index.html","3e5c6b4b452ee671277f86389dc5137e"],["/2023/11/16/huggingface1/index.html","edae7e6971539413484372aefb648240"],["/2023/11/17/huggingface2/index.html","8810c02ae8f5418cf06dafc62501042a"],["/2023/11/18/huggingface3/index.html","f85aff05757d5099fc34dc4e10d4d727"],["/2023/11/19/huggingface4/index.html","bd22f10b253a9fba06d8526fd803f238"],["/2023/11/24/css4/index.html","8a88ecdbb8e72c4376ec79b3391ce0fd"],["/2023/11/26/ssn1/index.html","40f38ea28f859a9d231d73833f5b9651"],["/2023/11/27/miraiqqbot/index.html","37fdbb5da5f594c95a1929953afd1e93"],["/2023/12/21/ssn2/index.html","81adcd75086394c087d1fdecd4b7d64f"],["/2024/01/02/llm1/index.html","0e7af02556327bd7bab7efad5aec7c45"],["/2024/01/20/go1/index.html","1825b237a29724da66b277da0808e194"],["/2024/02/02/zt1/index.html","fdb719b530c9904a25809a3a1a4bc88f"],["/2024/02/04/go2/index.html","67c5e32036b81dd59a0939e9bcdd62de"],["/2024/02/09/go3/index.html","7c486adaee28cd18b1c45b47b7bd64d5"],["/2024/02/12/go4/index.html","4930a98bf8214f2cea17f3e5fd77ba25"],["/2024/02/17/go5/index.html","d6f5ae33f71443fead0945c2ce3fb87c"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","2bff16e12a0c0bc91bb6a9955e3ef55a"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","afcca4a319c470a9add14d24ec08fda8"],["/archives/2023/11/page/2/index.html","9e567e9c702c1e4c238226b8a044d653"],["/archives/2023/12/index.html","08cc74e422ceab6618905fcc4ca0e1d3"],["/archives/2023/index.html","7efda87439eaf2a6c1cb985bc8cb24e6"],["/archives/2023/page/2/index.html","dd1d36235bd14c53383e187de8ecedf8"],["/archives/2024/01/index.html","f434990a18ed097c5d05e7c25d6676a1"],["/archives/2024/02/index.html","1f2d82026b1380c353da6426d14033a6"],["/archives/2024/index.html","164b2cf3782c0c642bcf5f95815fce88"],["/archives/index.html","9df34e3f52213df8a063dca9e18b221a"],["/archives/page/2/index.html","ebc69c157bbd956fdf6d7eb7a3e949ce"],["/archives/page/3/index.html","40a255743f39d6a71adeaedae12574ab"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","6246eddb6ef3bca474ec81372e5ac05b"],["/categories/HuggingFace-NLP/index.html","341e7744536c76c4fc0d4b9068ef93f3"],["/categories/index.html","0a1ac103c47372cd8a7eee88b43f93d2"],["/categories/前端/index.html","5efbb6a74ae9f44b01b5fa5fb2d83f5d"],["/categories/对话系列/index.html","4f1e5637a6b992c6434b4a90b4af0c38"],["/categories/教程/index.html","f20c409cd3df55a370d493e86ca8af2c"],["/categories/杂谈/index.html","8f131fe32ff0155286c3b0dfc5af4543"],["/categories/杂项/index.html","603438b3a3cda46dac50b045027c9a35"],["/categories/测试文档/index.html","95636929df7891ba4476eb4dc6bf9a5c"],["/categories/深度学习/index.html","0324aeb829d6b2a9d2dddda62726fd4c"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","69ca87cf2674e1801446f9f7d7672508"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","d21fddc26df43a7f5eff23a893a43425"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","a813be514879b3e840f5ca1f5f308fdc"],["/page/3/index.html","e3f88e16a87c9c116ce02e0d568ea1ea"],["/sw-register.js","1496fd080f0dc80e4fca8b91d8e53e64"],["/tags/Gin框架/index.html","01d66a4aa6860b449492cd3220fe996c"],["/tags/Golang/index.html","1b6fdf470633a56a5a6f953b8bcd73c9"],["/tags/Gorm/index.html","e8d6c20c32e56a0c8856b452ae47660b"],["/tags/Go语言/index.html","975275db628b7a42a09522df71fb9038"],["/tags/HuggingFace/index.html","2cc3c951ff81dfab501a83ad9f7a4b1f"],["/tags/LLM/index.html","732880b5fe3e885170ea1f27ed73998b"],["/tags/Linux/index.html","28ca5be985f339f142bfcc6d37657211"],["/tags/MNIST/index.html","2ba70c27b7e279e4f0ab18e8382e2acb"],["/tags/Mirai/index.html","ba789a715830431407b9c7027b4a470f"],["/tags/NLP/index.html","b1869bb44ecc8cc69063d1c26afbe431"],["/tags/Pytorch/index.html","97bdbc09170ee443b7d57c87e3de8c5c"],["/tags/css/index.html","901dbdf91bd26ead01373a6d56cd1f17"],["/tags/html/index.html","046fcbdbd5b5d5c4620542e4714e76ac"],["/tags/index.html","d9844fa0dd294f60fe996bbc90d0f882"],["/tags/前端/index.html","a849835b9fb62d3e097fb5c6869a60de"],["/tags/大语言模型/index.html","c814fcf3ff33939eb86db2511d2a53e3"],["/tags/张量/index.html","ae0daf81f6ca2fe4550de43594960c89"],["/tags/数据处理/index.html","7ec432182a4578cb65dec962a9a928b4"],["/tags/数据库/index.html","44738bd986ce8d40d8a953eafc4eb971"],["/tags/测试文本/index.html","b9c38e9d280320c493e39ce466d142e9"],["/tags/深度学习/index.html","17e32d56890a9969ecd5528d7ede5e04"],["/tags/神经网络/index.html","2702aaa17d550e70d162b8d14c86ffee"]];
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
