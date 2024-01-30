/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","353bbad4ecaa53383db38ff0b0c2910a"],["/2023/11/05/测试/index.html","064fe40ccc244bf3eb9cc212a2849e9c"],["/2023/11/06/1tensors/index.html","295c5fa9434ff3fd59086d6098f06307"],["/2023/11/06/blogs/index.html","7a756a15e5270a758cda6c702ed90a33"],["/2023/11/07/nn/index.html","15bea94fad894ebc45ba384b3d76e8e5"],["/2023/11/10/MNIST/index.html","6e72cbd25681d2a34b3a54139c88d9bb"],["/2023/11/10/datapr/index.html","d370b410cf49c4332067ca8582f626ef"],["/2023/11/12/css1/index.html","77e324395418217c946ce6ba72dee26f"],["/2023/11/13/css2/index.html","353a61d7d88fad9f6e7350b8fd799449"],["/2023/11/15/css3/index.html","2b81be108a10293ae387779d99aafd51"],["/2023/11/16/huggingface1/index.html","59d2795ded7f8905b7e0159e0dcac3b0"],["/2023/11/17/huggingface2/index.html","0ca9272c6c1a00e5a840e9a87c05229e"],["/2023/11/18/huggingface3/index.html","7de3628a1799a8821fd71866e5ca5c52"],["/2023/11/19/huggingface4/index.html","174b7b23c3e05279ca3a1fd28e2d7a23"],["/2023/11/24/css4/index.html","e48b78b0526458e9c77598b9c304bf6c"],["/2023/11/26/ssn1/index.html","994f31ffdc5f6c3647885fac0df590da"],["/2023/11/27/miraiqqbot/index.html","d520ef610567d2ddf55f60ffe22239dc"],["/2023/12/21/ssn2/index.html","c12bd8bc5489bc1e56119b98dac134cf"],["/2024/01/02/llm1/index.html","238e5398656311dcc3736f530f7149aa"],["/2024/01/20/go1/index.html","c5aac15ed33bf4ec7bb7da4131ae42bb"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","2c0e0d36d475a0e3edf62e71685c80a2"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","1f947e664dda1b530305dc69f0f4b842"],["/archives/2023/11/page/2/index.html","3071d523f405a0545ae2a1ccf574644c"],["/archives/2023/12/index.html","26e441f242d616664793b3b26bdb3ad1"],["/archives/2023/index.html","b3bdca6bf540c73216111ff731a01eb7"],["/archives/2023/page/2/index.html","da88444cce06812e400cd77b166b4485"],["/archives/2024/01/index.html","5907579e78f999d48854d73e57826d61"],["/archives/2024/index.html","0cf71e2f677f0e49ad85c6d777aae443"],["/archives/index.html","5b01a505e482aa1926f5d56072a491b1"],["/archives/page/2/index.html","cd70c58cec5cb7ff1c0d168e49e0a10d"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","826077122fb44a5d0486923e785a0457"],["/categories/HuggingFace-NLP/index.html","1a55195c5c9aaac3b3cc347981331587"],["/categories/index.html","8e67a82e72672e7e16d64fcfc1e041e9"],["/categories/前端/index.html","efec0e9b0549f53e058cdda8feb19fd9"],["/categories/对话系列/index.html","737c84b83a201ae2278494b759470250"],["/categories/教程/index.html","b4c706a03ad2001663e476305b1a8640"],["/categories/杂项/index.html","a3a6ef2e68659774a0080d5047f79c03"],["/categories/测试文档/index.html","a5c6c99030f4a6f81999b51416385daa"],["/categories/深度学习/index.html","a7596c763c8e24a6f5042e58132c09c0"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","1d51be66e34d69209be190f1c51f7fc3"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","787126bf97cbbf7d49e00884afb11b87"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","3b47461fe4e5f2dfad2280a53511ba69"],["/sw-register.js","42d568ec8883dd37e91770d314a4c145"],["/tags/Golang/index.html","ccfeaf34bcdc60be8492b20be36ce031"],["/tags/Go语言/index.html","6455c01c13362341408c8076bb77b44b"],["/tags/HuggingFace/index.html","966f1550dd5dd979a12d4d977629117b"],["/tags/LLM/index.html","14a5e3a0894709c84e103a657c706512"],["/tags/Linux/index.html","bc76c97bec970e4334c1baa77ea90a3d"],["/tags/MNIST/index.html","ea04573d7a44fefda6aea85ec2bab88c"],["/tags/Mirai/index.html","2a115c2360ef3d01f91d43331c67f0da"],["/tags/NLP/index.html","e6635f7d011912f51b98e4b6786c3673"],["/tags/Pytorch/index.html","012924e171ad4004e7efe95385d7795b"],["/tags/css/index.html","b4cd7e7c274f9f7902aefef92cf03025"],["/tags/html/index.html","c2893f6585077c43e3049e2220df4f01"],["/tags/index.html","85187a988ce981b50eec42b2db93130c"],["/tags/前端/index.html","cb916727c3486faa2e76b53ad74d94a9"],["/tags/大语言模型/index.html","73c8ade290e2bda4c8bed7876e275524"],["/tags/张量/index.html","e660fe5d90682da160628307229c1947"],["/tags/数据处理/index.html","c0cbf06c18edc48ce3e1b065b0bbcc01"],["/tags/测试文本/index.html","0b2aec6828b5fafb83b54ca05ab6d9c7"],["/tags/深度学习/index.html","4bdbe126caf8b9dc4d3b72e61815d544"],["/tags/神经网络/index.html","defecece3e0855fbb9be314456432a54"]];
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
