/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","8a31050b09cee4e1d42f5c720fa01fdd"],["/2023/11/05/测试/index.html","75468eeac38443a04ec322a6275e1e28"],["/2023/11/06/1tensors/index.html","8110ce24df21ddec74abdaa56b8ad8e8"],["/2023/11/06/blogs/index.html","810bd63a6d2a76f3849637f148c409b2"],["/2023/11/07/nn/index.html","349b8060d3e9a401420ec720289589c0"],["/2023/11/10/MNIST/index.html","69d6722674bb83d24a71efcbb4fe5b97"],["/2023/11/10/datapr/index.html","9ccf44d0147661bbe150e0597026f849"],["/2023/11/12/css1/index.html","c71acd40ba1b93c8185755282d288417"],["/2023/11/13/css2/index.html","befef4a0f56a36453c50ff5f5be1e21a"],["/2023/11/15/css3/index.html","ce4f328144b593a3e931e2d10b755ff8"],["/2023/11/16/huggingface1/index.html","511cf10604e0479c897b29df9a85e418"],["/2023/11/17/huggingface2/index.html","76cd8668ef251d7b4ad82daafdc6f9ab"],["/2023/11/18/huggingface3/index.html","e568f438571d1a0ed6cc976df169a55f"],["/2023/11/19/huggingface4/index.html","c0bd10dd317f1094a2f19848d5ab3eaa"],["/2023/11/24/css4/index.html","00bc620dd6917c4ff0bd5a9953764a2d"],["/2023/11/26/ssn1/index.html","1229c7902a1132d0113c13f3c1251420"],["/2023/11/27/miraiqqbot/index.html","687680e2c0eeb99f85ce2e2c9d931bc8"],["/2023/12/21/ssn2/index.html","38d391e5d8923119a6c091e638aafc52"],["/2024/01/02/llm1/index.html","5f90f8ce051950a8692764657143d99c"],["/2024/01/20/go1/index.html","ed5eaf79d32446c0d913362616707154"],["/2024/02/02/zt1/index.html","6fc37421bf2f46abd680290461cb99f4"],["/2024/02/04/go2/index.html","4c8d68c274b00223e13ba9cda5eb6a4c"],["/2024/02/09/go3/index.html","0edc8a15b928e17759d4f4b1889d0ba7"],["/2024/02/12/go4/index.html","9d8e409d035c4bc8776dc629edba5996"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","37940191c9c6b1c3926ee33968ca1c92"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","c7901acb0032d58019cd9ddab2e2bb19"],["/archives/2023/11/page/2/index.html","3b97b10e84d736edf06b45fd0e3474b2"],["/archives/2023/12/index.html","a5f636585ef825a18b89d96c7f8264ed"],["/archives/2023/index.html","617eacd58dce6a7bd15e0be685e217ff"],["/archives/2023/page/2/index.html","d5ac9e904501242ddf28c49ac95403d6"],["/archives/2024/01/index.html","e96fe01093ae0192618f0b7067e01e4b"],["/archives/2024/02/index.html","cca8b39ad2cdc887c671c14142ef47c4"],["/archives/2024/index.html","6d31932e83d005b213fdaa8a5e7cc1c7"],["/archives/index.html","ce1af6459a4e110009b37f764d6c4e36"],["/archives/page/2/index.html","b38c9c8a6b3bc150d8ac336d6a63ac60"],["/archives/page/3/index.html","9da192b40c1237c1d1da36b27332af83"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","19df701f28637a001e2aa827b880a797"],["/categories/HuggingFace-NLP/index.html","5292b1a7eaf95e3d54ff41f387d5835f"],["/categories/index.html","0fb958a97818bd339081425e7a6bb2f5"],["/categories/前端/index.html","f2022856b2d00350f3744cf545ca2807"],["/categories/对话系列/index.html","7d4f6dc5413be8b61d1b70754f90042b"],["/categories/教程/index.html","0f5ad3502a32de38371f18201f5f402a"],["/categories/杂谈/index.html","05820bdb9efa8469d0c8232019886fe9"],["/categories/杂项/index.html","ca967a302505daa9c11a2ff4c9fad8d8"],["/categories/测试文档/index.html","27a73f9e4581774435777d582a7d8b8c"],["/categories/深度学习/index.html","1fe5fe808649f19940099b552659e478"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","98c6a488f683e795367736986bef49de"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","84b26298abf550761e8b9329b3b06ef9"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","4c8a12c92d66e59830eb8363029d3430"],["/page/3/index.html","d4ad566f94d5bb9b5684d31638665d98"],["/sw-register.js","4045a36d292f2c681b0e50d54c029437"],["/tags/Gin框架/index.html","02f2fc6e52966e10daac46b4007daf3d"],["/tags/Golang/index.html","17d5c847eb80fe2bfc1ccdc0e139f5a0"],["/tags/Go语言/index.html","5eeb3c3684c4ef878f8722de673b3463"],["/tags/HuggingFace/index.html","ca95ed11951df43a6e950029ee65c580"],["/tags/LLM/index.html","aa996f1746b4e470fd8a5aef88949be5"],["/tags/Linux/index.html","885be473e39e1cb6068c6700f79fdfef"],["/tags/MNIST/index.html","0c357381764f9fa03ef708882c76f7ad"],["/tags/Mirai/index.html","1f9dff13a313e691c2c2c2583ced1d38"],["/tags/NLP/index.html","17faae8798f83dddd9de6357a46f14f5"],["/tags/Pytorch/index.html","0d8540b02e8c4a42402fb526dedc6819"],["/tags/css/index.html","53a196d10358164a90cc2da9fd08de6a"],["/tags/html/index.html","1405936a423bb356308ebd9758eb934b"],["/tags/index.html","99797e98bfd883a35a5cd565781a9a56"],["/tags/前端/index.html","542b515d8e3ffcb1ff559d1e17e95356"],["/tags/大语言模型/index.html","ea6272252757b4f80a5a91d79e16967b"],["/tags/张量/index.html","1b58037339857860134f98976c019cd6"],["/tags/数据处理/index.html","a5f02696d6895cb7dd628f12199eb028"],["/tags/测试文本/index.html","fc31a21387a71fc2c81fdebd17c263d2"],["/tags/深度学习/index.html","fe6fe70fc547bb2d560775c8633a6df5"],["/tags/神经网络/index.html","ed1ecc0120cee38d85540bbd535aa417"]];
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
