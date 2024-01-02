/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","cca4d070a7aa0b1a88ac2229f49d4262"],["/2023/11/05/测试/index.html","cc1afca2b67181a6339d11d615d2a641"],["/2023/11/06/1tensors/index.html","f39c041d4779bcc42046452e5b3d9f03"],["/2023/11/06/blogs/index.html","2e18a7e180a9b2f5868fa913a3064456"],["/2023/11/07/nn/index.html","fdb9b6bf6783dd780f99b3b975d22150"],["/2023/11/10/MNIST/index.html","a49c743f111992aad284e6ceeefe9ff7"],["/2023/11/10/datapr/index.html","a0697879c154db18e06d49858626106f"],["/2023/11/12/css1/index.html","e2741b0712bfcd312549bb7a63cebda0"],["/2023/11/13/css2/index.html","dab1e6c01bf3850921670990f02a3c93"],["/2023/11/15/css3/index.html","eb23ec211410cc2437418d976a3eef65"],["/2023/11/16/huggingface1/index.html","272b01a4b87b1dcae343ad72a1879931"],["/2023/11/17/huggingface2/index.html","bda610cfdce3da91a8c706a645f1d39f"],["/2023/11/17/huggingface3/index.html","df9d9042079e7a8694a48251696f69c8"],["/2023/11/19/huggingface4/index.html","ba5d698a1b90d698d873070b1bfd7081"],["/2023/11/24/css4/index.html","6e09d544c80d70ab6f4530c5605e05ae"],["/2023/11/26/ssn1/index.html","1652fc3fa48d76ce14a9fc0fc4b799f4"],["/2023/11/27/miraiqqbot/index.html","586c4e9797c67a4bac2db42c86a840d4"],["/2023/11/30/co2/index.html","18305e72ab040e13c377b8e8cf208ecd"],["/2023/12/21/llm1/index.html","5d6a9668c1c9d5ce1971bc3d5eec21a0"],["/2023/12/21/ssn2/index.html","6babc16abfa923e02eaaf243de10e257"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","0968ae9f4f0eaeb7c18b6d11ac26b1eb"],["/archives/2023/11/index.html","7efa22b2194ff354a2574e8e625305d7"],["/archives/2023/11/page/2/index.html","52f1fc9b5c054ce2db79f47581e5321f"],["/archives/2023/12/index.html","d1c94fb5b5147c0a82a042b360210d79"],["/archives/2023/index.html","67bb42e9fca1de99d9c29217fe64d1b9"],["/archives/2023/page/2/index.html","616dfb838215ade6c5a04690ab1b4ca5"],["/archives/index.html","6b622d979b893918ca5834949d445a1f"],["/archives/page/2/index.html","6ded2756991b06b1e621617fd8394246"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/HuggingFace-NLP/index.html","91079e112af5314e5b9d6a6a4f49f7f8"],["/categories/index.html","6b5e084abdf5b988890f7509675b0cbe"],["/categories/前端/index.html","b26390b3252891fba578be61029239d2"],["/categories/对话系列/index.html","935c024a619e8f33c4a7dabc41b565d0"],["/categories/教程/index.html","40209d3c498a04278347ad7b9cf85ebf"],["/categories/杂项/index.html","e40fd2a1b55cc2b230f8210ae61987bc"],["/categories/测试文档/index.html","149c0b7bbcfab658bf8ad4bc36571c98"],["/categories/深度学习/index.html","78ebf2aa82760c7fdffa833984356cdc"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","22ac000365ddce862cd46ccca7391a23"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","a0a43cf3c20110063acfb5fe220b5f25"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","ca9112337d0e9cb367befc7412413d44"],["/sw-register.js","2e85b2287adad5fe137bb9fdbf84d096"],["/tags/HuggingFace/index.html","9f73ad5924c649f1762749f31bf219ef"],["/tags/LLM/index.html","59f76717b90965c6895a9cda921b6c9d"],["/tags/Linux/index.html","e6c899118a1341cf1bb9c87368ecda7d"],["/tags/MNIST/index.html","2c95b6667e0008e1051109060a34f038"],["/tags/Mirai/index.html","e58b39465e0d399e2227dbbd96f0f64c"],["/tags/NLP/index.html","c68bcb634c817f565f90678ed46545cf"],["/tags/Pytorch/index.html","f46c7ae4428bb4145c3b63decbf1b2d8"],["/tags/css/index.html","d3d0e9080b929a21c6b7c4e8d1e3c7e9"],["/tags/html/index.html","efedc4a5e71d9ac8b5d0734c7aeca47b"],["/tags/index.html","2561563b96d1b5cc21aee9c87559b532"],["/tags/前端/index.html","e56d04f38e12fc1a5f3d59a5b23f5d2b"],["/tags/大语言模型/index.html","9bb4a830e8e58fcd3a16fc8aa98dca79"],["/tags/张量/index.html","321893201a3d84950080f51b4f8e829f"],["/tags/数据处理/index.html","490fcc94025f82a8e0cd1ab689ac4516"],["/tags/测试文本/index.html","32e5fcbb252c4197b149ef21f649644e"],["/tags/深度学习/index.html","7d0643c21ca3e7a3f4768e36b6bb712d"],["/tags/神经网络/index.html","ab178c4f1bcc8450ac269707c493af5e"]];
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
