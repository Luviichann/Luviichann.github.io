/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","84028137bf1f3d120f6ee771c4d062ca"],["/2023/11/05/测试/index.html","031b24983241ea6b739315b63f91edc9"],["/2023/11/06/1tensors/index.html","cfae4e6bd7aaa149572de0a090cafcf0"],["/2023/11/06/blogs/index.html","801a4d74d33c1962fe8b2b62f7df05e8"],["/2023/11/07/nn/index.html","92b474f6c9a4ac1345e2a595a6cd74df"],["/2023/11/10/MNIST/index.html","70e7cd22af61ac30c4643ebcb6351bbd"],["/2023/11/10/datapr/index.html","a5fb4ed9710a982a84e237381c4b037c"],["/2023/11/12/css1/index.html","a4a286ef744cc1b0925788403df02f2c"],["/2023/11/13/css2/index.html","033858c18840bb6bfb096cdeee4b797c"],["/2023/11/15/css3/index.html","d21a5eceac89f892116d0d43df2d9496"],["/2023/11/16/huggingface1/index.html","93c2a27d77b5c9d4b71ead5013ab1bcb"],["/2023/11/17/huggingface2/index.html","6c86b714e550862187923dff4f044efe"],["/2023/11/17/huggingface3/index.html","b3e1d1180be94b7c1dfbe7998a683221"],["/2023/11/19/huggingface4/index.html","1b3081020f0660e6d6670ee6b935b5af"],["/2023/11/24/css4/index.html","726f82c030e927be0db2692dbe4ba1e5"],["/2023/11/26/ssn1/index.html","729d450d0ff0261b46ee9254671b99c7"],["/2023/11/27/miraiqqbot/index.html","8e997df67b593ee2d3fbb34940d343a9"],["/2023/11/30/co2/index.html","35e989289c619730c4bb3e4d246bc3af"],["/2023/12/21/ssn2/index.html","3e9e82e1190728dcc2d0c490b95a1448"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","48de1890ee1b22694a06995ba80bd1d6"],["/archives/2023/11/index.html","00568abc41ba7271830b3bff77ecd47a"],["/archives/2023/11/page/2/index.html","0457f920d47c796df44355e18862d92d"],["/archives/2023/12/index.html","094efde24402cbc6b49ce56ee4f0e5e2"],["/archives/2023/index.html","cb343caea1896564b0196f5dc5b7b51f"],["/archives/2023/page/2/index.html","2c3774991dee9747440b551b27709df9"],["/archives/index.html","505bd7461683b47e435111ac5ff5307c"],["/archives/page/2/index.html","957ac0b43b0d35eca7ccdb30b1944536"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/HuggingFace-NLP/index.html","d5cf358261da3292afbff27b4e951608"],["/categories/index.html","68de15f6c45d7449e8c6374d5dfe2008"],["/categories/前端/index.html","50e19cb1df8d40898ac24320f30e0c36"],["/categories/教程/index.html","e8e404ea07b71c6d42e9c3078134cc4f"],["/categories/杂项/index.html","ae096c2091ad3596c96f79372c3a6c80"],["/categories/测试文档/index.html","ccfeba6474f79af87ab787775cbf2320"],["/categories/深度学习/index.html","9967dd2737b06790752b8537a64c748b"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","48569a4a0968de3d582eeda326efd43b"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","9bc646ae7a13ee5b39879425a52c34c1"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","369cbe7429c785318725843c45c4f620"],["/sw-register.js","40a371c99e22ce9d41ba46f824c2519d"],["/tags/HuggingFace/index.html","839ccc29e4ca010e09a11bc1ac14f139"],["/tags/Linux/index.html","0dabb05d4593a05bf9a1c16b6b79817f"],["/tags/MNIST/index.html","625a8227f132b85c4b0721923d71a87b"],["/tags/Mirai/index.html","9fd857856c85f3080b291dc518de5465"],["/tags/NLP/index.html","2e85cb7f6cbaa55e567f305cbeaa268c"],["/tags/Pytorch/index.html","f2b3ac64c6d43cd6c365302ea6e17d24"],["/tags/css/index.html","87c219b70aee29923db408aeca2967a5"],["/tags/html/index.html","cd569679c6e2ce92f17c8b4ea9f53e8c"],["/tags/index.html","c28e162060dd81ddf9637a382de5258f"],["/tags/前端/index.html","2083d8d42262526ce54e5705a50f1536"],["/tags/张量/index.html","2f29350a73e388b4c2db4a8d21123685"],["/tags/数据处理/index.html","42ec5512e98fad2fa1a15533ad3808b3"],["/tags/测试文本/index.html","6767b339be5ef769779eac3b4056d265"],["/tags/深度学习/index.html","5c6f688138c03222b2b5525e17136fe4"],["/tags/神经网络/index.html","8416cb0bbae4c92a5e8d194d20397295"]];
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
