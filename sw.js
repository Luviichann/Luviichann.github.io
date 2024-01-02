/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","2a315a3be11449d3bc1f14a56fe43031"],["/2023/11/05/测试/index.html","85c51bb51664f6f712eeb6ca18c82c9c"],["/2023/11/06/1tensors/index.html","d477ce5987d9f317ce7efc5197d7a739"],["/2023/11/06/blogs/index.html","4300c70c8c70c738c6b428431159a023"],["/2023/11/07/nn/index.html","1345573588a3ae36c671eabc34e44e80"],["/2023/11/10/MNIST/index.html","c35c91c96c40518faa949c5135c4c1b7"],["/2023/11/10/datapr/index.html","6f8611121817d1b610504f0ae377a567"],["/2023/11/12/css1/index.html","e4b941a496007e08323c52786b730b73"],["/2023/11/13/css2/index.html","8df17f188761f3f5377b00055a26e431"],["/2023/11/15/css3/index.html","a996ab4ff9d5daa787490437516b9f74"],["/2023/11/16/huggingface1/index.html","d751bdb277d64cd872d1a2ce824fd634"],["/2023/11/17/huggingface2/index.html","136a58377bab66a184308aacdaff4505"],["/2023/11/17/huggingface3/index.html","55d4299fb2d15f5e70d52e9cc713b309"],["/2023/11/19/huggingface4/index.html","09353ec034de58f5be07b1bb24f91b3b"],["/2023/11/24/css4/index.html","c8ccd3d278a3b05c02f3fb9ab3fb6f40"],["/2023/11/26/ssn1/index.html","648239ef69f40f7a48c150125753434a"],["/2023/11/27/miraiqqbot/index.html","59e2240f685e736a41ff5e5862f6b78a"],["/2023/11/30/co2/index.html","0d5b2167877d99d99c330cc08b2cd9cb"],["/2023/12/21/llm1/index.html","4bb38518ac726067731a469f1daca841"],["/2023/12/21/ssn2/index.html","6ace50953fc228aa9a75102797521e61"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","4e64e82204b0a3af3a399eccfdb691f4"],["/archives/2023/11/index.html","67ec6c992c43dd6efcbd038fe04b58ae"],["/archives/2023/11/page/2/index.html","79365702a7be2c77aefeb7f47d8d480a"],["/archives/2023/12/index.html","81308264059b08611f583334fb2a66e5"],["/archives/2023/index.html","919e8e0802e855254a920b2c5e91da00"],["/archives/2023/page/2/index.html","a69fc7e012b64b8f737100136ffdd400"],["/archives/index.html","09ed924245974f506ae826619b5f801c"],["/archives/page/2/index.html","6beae3267c51bc1985ec070d46e2ab6c"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/HuggingFace-NLP/index.html","c427ab19f72f8ad863a17059e6b723bc"],["/categories/index.html","1d275b00568f90312ef93808822e097d"],["/categories/前端/index.html","6ce533c17a075269e748f1ed7c016781"],["/categories/对话系列/index.html","f01b8677f023ec28dcb65814bbaafca2"],["/categories/教程/index.html","6bc831d6e3db350130f08ebe6949cfe5"],["/categories/杂项/index.html","cfd2204ec3dccc7cb49649e3da10696e"],["/categories/测试文档/index.html","d84b8dfa1baced82890ef4822d10169d"],["/categories/深度学习/index.html","f384a28e1a1b2d63b4fb86d4ff985902"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","3359c98ae700918dc2128235ecb57455"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","a0a43cf3c20110063acfb5fe220b5f25"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","ca9112337d0e9cb367befc7412413d44"],["/sw-register.js","9facf356cad285809c05d1a94a6e806e"],["/tags/HuggingFace/index.html","e0b57f550ec8d2681562385970eefd81"],["/tags/LLM/index.html","2a8b6d2eb4af0243ba67a96afe9bcd4b"],["/tags/Linux/index.html","09aa545f8efe9718bde4e42d0456dd5a"],["/tags/MNIST/index.html","b629f351cc4230347c47d01d63826600"],["/tags/Mirai/index.html","a6957547adcd3a1520e2852fa6840713"],["/tags/NLP/index.html","086944cf3d4079f8397ba425292eba46"],["/tags/Pytorch/index.html","8e389377346da6be7687a4ba24a11270"],["/tags/css/index.html","7c6d8c8df3dce5392955eeaeec8da2d1"],["/tags/html/index.html","915358fc836c70756095a728ce349408"],["/tags/index.html","a9dc84a4ac413d3709bc7534da043ae9"],["/tags/前端/index.html","0f240b56cbf527582d6e0e9c31e6f9e7"],["/tags/大语言模型/index.html","1ef66599ab445c578c5129c0dfab0f5e"],["/tags/张量/index.html","560e209c588d276ae45af5914a0d7d34"],["/tags/数据处理/index.html","1fc7c90711470a6b55c5c6b35dd21fdb"],["/tags/测试文本/index.html","da97c6edec2c00651d40bee51b490ee8"],["/tags/深度学习/index.html","5731f2f058f2a281a9c56d53866caa83"],["/tags/神经网络/index.html","13bf065ff64c5654ea119d49dd1db8cf"]];
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
