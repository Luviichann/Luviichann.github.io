/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","4451ac3ad507eaeecc04eeb110cf39d8"],["/2023/11/05/测试/index.html","3f101b6a19fe804316b2b86e7d308cbe"],["/2023/11/06/1tensors/index.html","cf1eec867dbf6205da059ad8582efe77"],["/2023/11/06/blogs/index.html","b06e1abfe1c396a6a96d41615da5e4f4"],["/2023/11/07/nn/index.html","7d0fe4443bb27309ae330b5b97831911"],["/2023/11/10/MNIST/index.html","06b378f8c1e9a520e738d5ccb4188f48"],["/2023/11/10/datapr/index.html","ddeee3d1455e1cfe69dfa3aa5366a232"],["/2023/11/12/css1/index.html","46be1da4a518c5736eb7b133fcef6e0b"],["/2023/11/13/css2/index.html","fa3c70d680223fe34b9bc0880c424ce0"],["/2023/11/15/css3/index.html","f06af177e1123fa7fd38e79ec9fedc76"],["/2023/11/16/huggingface1/index.html","adfd3d5b4bf80dd785b02b5ba3266f4f"],["/2023/11/17/huggingface2/index.html","3ca886ed1fda51385144cc22fd45d4a7"],["/2023/11/18/huggingface3/index.html","13345c5d85c4c01b520a2415fe018784"],["/2023/11/19/huggingface4/index.html","dd312b2888b8bebac5c06ff8f27e66fe"],["/2023/11/24/css4/index.html","38f04c59ec9f62e426d91ecd731cc695"],["/2023/11/26/ssn1/index.html","facf4d85693ebe03104823a66094bf5d"],["/2023/11/27/miraiqqbot/index.html","637c6a411333617a2913b8084e760603"],["/2023/12/21/ssn2/index.html","d41ae4b0febf8ec37f628b18922d4842"],["/2024/01/02/llm1/index.html","f3cdf59e911c980ddef738d9ef48f1b1"],["/2024/01/20/go1/index.html","a264c2125b8ce20c02866a8d2c57914e"],["/2024/02/02/zt1/index.html","6d5075df7c9a9e26b556caab340e6983"],["/2024/02/04/go2/index.html","53eb5e6ad87b147ba849221559fdeb95"],["/2024/02/09/go3/index.html","d32becb045047132a9871eba24b7e007"],["/2024/02/12/go4/index.html","60ba59ecd148bcd598d08c4e15e30e58"],["/2024/02/17/go5/index.html","279dd4674585307081c27885332ceff0"],["/2024/04/06/pc/index.html","4fa31d2865c30a519f78dccd3ead0f60"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","c1f183a5938787654d5fa7d4c473de1d"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","696eb1abc5e466598206091525e2fa8b"],["/archives/2023/11/page/2/index.html","e0afd4b2d420006254b2ebbad0ff4080"],["/archives/2023/12/index.html","4adea0bce525affb55f24a9f927ba5a3"],["/archives/2023/index.html","c2459b0ecab286a63b371d05259d6f04"],["/archives/2023/page/2/index.html","609126d612d80ca29ffc6260eac3cc03"],["/archives/2024/01/index.html","8cabcf3842448500a3ade303953a829f"],["/archives/2024/02/index.html","15c6759b4360f1433b621d7db67d85d5"],["/archives/2024/04/index.html","6f7a8a498c802fc6d3576d259dc110ac"],["/archives/2024/index.html","3735895ef46b3928fcf1e134f910f0a8"],["/archives/index.html","7cb55559e9a5ee7408ec65478d564169"],["/archives/page/2/index.html","ca764c4e53e50c5034b2fa5e2408b755"],["/archives/page/3/index.html","de4138521368031084e0111c1ccecdd9"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","0885d65d7e025f269d7780f9c7a2877d"],["/categories/HuggingFace-NLP/index.html","2ab1bc831bcb58931a1fd91d5601cdb9"],["/categories/index.html","b6a83e8d2d36685523607539aa094bf1"],["/categories/python/index.html","927a462a80c640d7265c50fa2651bd36"],["/categories/前端/index.html","ba7c45f10f19bdd551e20cb0c95b48ec"],["/categories/对话系列/index.html","56127120fe55ade10f48074063a300ec"],["/categories/教程/index.html","56cc80d99d48149c1fbe7fcff862741e"],["/categories/杂谈/index.html","9c2925daed98af5131b733cbd829a0a2"],["/categories/杂项/index.html","8b8807106dd11768bcee8ec718d590cc"],["/categories/测试文档/index.html","25cf120ca012bd3490b85ff9544a12c4"],["/categories/深度学习/index.html","712135057dd62f97565ca77c73b94dfa"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","f343b6f475dac97d5a2daefea116c230"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","5fde0b0cab55e37abfdd17c34869fc7c"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","7c1099b8f9cae184b0d13b47737b7feb"],["/page/3/index.html","ce8e9082b302c22b5c8edc227af545e2"],["/sw-register.js","3f2b6ef8b5b00ce2eb2938672dfa3e3f"],["/tags/Gin框架/index.html","254d36122fc3779e2f66e3d4a224b5ef"],["/tags/Golang/index.html","7ff5fd48ae7d4dfc55c787947981e5d6"],["/tags/Gorm/index.html","1a93b6d5340b210308ab78af9e2478d3"],["/tags/Go语言/index.html","86cb7bc83210754d1c698d78308eff97"],["/tags/HuggingFace/index.html","35e8cc64ae0472aa02a5ddf54f7a401d"],["/tags/LLM/index.html","b2b9ec74f20180773a6d009eb6fd7af9"],["/tags/Linux/index.html","7d202371782bee8a46f5bbc001a6bea5"],["/tags/MNIST/index.html","fa383625cfc6d8a10ca66a9c3b4f42ab"],["/tags/Mirai/index.html","6418f4f0b112f69979254e4a3da38b20"],["/tags/NLP/index.html","d36f559134382812e6d632dc848aaa85"],["/tags/Pytorch/index.html","af3ca790bb4f3f5d30bb467ade958260"],["/tags/css/index.html","5ba3627ad0b022ca3c5620bba4e1446b"],["/tags/html/index.html","a41d25303a994e73b451acb018f6a963"],["/tags/index.html","ffb0abf62596b51202552b5b5c80fd7d"],["/tags/python/index.html","035f11b34927011ade66ae7386e0f7fc"],["/tags/前端/index.html","bd0b85ef7cbc3df1486d125e27b27584"],["/tags/大语言模型/index.html","e59552908252003141a05abffad763b6"],["/tags/张量/index.html","0a452d18095a0fdeb2f1b8387666e78b"],["/tags/数据处理/index.html","66f0681ea32be197c4bbaf00b539b728"],["/tags/数据库/index.html","013e7132983780ce4b78baa57ffd5bd3"],["/tags/测试文本/index.html","5bf7691d7a7aa90713d348b9b6a88b32"],["/tags/深度学习/index.html","9d69847e4b794b1d04b5edb0889e3a03"],["/tags/爬虫/index.html","777e2fb14bf9d62af32f2ea6da493449"],["/tags/神经网络/index.html","b346a27dd7cde916af458991cdf7649a"]];
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
