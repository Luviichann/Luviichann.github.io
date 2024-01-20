/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","40aa49fe5ef2d8933118d56aff27be87"],["/2023/11/05/测试/index.html","ee8533c58207836195cf1725df31b134"],["/2023/11/06/1tensors/index.html","b083a908299fa98942a89b19bc338c91"],["/2023/11/06/blogs/index.html","f1bd01663bf9d2bf8a3743b4691921dd"],["/2023/11/07/nn/index.html","36be3eba30f38b4fa559d00cff0467b0"],["/2023/11/10/MNIST/index.html","262bccc14989b1462a480550d6adcd0f"],["/2023/11/10/datapr/index.html","627f867997481a95cabe8d88ffb9fa62"],["/2023/11/12/css1/index.html","076b8e67a16698e686322d54b8e44a4e"],["/2023/11/13/css2/index.html","236302444a56a09e7d40ee5da0cafd77"],["/2023/11/15/css3/index.html","4a60672a01cdfe1cbaae44c3d4bcce0c"],["/2023/11/16/huggingface1/index.html","9b999057716fb15c541bb4edb1402667"],["/2023/11/17/huggingface2/index.html","809b3913d5ae717aa67a45bce3ebe9d2"],["/2023/11/18/huggingface3/index.html","6270284bb597be85846536a039bae07c"],["/2023/11/19/huggingface4/index.html","66ccf21c91dcfe9e2d437734a426806d"],["/2023/11/24/css4/index.html","1b58f2848b338e21c4db4d782d751193"],["/2023/11/26/ssn1/index.html","1126834fa52ad98a9d45e5ded2ef2c1f"],["/2023/11/27/miraiqqbot/index.html","b870a0d70cb87d9caed1c68bf42f3fa4"],["/2023/12/21/ssn2/index.html","4bd3b5e26d0611c506a0215a04e8ae10"],["/2024/01/02/llm1/index.html","74527518ffccfe2e141ed96dc87e2457"],["/2024/01/02/ssn3/index.html","1d7eb9880c1b6033de9b69bc229efb42"],["/2024/01/20/go1/index.html","96df8b95eae7aefb8e41d99e36e539cb"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","ef2a1628686b975a426dca321bbc45a9"],["/archives/2023/11/index.html","85414d49f9b51e086b0cfd3d62f21773"],["/archives/2023/11/page/2/index.html","f03c6c37bb9719eff8b39c0188ea5ae0"],["/archives/2023/12/index.html","a360810c5f3ccc9f3ce38a9c3a5b3929"],["/archives/2023/index.html","4cad41799e4ebb72592f17aee9d951d2"],["/archives/2023/page/2/index.html","fc353728d6d41818d532c8d2c07ce90d"],["/archives/2024/01/index.html","d0356353acf19732281356672710ce5d"],["/archives/2024/index.html","8f2c225546f0ef5dff9f583becb0bef9"],["/archives/index.html","b4979c358356fb171e8679782b3f0d5d"],["/archives/page/2/index.html","071620942b61cbeba138e89fc867127b"],["/archives/page/3/index.html","72dc5de5bf7454689458efbe362640c9"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","c8984da4565c0851fd3679c560f7be69"],["/categories/HuggingFace-NLP/index.html","beff19b31c4dee98a41343568a8a9093"],["/categories/index.html","5ebf7a2d82181523df3b67b8ceb988c8"],["/categories/前端/index.html","8f68e9bcd8f873326082a61fc17bfdb7"],["/categories/对话系列/index.html","46a8693dcb3dd6909673fe49f81cc631"],["/categories/教程/index.html","a459eb03263ae7de519e142de7c29f14"],["/categories/杂项/index.html","e107a25d544927a5eabf4fff67fea5f8"],["/categories/测试文档/index.html","fa526aa112fa7d29cce44bc6aefb5a34"],["/categories/深度学习/index.html","ca506f6c412dd53b42f5c7019a26ed8c"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","195f86116fc2e3f0fe1a5e29e554a3db"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","2ca28d93ba73335357a4d1b8c633dcde"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","d3647a3252d8248c734b03be35166907"],["/page/3/index.html","1a91e6eec83d54c157b2444303ff024a"],["/sw-register.js","3b5ff4b70c924a66ae5e4766ebcd0163"],["/tags/Golang/index.html","57251c791e68585e0c96179eb0c8a3f5"],["/tags/Go语言/index.html","6e9abe06dc369aca3d808b33efcd90aa"],["/tags/HuggingFace/index.html","b61b7834b790081cb2ccab73763de70a"],["/tags/LLM/index.html","ee997f971d453435e684c753483b5d11"],["/tags/Linux/index.html","e8b8a3deb7abadaa7b141edd9df2973b"],["/tags/MNIST/index.html","f8a1541c30d552259bcee5ae3ad94597"],["/tags/Mirai/index.html","7573269341411c613ab23e4a0fbdf633"],["/tags/NLP/index.html","f4c2d7eb120c99abbd57ace9fee9b51b"],["/tags/Pytorch/index.html","1dc58ca8e97338a54c722ead80dbde3a"],["/tags/css/index.html","2c7531a14f403ae2dde325fdf71426b0"],["/tags/html/index.html","664d75d926b8fa8a8e9ea54b4583ce4d"],["/tags/index.html","7e15766de5eb48dcf97126d30a874be6"],["/tags/前端/index.html","17243e316eb6e7a89bbcca90da35c254"],["/tags/大语言模型/index.html","83f2ec8a30fcd42d81f302e99310ae9b"],["/tags/张量/index.html","e5b0ec4fa5068cd8aa434aad2d125fd6"],["/tags/数据处理/index.html","27a5d2165d26269e7582275ea08ff6b3"],["/tags/测试文本/index.html","bd234003ed10c8440b0a7b78b3f7b00b"],["/tags/深度学习/index.html","a2ee96c6225916f3a96b363ef5756bc3"],["/tags/神经网络/index.html","076ed57418404a18f7be4f626f15ed1f"]];
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
