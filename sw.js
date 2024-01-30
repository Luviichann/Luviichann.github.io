/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","73d1636d5eae9d597de89d9e9fe96026"],["/2023/11/05/测试/index.html","ef99cea8b0f7c51a4542b1aa915251e3"],["/2023/11/06/1tensors/index.html","afc3a3bfcce67fdd4e9ef7f229787cba"],["/2023/11/06/blogs/index.html","74e522c99a9022709dd7ee5c9fabb23e"],["/2023/11/07/nn/index.html","3e71779499df60d26807e11e58978dab"],["/2023/11/10/MNIST/index.html","c1a20771fb0ec1db4f14293f1d2c5d2d"],["/2023/11/10/datapr/index.html","3b44558f377d19f47e69e0c3fa384b06"],["/2023/11/12/css1/index.html","0593b60e9b8bf65b936dfffdd012e7d5"],["/2023/11/13/css2/index.html","aacaec68d959b1799c0a4e2ee4048bac"],["/2023/11/15/css3/index.html","c8857dcf8ee4ee67a16f42774c5272b7"],["/2023/11/16/huggingface1/index.html","231c78ccf3f8e62b7d15f30941a60f22"],["/2023/11/17/huggingface2/index.html","79bc4cbb51556c9a333983d0845d4077"],["/2023/11/18/huggingface3/index.html","cb8b739490df4a836ebd6d60a154e27b"],["/2023/11/19/huggingface4/index.html","1db5067871139f34b65a7e8e3c3f7ed8"],["/2023/11/24/css4/index.html","3827221f8d8785164f11a8b05e2ea90f"],["/2023/11/26/ssn1/index.html","03b85b97498d469e5385114320987f44"],["/2023/11/27/miraiqqbot/index.html","32176ed91da743d9edf4e3c1f245b207"],["/2023/12/21/ssn2/index.html","4aa8ac27a3617b6273a9c363430c898b"],["/2024/01/02/llm1/index.html","63b292e9deb7e1bae07df0389d9c2ef5"],["/2024/01/20/go1/index.html","86fb340ac192a5f7cf0070ad40c4869b"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","a82a4e5f69d3621d9db2ac9ab290ae4f"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","7789c837e8acfa9352d623a2b90c9f3c"],["/archives/2023/11/page/2/index.html","8031347bd80886ab951378913a16f42b"],["/archives/2023/12/index.html","c64db0589061bec04f8df51e49f5a1ce"],["/archives/2023/index.html","582ebdc3fe68e9859c7b8350c0ddaf1c"],["/archives/2023/page/2/index.html","2220e3ff1fde66dd77aabb7ef9f69bc0"],["/archives/2024/01/index.html","7c68b27bf982f634f923b9ee5e0ebafe"],["/archives/2024/index.html","61bcaf063df90e7d979d6aaf227a2546"],["/archives/index.html","3a8166ff3456e887ddca2e4e6db58085"],["/archives/page/2/index.html","a5138f8969a0cccf40f1760e4316cef6"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","031e82db71834c7020b3dd9698e598fd"],["/categories/HuggingFace-NLP/index.html","315bbc54800404d0fc696a9281f3090b"],["/categories/index.html","d303a2d9bb4607cbdf1b05b185d2c615"],["/categories/前端/index.html","895f97ba285b0fdf0c6c65555c4ae759"],["/categories/对话系列/index.html","bc14c3af5bce4cf07ff66152147ea353"],["/categories/教程/index.html","eea10d10631bfe67a75a987856d68e41"],["/categories/杂项/index.html","8ddcccdc69abef24a03c06982e9fd69c"],["/categories/测试文档/index.html","c6c9487ae452f8c5565fb9f002ae84b1"],["/categories/深度学习/index.html","d22e1980f5e438018c8acbc52b4f56b7"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","173475034557b4e438b1c80e0d2f17e9"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","787126bf97cbbf7d49e00884afb11b87"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","3b47461fe4e5f2dfad2280a53511ba69"],["/sw-register.js","e781f53420003d3c8e959fe8434115ed"],["/tags/Golang/index.html","0342433bd33c397f9369c12c8c6a7b33"],["/tags/Go语言/index.html","c5e16dce88027c107fc33f26d895c7b7"],["/tags/HuggingFace/index.html","e2eae72580daa5f8fb2db7528a048754"],["/tags/LLM/index.html","c6201660704c442322b0db5c69bf0812"],["/tags/Linux/index.html","3147fc9bb8f89e474b073c94d4419193"],["/tags/MNIST/index.html","9d1aeca012fa28bd03e44c3fd8276ce7"],["/tags/Mirai/index.html","5595609e6cafbce110eaa76740370c94"],["/tags/NLP/index.html","56d6285f9e89e5685619fa75214279d6"],["/tags/Pytorch/index.html","266d75b5fc4c188cb6a08fe68599f00b"],["/tags/css/index.html","9c140e23a738a86d4ffb60d27b947e5e"],["/tags/html/index.html","85a78326bde7e32842c2aefff5f2dc2b"],["/tags/index.html","428fbac17f08c17238f1fbbb39fb5458"],["/tags/前端/index.html","0735fb5d9311350ac2253f1b52d29371"],["/tags/大语言模型/index.html","ce16df71ef25fa82e8e753bbe0d3c40e"],["/tags/张量/index.html","ba75920b507e7dc480fe844f00529e4d"],["/tags/数据处理/index.html","6afa34fa1d17ce463659c174fdfe3a19"],["/tags/测试文本/index.html","855465dbd3d68e72852c3d84d1450d97"],["/tags/深度学习/index.html","faed8643e7de0fc0074d6cf03537bc3b"],["/tags/神经网络/index.html","b9d5e19b9f43a830fdd10e24aba6b3cf"]];
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
