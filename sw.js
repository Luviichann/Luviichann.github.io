/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","b018b8504b8b02be7f80cef86c4187d7"],["/2023/11/05/测试/index.html","08ba6469fbb1053845d7b9b047d4dd16"],["/2023/11/06/1tensors/index.html","2964065d59b8e0790828aa527248d0c7"],["/2023/11/06/blogs/index.html","8d5593703d837928ef2137573edbf098"],["/2023/11/07/nn/index.html","b3bc18ce73396b28096bc4526aeaac94"],["/2023/11/10/MNIST/index.html","e3c94f0d5a8023d7fa05423bc8fda1b1"],["/2023/11/10/datapr/index.html","fc7f0f73dfe8020200419b2159aa6417"],["/2023/11/12/css1/index.html","8b9e52ac8544ded1457e593f6acdae6c"],["/2023/11/13/css2/index.html","48953f5b9946bc07921de11442ac67bd"],["/2023/11/15/css3/index.html","42a53a5488d5a27261f1f9f469f9ef10"],["/2023/11/16/huggingface1/index.html","4f59c4b9d7e9e1d55d372bb1033f72a7"],["/2023/11/17/huggingface2/index.html","0b0e315d564a9be0531ae8513327c469"],["/2023/11/18/huggingface3/index.html","808804df9be90410115f0e092881ff10"],["/2023/11/19/huggingface4/index.html","ace29ebee5d83b3425e5f5c957f6cc81"],["/2023/11/24/css4/index.html","2d215455bfcb7ec43a41977e73de823f"],["/2023/11/26/ssn1/index.html","4a46ce3e6fc9018c26989be716c074dd"],["/2023/11/27/miraiqqbot/index.html","cf35750d03c8472ee37f96ba97ace2ba"],["/2023/12/21/ssn2/index.html","b5805086c015c30748781813ad14055f"],["/2024/01/02/llm1/index.html","e4d6cb2090670d0de05d1c0f61fdadd9"],["/2024/01/20/go1/index.html","82c23da8921a2bdfe81645e3a65e1d51"],["/2024/02/02/zt1/index.html","14331db63830518d5e5bd5f7c23954b9"],["/2024/02/04/go2/index.html","bd82efa94683dde08ab567c70c050f2b"],["/2024/02/09/go3/index.html","a995637150288c82bc298f145e083c97"],["/2024/02/12/go4/index.html","0b57c82593c71f30987590d3d4e9841c"],["/2024/02/17/go5/index.html","eb84b27c5af364942e6fff7cd7d4c797"],["/2024/04/06/pc/index.html","7f23372d590b0ce893f780b437b73e89"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","c50f6892d5c1faf8d1de4f26e991f242"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","d83d63aa80a14c682f11fc470a0473ed"],["/archives/2023/11/page/2/index.html","19fbd8905b34f0083b9e93f5b4fc8c85"],["/archives/2023/12/index.html","99b3274a4fb1ecfebfa9ec026cdd84e6"],["/archives/2023/index.html","db641a1191d1295b9d5f1d90568ca698"],["/archives/2023/page/2/index.html","14208d3e949ef802c4bf2d493ac701c2"],["/archives/2024/01/index.html","4b88cdad90a475c7a14b9ce923a31d24"],["/archives/2024/02/index.html","cbb791e7235252a4203025afd1a0a22b"],["/archives/2024/04/index.html","44bd1d358589c8f56048204f935b6ba5"],["/archives/2024/index.html","a8efbb86f4cfdbb037d8a0bcff34b792"],["/archives/index.html","6be66d2c8e6476230dc917ce17f148a4"],["/archives/page/2/index.html","c2068e225594b7d7b271fa13ac9da920"],["/archives/page/3/index.html","3388cbf5ba6b6bc5afca3801ae595e3a"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","dc37e6d2e98bd0514509b50d445bc99f"],["/categories/HuggingFace-NLP/index.html","8bd17d9140a33c1971dbba227ff5d2b4"],["/categories/index.html","cdc62c36a086d2f81fa52d4261f63cc0"],["/categories/python/index.html","c5be7ac76b919c83cc331b96e4fb0c11"],["/categories/前端/index.html","74be9a38e560effedf54a8edadbc3a01"],["/categories/对话系列/index.html","86cc14b5fc072a8bdb15371caa9b7afe"],["/categories/教程/index.html","cf087e99090dd10454107a150e5b40f0"],["/categories/杂谈/index.html","dfd1567471d8b871fcc11bf9d5bd7947"],["/categories/杂项/index.html","ac59a4333b9bd1c1d674bd436e32cbb1"],["/categories/测试文档/index.html","140b45e29adda62174244650ac567cd1"],["/categories/深度学习/index.html","a8116085205cd4010247ac11861a1fcf"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","3cff1fa27a857b1c8ea2ec526486c284"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","54b54e2f62b565313564a72a24e0a6d7"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","a7927d670b30f2135e9de36f205af1d7"],["/page/3/index.html","50165858aeae128eb9589908ba282ad6"],["/sw-register.js","84b791e3eda5b3316f1a4a67e97f6093"],["/tags/Gin框架/index.html","c1df03ad422850f5ba6d9b3423b88289"],["/tags/Golang/index.html","3a625993397afd985d17e2a85ad7b470"],["/tags/Gorm/index.html","4d2bb622800deb305e5ad0ef778c2c59"],["/tags/Go语言/index.html","90c00cf41938c9e94c436f574dfef6d7"],["/tags/HuggingFace/index.html","e268364322750d80e38315603826409e"],["/tags/LLM/index.html","faa1de0c03ccb97c39c72b32859e943a"],["/tags/Linux/index.html","56864a8f16acb9f399e860810be37c42"],["/tags/MNIST/index.html","153ab55b2df61640c355b0e75a7e6f26"],["/tags/Mirai/index.html","02257976c582e994286b371f29333569"],["/tags/NLP/index.html","7b4c8d19b002a6cb4533275856058bae"],["/tags/Pytorch/index.html","e1a173d1b26059ec7db0d510c3f29080"],["/tags/css/index.html","3b8d6bda595f410c7e67546da81227f4"],["/tags/html/index.html","c98a91cae415fa1b15ef0f8cb9babbc2"],["/tags/index.html","342fba814af38836295fb032fe9cbf10"],["/tags/python/index.html","42b9e1f1d1ef818aadb5f4d301a59556"],["/tags/前端/index.html","88938fd7ac8c48619b9f43ec59ee211c"],["/tags/大语言模型/index.html","c32f17dc97dd2fd9f916f1a920213974"],["/tags/张量/index.html","315b8e05ed7206969c827dd54624f204"],["/tags/数据处理/index.html","2bd03392f4d3a8a74f13317787d876bc"],["/tags/数据库/index.html","327245e70f0900f0a00821e39d40dd64"],["/tags/测试文本/index.html","e43d546cddb4a30ce9ad8722ff0beb69"],["/tags/深度学习/index.html","176ac55ceddf3f495072d20b23b44552"],["/tags/爬虫/index.html","2ae2d3ea50eeccf045c551d69c09f734"],["/tags/神经网络/index.html","bf967a8a9c3e2f5cde6ffa8b98337eed"]];
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
