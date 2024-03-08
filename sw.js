/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","29739916e94b37bead45d6d576e0cb58"],["/2023/11/05/测试/index.html","2e530d8864dd0c49bef01ffb97780e31"],["/2023/11/06/1tensors/index.html","8f2d944f1fb83796025470ed705e5b1d"],["/2023/11/06/blogs/index.html","687b34f63b30d5bdb62977e1088916d5"],["/2023/11/07/nn/index.html","b0dced3276527b2e251805fcb7d544e1"],["/2023/11/10/MNIST/index.html","16d872d389383c4a0e4f84ad9a7fe115"],["/2023/11/10/datapr/index.html","7b57ba9c05fba4d3ad1aa98207bec767"],["/2023/11/12/css1/index.html","f17aa911a4a9488f6b8fea999ada37b6"],["/2023/11/13/css2/index.html","201c9e728cadf39fcdcd483a2ba2cf26"],["/2023/11/15/css3/index.html","58f90752ef308f1b79dc387717a71307"],["/2023/11/16/huggingface1/index.html","361c96eebce3786ef86b9389d8621007"],["/2023/11/17/huggingface2/index.html","0cf3e93dd55851543dbc4cb79033e191"],["/2023/11/18/huggingface3/index.html","a1459b587cd69eea5961f822df4a6a47"],["/2023/11/19/huggingface4/index.html","c619c884f817b805a5ff92404d202d91"],["/2023/11/24/css4/index.html","67ad101551a392d6f5156025d594ba44"],["/2023/11/26/ssn1/index.html","352cae4994f3e49ba94db0763d33e0d8"],["/2023/11/27/miraiqqbot/index.html","1e05f99ca048fb6189c4790a66004c34"],["/2023/12/21/ssn2/index.html","00d4f3e085d77d27b9d8a3120bf414be"],["/2024/01/02/llm1/index.html","d9ebe61f3ba00df71b905e3d9a7614ef"],["/2024/01/20/go1/index.html","5819ac9966f70b76cbfdb54e347d1c4c"],["/2024/02/02/zt1/index.html","c6973134604ac43e45a8eeac6e4219a4"],["/2024/02/04/go2/index.html","b99d8f1505e2fce59aeef7b6495aadbe"],["/2024/02/09/go3/index.html","5ce17e4d125e2023b6b8f707069b549d"],["/2024/02/12/go4/index.html","4d64cb95221007880bcd7c4811523d27"],["/2024/02/17/go5/index.html","697ad529019525fd5343c0494dc49743"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","ca6646ca7b7d30f4beb32caa090e81dc"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","c9b4c49dcdb19eb6e9a71e0824853fd3"],["/archives/2023/11/page/2/index.html","c10478958842aa392faa06cfdccc43db"],["/archives/2023/12/index.html","ab3e947940f87e3a4d285b786f37e235"],["/archives/2023/index.html","3bcf325df20e61df2752aaaa29929610"],["/archives/2023/page/2/index.html","72f7dff6d12b249e2071d2c0740059a9"],["/archives/2024/01/index.html","79ba7370ce06fd6fe957d21792a04c0a"],["/archives/2024/02/index.html","a7cb39a9ac8f7b554a69068d7b938a37"],["/archives/2024/index.html","0762c73b126874561134c146d7fa5b7f"],["/archives/index.html","d067f8af3ec1b6026a46a24733d8fa2d"],["/archives/page/2/index.html","c474191e553c9e575c5c5b00a0be1710"],["/archives/page/3/index.html","4beccb818459063ae7b8b8044522833b"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","de49ca19675531b5aa38a1858c220b08"],["/categories/HuggingFace-NLP/index.html","19ebbf33bec54e8801be09e87a82f527"],["/categories/index.html","ba1a443affd2376e18f8ca43a64fb02a"],["/categories/前端/index.html","096a3b289742d6daf5021e4856d71353"],["/categories/对话系列/index.html","8b0ae8706135502be088258b9fc04c00"],["/categories/教程/index.html","833a3dc5cab1494150069644adeea5f2"],["/categories/杂谈/index.html","fa5b9568a1aeb55984948b9e7dea8df4"],["/categories/杂项/index.html","f28b9c24eda9c9cc99d729e341efa7d4"],["/categories/测试文档/index.html","8c628eb344aeb2cf23c3ca799452889c"],["/categories/深度学习/index.html","569e0b2990772412fc0f30530568bf90"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","461dba13f13cae2748066a1265dd60c9"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","103aa6866f2401c00f8f12accf7db64f"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","c9ff6b0904e1c244106da1e529973ddd"],["/page/3/index.html","e112dedff5df5b9f99a8601afb51c016"],["/sw-register.js","0b8f200a6a0ea348461d0c98c7db10a0"],["/tags/Gin框架/index.html","469918ac9a76cabda92bf52a019abd13"],["/tags/Golang/index.html","a65d2d92d83c080b80ee9c383de08931"],["/tags/Gorm/index.html","49e89df230d470a58efc5b73160fd0db"],["/tags/Go语言/index.html","672d3d55ba62b55aa55026781d7c4550"],["/tags/HuggingFace/index.html","364439db3c167b183d266d69081b0e51"],["/tags/LLM/index.html","832829d414fef5494b1e3fc68f79734f"],["/tags/Linux/index.html","dd4083689e6ec02258f5e01256d22611"],["/tags/MNIST/index.html","732ed3904a98e3aaf5ed52cb4b453dff"],["/tags/Mirai/index.html","cb5a9d1d1d476c29a592f57badf24ba9"],["/tags/NLP/index.html","da69e7da9a36126ba785d86f90bf1fca"],["/tags/Pytorch/index.html","177914154069019acc518249014cde1f"],["/tags/css/index.html","53d5bbebfed12725f68b4341c4a49d55"],["/tags/html/index.html","746d1b6bf70f32c8d7cfb57d95340459"],["/tags/index.html","39cf995b2e08feb08fa9597f2310af89"],["/tags/前端/index.html","fa7fc0c63cd490ecb61e703187b532ed"],["/tags/大语言模型/index.html","1f5bd4ae21c6a4ab18b8f5584b4c446a"],["/tags/张量/index.html","5784449414ecf5523811f6f3cfcc6dfb"],["/tags/数据处理/index.html","b56c36b658dc6c6410b35bd9a44f5b57"],["/tags/数据库/index.html","37f75bf956d98a1edb2e18a3b28b2039"],["/tags/测试文本/index.html","32302cdfa3a9c091fb461cdb834bf745"],["/tags/深度学习/index.html","4e18457aa1e256d6aa4e44ffadcc9c5d"],["/tags/神经网络/index.html","0318c225fa0b65e83566867bf9169bf1"]];
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
