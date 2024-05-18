/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","d30686214ecdf5cbff3746c59e9e0140"],["/2023/11/05/测试/index.html","fc2b9685cc4bebd605c421594044edcc"],["/2023/11/06/1tensors/index.html","5c91501f4aebb535edee27670d11f7b2"],["/2023/11/06/blogs/index.html","afb7fb33d3021c36f984454697c91bee"],["/2023/11/07/nn/index.html","8916ac18393c3073b2b2c1353f83e538"],["/2023/11/10/MNIST/index.html","285182eeec2f1662f1ca7d1e2bc72904"],["/2023/11/10/datapr/index.html","751705161172084ef7bc83888a74c9fa"],["/2023/11/12/css1/index.html","cef283df64d6df01634961b99ec9cc21"],["/2023/11/13/css2/index.html","b32db6b97fbc13cc4b7650f778c1eaf7"],["/2023/11/15/css3/index.html","1264fc9ae13b161dca9e967b451a4596"],["/2023/11/16/huggingface1/index.html","5893a4048c1a0ec041fb6154410fdbdd"],["/2023/11/17/huggingface2/index.html","41deeed72a507516f0017e1aa024d282"],["/2023/11/18/huggingface3/index.html","f5ab02b822d5793f9f387112dc2bf820"],["/2023/11/19/huggingface4/index.html","2885eff6f59a7ab7fa19b7a0df5e0715"],["/2023/11/24/css4/index.html","891a620b9a1c06a0ae904f66f286ee53"],["/2023/11/26/ssn1/index.html","9c8f25945d3e355cbccc67a1fba9f79c"],["/2023/11/27/miraiqqbot/index.html","e56c91c1422c019b74808d697d176d31"],["/2023/12/21/ssn2/index.html","cc53df3957d59342512f41a1238483be"],["/2024/01/02/llm1/index.html","8a1df56e5d19e4b4b2291516cdba179c"],["/2024/01/20/go1/index.html","ca05cad1a9b1eb760436bbd24501c6fb"],["/2024/02/02/zt1/index.html","8495b14805173fa9e23bb3ed57d00314"],["/2024/02/04/go2/index.html","eec540389d8de4b823b8d1758cf754c5"],["/2024/02/09/go3/index.html","88a5bbd2fde5011b9e603f9f2d06cb07"],["/2024/02/12/go4/index.html","076b4d0102563272a72b1ca057e16883"],["/2024/02/17/go5/index.html","fcc01f0ce43804e3da65c57d80e3fe20"],["/2024/04/06/pc1/index.html","515ad7cf33f03706de518e77d81e269c"],["/2024/05/07/pc2/index.html","216e632324b22290bd15abf9e84856b6"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","decd2183a569533535f8792d85f2550f"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","e89ba84e56d75740a3ee783ea43bfd3b"],["/archives/2023/11/page/2/index.html","285b37bebc69ac17cbd822a7201871c4"],["/archives/2023/12/index.html","168fd0b6cd068308cea0ee387f1b1114"],["/archives/2023/index.html","4b344ac17483a7e0f2ead02332fad4cf"],["/archives/2023/page/2/index.html","00fdb21b9ce19e58d3b753283f0b3058"],["/archives/2024/01/index.html","f732a12452b7d14dbf3ca02be5038209"],["/archives/2024/02/index.html","baa4840a01a0dd54446f6572d0e6ba59"],["/archives/2024/04/index.html","f8107567653094f96f438e1b9abc72e7"],["/archives/2024/05/index.html","e130f89533c460b3358905c8a4f935bd"],["/archives/2024/index.html","942c1e4f3aaca1d9a36cc2a4d30090f9"],["/archives/index.html","eea3878ada719d7c106f6dc40b24f89d"],["/archives/page/2/index.html","45e6afda5251b67c017f3b465f78e74a"],["/archives/page/3/index.html","76037e99b24eba1ae05c32343bf2f021"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","83249f7481e767cd39cfd9c93bc7db9e"],["/categories/HuggingFace-NLP/index.html","7a04a0575f1dc92cb5b273310f3f84e5"],["/categories/index.html","dc2663717045acff49b227e1dc9930e0"],["/categories/前端/index.html","05ef5ca1769072126b0977526ccfab45"],["/categories/对话系列/index.html","53ecc33a5a23346342faff787ff8c8c3"],["/categories/教程/index.html","b01cc1a967c4a8ecc3c16adc492d772d"],["/categories/杂谈/index.html","cb19f31ac06882778adfa7e315b62819"],["/categories/杂项/index.html","d5f702838c959b366f26388fa148737a"],["/categories/测试文档/index.html","f768654ef8df7e6c9f7e482f088453b1"],["/categories/深度学习/index.html","ea0880668f6cf14e79e900a2c6b56e5a"],["/categories/网络爬虫/index.html","21699a7401ab0cc6dc399cc2e784e6b8"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","5b0159e44463cd3d029d1075a17d3f9b"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","b0a39d134f5f86e161d103804e2568d2"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","5cdcfba276f492affe053df74d743aaa"],["/page/3/index.html","383ee59fa3b01de571187c04eb833227"],["/sw-register.js","e806b3ca521049f4c4be3261fe9d69db"],["/tags/Gin框架/index.html","e3a1acd8595b2d4be11d502f583c0feb"],["/tags/Golang/index.html","baf5ed6c2a0d4e7abf7558312eb955f7"],["/tags/Gorm/index.html","d7ab4c8381d71dd1e46cae665206ced3"],["/tags/Go语言/index.html","7d8fbd9c8b4e9e7c00a7cfe08388f0ea"],["/tags/HuggingFace/index.html","963a62cdb4ffbfce23f89200cf02bead"],["/tags/LLM/index.html","19dc1d6a0eacf566f7f53cc6f57d34f8"],["/tags/Linux/index.html","e1882f7741f51e823b0e52e887d60ddd"],["/tags/MNIST/index.html","3612c51a6adb4dbd14bbbf56b00d45ef"],["/tags/Mirai/index.html","bf1977230b1eb4e71289ab8edc003922"],["/tags/NLP/index.html","8bc8e9873e2b01ea94d3d7a2fa89d62e"],["/tags/Pytorch/index.html","eef48547d6fd9d8af634d1473b0563bc"],["/tags/css/index.html","2fc3b024fe3b083766b42177ed66f648"],["/tags/html/index.html","fa2d9ee2e699c00f1ed2d089c4f21068"],["/tags/index.html","63358072c7e82c712c6a67f62eb62a9d"],["/tags/python/index.html","14da1dc408d743325b2ae8f85cd96127"],["/tags/前端/index.html","3117a1127e2ba9049696664149a964c8"],["/tags/大语言模型/index.html","60a3a7ce292c8e3fa617ab83fa28495a"],["/tags/张量/index.html","6c24383ba213f9094a000a0cba9766ac"],["/tags/数据处理/index.html","e4efc0825e528a4e5d9afb650ab5930f"],["/tags/数据库/index.html","d23339234d6b55324342b2c49bcb14b1"],["/tags/测试文本/index.html","49f81d435490143abe6d522eee7cb83e"],["/tags/深度学习/index.html","40f569414ae7c2f98e44528930271984"],["/tags/爬虫/index.html","7d9e9e109008a0fee2fd16ee9c363b17"],["/tags/神经网络/index.html","2997ec60e20897434651d3877b8c428c"]];
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
