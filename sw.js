/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","07084dc3da0aa5f4b4ac3128cdbc6312"],["/2023/11/05/测试/index.html","37e83dc111d16bd2225c2a44fd89cc15"],["/2023/11/06/1tensors/index.html","e6596bd14101df23bfea490f4b6ecb48"],["/2023/11/06/blogs/index.html","0f91049d2eddd8d9ee6177ccab538635"],["/2023/11/07/nn/index.html","e40812c52de3891758b18d89409444e5"],["/2023/11/10/MNIST/index.html","b0fcee6c441521809d3da6ab38d558c6"],["/2023/11/10/datapr/index.html","f486c8ac0f9cbee7582a0bf85e9f3d54"],["/2023/11/12/css1/index.html","676e1375b630f63a6c665b3b79d4e909"],["/2023/11/13/css2/index.html","8fddc16b4b577fe90c71fec1dc6cacd6"],["/2023/11/15/css3/index.html","5680c674768d1802d52a8f31e413df9f"],["/2023/11/16/huggingface1/index.html","40aae7fa350ce788a8bbabb9dde6fe2d"],["/2023/11/17/huggingface2/index.html","256cdc147da01b8f90e3c01b5c94710b"],["/2023/11/18/huggingface3/index.html","f2e3d005e6e398e7f26ecf5080bbb79c"],["/2023/11/19/huggingface4/index.html","65c8e176e36102dec162347aa1f3a4f7"],["/2023/11/24/css4/index.html","94a53dc0d7f74105106ca525b8ee7bc9"],["/2023/11/26/ssn1/index.html","1963b2ae5cec0a8200a619ade895bee9"],["/2023/11/27/miraiqqbot/index.html","fe317ec4e3098a5de03b7d9400044b13"],["/2023/12/21/ssn2/index.html","a9341809132892b6d71395f3837e26bb"],["/2024/01/02/llm1/index.html","e4d3903023166b9048a7e88c59822144"],["/2024/01/20/go1/index.html","be1ddfaa5875d17f7e36f770e1fcb60b"],["/2024/02/02/zt1/index.html","aad04b563075c5c50caa5b97e27f8bb7"],["/2024/02/04/go2/index.html","0a79b79731be0513b154935871d10f62"],["/2024/02/09/go3/index.html","1eaabc89f87325d525fb11504bc7f04a"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","98b5a55460ec581c1bd376c107b74b64"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","23028b0f797394bf14201880170e942f"],["/archives/2023/11/page/2/index.html","af1cc2091dbffd938234057d8cc256fd"],["/archives/2023/12/index.html","703e65aa5f85b7b842c54191eae58bed"],["/archives/2023/index.html","30e6520396d54439dd523b659ca2bfab"],["/archives/2023/page/2/index.html","9170f91fa9bf0784acb97c76294aef71"],["/archives/2024/01/index.html","a01d68bcb8a4f5bad96fdab1d11d85c7"],["/archives/2024/02/index.html","32e17ce249e6968672d3bf0ed9436484"],["/archives/2024/index.html","67b433f28a2dae88491a80a0205f71e6"],["/archives/index.html","77b0ba06611ea6f2789e8ccaeca11642"],["/archives/page/2/index.html","26051a46ed79390ad3b5409c54ad704d"],["/archives/page/3/index.html","1c92fc3df0c309a3c04a53c9deaf4d81"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","e6c131192bc5f206e37a5ed856a6128f"],["/categories/HuggingFace-NLP/index.html","7f9f9c3ed52ed39c94a6d6ba7d77096e"],["/categories/index.html","7ce8ce17e9cfc0552851fee7b951cc5e"],["/categories/前端/index.html","1502ee9ce6dc15552d1b7e7d89ceb3ac"],["/categories/对话系列/index.html","3eca363e5fe92909bad376112fa4f042"],["/categories/教程/index.html","df10905cf242c796722ae5625d1b6d39"],["/categories/杂谈/index.html","b758ecc315ea526f8751909666756fac"],["/categories/杂项/index.html","d0c961472285f9b9bf44077d199d2a2c"],["/categories/测试文档/index.html","d695de274dc1ba9eef76bebeac1f6440"],["/categories/深度学习/index.html","f8762729b47197bb999b48772b0e53e3"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","87f47ce2e8f0a9556b90b29d1b05d352"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","e3c9e6a0b2b29f1bac4fa29fbe158227"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","c9065a0efffefca4abe09e88f335e005"],["/page/3/index.html","095c0793e9a95e192bb5a7ab76cf10e1"],["/sw-register.js","36275346bad08051a68ebcf9176e122a"],["/tags/Gin框架/index.html","e6cbae80a3dee0e0e185ac18c0f10fb6"],["/tags/Golang/index.html","ae892dc993e9424bbb615aa3ef48f003"],["/tags/Go语言/index.html","ad4acc8c3acb520eaa7f9fd6a370aa6a"],["/tags/HuggingFace/index.html","d7cfb13cb1ba681bc743fbaf817fcdd5"],["/tags/LLM/index.html","e5155282548025650697d65bda39d8a3"],["/tags/Linux/index.html","1efe44aadd9c96ace3aea832e808d3ae"],["/tags/MNIST/index.html","7a8e0df6819c7ec0d4e5474947e32ec5"],["/tags/Mirai/index.html","a48047ce28c3d13e5634b74d73c3d25f"],["/tags/NLP/index.html","6156d63033797f7a09bf3249d28be27d"],["/tags/Pytorch/index.html","8d2288a7273f97a513d0ec9a513b8b50"],["/tags/css/index.html","3d5cf0aa536aa0aa1f34f541ba89169c"],["/tags/html/index.html","2bc2bd93e37e2535b622c19673fce8e9"],["/tags/index.html","618d1f4c5cba030434b3c4595f375d0d"],["/tags/前端/index.html","5d5cb0ad1349baa97b902d62517ab0d8"],["/tags/大语言模型/index.html","7f9c61fbf5282764fd30aa083d30b458"],["/tags/张量/index.html","74b94e6671dbde20b0cf5ef631f22ff0"],["/tags/数据处理/index.html","63ceb04e76f317e5517af25e6fdf18e6"],["/tags/测试文本/index.html","142b4b1e8d71ed6fa3da4b10dfc0267d"],["/tags/深度学习/index.html","134d93884ecc8ddd507201eea1413c1a"],["/tags/神经网络/index.html","bb798b38515d981edf029514aec18834"]];
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
