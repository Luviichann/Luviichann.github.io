/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","97dc0899274f7d34ad85a6566c1f5670"],["/2023/11/05/测试/index.html","a789ba776fa6e5580f7793acc32df3c4"],["/2023/11/06/1tensors/index.html","b0045cb10d64d5a8ac51fccd52baf8ea"],["/2023/11/06/blogs/index.html","5e64ef524e3912ee16db6e7db927202f"],["/2023/11/07/nn/index.html","be7afbeb78b2c989ae7682dfeb72f13d"],["/2023/11/10/MNIST/index.html","94f2109a2c42cddcfaed90722cf4e04a"],["/2023/11/10/datapr/index.html","c55b4d076178d39d774ef4b70c14f0d8"],["/2023/11/12/css1/index.html","3fe524eeb072af5349b5e910d7d83f43"],["/2023/11/13/css2/index.html","102363ecdd5b0836e8c59e53c3bba32f"],["/2023/11/15/css3/index.html","1162a5fa3435d49c6ecc687b057485f1"],["/2023/11/16/huggingface1/index.html","77a3aaa4a2fb11efed8624dc16dbf16d"],["/2023/11/17/huggingface2/index.html","c79ebee81d401ca1e633f3e158b15226"],["/2023/11/18/huggingface3/index.html","bc5d3f7b6e5663c525128599b4ebe234"],["/2023/11/19/huggingface4/index.html","752ebcebdbec7d28abbb482476332cf6"],["/2023/11/24/css4/index.html","34db8538769863c12448c2677c75881e"],["/2023/11/26/ssn1/index.html","d6b9abd04e62794c44df382f43680fb1"],["/2023/11/27/miraiqqbot/index.html","f6f4da465433cc10c1601363d22a10ce"],["/2023/12/21/ssn2/index.html","be95283aaee7900aec7d890a13b8a741"],["/2024/01/02/llm1/index.html","a81a9e95cb190803ef8ea24d5ba42959"],["/2024/01/20/go1/index.html","43e84c648ac28c8aed6105df1a1d9a3b"],["/2024/02/02/zt1/index.html","98b083a531e7923d1038e693298a186c"],["/2024/02/04/go2/index.html","16bc34d9ad5bd3993957dd02788dd8a8"],["/2024/02/09/go3/index.html","2680978d85a767cfb84901c8c1c6cf7d"],["/2024/02/12/go4/index.html","1143312ebcc621908ff78fddb0a7cb63"],["/2024/02/17/go5/index.html","0098ff89f78cbf3169461f897bb9b7e8"],["/2024/04/06/pc1/index.html","0fd6c88afc6f26316ee21af8a4637bf9"],["/2024/05/07/pc2/index.html","038f5d3b4952d26f16bb1a379df1c515"],["/2024/05/19/htp/index.html","d16b4c3b277dd1b76f535bf3e5ebeaf7"],["/2024/05/21/go6/index.html","f206c4ed2ece5e9cb98b93e61075189e"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","603fba575b24ea7b47a46e4f15d35bd9"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","c6c729606963beac00aee81133c00076"],["/archives/2023/11/page/2/index.html","8d44d8256f8298c11af6a068eb1dd9b5"],["/archives/2023/12/index.html","c8e8f99fbcdf1b781f06d4241e402f61"],["/archives/2023/index.html","30ac8b03284ab2e4ba9f9627c9b76726"],["/archives/2023/page/2/index.html","03f01b0ace3adc2f9fb83c19b17c004d"],["/archives/2024/01/index.html","09d06a73842aad93d59eadbb6a5ce8e3"],["/archives/2024/02/index.html","5699c1eac6ec94fbb575bec610ed6e4e"],["/archives/2024/04/index.html","6c3907ad9bdca06246cc35508f716500"],["/archives/2024/05/index.html","0c10bc67b383ad54a30c4142c4382abf"],["/archives/2024/index.html","5164b1effb9cf6645cac5c88465f9ac9"],["/archives/2024/page/2/index.html","908382b4a835e538408b6b30080c9ede"],["/archives/index.html","e5039b900f462ef13d55b7676c24212d"],["/archives/page/2/index.html","377fdee2fb830cf3c28f6dcc7192318a"],["/archives/page/3/index.html","f3b06fbf0ed7338e9d895e13444ed268"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","5b46a478a68694bbef6bb0af97377656"],["/categories/HuggingFace-NLP/index.html","35921df3e1ff14cd6580d205a27afecd"],["/categories/index.html","81ff221b8e49531026d6a67d3783a1ab"],["/categories/前端/index.html","df853dfa278dec2134bd77e51f97ad99"],["/categories/对话系列/index.html","3be1ccca69fa9332aaddea592f9de573"],["/categories/教程/index.html","e0fe126b2f46664bf82e64521f3c6e49"],["/categories/杂谈/index.html","535d731db24d7e94a2ea8c697b08f223"],["/categories/杂项/index.html","3e1412b89ae6a6c68646b4c6c72c788d"],["/categories/测试文档/index.html","c9f1baba1c21a597a016691889cc324d"],["/categories/深度学习/index.html","ad545840838bb4e5e0685a8658bdc6a5"],["/categories/经验分享/index.html","25e9ce842d70a17ab5dd8fb5b859afc3"],["/categories/网络爬虫/index.html","4001da744cd98c4dc4bda93e57918773"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","f6022c6e3441c5182e9c69a88716990c"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","97bb76626e33a3e0299419f980bb6909"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","de81bbf0f5dd81f5697d986fa84d06d7"],["/page/3/index.html","51623d7c202f280ceb46655294e173e6"],["/sw-register.js","821416218be2e9b5fc3a71e3213078bd"],["/tags/Gin框架/index.html","82836cdb36eaed33566a2b8b9d0ddfe6"],["/tags/Golang/index.html","56954224b07c64f5a521baba42b933fd"],["/tags/Gorm/index.html","86a45e815d574cc435b9be721ce5ee07"],["/tags/Go语言/index.html","0d8a06d5e42e2f742b9ad7a2fc7e4380"],["/tags/HuggingFace/index.html","e3e142ed31b9c4412b62f555b3aaaa37"],["/tags/LLM/index.html","1596aa5b9c39d30b1f48490e62e3605a"],["/tags/Linux/index.html","b5cdbd9a81e5faae168559ec8a48c1c8"],["/tags/MNIST/index.html","f53655f54fd63710361ffa7e1a65d666"],["/tags/Mirai/index.html","3ff4c290d5f2b10d40e7cda1cfaaacd5"],["/tags/NLP/index.html","59c8c5741f3410bbbfbf120d63d5df85"],["/tags/Pytorch/index.html","4b206013ca43bb330e12d60776ea98d4"],["/tags/css/index.html","358cd4b81e767b4fd4b947c14077e61a"],["/tags/html/index.html","c15c29eb03ce319640199d9a95f9b4af"],["/tags/index.html","c835920e23b72deb80b6a7d6306fe782"],["/tags/python/index.html","29296ea97dbb2b765a4fd28ea8df3b49"],["/tags/前端/index.html","c5ac36ade60ccab621ee8a8a6b73d3f7"],["/tags/大语言模型/index.html","f37ae8da3f15ca6157fdb5b6534e7783"],["/tags/张量/index.html","91743a320f014977b9d0216b94b0e772"],["/tags/技巧/index.html","034262f2c960ec3c007c70be7ca661cc"],["/tags/数据处理/index.html","dbbd26679c3427807c657e32f886b5f0"],["/tags/数据库/index.html","2ff8392a41825e85293383570f97545e"],["/tags/测试文本/index.html","d5d4dfc8802ee45c8ddc24ababdccf17"],["/tags/深度学习/index.html","b7408b3e8c06b4300714f302ad701c18"],["/tags/爬虫/index.html","3ecc73b512a34c7aa4fd1f493f2d13e8"],["/tags/神经网络/index.html","6cdb49441124321b8f194011cd14d435"]];
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
