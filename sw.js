/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","5939960bbf696fc60c5945a59591c0e6"],["/2023/11/05/测试/index.html","f4101f6eb94712712dc12d538ca2d18e"],["/2023/11/06/1tensors/index.html","028f5780b080a228dc0e1db28520a0db"],["/2023/11/06/blogs/index.html","df5b899c624a31c89905b64ff61c40e6"],["/2023/11/07/nn/index.html","584eaf05f11f80a9391d9baeee3a642e"],["/2023/11/10/MNIST/index.html","4a252842c7fe41c8f85a7f8f6aeefd3d"],["/2023/11/10/datapr/index.html","2d127b4a8c538079eb42e81aa58adb7c"],["/2023/11/12/css1/index.html","bb360ffd5f17e1d83dcb58da8590591b"],["/2023/11/13/css2/index.html","49eb7bea9cff0fe8eea1ae3b6cc6419a"],["/2023/11/15/css3/index.html","041f5bf1e7599be6b9fbc5ff6af2a2f3"],["/2023/11/16/huggingface1/index.html","c861e436b5e37d6cd83cab5140c1ddd2"],["/2023/11/17/huggingface2/index.html","b7db02e84169e4724d2252af97625037"],["/2023/11/18/huggingface3/index.html","1551510836504a383e2f77668079f677"],["/2023/11/19/huggingface4/index.html","046d20075575a805412a90d7a389245c"],["/2023/11/24/css4/index.html","0a8162520364be7b0c65ec2a15cc9931"],["/2023/11/26/ssn1/index.html","286782884d14c652f6d47c378829f7f1"],["/2023/11/27/miraiqqbot/index.html","4e820da0a3f4688f8c17da51a15c38a6"],["/2023/12/21/ssn2/index.html","87d80af47905a7bf2a89ef2af8d67479"],["/2024/01/02/llm1/index.html","f3179bff28c03eabb1f507046e0bcd1d"],["/2024/01/20/go1/index.html","e69226ba8d045fb7b2770fb1f6bf9e22"],["/2024/02/02/zt1/index.html","17f10dc91c8cfa9e673b3d7c41117c70"],["/2024/02/04/go2/index.html","fa7db65915c9c92f00fd50e261452398"],["/2024/02/09/go3/index.html","ad55fb0d391c24f9e6d44319984d80d8"],["/2024/02/12/go4/index.html","223d4c2305982b812237bb9ab1e4ecbb"],["/2024/02/17/go5/index.html","8a028692988ba681ca7d29943b5354eb"],["/2024/04/06/pc1/index.html","3473a77f59d928645217cf0b58007aea"],["/2024/05/07/pc2/index.html","5f43ba0d5e41bef580a64fe32a5253d6"],["/2024/05/19/htp/index.html","fe8a9a1a1c843c48236d784239698feb"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","a81d842c315b9a31c859035fb4ae5c9b"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","9942eb3d33b89cd13bd4f9656d825a7e"],["/archives/2023/11/page/2/index.html","f0b54063d626a540ab268d3e4b354254"],["/archives/2023/12/index.html","1c112b362225ecd6f0fc844bbbae9710"],["/archives/2023/index.html","74d41c25b667d1eef9323a903a02634e"],["/archives/2023/page/2/index.html","1bf8458d95d9ac650c2bb829a318ae2d"],["/archives/2024/01/index.html","ead20e0251335273a7f03287b8b8b3bb"],["/archives/2024/02/index.html","3f6030bb85827e6eec39995c21bce147"],["/archives/2024/04/index.html","f85d876cf5613fe18d58b60d7f68d342"],["/archives/2024/05/index.html","fb23f7354c68ecf16d93492d2a969182"],["/archives/2024/index.html","75c8521e48743e4e92e9812aec3109c7"],["/archives/index.html","80c862f573862e6261079ef1f891d747"],["/archives/page/2/index.html","55b065e6ff8bedc702c0b68e6bf77b35"],["/archives/page/3/index.html","8bcea8c53c772e1afbb88ceaf3144639"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","12bc916026d1088e63a3389fe7a530c2"],["/categories/HuggingFace-NLP/index.html","85dd1bdf1f86fe7853a446eecbb7f4b7"],["/categories/index.html","34314bf7156c727d7c5aea1da0aa6f74"],["/categories/前端/index.html","ea873521afe654feda8976d444a959c5"],["/categories/对话系列/index.html","62f4ffefec5303e3597b298f6d945697"],["/categories/教程/index.html","d556f40a97088d1fefa7b9d5347a772b"],["/categories/杂谈/index.html","1a70610c266c3f1867079797f988bb77"],["/categories/杂项/index.html","a611d5b2e8056191e7a4f167f807e7d5"],["/categories/测试文档/index.html","3559a2c65815933cb3747d8311c2e404"],["/categories/深度学习/index.html","6ff224057f054732ab1b4da6aba3b2ef"],["/categories/经验分享/index.html","a5f96d0f41d781650726aad4f0e5b9d1"],["/categories/网络爬虫/index.html","61008ded686c9da1d4bfb5d63d07db64"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","63ffa747e09bbb2a6ccb68810db905c6"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","1d4be77efe50c20021bc8aa25d9b50e7"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","6d0b54fdc3cbee62d34efe8dcdf9e3f5"],["/page/3/index.html","a72fff8a719210164c6246bc5d9415c9"],["/sw-register.js","c04999f478b716ad4f0a0326970cedae"],["/tags/Gin框架/index.html","5a846f6fef12cd48e269c2eafc6b4abe"],["/tags/Golang/index.html","00f70280617f8e59e99585c7fd2f9fba"],["/tags/Gorm/index.html","a821ec05382035c589de72bf3257c0f4"],["/tags/Go语言/index.html","2b8d260a33bdf681cbb56f9c82dd5769"],["/tags/HuggingFace/index.html","54e549d0d8a3b1ed64259f4035724f38"],["/tags/LLM/index.html","fda5ab048d86fbf9ceebf2448c426122"],["/tags/Linux/index.html","bea0ceb5ddbe12a60f373b360a21a43e"],["/tags/MNIST/index.html","32b4491b22edc60e3866b4a946421dc4"],["/tags/Mirai/index.html","90f16999b5b5d0959eb381b45aa567de"],["/tags/NLP/index.html","e2ba94671ff7120a823968f76559bbfe"],["/tags/Pytorch/index.html","e7554c2f7fa16b5b8a6141ff1aa04003"],["/tags/css/index.html","3a1165dc1320e012e9611db54a72c48d"],["/tags/html/index.html","3fff4ecae9823bd3c1416fbbd0f9e591"],["/tags/index.html","24be280855dff8c594aa0cde9370d090"],["/tags/python/index.html","198e451a33264f61258085b8cb6c8278"],["/tags/前端/index.html","4c4ac6487a8a022fcfd99f9383ec08f1"],["/tags/大语言模型/index.html","db95b6be501d36c8af634ea0868380f7"],["/tags/张量/index.html","093422e48677c5a0d0ca886577389160"],["/tags/技巧/index.html","20529704de64558081652b1997ac5a57"],["/tags/数据处理/index.html","7263639e631ae1d966e48cb20efbf154"],["/tags/数据库/index.html","f9fbd69a2bdb3dd4eb90ab9d0da6fe79"],["/tags/测试文本/index.html","cf98d4d7848bbf948844ff9775cb8368"],["/tags/深度学习/index.html","2ae49ed4760308446941d9dd1cf86765"],["/tags/爬虫/index.html","1af0eb31a2b880e83f4528d07190683a"],["/tags/神经网络/index.html","862e6b1903f9d4323e721eb005802e19"]];
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
