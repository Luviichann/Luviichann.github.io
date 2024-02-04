/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","8356076df728272b897d2dff47679cfe"],["/2023/11/05/测试/index.html","14a6dce6689f5fb48e0d93fc2782efa9"],["/2023/11/06/1tensors/index.html","e0d192df3be7f200c480ba78f0a6e9cb"],["/2023/11/06/blogs/index.html","e839351c72223e727d51aafe2d2061ba"],["/2023/11/07/nn/index.html","b2babfca4f24a545ac9aa24e0af23c08"],["/2023/11/10/MNIST/index.html","4428ab3626c603c3454781b0a9b0f004"],["/2023/11/10/datapr/index.html","1a4c8bd7da158920c4ef0d7a0470c5eb"],["/2023/11/12/css1/index.html","ff5d77d480a9aae81ff98e627beed0d7"],["/2023/11/13/css2/index.html","8b06df01ca1abaa3155c5141f76b55b9"],["/2023/11/15/css3/index.html","6f76cb43a74eec4c39c5a41029ddb5a2"],["/2023/11/16/huggingface1/index.html","45e43df8faf348b832d45a3a78a23b4d"],["/2023/11/17/huggingface2/index.html","a50b89370a52a4a87e35e0f2429ac0ed"],["/2023/11/18/huggingface3/index.html","5fef8dd2ceededef7955ca912d3e06c1"],["/2023/11/19/huggingface4/index.html","d6eddb9a981f7dbe7f8bee9576bc94d2"],["/2023/11/24/css4/index.html","d8d7e49e2dbf9a02f86b24c5e877d622"],["/2023/11/26/ssn1/index.html","555d73a6363ff3f5606a9f61b3f5ad0c"],["/2023/11/27/miraiqqbot/index.html","a48888fd8eb00e06ebd9723f1fe5a877"],["/2023/12/21/ssn2/index.html","b9a7428e535cbdc36a20d5d1648958bc"],["/2024/01/02/llm1/index.html","74ac9314e1d76afa8db282555644aefc"],["/2024/01/20/go1/index.html","3f7015e11e456df4b868353149e6c894"],["/2024/02/02/zt1/index.html","8bf05ad86b00cad8078d7461a384743f"],["/2024/02/04/go2/index.html","5cdf5e4a29b7ca1e20edfeda57452527"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","82b7039c1da8b64e33dcdb1253f8b2cd"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","e53383fc9af698824daf7c21d4a21eba"],["/archives/2023/11/page/2/index.html","161cd04464079db8469e391999789fa4"],["/archives/2023/12/index.html","60b51d86b461e61ba8aebf99d11c954f"],["/archives/2023/index.html","faa21fb47dfe06997cc5497cfc944411"],["/archives/2023/page/2/index.html","dcfd0284ca3144ed6b3429c241b70190"],["/archives/2024/01/index.html","ec8e617aede11e06e4d439052265354b"],["/archives/2024/02/index.html","8ba22e40b54da39c47fe310923919b0a"],["/archives/2024/index.html","42bc3266146070021945f5e751b47111"],["/archives/index.html","6756378dc43180b2be7e2594d4314863"],["/archives/page/2/index.html","838385b9bb3d9988d7d0a1017d3cfe7e"],["/archives/page/3/index.html","e8aadedee72cf6f7cd47dc574f88f96d"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","d09f4a77d9e497b2ad0681f349138fa1"],["/categories/HuggingFace-NLP/index.html","e217676deca1a76cf92610c0a794407e"],["/categories/index.html","10c2a22b37e28225370d961093c86c5b"],["/categories/前端/index.html","3723d1a7f717faad0429476bfe8efcdd"],["/categories/对话系列/index.html","c8f0ce1e38f0eb4f5707179bae4ad3d8"],["/categories/教程/index.html","c6f1e472aa443c6f518536ed2cd52ffa"],["/categories/杂谈/index.html","ef1cb500ead12e605b104d4e98a19cc4"],["/categories/杂项/index.html","43908ca64da406fa8d6bfb85539664c7"],["/categories/测试文档/index.html","bc91086a4718df158bcebefacfe75a0c"],["/categories/深度学习/index.html","432899a9e3f11744d09ed68c9999c439"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","8b8c0f38e130ad237f091cbde3112a32"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","00106a7edcb887572807bfb244994ed8"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","a931cef8772df524046e5a3729fdad2b"],["/page/3/index.html","d2792fb52df75cad4b2dc36bd0524f31"],["/sw-register.js","acaea74e184ded200028f478174dfe0f"],["/tags/Golang/index.html","ebece8f75d1802ecec3d01da92542d91"],["/tags/Go语言/index.html","2a1bf303c87ff0c69308792c99a8d712"],["/tags/HuggingFace/index.html","cdea352f41efa6a7d16a108588acbbfb"],["/tags/LLM/index.html","4e4ada2e598d2edaca8f26dba03cd72f"],["/tags/Linux/index.html","d6d401b0a8773f5d5574d0521e16c7e5"],["/tags/MNIST/index.html","c58a748d3e9499111938921b2e6b405f"],["/tags/Mirai/index.html","f1784b8c335f7a164823af33c70e1a27"],["/tags/NLP/index.html","cd6a6730037b249e21d716c2688a8e65"],["/tags/Pytorch/index.html","cf5653de9e3fdd1650595ba1dc559063"],["/tags/css/index.html","00fa66675b57b47ffe1ccf93cf97b98b"],["/tags/html/index.html","eab6695551e1a51596ca29af1c2e0f06"],["/tags/index.html","38087139b072fb55aa5ba64859e73182"],["/tags/前端/index.html","a8f284231f41cf234515e280ed6b79f1"],["/tags/大语言模型/index.html","d229a60945f5719fd200c6693906f0d1"],["/tags/张量/index.html","7bff1d4c57cd09b928ac86bb7ab30fc1"],["/tags/数据处理/index.html","2faa273e08c048fee774f22d4377a14f"],["/tags/测试文本/index.html","f405fea16c5e6ee00f5f43173c4fc6e3"],["/tags/深度学习/index.html","10fb9b74f3dd1e64d2ddbd77614cb851"],["/tags/神经网络/index.html","3218be87f7c91bed9bf036bf178bcafb"]];
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
