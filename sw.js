/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","3432457fd7ec59962db61082ee3c7b2b"],["/2023/11/05/测试/index.html","d3b9a35586aca47d95983dacb7143433"],["/2023/11/06/1tensors/index.html","b820645fe46c1403ede4a45800116d31"],["/2023/11/06/blogs/index.html","7d5d9b05403c347b46e5524db85bc7c3"],["/2023/11/07/nn/index.html","ff506b6a80d0bb1ff2229f17fa089585"],["/2023/11/10/MNIST/index.html","21534d86a6a4f1a923331a8bc82d8d7e"],["/2023/11/10/datapr/index.html","3dd62c0a27a17a9b13d9dc0aeb46096d"],["/2023/11/12/css1/index.html","2cba6f1de99de0e697ef11c57fadf260"],["/2023/11/13/css2/index.html","bc500fb2a55dca1681834877d1424699"],["/2023/11/15/css3/index.html","98dc569463695a745c73daf21fc33004"],["/2023/11/16/huggingface1/index.html","9419ff826cf6fd3b55f2ac856f2b05f3"],["/2023/11/17/huggingface2/index.html","426492bae0d41d0a58f3430dac327f26"],["/2023/11/18/huggingface3/index.html","a307cdd700b966a993d34e5fd28454de"],["/2023/11/19/huggingface4/index.html","17ea2e61f9c0136c5888615ea8e18a50"],["/2023/11/24/css4/index.html","cf7979e15acec3b8c6e6f16443fb5504"],["/2023/11/26/ssn1/index.html","f3241698627e2bc3461919e14344c020"],["/2023/11/27/miraiqqbot/index.html","7663b18188399357c7dc3ccb0e5cefe1"],["/2023/12/21/ssn2/index.html","7b7e194816448b2c0cd1f81113a3a6f5"],["/2024/01/02/llm1/index.html","e8c8c0453cc0323acf3613df69490ba0"],["/2024/01/20/go1/index.html","c2ec0120ba71ec2038996e23cd9321ed"],["/2024/02/02/zt1/index.html","249dc83e02a80c664aa1a5e084d0b644"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","95f9fe1280a14e00cdd9df40cf677a0e"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","dfbc8ff52998523a45ab9dacb9678a76"],["/archives/2023/11/page/2/index.html","757d3fbbcb678b0343cc35144ce89822"],["/archives/2023/12/index.html","f0256747f6eb71704035a0877b064377"],["/archives/2023/index.html","e6dcc9525a841a2706821cbd635605ed"],["/archives/2023/page/2/index.html","4ce9a9eba03592f328d8b10594609630"],["/archives/2024/01/index.html","d03ab9d2ef623507e02c349611ce8e35"],["/archives/2024/02/index.html","baf2bd331b5580ea6758aeb523c7fa2c"],["/archives/2024/index.html","13d27a6b51ff7507f925803b27fe97c9"],["/archives/index.html","5e8f7a20d351e1d710581f52e85460e2"],["/archives/page/2/index.html","a529e9d928173c5d2b56731862505d9a"],["/archives/page/3/index.html","9e2ccf361880d162a41a2e9ce2647d07"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","2c1e7e660f85432439408778b503c351"],["/categories/HuggingFace-NLP/index.html","ddf2925b284f44e22028ee91697a4707"],["/categories/index.html","0e8770befaff24b7e0b9f7a552adf676"],["/categories/前端/index.html","17cd68ac63890d339bd10f23fb8d577c"],["/categories/对话系列/index.html","e38b9b882ea069efc415b232d0fe2d40"],["/categories/教程/index.html","0e7f42aa0b8d53cd8a3bf3d8301ab859"],["/categories/杂谈/index.html","83caaa1f8b820801a39a0396d3f356d4"],["/categories/杂项/index.html","8ad43c1c33cbbe882ac310410fa2c8c3"],["/categories/测试文档/index.html","10de452fdf6750ea31d4a2c247bb00ee"],["/categories/深度学习/index.html","c9405a3c4301e56fce37729e6dc54f17"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","dadece2396e8a301a3abc431fa8d0190"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","a40eb567e7940c0322dedb3d3aafe4c3"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","ccd751983c81eee32b0676d9802dab36"],["/page/3/index.html","2f1644b5a559a4dd27950e33bca65296"],["/sw-register.js","12b70b7afba4c54c1787d419d42b903f"],["/tags/Golang/index.html","6e034626127838fd355e41abc147dd25"],["/tags/Go语言/index.html","07ff911ecd6d2bd323de710ed42f1efe"],["/tags/HuggingFace/index.html","82af8a8b17c30a51b28dab6ccb43b8be"],["/tags/LLM/index.html","0067320330e708ce1d7447d41346261c"],["/tags/Linux/index.html","72e70339cb2874b76a0719b405efcc36"],["/tags/MNIST/index.html","b9a510dc36e804fad270fe9efc09d2b8"],["/tags/Mirai/index.html","b13cfbd217e2afd481662ade340f82de"],["/tags/NLP/index.html","8a59861b5e453714d24c8c9b877eb887"],["/tags/Pytorch/index.html","68921732a0f0f94f33dc074272035d72"],["/tags/css/index.html","472655bc0fc7937870bc47ebd20c2314"],["/tags/html/index.html","12e3534525abb5b11e12dcdfa048909d"],["/tags/index.html","14dcb341758bb8c578999b66f256919c"],["/tags/前端/index.html","b35d463004f62873cad13daac2b26408"],["/tags/大语言模型/index.html","f875001a8935fb9b4292b9e49c8f97bc"],["/tags/张量/index.html","79c4250952db9804bdf32cf5f607fc43"],["/tags/数据处理/index.html","34c582a1859cc8f95b0e40013bb66e61"],["/tags/测试文本/index.html","3283f562149b9f7b56d3f04b334ed522"],["/tags/深度学习/index.html","441282517e13b8df6a29fc31036a5d68"],["/tags/神经网络/index.html","46d6c1501119d8c080a8abd21bc3babb"]];
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
