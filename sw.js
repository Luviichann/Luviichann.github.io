/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","374e3996331f723f3e6680539ec10014"],["/2023/11/05/测试/index.html","2a9691518e477f7e9dd9d73d87b672ce"],["/2023/11/06/1tensors/index.html","90342c6210d9fa2a4a69d8a1aa9bfda2"],["/2023/11/06/blogs/index.html","8eb0679411d68c435440b76996f63fb8"],["/2023/11/07/nn/index.html","5df5251a4a2d48b53e91886dba1914cf"],["/2023/11/10/MNIST/index.html","c53f74b0d9653df9d7888eb80e876a56"],["/2023/11/10/datapr/index.html","ba0868a0ed13298ecb93b8ad1a27f6b6"],["/2023/11/12/css1/index.html","448a363b17b35bbea5cdd94469aca5ee"],["/2023/11/13/css2/index.html","63c3c6fb41f3fdcbec256578478b4ff8"],["/2023/11/15/css3/index.html","e409ed92768e37f8fd11f1a7539ca2cf"],["/2023/11/16/huggingface1/index.html","0275338f490677c844956e33d921d832"],["/2023/11/17/huggingface2/index.html","bcb6e8745a6c08b786012531a481c286"],["/2023/11/18/huggingface3/index.html","963e592b4a37a301d3b5590fe45acad0"],["/2023/11/19/huggingface4/index.html","84ba7db3db5953bd31ebfbdbffc94d43"],["/2023/11/24/css4/index.html","5df24ad5376c6db5e2f4798e3a5d5dc9"],["/2023/11/26/ssn1/index.html","6663fb6761268d898d49ca780090b689"],["/2023/11/27/miraiqqbot/index.html","14ae5248dd2c2a0b76f31b056bac2da3"],["/2023/12/21/ssn2/index.html","27bd15ea19a5f98e6de056dfbf70d1e6"],["/2024/01/02/llm1/index.html","cf447d31114e0d1a510d75979688a2db"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","136860b2294c2b4361baaa986824082b"],["/archives/2023/11/index.html","395247ddbb23ec50d2498f7bc9b42a0b"],["/archives/2023/11/page/2/index.html","3101bc6923dde71b6649e68ac0ccd793"],["/archives/2023/12/index.html","85e73ff5724e42e9fa0c4e4751522005"],["/archives/2023/index.html","4b9cce64d5e1df3810c0dc553626806c"],["/archives/2023/page/2/index.html","6cf4accae437386024da3a2bb05173ac"],["/archives/2024/01/index.html","c4cfd6cd9fff615416983f5f68275b23"],["/archives/2024/index.html","3e63ca78e7bc4f8c627f57bc105fb0ce"],["/archives/index.html","a3ce412efd5465fd268a4110fa699cb9"],["/archives/page/2/index.html","8050e2d7186ebf11fa64654125a6a406"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/HuggingFace-NLP/index.html","87087e16ce49eb0280089dfea1c584a1"],["/categories/index.html","7f373107466a2eee4a541da49b888f70"],["/categories/前端/index.html","a67aad79ea920be30a0da7752a7f6f11"],["/categories/对话系列/index.html","526b38121bb3e00ed6e6a53a876f078c"],["/categories/教程/index.html","b6e98901af0165c34ab0b1ef23361cda"],["/categories/杂项/index.html","d6c92adc230ef5e4a9de5c3c8ed18006"],["/categories/测试文档/index.html","9b023999a1d89318daebbff8e962c128"],["/categories/深度学习/index.html","dd941cd586ffe60b2aaf93c0dc42bf1c"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","fd8f640fc614b8c075a2f052673e9a3c"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","c27e2cf4a9193f324532c36336bda439"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","93af181e57d91f82c02217ae71420f50"],["/sw-register.js","1f0dbb28e68eb8aeaa7399bd7e5f8701"],["/tags/HuggingFace/index.html","03aad5d7f2bf567aba668d5b998487e8"],["/tags/LLM/index.html","02e48a840245553fa82b6805d3b13d09"],["/tags/Linux/index.html","fc0e5be2ae7d788da1b67b8fd9de1683"],["/tags/MNIST/index.html","78935ec5e33f25fb409b3f082804967f"],["/tags/Mirai/index.html","726dfb801d3a13a0fc30653f2ce41080"],["/tags/NLP/index.html","b60cb8c71a3b3f46d4d01a6209430b6f"],["/tags/Pytorch/index.html","d187e643d83440ffa33d9656c6650174"],["/tags/css/index.html","8cd640861a20a6b5e852446b22c11139"],["/tags/html/index.html","43efad7cd48195ceea361982a9ef0dfa"],["/tags/index.html","165cb9347be53f9c6def0f87785ff60d"],["/tags/前端/index.html","a3f309f92fba62f27cd2d717a9ef6206"],["/tags/大语言模型/index.html","9cfe43f8d67a1defa0a2c18f83ca9266"],["/tags/张量/index.html","151d1c5ffea6db4da97adeb6fd902d67"],["/tags/数据处理/index.html","1a3b978b83b31c38330c623a1c742ca2"],["/tags/测试文本/index.html","ea539519889851e94e9370c0fffb9bf8"],["/tags/深度学习/index.html","8b52f7efb99fbf0c134988f50523d9a6"],["/tags/神经网络/index.html","56503275f5f420dcf7907c7645b1962e"]];
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
