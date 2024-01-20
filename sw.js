/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","bcba8d841275f8c593beacf9cd5a031c"],["/2023/11/05/测试/index.html","72ff7e349a8a0fd9fb5023c46fd38d6a"],["/2023/11/06/1tensors/index.html","7275b9a0847a85f2dd099c05c760c83e"],["/2023/11/06/blogs/index.html","26d28e9e1dfff1222858ed609ffa6736"],["/2023/11/07/nn/index.html","05a1ce82186063ee40c4cdd75fafade2"],["/2023/11/10/MNIST/index.html","55b5497562a8247ece2f915bb765931f"],["/2023/11/10/datapr/index.html","8411a0d64a74bfab7d865f26c2d27784"],["/2023/11/12/css1/index.html","e801d197340094b70bb89748652caa1a"],["/2023/11/13/css2/index.html","b1651c66d5b0c4b079cd606d0c4818b9"],["/2023/11/15/css3/index.html","79f5ef857cfc06c3caa66d2cfef12bf8"],["/2023/11/16/huggingface1/index.html","2236c69c287d809ebd6b3071e570321f"],["/2023/11/17/huggingface2/index.html","1a97770b2692e2e94371167b99c816c7"],["/2023/11/18/huggingface3/index.html","a01c51f17ca2c084c7df8c8749b9b03a"],["/2023/11/19/huggingface4/index.html","28739881d9c7613217acf12e816dca83"],["/2023/11/24/css4/index.html","d8902b750c7d49bd8aad9a75ee993d5d"],["/2023/11/26/ssn1/index.html","2a36c81544553f8123353b1c1afc7193"],["/2023/11/27/miraiqqbot/index.html","97c1fde07eba90dabde4d6dc5775ac01"],["/2023/12/21/ssn2/index.html","a2492c335006af796a0a0492ca9b3871"],["/2024/01/02/llm1/index.html","d9acc23efe553a3a19c75d0364653f09"],["/2024/01/02/ssn3/index.html","f4e779416c7c6ec25c54d6470a46c728"],["/2024/01/20/go1/index.html","b0b4c263f14a901d1bafeec20f3e1293"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","8a76266c290dddc1b20a34931c07e152"],["/archives/2023/11/index.html","051925c425d325818fd01dc7390838ad"],["/archives/2023/11/page/2/index.html","4f948842bb8dba570158bbfd14633056"],["/archives/2023/12/index.html","bf8394e3b0d53ec0963407c282085f6c"],["/archives/2023/index.html","dc35f3541bfa23ecdb05e0264ebf34d7"],["/archives/2023/page/2/index.html","3a75bcc1e4cf22d4f4b788631ff820e3"],["/archives/2024/01/index.html","c8a909e4ac3560e116029dd90b052979"],["/archives/2024/index.html","344b3afbc3c6cffa48d99f9caf6d3291"],["/archives/index.html","76362bfe277fbb21c3d78df4c463d342"],["/archives/page/2/index.html","aa2b6b73707054cf7b5504dcb71c8e48"],["/archives/page/3/index.html","f244ab9de4179d2287cbe6ca16afdfbb"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","95c80a114fed743bca383f8d8eb5a1b8"],["/categories/HuggingFace-NLP/index.html","7fc77883adde98b036a0aa9721715a00"],["/categories/index.html","418dd7e2892a944e69a14c83e492ccd9"],["/categories/前端/index.html","e78a10b7df3de3fe9650ac495f897816"],["/categories/对话系列/index.html","c0c68988645ada3150fa7c9861a05787"],["/categories/教程/index.html","4a640e8263ba2506ecfcf7564c7664df"],["/categories/杂项/index.html","ea1b1dd5e26aad2be7269536ad2f5414"],["/categories/测试文档/index.html","6f57f6db03b94dfc4ae5eb02400ab366"],["/categories/深度学习/index.html","4031d22df90923bc5d5eb2ca4d6e7c92"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","0b4cae13ea038eee501ae7f70e6d9941"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","2ca28d93ba73335357a4d1b8c633dcde"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","029cb51fcac29921ef5710aa2fc22390"],["/page/3/index.html","1a91e6eec83d54c157b2444303ff024a"],["/sw-register.js","a3e2aee3e252d237536a2fad2f9b2e8a"],["/tags/Golang/index.html","a67b58ea49862610f1c7d403f4d08ed7"],["/tags/Go语言/index.html","3d20a4e77ac654ad8d40d06c434bd9ab"],["/tags/HuggingFace/index.html","05a0e1946ccb18761916385922a2c1bb"],["/tags/LLM/index.html","b2476c607a3c504cb9dd8f3489c397d9"],["/tags/Linux/index.html","c742777a72b893b23a2cdf6abb321254"],["/tags/MNIST/index.html","c8d5e978bc5610a5accfcc36757115e4"],["/tags/Mirai/index.html","a9a8e2e049cba8ea696919161410bc94"],["/tags/NLP/index.html","71c96b13dcaa0f30f7bd510fa14f7b84"],["/tags/Pytorch/index.html","fdd4c0285d954ea3f39b80e24ba24d04"],["/tags/css/index.html","74efdea311a848505be6aefe34554944"],["/tags/html/index.html","9cbb73feab0052cf4bbab34a8842aef5"],["/tags/index.html","470b71f0188b41a3cb46756214e2bef1"],["/tags/前端/index.html","8f5b0be12de0d5e8ae242175a6671474"],["/tags/大语言模型/index.html","a670770ba4737e35a345fc1805a5585e"],["/tags/张量/index.html","d973e73ee89b6297a8573d679f375ce3"],["/tags/数据处理/index.html","a94a545353e8df468d2dc05cb4ec7fe5"],["/tags/测试文本/index.html","5f4645e91891577abce7ca497a39dabb"],["/tags/深度学习/index.html","e0da8f34c7ff577490d7d1c6fc261500"],["/tags/神经网络/index.html","5e70d80acb0f1a8763afe0f6bfbed78c"]];
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
