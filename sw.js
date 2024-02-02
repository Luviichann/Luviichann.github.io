/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","0a89ee0fb114bcbd99e31a647bf10166"],["/2023/11/05/测试/index.html","8ea829937646fa366f7a56840bbd7371"],["/2023/11/06/1tensors/index.html","fcbf16b0034971ae62abaabc26695c12"],["/2023/11/06/blogs/index.html","09200429304ac6174a272affb4160e0c"],["/2023/11/07/nn/index.html","078b3e4624069d5a3d1282638f62ae6d"],["/2023/11/10/MNIST/index.html","eae6b7c48bacb067bfe5ffd6bc0425c2"],["/2023/11/10/datapr/index.html","ab2889b9c27446b7d00704d3a2721fd6"],["/2023/11/12/css1/index.html","e83153c19a59fc03cf166a163b001c69"],["/2023/11/13/css2/index.html","9a8b677f308f3e1ede41a66ed3b511c4"],["/2023/11/15/css3/index.html","8005290071f128441adf7a507cdc03c7"],["/2023/11/16/huggingface1/index.html","1eb60d676b4fcb09239e664b7848b6e4"],["/2023/11/17/huggingface2/index.html","d30b6722b35c0565a9b5943c6e9ea35c"],["/2023/11/18/huggingface3/index.html","c53a700892b0675a2158363d04576c99"],["/2023/11/19/huggingface4/index.html","3553cffdcb821a9989b58f6663f9b1eb"],["/2023/11/24/css4/index.html","6c4ba28a657405f80cf4ecf54c9447cf"],["/2023/11/26/ssn1/index.html","4b92f67ca5d40d500f1d31b0ba387661"],["/2023/11/27/miraiqqbot/index.html","b6a9b070d5e0b2639473772982572392"],["/2023/12/21/ssn2/index.html","f409d3cfb497c8b43aca1fdb86accd71"],["/2024/01/02/llm1/index.html","ac9098220e687e8b265ea7e1a19a7daa"],["/2024/01/20/go1/index.html","6138eb001d59926532915bb97415ef29"],["/2024/02/02/zt1/index.html","8895ad374c01e94ff995f6717ab0b304"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","ae7680c9adb58c2da83a55a23e0baf31"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","57a734db47a8c1af51b18720d7a095eb"],["/archives/2023/11/page/2/index.html","ca0c155c487ce774f036f9a97ba7b11c"],["/archives/2023/12/index.html","76d0df97b370b184ff254910c38287d7"],["/archives/2023/index.html","1e801ab38a501173714b8606e1569d66"],["/archives/2023/page/2/index.html","477ab768f9814565854fa1f62d8aa684"],["/archives/2024/01/index.html","4ba8f67a929e7d32c9093775140e4b15"],["/archives/2024/02/index.html","d445168877467ee84894f0ea1260bbd6"],["/archives/2024/index.html","4681bc54a520f56230fe9ad1700c971c"],["/archives/index.html","3d0d6fbf27752f689abe0a790adc18b5"],["/archives/page/2/index.html","a8f3d63b3fa9447d8b37d7359d61f6e2"],["/archives/page/3/index.html","4d71e39c3951a7d2c39fac16c1a059ba"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","2aac24adc52c31346b3abcd0ba53a549"],["/categories/HuggingFace-NLP/index.html","3ccc12ffca36be1ac84af23702e920e0"],["/categories/index.html","49b4e552b1733dc35914020c62f44a35"],["/categories/前端/index.html","fc3d36b435ebe55984895e3c8c4f8d44"],["/categories/对话系列/index.html","07b04053aca824a2e1025304014a5474"],["/categories/教程/index.html","0c5582019259ee72e2d222a234c4bdec"],["/categories/杂谈/index.html","a305f8bb567e06f7b92d7c45a1459f53"],["/categories/杂项/index.html","c53148b4d753bac9185bcb0ed2ec9d2e"],["/categories/测试文档/index.html","9df3a2dfad114aa09d93ad9a66016396"],["/categories/深度学习/index.html","438932991477bb67c813280b3e5a7709"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","d29316e7d8fc2eb9e77e038c27b97927"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","a40eb567e7940c0322dedb3d3aafe4c3"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","ccd751983c81eee32b0676d9802dab36"],["/page/3/index.html","2f1644b5a559a4dd27950e33bca65296"],["/sw-register.js","232e4eaa448f1c7de72ad6a26c7ab0bc"],["/tags/Golang/index.html","2e078c762eced854b352ae4b5132c5a4"],["/tags/Go语言/index.html","853124e11a785b0bae04c9dd7f46201d"],["/tags/HuggingFace/index.html","e6459c7d6847cc6a84546c57bc03cda5"],["/tags/LLM/index.html","251d9dc57e6ca91126bc84b61f2cb565"],["/tags/Linux/index.html","cb96b61f919e393ee7c9ec3702d93dd3"],["/tags/MNIST/index.html","24909af4e4afb77b64e955f011611a12"],["/tags/Mirai/index.html","6a0c372b38dcb9bb5e1ead0fa159f6b6"],["/tags/NLP/index.html","6b90aa4735224f0d2005f97f8c76c0dc"],["/tags/Pytorch/index.html","a7fec145c18c589b7c6551d62fa9e623"],["/tags/css/index.html","ef82284c45e6d0f70dda51585a72f724"],["/tags/html/index.html","ed78894b712687ba0a4c3b836d8e9475"],["/tags/index.html","16ece8a6b02dcab5982de00224b4f510"],["/tags/前端/index.html","d87a40b4421d49c5fa9a0ce707328631"],["/tags/大语言模型/index.html","60c84f122aedb9d1c26b0a96b40bea02"],["/tags/张量/index.html","1b842431bf480cf204af46ed57394845"],["/tags/数据处理/index.html","9f78026bac6f228281ab56365206453f"],["/tags/测试文本/index.html","66902eb12c478223f4332a28aa5e6ab1"],["/tags/深度学习/index.html","245ce9d91f56e31be8e25ecebc052ea6"],["/tags/神经网络/index.html","c233eb3a7143ab46fa14fdf17237c672"]];
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
