/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","aec403d66872839436af6630b99731be"],["/2023/11/05/测试/index.html","28ee4abce5fe8ae278306194f63f6580"],["/2023/11/06/1tensors/index.html","1acb1f0cd9c0a4011bf803ae379e86b6"],["/2023/11/06/blogs/index.html","27f5580d3be8a5b83ee1ba7258f2373f"],["/2023/11/07/nn/index.html","403256bad9da6e9d244f0897bec76fc4"],["/2023/11/10/MNIST/index.html","79b41ee0a1ce2882ded60dc6d55c74a8"],["/2023/11/10/datapr/index.html","411c51748d21e0b5f69c544d6b87b29d"],["/2023/11/12/css1/index.html","6bbb7891abf48a3a6534dedb28d77a7a"],["/2023/11/13/css2/index.html","a08b641823d0e82ab990da936a90ed7b"],["/2023/11/15/css3/index.html","4614ec5679b27ebc969eb42faa3f06f9"],["/2023/11/16/huggingface1/index.html","c363d5402c782d20e1a28290627b309e"],["/2023/11/17/huggingface2/index.html","b2cfcbd319db149833ec755d28a2e182"],["/2023/11/18/huggingface3/index.html","9c3cd14c66f06a8d902f224886d2548f"],["/2023/11/19/huggingface4/index.html","9318ae57e8d4fd7e5bb18ba4934fb36b"],["/2023/11/24/css4/index.html","7c3bffd2005c10ffd6fa8bc4a670d15c"],["/2023/11/26/ssn1/index.html","5f32c08f0e525caddd65ce9aac5be38f"],["/2023/11/27/miraiqqbot/index.html","4fa012f8624a0012bab47008994ed3d9"],["/2023/12/21/ssn2/index.html","7efdeed48a1f880881c1f1bfeba531e4"],["/2024/01/02/llm1/index.html","d0101c20d217886ed7b6ba1d5122facb"],["/2024/01/20/go1/index.html","db9c1f1cb9796aeedde7312ada302780"],["/2024/02/02/zt1/index.html","b1167dd56ee3cd6e86345909895e2ac3"],["/2024/02/04/go2/index.html","e24fd9502bea9c91477f39a213bbdd93"],["/2024/02/09/go3/index.html","66ac977e758166398d2321a32c043367"],["/2024/02/12/go4/index.html","e7f9d8da5a481aa46721b2e12d2c9695"],["/2024/02/17/go5/index.html","a0ca312fc829431025a77277679925c8"],["/2024/04/06/pc1/index.html","29a59ee033b5a617131611c3cc7492ee"],["/2024/05/07/pc2/index.html","660d07135f6900b70b944c6bd33dc46c"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","4e8f6e0ee1a5bdd1784aa46c89e2649e"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","63fab9ef1a3c48032b10e96f9c57a247"],["/archives/2023/11/page/2/index.html","781b6f1755324f9456945a50e6a82577"],["/archives/2023/12/index.html","8b79f5fc1464b363c937e1cfeabb9b88"],["/archives/2023/index.html","daca1488208aab873ae5e7a43e50880d"],["/archives/2023/page/2/index.html","ce7411f413907796357be9e0385b5d9e"],["/archives/2024/01/index.html","72cce6ad7055a28dca379cde02cd17eb"],["/archives/2024/02/index.html","8dbdb19c44114266f8d5eeac3b0c8de5"],["/archives/2024/04/index.html","250e4bf4ab494bce22ace43242c7565c"],["/archives/2024/05/index.html","ffb2d91db6f02623f45c0c793fe9554a"],["/archives/2024/index.html","a1285a729328f1414a53d1e23af6eddc"],["/archives/index.html","43443d44c5e2ee92c28e79759d465dc9"],["/archives/page/2/index.html","d3aab68b74feca6d1487b8485e996c40"],["/archives/page/3/index.html","b0a81dc87d5b46009d6d5e6e9025d835"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","43381206f26560fcaf7f06c2048a9826"],["/categories/HuggingFace-NLP/index.html","34b3a93812d580171fef8416d7facd7f"],["/categories/index.html","d60a2bbb2976f6e347d6b3ca4876d44d"],["/categories/前端/index.html","4bf19d768b18a192b84ae3cc36a56150"],["/categories/对话系列/index.html","67c7a0b78a69a4130ecb25f474be6747"],["/categories/教程/index.html","a6d5025cf1856cbf92e8c6c54eeb6bce"],["/categories/杂谈/index.html","1366b87fb2aa01bb35c0fa5cf6e40c00"],["/categories/杂项/index.html","a1b7295431764407bbb4a152ccca8df4"],["/categories/测试文档/index.html","15703960569fdefe139821f901a96826"],["/categories/深度学习/index.html","629d1376d2ba218cbcfb6c14955e5422"],["/categories/网络爬虫/index.html","e98b415eceb15e600d016c9d68939876"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","092fe9fca75c7eec45b70a0c971791f9"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","499d00338ec48f3a0fe82cb4818031ec"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","7fb0b90850d582fe07b4983c6de69cc2"],["/page/3/index.html","a6a8c75be0191ae2f6425fda8a88f9a4"],["/sw-register.js","77f27408f1ffbc7606265e8ff7c54645"],["/tags/Gin框架/index.html","50dbaabb8be19fbce4788eb475bc867e"],["/tags/Golang/index.html","b01c02b2e921ff369ed9d54e1c870c6f"],["/tags/Gorm/index.html","2ef65edd6f992fdf9bafc73ddf247e65"],["/tags/Go语言/index.html","e557cbb8619eadfa15aed21ca31b8dc6"],["/tags/HuggingFace/index.html","35f370ac0c8bbb8fe0da854410652b2f"],["/tags/LLM/index.html","80bebf2d47614ff4771e48e62c25e85e"],["/tags/Linux/index.html","6a4644db81bdb108623c65c0337e9be7"],["/tags/MNIST/index.html","5745be9cce05d113f54152eb61be3919"],["/tags/Mirai/index.html","379296300e1b3e39f364b49132964d8f"],["/tags/NLP/index.html","f8b05033c8ae64c0aeef8ae9dbd9c99f"],["/tags/Pytorch/index.html","80a9870a9b5ec4612feb1a2b14d2faf5"],["/tags/css/index.html","539d4fc0230a47d749dd2d2226f2aba6"],["/tags/html/index.html","4448dacf1b5296971e30cdf98a06d1bc"],["/tags/index.html","28425fb49cc51a5e78ada8e11c5daab4"],["/tags/python/index.html","2d2d8fc7b652ff159716e915c8441741"],["/tags/前端/index.html","bd22c233d077a80b32cdcd32cb543d8b"],["/tags/大语言模型/index.html","b6d01f7afd279bce85ba4d72dbf5c3a8"],["/tags/张量/index.html","ce02219a1a5df2bd405df46c5ca929c0"],["/tags/数据处理/index.html","429bb6cf4c9146fa2455cbb864dec5a0"],["/tags/数据库/index.html","82850bd1cf753a093fe8ae7044d2e027"],["/tags/测试文本/index.html","083b79108b6df92bf516a175583739a6"],["/tags/深度学习/index.html","88709b74d0fbdd07536c14065c95ed35"],["/tags/爬虫/index.html","83a2f350c7443efc77dc2873c3436fec"],["/tags/神经网络/index.html","c15e2937e242655b5e5872e1ff26fdee"]];
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
