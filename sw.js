/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","dabbf83757a039f23a46578cb0c517dd"],["/2023/11/05/测试/index.html","babbba8a140d16e435d2f36fb2222214"],["/2023/11/06/1tensors/index.html","03a0fe4fda55096f5c5ae75d51398884"],["/2023/11/06/blogs/index.html","d9b33f0fa5893d7368c48f8034ce78ce"],["/2023/11/07/nn/index.html","8dcb19b4d635a9c5fd008a96f199b600"],["/2023/11/10/MNIST/index.html","d8eeefe0c0d299ba6f46b9af2098214d"],["/2023/11/10/datapr/index.html","a8764330067d9c169b6060375a4c66e5"],["/2023/11/12/css1/index.html","6a78b42de1fe7beadd11fa37ecc2ee0a"],["/2023/11/13/css2/index.html","0b45911f8e08baf127d75bb6b8f72057"],["/2023/11/15/css3/index.html","338889fc971d186276ece1295e4af44a"],["/2023/11/16/huggingface1/index.html","450773c6edc036877c8683678b64a3c7"],["/2023/11/17/huggingface2/index.html","9b9d459e92379cb61f862f721b1fe4cc"],["/2023/11/18/huggingface3/index.html","f337a5a30ea2ac090bae3bb75013f7dc"],["/2023/11/19/huggingface4/index.html","c0b8c0c87b563f75c8a210d080a4274a"],["/2023/11/24/css4/index.html","4ac66102261e4edc88c3342b4b9d8d1f"],["/2023/11/26/ssn1/index.html","c3281f73b24ce3eabcf40afada8c8c17"],["/2023/11/27/miraiqqbot/index.html","fac1319c729ab7993bc1f9c65d964688"],["/2023/12/21/ssn2/index.html","8635d737b155974faf603f3dfd00437f"],["/2024/01/02/llm1/index.html","5d1e5d5de14426bb5f0eb3eb989a724c"],["/2024/01/02/ssn3/index.html","4355410ee0b50a35301126dd466c040a"],["/2024/01/20/go1/index.html","428ddde3bcd46ddd56b15bc5d76657ae"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","723dc82dcab5d2329bd579d41a2ce394"],["/archives/2023/11/index.html","d366939da469850024d74b0108494bbe"],["/archives/2023/11/page/2/index.html","31aa2976bdb9275d1f973b2a95e49095"],["/archives/2023/12/index.html","d59ee339b73467cd428195d0e2d0d4fb"],["/archives/2023/index.html","d7d8a18bd3bb3e814e9745e7ddc2f501"],["/archives/2023/page/2/index.html","ab5d5e0fe9e77cf496a45572ec4be2e2"],["/archives/2024/01/index.html","1f5ad8401efa1b7ca3f9cbf8413731e2"],["/archives/2024/index.html","bb7ba0a2d0434c6a0f119b01d8e15d82"],["/archives/index.html","33065546d6a3acbf5878196cac45efa4"],["/archives/page/2/index.html","9323776d9b81a3ef8cffc301f79e66b0"],["/archives/page/3/index.html","fd9ae65a27df1362441c9aafdbc764ee"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","e89c29cedd6c5f192ab0093c00c3f849"],["/categories/HuggingFace-NLP/index.html","b6bff218aee7d709be85db35a4c474cc"],["/categories/index.html","e25d26b424ada1cc3b36b6dca80dd0a0"],["/categories/前端/index.html","75f6001a20c69691cf2b646a26f46fd1"],["/categories/对话系列/index.html","4f3db869f475839ff5e7eac91ec2473f"],["/categories/教程/index.html","8184e165a96cd5034095633cd2175b4c"],["/categories/杂项/index.html","e3741dde78f31dd6c40ee4be88f768b1"],["/categories/测试文档/index.html","44f20fa9f007ce3600bf920697b51226"],["/categories/深度学习/index.html","3a9b31aba2a974b4ee0a8e8b723fc415"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","42beeade8882f2c217a27f0489dc8b13"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","2ca28d93ba73335357a4d1b8c633dcde"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","029cb51fcac29921ef5710aa2fc22390"],["/page/3/index.html","1a91e6eec83d54c157b2444303ff024a"],["/sw-register.js","05db962213a3b211b2ff9971b42cc971"],["/tags/Golang/index.html","9c532d94c0be93b0644688f5d3c2feba"],["/tags/Go语言/index.html","2dcd122f10a6f79251dab43733dcc999"],["/tags/HuggingFace/index.html","cae5f1d8fd399930edfe72f3bb499721"],["/tags/LLM/index.html","3a9cdebcbde1a780d4d4c2a6bcac5cd8"],["/tags/Linux/index.html","a5c485c4671982787d096cc213c0ed92"],["/tags/MNIST/index.html","fb464036cda9c93483edfa2be3060a38"],["/tags/Mirai/index.html","f67363684eff86ce9b09636307398fe6"],["/tags/NLP/index.html","7af0037a2c1afce856d412b55819e11a"],["/tags/Pytorch/index.html","57c6b2d084213e75465e4d965a999875"],["/tags/css/index.html","138272e451b5da2411a7a540336f692a"],["/tags/html/index.html","08cb352029e6b43aa6d1ace3c87bb995"],["/tags/index.html","9c57549489dcdf25580ce6f46ff1c288"],["/tags/前端/index.html","5213203fc3c3911e6b1bc6748c1fdf09"],["/tags/大语言模型/index.html","d0e3c4c255a9a467cc5b015fe3a13db2"],["/tags/张量/index.html","74d4d08ff0341b433c02839b63d6b308"],["/tags/数据处理/index.html","c4f2ed56754fd040c817d11548102d6e"],["/tags/测试文本/index.html","684276022bf0c4943b7653ab126a1f34"],["/tags/深度学习/index.html","7a0dea72e5077386d532916effc85338"],["/tags/神经网络/index.html","103fc2b3845cfe6939685f765070cd2a"]];
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
