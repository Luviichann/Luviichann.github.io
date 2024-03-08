/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","90161b61ed27b571c4b4bd0b13e836a0"],["/2023/11/05/测试/index.html","c5b55fc7a665a7d8eb09fa46df2df60f"],["/2023/11/06/1tensors/index.html","5f5b2f8e0565c7d316b2fa1d4c198bfe"],["/2023/11/06/blogs/index.html","4c65bd432e33fb47de58df6f261214f4"],["/2023/11/07/nn/index.html","2fc146a5a664baaf8c0436ae213a62b1"],["/2023/11/10/MNIST/index.html","7216e5cf62caa042a88bdcc3bde46f72"],["/2023/11/10/datapr/index.html","c2146ebca3264a3c26c5a022df807c34"],["/2023/11/12/css1/index.html","6131d7fdb18e7c96108b7acf58590124"],["/2023/11/13/css2/index.html","a7f7a8d9702e25e9630f81f16e255979"],["/2023/11/15/css3/index.html","23e7b83f10d23d4268c5ca7d2378fdd9"],["/2023/11/16/huggingface1/index.html","c376b7f16439bc075cb5603c9e67829c"],["/2023/11/17/huggingface2/index.html","cbc98abc1545ffb27a3f1ef057b0f1ee"],["/2023/11/18/huggingface3/index.html","98491c2934558d3f2a8d19dc9913bb80"],["/2023/11/19/huggingface4/index.html","632fd9445020f94bac3067a39d7b7322"],["/2023/11/24/css4/index.html","6cc4b6c1a757ed7cce814a855acddd0f"],["/2023/11/26/ssn1/index.html","82de9410d6c3b881b5921e9ccaf2bc0d"],["/2023/11/27/miraiqqbot/index.html","4232a0dd6c55734fabf6de16b1e007b0"],["/2023/12/21/ssn2/index.html","b461d0ad1ad10635d06b61265b0ca66d"],["/2024/01/02/llm1/index.html","d5b99678b610e905fca733531c036335"],["/2024/01/20/go1/index.html","64c31375f9200c0b0e4fbab0e50e1411"],["/2024/02/02/zt1/index.html","a2a3364f277e08e8f5d74901b27e7262"],["/2024/02/04/go2/index.html","2218dd40d23aefe4345c3090f967b3a4"],["/2024/02/09/go3/index.html","8988cfc02a2b51217aa675f282f29998"],["/2024/02/12/go4/index.html","955535f98930a5885a0ad9d7d51d5326"],["/2024/02/17/go5/index.html","c7112cf7578349baf2fd2ef71d1a7884"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","d843b8d4da927e7e739a83b9f12cd422"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","58fccd8e8789f38ad4d31571461184c2"],["/archives/2023/11/page/2/index.html","8034df18c4a7e86655c6cfa3c4153d25"],["/archives/2023/12/index.html","4748beaf479ba4ece63138460bf0a672"],["/archives/2023/index.html","15c35c4b74d8e1c8e8e88eed37418fd5"],["/archives/2023/page/2/index.html","b54cda8ef6d166d8926ab424932a039e"],["/archives/2024/01/index.html","cf1ae7169eabde08f3ccf7a90979b4bc"],["/archives/2024/02/index.html","8ceaecd5e70cf80955906629bb633dea"],["/archives/2024/index.html","3b042a841ef7790e80fa04571f389f14"],["/archives/index.html","2be248a39f2290bb0eaddc355ff29d41"],["/archives/page/2/index.html","11628cd83fbde46f383a44f45d6b9570"],["/archives/page/3/index.html","6a65a389d52f0344fefeb36d7c60164a"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","bb87e52b980a150dbba759ec09030282"],["/categories/HuggingFace-NLP/index.html","d3b54d6604f3ed2720f032c0935340d9"],["/categories/index.html","c7bd700f83cfd0bfebb8250193659452"],["/categories/前端/index.html","8bc2fa73dc23946d4dc7adbb042ff40e"],["/categories/对话系列/index.html","d1c1fa5c77038e44fbc5f49ece8caf8c"],["/categories/教程/index.html","60c9aae3eba1b64b6dd6ae5090151a64"],["/categories/杂谈/index.html","8fe4b7618725771c15f1a24f919b3991"],["/categories/杂项/index.html","88652408a296fb9f6c6c267858ec9f6e"],["/categories/测试文档/index.html","0a5577b64989751b4aa619f7506ef456"],["/categories/深度学习/index.html","df6e56e67f5812debee31292f2dba98a"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","3967b633e650ba668aa042ed861c64c5"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","103aa6866f2401c00f8f12accf7db64f"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","c9ff6b0904e1c244106da1e529973ddd"],["/page/3/index.html","e112dedff5df5b9f99a8601afb51c016"],["/sw-register.js","7eb0624da97fc4a3680fffd7dcae3d9e"],["/tags/Gin框架/index.html","6ca5b3cec3bbe6602514946f8df06725"],["/tags/Golang/index.html","ee66f3d48202d4fb46f4c3cd5e613997"],["/tags/Gorm/index.html","4e904c5896100ea43bf1e903368d88bd"],["/tags/Go语言/index.html","37502733aa2588b40eea6a62e02552ac"],["/tags/HuggingFace/index.html","5100013c9c0fa611c9828e8ef28f8545"],["/tags/LLM/index.html","5eb28b59694d96fb6282e7e75c81390f"],["/tags/Linux/index.html","322ec7d9cf63ef05c4ecbad34b5def58"],["/tags/MNIST/index.html","07de8d860f956c2ebe5b495e310c083f"],["/tags/Mirai/index.html","c77a48e9189cd2cf1adab71a4fbb896e"],["/tags/NLP/index.html","2944203467bbd6b372ffc0198cd9715c"],["/tags/Pytorch/index.html","b84f3d0ddf6537f08201bb4400375b6f"],["/tags/css/index.html","d8f0021a0df94e9600d362bcb08323eb"],["/tags/html/index.html","9ae12ec29b2897737120fc51d5521e4d"],["/tags/index.html","132e39b3768d97240896855be39af0ca"],["/tags/前端/index.html","558bc038899c6de671ad462c7b7b915a"],["/tags/大语言模型/index.html","0c580739d15fc06eb603ffd64fab06c1"],["/tags/张量/index.html","a6d5679cf21d5370c1408d065634920c"],["/tags/数据处理/index.html","6888ee7538612dce785d02620c2a239c"],["/tags/数据库/index.html","f0fbdc93365a999a03e3afecf0461a29"],["/tags/测试文本/index.html","2e94a8df7ec884022273b5b4c53cc7e8"],["/tags/深度学习/index.html","9ccfe9684a74434e03902730ce5dc66e"],["/tags/神经网络/index.html","df14b0f21f009a9025bac026d6d3c6c3"]];
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
