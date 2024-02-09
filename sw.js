/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","700b7d37125217a153abd473abd5e594"],["/2023/11/05/测试/index.html","be518434fdad57cbe6ac986e6cac4a3f"],["/2023/11/06/1tensors/index.html","70e1bd7e613abd3bd70c97c389471394"],["/2023/11/06/blogs/index.html","93f57cb07a6029ac3c86afe8fec4c6a2"],["/2023/11/07/nn/index.html","42cf973978211056f3d9b2a0304e1978"],["/2023/11/10/MNIST/index.html","8099bbdeb6c0a4e5f1470148424d05ad"],["/2023/11/10/datapr/index.html","478c5d0ba6532e033e3ff17d5438b07b"],["/2023/11/12/css1/index.html","960a08e3fc813826e8e1380d2e90a3e3"],["/2023/11/13/css2/index.html","9f866105854f527072dfcbb72a13e460"],["/2023/11/15/css3/index.html","7e2876cef7e7c9eea62754832c037e71"],["/2023/11/16/huggingface1/index.html","b0f62fbf902d0801d8a6d664f0633005"],["/2023/11/17/huggingface2/index.html","631490872e859a681581d4f4558e08bf"],["/2023/11/18/huggingface3/index.html","5ee2599cb01cdf6cb2d3fbbcbcc6e21c"],["/2023/11/19/huggingface4/index.html","4e203cc5bbda9a8078eacf8dba926620"],["/2023/11/24/css4/index.html","7c3aa8341e527ea55ce333f8acc5f85d"],["/2023/11/26/ssn1/index.html","992d20fc7e8fdfb7a80808884e837ced"],["/2023/11/27/miraiqqbot/index.html","fbbddeb59c43d4a68b44ba4d099bebcf"],["/2023/12/21/ssn2/index.html","c744d75d177a4e4329aa637c76fb14d3"],["/2024/01/02/llm1/index.html","1a356e7a26066e4169d8b6260a02529a"],["/2024/01/20/go1/index.html","e8c6e52154ecdc5c5d7c22c1f4ed0fb2"],["/2024/02/02/zt1/index.html","244591b8204805c0e867319750c0f9d8"],["/2024/02/04/go2/index.html","43e959784767fe4862f0f1a9e1193dab"],["/2024/02/09/go3/index.html","4c760683255f42707413189582721f20"],["/404.html","d3c3ffaf4736b46a6c07ea2d671beab8"],["/about/index.html","c67b7d1c35fe210151124b735e317c7e"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","48f9e7b27a004e4ffba62b83273bbf91"],["/archives/2023/11/page/2/index.html","96985e647dc1d17384a3b9ecdea5e275"],["/archives/2023/12/index.html","c4a46b19f266c48129a0993fef65e99a"],["/archives/2023/index.html","b2aa25e285fd58437485572b87b9f939"],["/archives/2023/page/2/index.html","a6df2ca18a1930c2f5f65c14c01f582e"],["/archives/2024/01/index.html","c7aa366b1130968b0a35ddf74242b4c8"],["/archives/2024/02/index.html","dff14b6fca3d9bdaf705272fe10875f8"],["/archives/2024/index.html","eac42b78e2f58a13b75958c26ad29255"],["/archives/index.html","2b97f084d9ce752e452302e318b95381"],["/archives/page/2/index.html","a4f969f3c1275051972adc39844d7bbd"],["/archives/page/3/index.html","b72f5150677a1ba7ab2752732e47fed1"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","05dcd86fc783fd4f76e4f046c38cdf1b"],["/categories/HuggingFace-NLP/index.html","a253c4532b325b4d0696903d8c00554d"],["/categories/index.html","e6feaadfecf0c8d644d948f3b8a4adea"],["/categories/前端/index.html","3e427979044855c5cf9c20cbf6eceffb"],["/categories/对话系列/index.html","2995d9a5f107472c15d4c9f137f0e2d4"],["/categories/教程/index.html","0881593ab7b550400d05248abdf653b9"],["/categories/杂谈/index.html","702b6e721bc7b6a7276eb1a0192b38a9"],["/categories/杂项/index.html","f7f9d5e7a13df8d40e6961d4f63b91c3"],["/categories/测试文档/index.html","4e9a1466b6547def0bf11f8513583e00"],["/categories/深度学习/index.html","26cbdae6ddb60eea8397844eb3cbb1da"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","8b1aae9b621edd68c77430955fc1363d"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","e3c9e6a0b2b29f1bac4fa29fbe158227"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","c9065a0efffefca4abe09e88f335e005"],["/page/3/index.html","095c0793e9a95e192bb5a7ab76cf10e1"],["/sw-register.js","19692fdff6dee2aa7ae2b74d2d9d900f"],["/tags/Gin框架/index.html","56490e71a0b054c081e9a87d363d5480"],["/tags/Golang/index.html","3e9084656cdb2d4182636768bd91da54"],["/tags/Go语言/index.html","76dc568c307424352422c092ea180562"],["/tags/HuggingFace/index.html","f366864d728da0e8720f85f5af001361"],["/tags/LLM/index.html","e092ebb05e7490bf97f968bf00da097a"],["/tags/Linux/index.html","320eed6e2a8392e69b7dc7da615364fb"],["/tags/MNIST/index.html","6de330bc500f883acede4611fea0f8b6"],["/tags/Mirai/index.html","c945e43111a2263ca76a96a986b7e8a0"],["/tags/NLP/index.html","f62f2eabde9f6fec3f66dafa87c04f35"],["/tags/Pytorch/index.html","b12b704659c03b12f037bdd963a52d2a"],["/tags/css/index.html","8e4d8e61792eca4df043407d965e73ce"],["/tags/html/index.html","13b8dcb89509efee60d306590649f787"],["/tags/index.html","9155c8532320a2f67f344b8909dc69cc"],["/tags/前端/index.html","4f815499b791215bfa179284ff9d48d4"],["/tags/大语言模型/index.html","fec8a0ef00be16e9833f8e0572e803a9"],["/tags/张量/index.html","09ebd3f612b2b110b0eb6311730fc6d3"],["/tags/数据处理/index.html","f51a5bbb7ea17b51374e3ea3cfdb54b7"],["/tags/测试文本/index.html","dc499861e277077dcfa14d4bda05f8be"],["/tags/深度学习/index.html","e477e089846f2a230576f640b642c828"],["/tags/神经网络/index.html","60b46cd949348a69a180fe8482648a0c"]];
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
