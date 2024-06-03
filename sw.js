/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","cde24b7a4c1aedc28ec197bb418eef64"],["/2023/11/05/测试/index.html","2b1bf8825e9240c2bb5dc401abb2399b"],["/2023/11/06/1tensors/index.html","5ae90e8647f4b934ae62b3ab0d2dd2d2"],["/2023/11/06/blogs/index.html","d7c34190db4f47682ee37ef7ff287267"],["/2023/11/07/nn/index.html","c6d31abda3cc509db882b8ab8e3bfbd3"],["/2023/11/10/MNIST/index.html","5f3ec6db6dcbab6c1d4f9648d0e63a17"],["/2023/11/10/datapr/index.html","f7ac375cd22377567b94662280096a9a"],["/2023/11/12/css1/index.html","655f8f48f79176c9c50c5cf72304c932"],["/2023/11/13/css2/index.html","6aad009062e868e24c7dd2030593dacf"],["/2023/11/15/css3/index.html","efae2e3e6b4fb4e8d8dbe4bd1818a7fe"],["/2023/11/16/huggingface1/index.html","c1d0b85189f5df68f592d691a7db933b"],["/2023/11/17/huggingface2/index.html","89e0d577a722d58632d13f74a95ab6d3"],["/2023/11/18/huggingface3/index.html","ef16c8ecd437788e92b6b473657e06ce"],["/2023/11/19/huggingface4/index.html","c91b693b6f0e16c4910a01d12022a5ae"],["/2023/11/24/css4/index.html","25a8fc4d84631a286cd617a705749417"],["/2023/11/26/ssn1/index.html","39a48a452246f7ffae37c93961ac3b7d"],["/2023/11/27/miraiqqbot/index.html","26ebf8044cc16a54ffa120c4c7ee14c4"],["/2023/12/21/ssn2/index.html","f25a97b78aa65d492a19ae1ca17d3289"],["/2024/01/02/llm1/index.html","79c3b87f1e85845173fca5060a2d110f"],["/2024/01/20/go1/index.html","3932e96851bc5eb475b80d8dec8da700"],["/2024/02/02/zt1/index.html","02f81a3453e5104a2a90d43352c87493"],["/2024/02/04/go2/index.html","372ab35b34553ad57722bf63f5e0aa77"],["/2024/02/09/go3/index.html","94905ed76ab1a24e5ec48e95a5ac6a18"],["/2024/02/12/go4/index.html","4dab5da32dab85383044885e4b685c95"],["/2024/02/17/go5/index.html","8b0613adc53b035b1df6970ea553b46c"],["/2024/04/06/pc1/index.html","2822652c465a9f3c0a47c186f6aa231b"],["/2024/05/07/pc2/index.html","c2ee9b50541d3fc484e79c80f7321922"],["/2024/05/19/htp/index.html","f54192968a2d2e4aebf2776ea0539684"],["/2024/05/21/go6/index.html","952f9471b6a1ea0bca67276eba7ad45a"],["/2024/06/03/ssl/index.html","2f0335b5e15365360ebc15ea58c00b08"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","f99c9bb3e648e5191da16bf703b67b58"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","b2eec8e9075a2bcc48efb9fa09254937"],["/archives/2023/11/page/2/index.html","15a2c4bea975b530962466bd19f69190"],["/archives/2023/12/index.html","530f7c895c5e92944446f59ba44e1ca3"],["/archives/2023/index.html","09358e5818cb0fd380d675861ded1078"],["/archives/2023/page/2/index.html","777b1fad883c0f01cdf19b1f9a93ae45"],["/archives/2024/01/index.html","3e60a132c789bc143822e0854c466d69"],["/archives/2024/02/index.html","1224bc415487a69632bada4a224dcd41"],["/archives/2024/04/index.html","649033e1b274399e659d5170a3b07e35"],["/archives/2024/05/index.html","322376c3d79d8d5b59ae90aee3d4337f"],["/archives/2024/06/index.html","9551ae8ad3b38d280ff781d3cefd5234"],["/archives/2024/index.html","7cad8f671ceebd5d9d7b82fe5bb65a0d"],["/archives/2024/page/2/index.html","21edf21225dc7efbca8a9a842e23539f"],["/archives/index.html","92dcaad38f0991b9ed488ebca0d144dd"],["/archives/page/2/index.html","1b322194f91794a674e4870fb6cb6567"],["/archives/page/3/index.html","12123c446f0394c7b3a2512d1d18982c"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","7a9b7765735a600e437e3adb7e9326f5"],["/categories/HuggingFace-NLP/index.html","1f90c6b45c86f2ce294f29ee8199fa55"],["/categories/index.html","9df785cde66211c7aef9f9cf78bb2df4"],["/categories/前端/index.html","20f2d1531ec06369c373e2f0071bb8b4"],["/categories/对话系列/index.html","1fcf293b9ea4af2dd4401b76b6772b29"],["/categories/教程/index.html","20539895c901dbecc0acf94a345a36b4"],["/categories/杂谈/index.html","41540b59b2b88bef0f3ab7f42b8649b9"],["/categories/杂项/index.html","fda2037e118090721c1f42aa6334618f"],["/categories/测试文档/index.html","f84b3fd48f2492df038d296b3e03d4b8"],["/categories/深度学习/index.html","b2abc91f31c38f9c9fa09e1a483a7d83"],["/categories/经验分享/index.html","c6e7c09d2f76bd600538d1e110b4d340"],["/categories/网络爬虫/index.html","a75d74def9294b1f8ef3863cf3316ad7"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","9d2827cfb6a9c0de3609c30ef9939106"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/ssl/ssl1.png","eacca74c8f59bfb4582131362941d4b3"],["/images/ssl/ssl2.png","30e5e1f3f4ed95f1995147d8ecb770ab"],["/images/ssl/ssl3.png","2c69d73a7918cdc790bac1b631914969"],["/images/ssl/ssl4.png","d6d06ee53806442c6aa7b048bce37f48"],["/images/ssl/ssl5.png","d5013e168b274323cded1713995ade47"],["/images/ssl/ssl6.png","ff07c9cc76679d92ed8857bf6628eaba"],["/images/ssl/ssl7.png","4e4a058882c2f7ea9a7a153a2df09a92"],["/images/ssl/ssl8.png","ac2966c2d16e6b4ab6ba898ff3237536"],["/images/ssl/ssl9.png","9bb2f7d3a43159617c7cae352e1c5cad"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","c07f34e8281e67c163dbf8d58c5d7b7b"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","6da593cd7450d9eb32f699792b38d322"],["/page/3/index.html","b644b9ddf1697843b008b4122ff398ea"],["/sw-register.js","de7950a258e2db1b69aa5283c74851e4"],["/tags/Gin框架/index.html","e6f5bfef8796407d5823f2974cb94792"],["/tags/Golang/index.html","f61e503ae8811898c8cc5296b35a7bda"],["/tags/Gorm/index.html","2c399dd1d935846318d70b006a37bd8f"],["/tags/Go语言/index.html","1b67acab13d6148f3c670d90b2c7e4e7"],["/tags/HuggingFace/index.html","677bc4d2277697b9c88aef58ae4e1a1e"],["/tags/LLM/index.html","3374a9fc3507251be64b61aae8ec4635"],["/tags/Linux/index.html","38e553f66bf715e5de3ebe0644a33802"],["/tags/MNIST/index.html","1e7c4768c6d1485ecf3e1a22c07aa415"],["/tags/Mirai/index.html","0c56f7c284414b3a9a463e52fb5c433c"],["/tags/NGINX/index.html","054dab658481dd7058fba8c2b53bb84a"],["/tags/NLP/index.html","027c80531e406e9b226d00a7f7e77123"],["/tags/Pytorch/index.html","cdb007a8b3c51711a71e70835d576dc5"],["/tags/SSL/index.html","0dd2ad04d0ffb92a2d248bfe36d6bb1c"],["/tags/css/index.html","120501618efcdbe05b6692e738349bd1"],["/tags/html/index.html","951dde9f62c37a289e190a5af7aadc8e"],["/tags/index.html","2a8bccc1865c72da9148880b59cd3740"],["/tags/python/index.html","fd94c5b038fdb71609c4078dc4a36c3a"],["/tags/前端/index.html","d5b9c4454a8f5070f8ca4f7d368c8224"],["/tags/大语言模型/index.html","10616c5381b8001920deeb9eef07f9f2"],["/tags/张量/index.html","deacb01f6014a5edbb6ae31e4741228b"],["/tags/技巧/index.html","644dcaed5f61a80bd03090de817b341c"],["/tags/数据处理/index.html","29b9a89fe41a16a25c7b2f5813578b4e"],["/tags/数据库/index.html","bb92913d8fc68c2409f148b93fed2c0c"],["/tags/测试文本/index.html","d67b7c208a53de75a31b74f57b35b867"],["/tags/深度学习/index.html","f8870915fe5e7fa4d91b94bd9bee9e11"],["/tags/爬虫/index.html","36ca3f463276665dd8977453cc86b2ea"],["/tags/神经网络/index.html","c77f7eebfb9c59dc62b4185599df7b87"]];
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
