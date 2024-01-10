/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","5e72f0d00121f894177526e5ff52d9f3"],["/2023/11/05/测试/index.html","62899f34624179bad5ca065e85ae63b0"],["/2023/11/06/1tensors/index.html","c849cff4f223b8326c364279005c3d0d"],["/2023/11/06/blogs/index.html","1dba18adf679a9daa85fde4301e833ce"],["/2023/11/07/nn/index.html","1da579a069c31b2588c23fffd2184119"],["/2023/11/10/MNIST/index.html","119325d68422e10a2252d8e3ad0b2b9a"],["/2023/11/10/datapr/index.html","e7e7e56314ff75ef286c2951c6a6c926"],["/2023/11/12/css1/index.html","3c764f26711e8755ea43f7a295fec4d2"],["/2023/11/13/css2/index.html","4c8985fb610f0c5f15069178a9b979ce"],["/2023/11/15/css3/index.html","5661724d593f02271fe990b6ee56816d"],["/2023/11/16/huggingface1/index.html","7f68ab3dc1f447036318706e7a1125a6"],["/2023/11/17/huggingface2/index.html","548d9a133522cfbab507ca553e0bc31c"],["/2023/11/18/huggingface3/index.html","a2857d59213191f12dde926acf8fcc63"],["/2023/11/19/huggingface4/index.html","e83652d586a353937709f4fc4cd6a83b"],["/2023/11/24/css4/index.html","10de1d491ecafa4cd8e6143dae46c39d"],["/2023/11/26/ssn1/index.html","946f15b00196ff7c89c7e7130fb27e67"],["/2023/11/27/miraiqqbot/index.html","e8fdcc51d1a6162038035fdc55ea4550"],["/2023/12/21/ssn2/index.html","ec465708d4bf35efe5da1a4e37d5e3e0"],["/2024/01/02/llm1/index.html","59ca1ddf0412ae649a7a75677d80561a"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","506c9135ee0e2a553f73f238a310a35f"],["/archives/2023/11/index.html","30edd3c96bfb434dbc556b8e2e81df36"],["/archives/2023/11/page/2/index.html","20739238e43953f12a6d8a6b7a6e8862"],["/archives/2023/12/index.html","37a22e87dde6e1664a1f9a923175c0cc"],["/archives/2023/index.html","c8fd7b700974ca772c28fa3d9d456098"],["/archives/2023/page/2/index.html","b6f1287dd29412ba6fc1f0c85902f723"],["/archives/2024/01/index.html","b074cdb00e5a01f550e1c877f29052d2"],["/archives/2024/index.html","849cdc4649db0f092ea9a115cd296ee3"],["/archives/index.html","954ca12670e98e89543adcba5b8e63db"],["/archives/page/2/index.html","c2119c2651f695f2d3cc1916abb92eb5"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/HuggingFace-NLP/index.html","89e37e5eec45f0887b0fecad3f448e88"],["/categories/index.html","09a1e56c568b288824770cdd694acc25"],["/categories/前端/index.html","5b111fc28952761fec0c064cf1dbef63"],["/categories/对话系列/index.html","a0202ac96b326e2c130b7585f57ee4d7"],["/categories/教程/index.html","58b5a6565651d6a2dfd4dd60a4e5a899"],["/categories/杂项/index.html","9e11ffc5da3046856c73dd1cd46db754"],["/categories/测试文档/index.html","b118fc10fcd47e362edc0a2dda0cb542"],["/categories/深度学习/index.html","4e08b0a07e02d0003f25f5c61214fedc"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","6a7a1611715d27084d28d9fcad99be14"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","c27e2cf4a9193f324532c36336bda439"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","93af181e57d91f82c02217ae71420f50"],["/sw-register.js","cb70f59a1897fffc64a23d9119f7a9a2"],["/tags/HuggingFace/index.html","15a5ebc7689b3ce80d89ab51f156a32d"],["/tags/LLM/index.html","69c8fdc64e23ce1cf786cd3041b3cb2d"],["/tags/Linux/index.html","5467408e5782c860f2074866795bcffe"],["/tags/MNIST/index.html","a0f24877dc27480d53284c32d050510f"],["/tags/Mirai/index.html","39b11f8b1fc65561b5919ca0884f7130"],["/tags/NLP/index.html","31abac9d4e5bdc3267992c83e3c211a8"],["/tags/Pytorch/index.html","7baa5596bd2964d2beb6fb76e3296155"],["/tags/css/index.html","c4377a6a1565b22f512760553f8e5ea4"],["/tags/html/index.html","4cd82c9c9ca2e6a94cf8158d38009acc"],["/tags/index.html","625a299d9aa0f1ae3a70cee2450dac75"],["/tags/前端/index.html","0b987437af136bec37315f4a1f91a3d1"],["/tags/大语言模型/index.html","afbff44a299f6dd58c5339001ed43ec2"],["/tags/张量/index.html","00aee064fa4785d8141baca88c635724"],["/tags/数据处理/index.html","7d8b85be787a2c2dc078851032cea6f8"],["/tags/测试文本/index.html","aa7e699c9ab9c531d401a5c8cd92b5ef"],["/tags/深度学习/index.html","685f15ae797e2366b720981fee45ac6c"],["/tags/神经网络/index.html","41223bc3eb8d0d3c8d3041d7813eb71b"]];
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
