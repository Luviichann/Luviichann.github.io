/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","a1af41086c1bee9a617a90bdc685cd65"],["/2023/11/05/测试/index.html","809476ec59c37283445eccb73e063e1a"],["/2023/11/06/1tensors/index.html","f0542bb7573bcb13528ab8e9639b1f3d"],["/2023/11/06/blogs/index.html","4441a042155d8ddfaf5000b73fd8a57e"],["/2023/11/07/nn/index.html","d2bffca825464b5bd9154e316f105a99"],["/2023/11/10/MNIST/index.html","0712f6ce364ce54cdb5ce84659e74c44"],["/2023/11/10/datapr/index.html","6dbc0e8b7193fe01d422648475880527"],["/2023/11/12/css1/index.html","de01a8f848c27d6651ea3e34fb549384"],["/2023/11/13/css2/index.html","55879dda2ef544b6ab3130756a46c6f2"],["/2023/11/15/css3/index.html","c5821fdb298a70ad7f7766e895cf83e2"],["/2023/11/16/huggingface1/index.html","13cf09af4abb0eb1e38fe5c1875c719b"],["/2023/11/17/huggingface2/index.html","3c0f54196c7cde7649efe240165c357f"],["/2023/11/18/huggingface3/index.html","2cc21b1603bf83011db99cf0cc34201e"],["/2023/11/19/huggingface4/index.html","7738f3f836073bedd3d9ed5ab51c8cff"],["/2023/11/24/css4/index.html","ec9affaf925d24fa796575b60c7aa456"],["/2023/11/26/ssn1/index.html","42c6e56ac0173c1a9fccee178ccb5e2a"],["/2023/11/27/miraiqqbot/index.html","822f84db92b4990ee0647f96673f0e12"],["/2023/12/21/ssn2/index.html","b7830e6818757e97f1de33c842410dad"],["/2024/01/02/llm1/index.html","0fd2f611cf22f575a87f18af77abc8e2"],["/2024/01/20/go1/index.html","6a15af30eda806330bed27ee4341e242"],["/2024/02/02/zt1/index.html","1016e82ee889a94f80ad346f185b7f5e"],["/2024/02/04/go2/index.html","beda7d4078288cc1ec8b9dcda717612b"],["/2024/02/09/go3/index.html","cf461b2481fb1e4357e80d33577588f0"],["/2024/02/12/go4/index.html","4bac6382c87053a9ae96fb573f9317b8"],["/2024/02/17/go5/index.html","66653f47bf8442966601145611f18791"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","3123ad11234f231df5569da4ba01897c"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","353a2ce6dfaf2fb7b26062095c4a4ee4"],["/archives/2023/11/page/2/index.html","eebd949cb5bda2d677171134b4cf164a"],["/archives/2023/12/index.html","795738d520cb03e511097d67993682f1"],["/archives/2023/index.html","34f38933fd40c343082fc71f9021ca1c"],["/archives/2023/page/2/index.html","88bc3e38c983de380fcbe48956e800ae"],["/archives/2024/01/index.html","926cbc84b5247aa628d8bcc93e805930"],["/archives/2024/02/index.html","faace3bdd8a77d0cd11d4dc645290df0"],["/archives/2024/index.html","47d9de1471ff1dab8bdef19e569b85d7"],["/archives/index.html","78aa19d7d536eef2ed6019e15699d460"],["/archives/page/2/index.html","b80a51df8e7beaa48d579e4bdc1d77bd"],["/archives/page/3/index.html","335e5c7985ecb0135a3384377adf53e8"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","b0e28e167be91323dbb4101ebb15668b"],["/categories/HuggingFace-NLP/index.html","1e39b65267980fd31bca6a5dbf05baf0"],["/categories/index.html","97f1d119832a3c9c411c9e78065b1a3f"],["/categories/前端/index.html","f31ecd1f9abbd24b890c2698e74bb31b"],["/categories/对话系列/index.html","fe762ac6708db1828776907f7b00e99d"],["/categories/教程/index.html","1b654accd4a7ab5f5ffd9c8ef5d6a5b6"],["/categories/杂谈/index.html","da3184edc92bfee67e8316fdefcb9dd2"],["/categories/杂项/index.html","baf48f56f4798cb1e66aa3033e6f736b"],["/categories/测试文档/index.html","05cfc13e163dec012666a39993851e52"],["/categories/深度学习/index.html","aa190175161b8db9843adbcc2a49ba5e"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","7908671401db2eecf62ea51d31dfbdca"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","18cec73feb9d72b46410369c11557355"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","e6e761c80215185fa28a73e55980ef9d"],["/page/3/index.html","b7da64fb2c768a327bf69a5984f5ed0c"],["/sw-register.js","89e134cc94ff3b17f2ff419e25c34263"],["/tags/Gin框架/index.html","eff6aa9e6c8c720112da4911e93d8aee"],["/tags/Golang/index.html","21bc8a45f7d0a939bba94a5ea678b0d4"],["/tags/Gorm/index.html","1d54125c2f613197a1b1590b59ed2865"],["/tags/Go语言/index.html","062867961766eda6d9f326326223c0de"],["/tags/HuggingFace/index.html","a02698ee7575e6c90e9318cea834d1e4"],["/tags/LLM/index.html","81ad4d14ee84ebb8d70e0d6923fcc3e5"],["/tags/Linux/index.html","f5774e925bfd43f388723e850c313952"],["/tags/MNIST/index.html","240011f0aeeea99d18b60fd69876c80c"],["/tags/Mirai/index.html","ba7e603cbdbb0d7ae2a356deafe5bee0"],["/tags/NLP/index.html","994786951bcfb5248e236fe51149cc61"],["/tags/Pytorch/index.html","60f0535f64d5626c8169f78a7ba4b5bb"],["/tags/css/index.html","9c1b7fdf06c942035d5dabf1363ed3e8"],["/tags/html/index.html","0e918f4fe20c9024d22b4adb79cfae0c"],["/tags/index.html","c70dcd0ef5377077f9504e642c394215"],["/tags/前端/index.html","d21b2cd02988fc466df891df10ddde44"],["/tags/大语言模型/index.html","090e42b5b3d903541db4ad68e6b7ebd7"],["/tags/张量/index.html","380c1168534865f60bd892abf51b1234"],["/tags/数据处理/index.html","70d1915de2df71e9bd13139f186e20a3"],["/tags/数据库/index.html","2a40269502286d22c586fe55ca94be1c"],["/tags/测试文本/index.html","d63c0b4a11b229082e7c221bf5da24ea"],["/tags/深度学习/index.html","b7f2f10a051bae0371bccb8bf069dade"],["/tags/神经网络/index.html","2dec084a6d707ac1d5129154bb62c975"]];
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
