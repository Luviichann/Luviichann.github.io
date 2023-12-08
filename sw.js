/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","cf401c50db2f9fb47fd1133f59288f1e"],["/2023/11/05/测试/index.html","36fb9b610440276e7d2d56cb9f87a76f"],["/2023/11/06/1tensors/index.html","9426f1e6ff69882a1b7d269e2d5b814c"],["/2023/11/06/blogs/index.html","1ae4b950d3771e50758f84a38639854b"],["/2023/11/07/nn/index.html","6abd4981cebaf4d4b2c0768ad5b5a418"],["/2023/11/10/MNIST/index.html","e2c8bf4788c9e21a0f2bdb69379a8b2d"],["/2023/11/10/datapr/index.html","9c5b32f1865e31b13d8ee9e2443ab3fc"],["/2023/11/12/css1/index.html","b881c03c912a4b0cc8a2896421234ac4"],["/2023/11/13/css2/index.html","1d200a18f9a4decb8be9d89673d25a2a"],["/2023/11/15/css3/index.html","5c84f7567be263b21526601d4839a603"],["/2023/11/16/huggingface1/index.html","261331c0c2f40cf994b94a79e5fd4f77"],["/2023/11/17/huggingface2/index.html","9524d01ea4e00b737d6e37f183c11239"],["/2023/11/17/huggingface3/index.html","3c04cfa7aa78d890a11340ab6a9b7b7b"],["/2023/11/19/huggingface4/index.html","c2b4d6c32254d39c23885665155cffb8"],["/2023/11/24/css4/index.html","bb8e4dfab15f0ee01bc5657460e19ce9"],["/2023/11/26/ssn1/index.html","53db514e81db01494f455d00b0d85ae3"],["/2023/11/27/miraiqqbot/index.html","dab0fe75fa6c3ee194381ce8b7bcc06e"],["/2023/11/30/co2/index.html","660f51b40631e10c25071ed24fee8d11"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","e3ed8499aefb2d8880467414139db551"],["/archives/2023/11/index.html","01832c9508dfdb448de2693f9260f5ac"],["/archives/2023/11/page/2/index.html","a078926c3a843a2a27011d2930897300"],["/archives/2023/index.html","c1ead79c22143d5196edff59ce1f0682"],["/archives/2023/page/2/index.html","fd956f5bfddc1ec7674ee35160543b8e"],["/archives/index.html","7e1ac7b184d0407f7355327f1b6b3dbe"],["/archives/page/2/index.html","b570088f93e719a7257a3de3ff793337"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/HuggingFace-NLP/index.html","dc0cd083892b6593f12d0aebda601719"],["/categories/index.html","a8527f1823979e00e87ecad471c796fa"],["/categories/前端/index.html","2ea3d6ff106c20a02f45c1fa4228fb3c"],["/categories/教程/index.html","70237701986b8de3e3a597c9b5c74542"],["/categories/杂项/index.html","5e8ea149affb452b3b63762f14ba5c55"],["/categories/测试文档/index.html","7f961238bbcea01b2f8563947f982aea"],["/categories/深度学习/index.html","a9fe8851d097fc0339f41716d9550753"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","ebd33f96f62e1a4065bba2b31f523b3b"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","e6ab84dd41cdd7abf9533e0852501b3d"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","51cf1369109aac352faad98cd03bf723"],["/sw-register.js","7934241d233a37b0c6c4718cdbc88f90"],["/tags/HuggingFace/index.html","f8ebbef7af999d6e927709b020121cc0"],["/tags/Linux/index.html","57162e1d21850d232ae6e068dce4852e"],["/tags/MNIST/index.html","aaac64003a2b62c9582209b9c4968dc8"],["/tags/Mirai/index.html","bbb6f800200027c8b9f7187f00062ca6"],["/tags/NLP/index.html","b396b491c48f5fc6367507647011c5f0"],["/tags/Pytorch/index.html","104fdfb1c5ad79fcba065a470185519b"],["/tags/css/index.html","a23f0139175392bf2dc8bd989983a2e3"],["/tags/html/index.html","ba218dc3662d54d2d7e4d2a1bf16a696"],["/tags/index.html","e58fd54a1d8e365b23e7fb73b87068e3"],["/tags/前端/index.html","d1216dae4096deb1e24e5baaf735bd1d"],["/tags/张量/index.html","2041bcf9902b06398e93807fcec71578"],["/tags/数据处理/index.html","043f8662833d29b6479e912401d618a2"],["/tags/测试文本/index.html","0635e65ddfeae347f9cf4ac68a1acc56"],["/tags/深度学习/index.html","d8ed99ce5278ad020854d94f9f11c908"],["/tags/神经网络/index.html","068ea52e208fb37ccf9cadb652b91999"]];
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
