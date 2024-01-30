/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","7feac2bc2898e8e9ef29632a61d94cdc"],["/2023/11/05/测试/index.html","83b15202121f2cf2853fddc70ef3f1ae"],["/2023/11/06/1tensors/index.html","8f0d3a4fbad30f50294bdab1e656ed1a"],["/2023/11/06/blogs/index.html","5d1be1a85172b1a02620ddbb580b96c7"],["/2023/11/07/nn/index.html","40d2f5754db0bb92717a55c4b6c45029"],["/2023/11/10/MNIST/index.html","9c95473150bde98efe6af9a1e989e94f"],["/2023/11/10/datapr/index.html","91c2100a4373231efd0c0740edaba0d9"],["/2023/11/12/css1/index.html","470d3702760467f0710e9d42fbd37013"],["/2023/11/13/css2/index.html","5e1aead176d6fc08b55ff6f4dd8f319f"],["/2023/11/15/css3/index.html","a8e8699e744f7c010f73c6e59afcd2f4"],["/2023/11/16/huggingface1/index.html","c4b53d9cc48ce5d341c976b0a6d8a253"],["/2023/11/17/huggingface2/index.html","e7bd3611709674617a316e61269fd5a8"],["/2023/11/18/huggingface3/index.html","e23ce4683acc2fb1a3d895a582522ec6"],["/2023/11/19/huggingface4/index.html","1f436700e010c8b118650bd6f2ebd8dd"],["/2023/11/24/css4/index.html","3be771c06058fa557537ac369a618baa"],["/2023/11/26/ssn1/index.html","2555af9b3e8f6b164c62ead71dece5ff"],["/2023/11/27/miraiqqbot/index.html","56c76e5a6938d385a2cbe96e4b6a5259"],["/2023/12/21/ssn2/index.html","42ef271de6658360ceee184323b5129f"],["/2024/01/02/llm1/index.html","a06c1341d1e75b6bf902cc9d9b8a6e01"],["/2024/01/20/go1/index.html","723d24aec460de41f326d99f3efae319"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","95f21116df1ff298169ee4c6a3956f27"],["/archives/2023/11/index.html","b8bdf88283ccc423067840b93deab419"],["/archives/2023/11/page/2/index.html","cc7f6fdde314292fe804eed9dffc4128"],["/archives/2023/12/index.html","71a66420aad03346d7754c10c665bf43"],["/archives/2023/index.html","912d9b35d973378b33264d66b4cf08b3"],["/archives/2023/page/2/index.html","eb2e9334363b09568e874b939104f947"],["/archives/2024/01/index.html","d60efa0459ff1a2022a80d0ac1b80756"],["/archives/2024/index.html","715d888f9239588ccdd071df56b0ff6b"],["/archives/index.html","d7ddd1cdfb37e6bbb929073e1c0fbb86"],["/archives/page/2/index.html","10d303f3845b9702403ca108047b9678"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","214c1ccfde21023e47e6cc0e5fd75212"],["/categories/HuggingFace-NLP/index.html","12920dcb1a2642727d229ca4b9f2154b"],["/categories/index.html","796928095d3378bb401858bf4702f504"],["/categories/前端/index.html","f1d3496ede48230984d0d623d9d53ad2"],["/categories/对话系列/index.html","8101780f8d2f8bb4d6b021a24880b7d7"],["/categories/教程/index.html","7a723680d01b8c6539e0f26f4442fe56"],["/categories/杂项/index.html","16f56755772c14076f3df61248a6c5c3"],["/categories/测试文档/index.html","33619ff9f51bd62badf2bec84ed1a0bf"],["/categories/深度学习/index.html","8813ddcc9b7941057acc513a1294c1e2"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","d881e5432434670ea625be2dc84ab77c"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","787126bf97cbbf7d49e00884afb11b87"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","063abe963d12860d237bf51f5ff3f2d2"],["/sw-register.js","85bfae6e88ead97a46e5502d1b7fe143"],["/tags/Golang/index.html","b4606f13c7cfb8a9e8de21b8f83d93fa"],["/tags/Go语言/index.html","598b570379c39372c83fc6d4d404070a"],["/tags/HuggingFace/index.html","1ce82609c8440ff168111b826d3c79a1"],["/tags/LLM/index.html","c70e00ad3b7e38efe11f89603f6b19bb"],["/tags/Linux/index.html","cda162f4179b0b0dc5d40aaac696709a"],["/tags/MNIST/index.html","706b020ce7edb071739ed7d16ed2737d"],["/tags/Mirai/index.html","477a7e8a9e931d7e2904b8ca13169fff"],["/tags/NLP/index.html","a6966f573355c3876914a3a055b6d81a"],["/tags/Pytorch/index.html","510232e41c59c80e85156a8a816eb8f8"],["/tags/css/index.html","9e19ded6764ddd42462621292cc3d34c"],["/tags/html/index.html","0624e2752595eab1413256de12c7e348"],["/tags/index.html","00031d5a880b1208fc5a97ed9ae5f138"],["/tags/前端/index.html","85a64ae62969995ffd14fb2c373d039d"],["/tags/大语言模型/index.html","d7bd91bec2b79ade200da1eb57c8a77f"],["/tags/张量/index.html","4ab3c48aff55851c34b685f676e24a26"],["/tags/数据处理/index.html","6757f177f7d2ebb60817f065621e07bd"],["/tags/测试文本/index.html","271563525226c94f55367215c3db76ac"],["/tags/深度学习/index.html","87deb13bd0ac4e12867ef1d50218d1a7"],["/tags/神经网络/index.html","ea12df3505a199af16168c090137150b"]];
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
