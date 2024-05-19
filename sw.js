/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","cad9bf07b9b01efd300eff1389a0e344"],["/2023/11/05/测试/index.html","c8851f9a5443e772d816bd830878bf02"],["/2023/11/06/1tensors/index.html","66b6c6c1390eaf67780e5e81261ec128"],["/2023/11/06/blogs/index.html","4a72fb067a4d819222dc7b2940f87d4b"],["/2023/11/07/nn/index.html","d002b06219e7c3d6a69d29308d60a5e3"],["/2023/11/10/MNIST/index.html","2537aa2b0118f8fd76a7c3755f309a43"],["/2023/11/10/datapr/index.html","9994c8ea2a2d41fa4ebd8e723e1b4765"],["/2023/11/12/css1/index.html","88b39afb78593d5e21a6992fe67c6aa1"],["/2023/11/13/css2/index.html","f2da4a9bff5db4d640f067f3bcfa381c"],["/2023/11/15/css3/index.html","0cc8e183c83e3f76dbd8fd4e5b6f865f"],["/2023/11/16/huggingface1/index.html","6abb061f3505f717b6cc0c1f3e2d7acf"],["/2023/11/17/huggingface2/index.html","a350b6528be588def7d36f681bd36f20"],["/2023/11/18/huggingface3/index.html","2214c777b206c80eedfba95d26267d06"],["/2023/11/19/huggingface4/index.html","eb5612031c164f41cae2e3d481728bf2"],["/2023/11/24/css4/index.html","4728b2cb4af8b129bb8c8a203ee6e8b1"],["/2023/11/26/ssn1/index.html","3314972be15930819cda5fb13c19609f"],["/2023/11/27/miraiqqbot/index.html","aa0664b6fc662c61d1bf48784996de62"],["/2023/12/21/ssn2/index.html","1e5960156fa1bfa13e9c19717ff4020f"],["/2024/01/02/llm1/index.html","7b746ab1ccfe637be19c62694621ad50"],["/2024/01/20/go1/index.html","337196a3ac6084ee3fef7f0171604a22"],["/2024/02/02/zt1/index.html","e9c06cfda72f0ff78b6807b344abf0d5"],["/2024/02/04/go2/index.html","dec22fb77da1a85d734fd282da538519"],["/2024/02/09/go3/index.html","8b4fa5c046c86637ca3d0c7d43fdf1a7"],["/2024/02/12/go4/index.html","d3fa07a31f35bb23a521bf73618c1ba7"],["/2024/02/17/go5/index.html","e7cd61ef77be31c3a1701ac2e8b25622"],["/2024/04/06/pc1/index.html","6779334b4c31fecefe3ac19f1bb3ee25"],["/2024/05/07/pc2/index.html","bad1ddf926755fb279b517eb54105bd0"],["/2024/05/19/htp/index.html","61a544993a5b9ffb1b70cdfda07a86d4"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","40fd8e72334d10f9b7d6a599127d7db5"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","890306a32f4e56a836d5d54cf9f23b67"],["/archives/2023/11/page/2/index.html","eea193ad359bc9db33dea148b2a13554"],["/archives/2023/12/index.html","7a6c9850ab6d41ad68ece7d54e6edde1"],["/archives/2023/index.html","e0f6bfc66511d514f1b0d948c68f65f2"],["/archives/2023/page/2/index.html","128ce01929db78d76bec23b2d9bf2bc5"],["/archives/2024/01/index.html","ccb227573ce652e5e0a80368d574b7b3"],["/archives/2024/02/index.html","01e135af2499f4e214a49ac0edd0631a"],["/archives/2024/04/index.html","7ed5a965035ee51b412f93b5e19796fb"],["/archives/2024/05/index.html","87199e60645e7e03ff69bb1be57b7b9c"],["/archives/2024/index.html","aed4d2092be87fed6f1e004aa9147fb2"],["/archives/index.html","11c8cace258ea2002162fd3b561760bd"],["/archives/page/2/index.html","b1b96cb2bb5aa84d639f4de4e132a369"],["/archives/page/3/index.html","fc8d3a1d89a4ec58bd552ee83d13c604"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","208f5411176dc4219872ffe2021122e8"],["/categories/HuggingFace-NLP/index.html","2340202bf759968d0761e03fcf12d200"],["/categories/index.html","1eafc8f55c7447d8169b3695cc29fbcd"],["/categories/前端/index.html","e884ecbcd56abea68409b60e42fc69a5"],["/categories/对话系列/index.html","0cec3ee1b964c9fcea2e80c1c4eb248b"],["/categories/教程/index.html","32bd88a5c8b63cb2dd8660e1cf69ae9f"],["/categories/杂谈/index.html","5d743456281e12c30bdd92b6f7b2bb70"],["/categories/杂项/index.html","6375b7bde8ee5355eec0475f1c991461"],["/categories/测试文档/index.html","bfd02baacd9343853a82fc1f831e5ac0"],["/categories/深度学习/index.html","8af673aeb6a7cb5c29be3ed40a826a17"],["/categories/经验分享/index.html","a8721bc90de468e432c0019f6662e588"],["/categories/网络爬虫/index.html","e3b3eea6d5dd1bf017732e716dcf6f3a"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","e1bacef18d09226e33685e78c5d455f3"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","0f3f3b28029714725f050dbe0bf27222"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","6d0b54fdc3cbee62d34efe8dcdf9e3f5"],["/page/3/index.html","a72fff8a719210164c6246bc5d9415c9"],["/sw-register.js","3200f8d7c2450309be93e01e6d573cd6"],["/tags/Gin框架/index.html","751d8ecf41e1ea0cc03df35cf375bb30"],["/tags/Golang/index.html","cb19672ffadf62060257451db3e12069"],["/tags/Gorm/index.html","a1b902a24763ca236425dbfe00c56b66"],["/tags/Go语言/index.html","373f9c89280c4dc135c7680932a77e31"],["/tags/HuggingFace/index.html","5a268b6a7324bfffb4d3532844b62b2d"],["/tags/LLM/index.html","f0c283eaf1bc477fc939018c4e6915ec"],["/tags/Linux/index.html","0f58cffdfe0b6d43e0629e4fcdf33696"],["/tags/MNIST/index.html","8fdd09024f0db893ba3bb19cda23febd"],["/tags/Mirai/index.html","d1ad5576cabb30856a6db348165b351a"],["/tags/NLP/index.html","a41f090ad3b28bdecaa82f1fa4c47d1d"],["/tags/Pytorch/index.html","a2b7cc6971d3d35f406e91f694578cd9"],["/tags/css/index.html","d9528ebee0e3d511499fc34ff53712f7"],["/tags/html/index.html","fb89e1472ef9b313cc469bdca35b8d49"],["/tags/index.html","808d8541f3b812e79f5c1c0d96203dc0"],["/tags/python/index.html","c54110692fc4198903725a1e4ba37eca"],["/tags/前端/index.html","06b35242c74801858762ab50451989a7"],["/tags/大语言模型/index.html","1ab9fa8d2a1edb07350d2e62e3e2c96e"],["/tags/张量/index.html","81b4af30f68a50824cee64e69a622a11"],["/tags/技巧/index.html","62f12bb1b02418719b5279b88576f508"],["/tags/数据处理/index.html","02c0425e4c946f83a42e57eda5d591f4"],["/tags/数据库/index.html","4c38f83190d60e69fc3a0723f797c358"],["/tags/测试文本/index.html","2654e419d28814d8d568fe75c0391db7"],["/tags/深度学习/index.html","ec1d66f67a59418a4c0056ba1f7287b4"],["/tags/爬虫/index.html","671e12031658554c986ae8dfb47fedb8"],["/tags/神经网络/index.html","1f78a9d743f8e74b2c5796c6580f5061"]];
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
