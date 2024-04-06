/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","78642e9ef73ce5db8d3548106e9dd989"],["/2023/11/05/测试/index.html","ce5da9d8d9a099c435727aa730e5e26a"],["/2023/11/06/1tensors/index.html","4091bd484e025c2b4e3ef6564ca5549e"],["/2023/11/06/blogs/index.html","e48c5b3c831e43d61929bea7b8e975c7"],["/2023/11/07/nn/index.html","d58c91dc21c449eb1ed9dc8df23fc3c2"],["/2023/11/10/MNIST/index.html","49d61d7d2749216f67b3e670d39601ed"],["/2023/11/10/datapr/index.html","cdc50e6fea600e96412644ba5b6d4e92"],["/2023/11/12/css1/index.html","71a2bc1c3f859926e83257549eec3b37"],["/2023/11/13/css2/index.html","8206a661502162e703bfbfb0515355b8"],["/2023/11/15/css3/index.html","6cec00524a7e17cbf49cac032d52c3ce"],["/2023/11/16/huggingface1/index.html","b90e1920e6df9f43ee80483e03e7746f"],["/2023/11/17/huggingface2/index.html","82cb1b3b20f26ba2540073b647996ce2"],["/2023/11/18/huggingface3/index.html","210124f13d166b1a5a3c8ccad77fb970"],["/2023/11/19/huggingface4/index.html","ea0f3827d5ee2c62439a14fd8746e149"],["/2023/11/24/css4/index.html","f4710b142579f476f9885f0c3ef81fa9"],["/2023/11/26/ssn1/index.html","107cf41c99e033788f235c5a964f4aaa"],["/2023/11/27/miraiqqbot/index.html","c0ffd298d9a7e05b44db255ecccccfc3"],["/2023/12/21/ssn2/index.html","3e87ffe195f07e67ec1c44f29047af1f"],["/2024/01/02/llm1/index.html","f7d47c5b31ac73abacb172a7bcc0c4db"],["/2024/01/20/go1/index.html","8555992a1cbcf48af730ace38f53ce15"],["/2024/02/02/zt1/index.html","0bec22fa1905c09a606302353fe03286"],["/2024/02/04/go2/index.html","cdda5752729843d789a5a93c41840930"],["/2024/02/09/go3/index.html","dfab53f0d922beea39661c1fdb1c21d2"],["/2024/02/12/go4/index.html","bd0591a2c1bd8642a280dee912361537"],["/2024/02/17/go5/index.html","4acd31549e1440d7998848cfe5a82080"],["/2024/04/06/pc/index.html","f24e2c970b2a5388479cac0e9c9b47f1"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","c5456cc7079ecfe4d649955a1a8aa52d"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","f1d2428879c890b0052054206ff40be3"],["/archives/2023/11/page/2/index.html","0daccac822322beba3be7a671b6cbc72"],["/archives/2023/12/index.html","57af0bd4ec0a63f752b648a2b3774af8"],["/archives/2023/index.html","9d0f4890e00ab894706a23d4156f93fb"],["/archives/2023/page/2/index.html","e0fc3a75e2b718e47bddb203fb81250a"],["/archives/2024/01/index.html","997e11685d78f686ef7bf7004ea6f24b"],["/archives/2024/02/index.html","7d8bf2a35292bd6e52d632622877efdc"],["/archives/2024/04/index.html","d3bdebace9ea38f93536d2f4c00a6d50"],["/archives/2024/index.html","0e06afab2fe9dec1e126a3d821d63a02"],["/archives/index.html","fde9abd82df17552f98f5d0bb96234f2"],["/archives/page/2/index.html","8b33784e813a1e21ec1b69e8b5c7d093"],["/archives/page/3/index.html","dc4aaca59aca08ff4e5a3915443dcf08"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","9bf2cf67d8e703529af8c7bcbbcbe391"],["/categories/HuggingFace-NLP/index.html","b42d6e0c0cd9d05fe22516f77e78bd6e"],["/categories/index.html","d51244e4b12ee5a8330b3c47bb243208"],["/categories/python/index.html","e951bce9ce38579d100f48b3e9c98671"],["/categories/前端/index.html","3221eb302cea555f00adedaca79224f8"],["/categories/对话系列/index.html","2d4d7dc0628ac4f930860d4bd56e53d6"],["/categories/教程/index.html","cf27ee0f2d692cfe5f5160b9278e0f46"],["/categories/杂谈/index.html","670624bd6e4cf185e2d470c10af15b26"],["/categories/杂项/index.html","19a191852021f59fe84e62fd46e34dac"],["/categories/测试文档/index.html","a900ecc47bc6e1cdcb08dc138559a70a"],["/categories/深度学习/index.html","796c51445d9dc9410c61122d8ca6fc15"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","6268c0f721bca56c2d3b39044043c99c"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","ecf14adb5b2360eb04ddc98bace2623a"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","c0a8c118d104e0002354fc747d2c0499"],["/page/3/index.html","c74e4606635f68afb619637bb49ba7b3"],["/sw-register.js","12da1ba8aeb14b2a6671f9f021b7a65c"],["/tags/Gin框架/index.html","f84bb5a42cb53d9e6bc1b775adb055c6"],["/tags/Golang/index.html","52f24ef9b470e058d873f40fa54c8251"],["/tags/Gorm/index.html","0540734c117be9bbb894869f51ce5a2f"],["/tags/Go语言/index.html","c97f3c830c7c66fbc2d05d43b811c41a"],["/tags/HuggingFace/index.html","edd414539ca9273032f9311fd40ed079"],["/tags/LLM/index.html","513bc7e1144d4c3cd9159e539a36b353"],["/tags/Linux/index.html","69cb7036ea948af557b9af577f9d84a3"],["/tags/MNIST/index.html","b141357ffa4fca74370508fbbff21967"],["/tags/Mirai/index.html","2e031bcf17b7270c372e08d45b435a2c"],["/tags/NLP/index.html","5e403f2514f7d61ed09e1278f8eec611"],["/tags/Pytorch/index.html","3bf9bcc819f93c647e725038ef200180"],["/tags/css/index.html","ce36d0ba3d3e73a1518ff84bc0b1510c"],["/tags/html/index.html","5fb3ef428ee7230b661676bb12383816"],["/tags/index.html","befcbfdec8aae96f3ab43513e1064b6f"],["/tags/python/index.html","f4db038d7d4c7f8c8f044aa3cd00a503"],["/tags/前端/index.html","9b3787f011454cf9895ac2b0e9ec0485"],["/tags/大语言模型/index.html","29178062d83ff579bfda7d2c38d53f60"],["/tags/张量/index.html","f606bb06a26ada70325083bbee5a2fc0"],["/tags/数据处理/index.html","f6a59a8036230aedaa754f921a69d9e8"],["/tags/数据库/index.html","eaa7aed249bc41b12dfa0632f7c7b014"],["/tags/测试文本/index.html","c289466074f4e606a1e978a740eaee0b"],["/tags/深度学习/index.html","8a6094620e3f9a79e31464be3371e464"],["/tags/爬虫/index.html","7edffa7c1cef04c33a603f08ce663575"],["/tags/神经网络/index.html","e08ea606c323a18899e4c0dc8c01d0c0"]];
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
