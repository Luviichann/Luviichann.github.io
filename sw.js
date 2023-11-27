/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","ee45331793c9c01357e83248bf96a03c"],["/2023/11/05/测试/index.html","f41df52005d2c910f55b0b4eae3ab89a"],["/2023/11/06/1tensors/index.html","20d745843c4af4eb6db96cbc1e6fc0ae"],["/2023/11/06/blogs/index.html","2ad4ae593659c093e8434ff813a27833"],["/2023/11/07/nn/index.html","fed77937a3146f99450c882cfebddd5a"],["/2023/11/10/MNIST/index.html","969c2d6a123b89d2882af51c413626aa"],["/2023/11/10/datapr/index.html","dba427e00e6c204f4559b496fc9e42a5"],["/2023/11/12/css1/index.html","1ff0a881774fa9290387dff156a3e63c"],["/2023/11/13/css2/index.html","521570250bef2d35acfb7a2dcb07a737"],["/2023/11/15/css3/index.html","46eb296ad771202bbd42eb02f49b535b"],["/2023/11/16/huggingface1/index.html","3efc880b9195ec395653e6d8ad774167"],["/2023/11/17/huggingface2/index.html","558af9a4d5255a7cda884f9a2fe0512c"],["/2023/11/17/huggingface3/index.html","137f59e3f2d637cbd0453d0702000241"],["/2023/11/19/huggingface4/index.html","202ce8f8784d6ca0df49fbd7e540631c"],["/2023/11/24/css4/index.html","8aa6edd424339287f610744367bf3b7f"],["/2023/11/26/ssn1/index.html","7c8065f0c9cf5f24f44d291640fc91a7"],["/2023/11/27/miraiqqbot/index.html","66c22e81f2f8d040bbfcef634715facc"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","cde2978dcbb8bb06a5906adccc7a4a05"],["/archives/2023/11/index.html","ddbc89d60f86c3b60735fb215b83ad56"],["/archives/2023/11/page/2/index.html","23941e1e1442331fd3945a4b46e8e21c"],["/archives/2023/index.html","a6e3072398369f3a4393ad77592682ae"],["/archives/2023/page/2/index.html","a331e4f018ddb0a55f0c052a0fdbaed7"],["/archives/index.html","b09907df0e3acd46fdcac17d4e8f861f"],["/archives/page/2/index.html","819b512315724f2c02a42041515ffb7d"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/HuggingFace-NLP/index.html","4a9b1eb771ca137a551c74844058516b"],["/categories/index.html","a91e5cfd728cb804724566a8b8c01d28"],["/categories/前端/index.html","4098a35989aa1b644bb51f57c8c8b2cf"],["/categories/教程/index.html","9357ed76d67d48aa2407f8983bd49adf"],["/categories/杂项/index.html","8f753152cdba22cc1303a96c14cf5442"],["/categories/测试文档/index.html","3367e640acd20c9d0e827f9c0f1b5059"],["/categories/深度学习/index.html","0da9ed9326bdfb34c90ed3cf7e83568f"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","e1bfd012a59b7f57ac9e3f2a1e9f5992"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","a793d61233ff51714129f904e9e4e29d"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","b285cad95b44349c539c7d4830bb81b8"],["/sw-register.js","9c75fc5670e11ff8c832d40978b33d8c"],["/tags/HuggingFace/index.html","60745a6107798d10f38ee48b1acfcb56"],["/tags/Linux/index.html","dc8b6395b2171c7c11efa994cdec9dfb"],["/tags/MNIST/index.html","800328b9e8f90fff16fab7b48679a3ef"],["/tags/Mirai/index.html","ba66f09e9ba2a20f8d7d39d4fac840cd"],["/tags/NLP/index.html","1f9986b81394a9fbcaae5858f85fb3c3"],["/tags/Pytorch/index.html","4f9c0a7a30264c2b2f1ef70f53241737"],["/tags/css/index.html","8aa5afc3c8b5fd91efb80aed04c1d1fc"],["/tags/html/index.html","8c10e4101e065ea75795b9628c967c1a"],["/tags/index.html","6f7c022f0207c9b6aa26972606825c73"],["/tags/前端/index.html","e77dce52bc381e2e242c64ee5e665f21"],["/tags/张量/index.html","fff71d63ccd151379d5cfbbdfaa39e2b"],["/tags/数据处理/index.html","d7dc3647475bd1023ac6f3fd519f3f15"],["/tags/测试文本/index.html","a7a65fcb356d7507e05b62bfb70ef532"],["/tags/深度学习/index.html","cdbd76f0c434b024925292b8f2dbfe20"],["/tags/神经网络/index.html","c0d0692ab1273532e4929f9dac9323f3"]];
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
