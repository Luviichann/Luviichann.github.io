/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","21111f1b123bfffe38f4e89e70654c01"],["/2023/11/05/测试/index.html","7c792e1c86a17355e8431790d22843e7"],["/2023/11/06/1tensors/index.html","b21d8937f1e7337c93d1dabd163c2338"],["/2023/11/06/blogs/index.html","94bba31c468c26050b63d7ced946d0d1"],["/2023/11/07/nn/index.html","9641e34cdb8c7be75a43ef8faf228e3e"],["/2023/11/10/MNIST/index.html","5e1843f811b392c2f99b168c53f1a7d0"],["/2023/11/10/datapr/index.html","e68fa4bbbefb2969f611647b03dd07dc"],["/2023/11/12/css1/index.html","1eb5cbe992ff6e3aa5c6b77a5244c3b2"],["/2023/11/13/css2/index.html","a115b4539d143019da9578e717c02064"],["/2023/11/15/css3/index.html","097176029e451c551843b92ea37c5814"],["/2023/11/16/huggingface1/index.html","5fe760af0d357e6c0be1dcc0db3b667e"],["/2023/11/17/huggingface2/index.html","339ab7041366e212e9f6c8548234248b"],["/2023/11/18/huggingface3/index.html","c12f8c24cf8783b6fb99e32e6f6179f8"],["/2023/11/19/huggingface4/index.html","f1fb9f9cc97b2bab4e712eb554cd846e"],["/2023/11/24/css4/index.html","28d17857d83ceed17559159358faad11"],["/2023/11/26/ssn1/index.html","dda735aea466152d6aee33ef87b6b485"],["/2023/11/27/miraiqqbot/index.html","f9ef9a77342a4a66993a5f5e9d7e4d55"],["/2023/12/21/ssn2/index.html","070785b65299008f8dbb04bd06ae9450"],["/2024/01/02/llm1/index.html","3c07c65b8d0f2dace545e95a166e45ae"],["/2024/01/20/go1/index.html","abf353bc7236b3cc88c3ff42e744bad9"],["/2024/02/02/zt1/index.html","fa8d45ea1f813bd82919e04d73440780"],["/2024/02/04/go2/index.html","9957e42e763ecd7024585c41a7195b1c"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","c9b11b09339e90f0d9dbbeabbd742f7c"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","38e04bab77ee530af699717e6dfb6a6e"],["/archives/2023/11/page/2/index.html","ce0edf0d4194731fa20bf35024783ab2"],["/archives/2023/12/index.html","5855cd4391ede73c9ef51f1088076836"],["/archives/2023/index.html","a0b6231a86541c53cd4d3a403a745a4f"],["/archives/2023/page/2/index.html","36cea71a48a1fee0afe6b9e89afe92e1"],["/archives/2024/01/index.html","1c864caa4aafb6fd17e79b7bed63408a"],["/archives/2024/02/index.html","6658dd01a294e2c23f67c60ca20ad0c5"],["/archives/2024/index.html","c9ec2db2bfcd7706afa66e93506b3579"],["/archives/index.html","77eb3de8199bdf67425b0192e053774c"],["/archives/page/2/index.html","1b05b26138f7cf8824f414c4556b001b"],["/archives/page/3/index.html","5d514e5bd845341754564eece1eb15c5"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","a9adcadb71d1ef12009ad8196cf418fc"],["/categories/HuggingFace-NLP/index.html","48c06dd348092d9f8b84d37cb52051ef"],["/categories/index.html","88241d1237a0893b1cab3304f0e03acf"],["/categories/前端/index.html","5ed18b05a4dd12f1e1510cb3a9d9d5e0"],["/categories/对话系列/index.html","0ab57c8c6369cd47fad91390ca6d9ae9"],["/categories/教程/index.html","90bd7922f3e7ecb41b24a7978ea4d1ff"],["/categories/杂谈/index.html","8eb2601b1af8ddcb895db0dcd11544f5"],["/categories/杂项/index.html","1325702a8abdad0c9bcd7acc35a12cb5"],["/categories/测试文档/index.html","1e46f8236e8b50014c629f4d3e04a2e8"],["/categories/深度学习/index.html","593855256ce719d5844840c8715001fb"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","a8a0f7e95627a69c1a5db14ad9aa1d71"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","00106a7edcb887572807bfb244994ed8"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","a931cef8772df524046e5a3729fdad2b"],["/page/3/index.html","d2792fb52df75cad4b2dc36bd0524f31"],["/sw-register.js","8c9eb738898085b6fd7d971ad0c10f36"],["/tags/Golang/index.html","c72783506d1d463fe71e5cacdcf5045b"],["/tags/Go语言/index.html","f88c9f2e177fb5cc193fdcd8867c81e0"],["/tags/HuggingFace/index.html","0ff167aec637a395c85e0838c11dc2a6"],["/tags/LLM/index.html","9724d610092dd9fb571f875945349b07"],["/tags/Linux/index.html","1f6353e14834d8087982dfbf5042d16a"],["/tags/MNIST/index.html","74c448fd83e5e03c32e9097f0d059f24"],["/tags/Mirai/index.html","040328d7060b0d7a891efaaa1c59cd5e"],["/tags/NLP/index.html","b1aea7530f129618fe8d832fb9a5d166"],["/tags/Pytorch/index.html","d3376ea20885c53fab57a3c618cc4910"],["/tags/css/index.html","6ff4b5e7020080737c56f7a2b4409365"],["/tags/html/index.html","1ac51cd53a6a3db5594bee2925fe32f3"],["/tags/index.html","06591c28df80554c44a7c87efc785be2"],["/tags/前端/index.html","5dbed1104b294a7e3801dff9ef966379"],["/tags/大语言模型/index.html","f7bff9082f3a5e3797f9cd90452e2a09"],["/tags/张量/index.html","96bec5ed5242afe0480e229ac73a1ade"],["/tags/数据处理/index.html","b2bd12b7b20a330ebe73a41d75d40c1e"],["/tags/测试文本/index.html","8818ca09b6a17425f06b2f78b15834e9"],["/tags/深度学习/index.html","26dd7546be13c43995776402f145a30a"],["/tags/神经网络/index.html","5180e879ad84caf72f656a088413353a"]];
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
