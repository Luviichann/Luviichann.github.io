/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","8b631ba5e2243988c6604a2b3f944a0c"],["/2023/11/05/测试/index.html","7192655ed19cbc73520bd87ba08729e7"],["/2023/11/06/1tensors/index.html","e4cbcc7756f75c6724e6edc38e7f8967"],["/2023/11/06/blogs/index.html","0d0296a828cde7c1b9df1542a958b949"],["/2023/11/07/nn/index.html","c31c9c4a66dd34cae790bdfa85d45f16"],["/2023/11/10/MNIST/index.html","c7d4b94c94aadbd7360a3f491e61bb67"],["/2023/11/10/datapr/index.html","3d126ba5874016660120a488ee5040c9"],["/2023/11/12/css1/index.html","291b69eb72cc9473fd6430f249d07217"],["/2023/11/13/css2/index.html","cd500f1d3305e42e475c53183e0bf756"],["/2023/11/15/css3/index.html","d36530926b5ddd649dccc9ed73589190"],["/2023/11/16/huggingface1/index.html","5fb5e6cef25f81d4d5699c16db3d49fe"],["/2023/11/17/huggingface2/index.html","3456c00fabeff4fe2ac8b16b3b321009"],["/2023/11/18/huggingface3/index.html","ed26d811ec5f342edd74ffd5a9ba6efd"],["/2023/11/19/huggingface4/index.html","503cbfa79663d55eef86e0d8542f5777"],["/2023/11/24/css4/index.html","f7231c34a7c0b17e0999ebc144ea571d"],["/2023/11/26/ssn1/index.html","7d71b650d506e6b718b773f19032b009"],["/2023/11/27/miraiqqbot/index.html","1e134afd412c442535ca459482482301"],["/2023/12/21/ssn2/index.html","eaa1725ef1d677e1986e8cba058c38c6"],["/2024/01/02/llm1/index.html","cbf0fc7b6219fb66072788313e8a0ae0"],["/2024/01/20/go1/index.html","7c15c74e2a8f06591f2b5e506b2f3460"],["/2024/02/02/zt1/index.html","c45332dbceefce81a72ef27336a376a7"],["/2024/02/04/go2/index.html","83a8e1e77533e4bef30ec6a33eaff600"],["/2024/02/09/go3/index.html","7f70f40387116025ba97e084d8054076"],["/2024/02/12/go4/index.html","fb6df1f42a888b53405dd6daddfe4772"],["/2024/02/17/go5/index.html","515c264053b330cb73a942d1768582c3"],["/2024/04/06/pc1/index.html","d99b9c50dd7d500268edf107bcd83e36"],["/2024/05/07/pc2/index.html","bcce96a82468e38b65d2ac0376286f2e"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","0dcdf2bb5e2d4cc0665f92acbb3b07ca"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","1b200092faf84370349bb507a70c576a"],["/archives/2023/11/page/2/index.html","16c83ba3f0ac3fa7b6db48ba8ce17e4d"],["/archives/2023/12/index.html","903720370ede43b3f68b04531ae571b7"],["/archives/2023/index.html","1ce6c7601bc0d3c780719cc963e2c408"],["/archives/2023/page/2/index.html","5914f94ab0801bb3d64e4efba1f54ade"],["/archives/2024/01/index.html","aadc66b07c9a0c37b2cabefc35f0b904"],["/archives/2024/02/index.html","93dad297259d0944c232059adf437658"],["/archives/2024/04/index.html","e0daaaaa4f434b46016ce55712905085"],["/archives/2024/05/index.html","5a445d622d5d4b9897b3a70e0321a9a2"],["/archives/2024/index.html","7c296dd390e87a99c6f6525a36107a7d"],["/archives/index.html","c0148139ea04ff514a415c381903d825"],["/archives/page/2/index.html","6ae75e1fc2251b922017ae3c7e7db1ab"],["/archives/page/3/index.html","4ed29e1e07fd984c63e57eb14fabbe7c"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","fbb7896a1c24f9737fbcc8f194daa9ca"],["/categories/HuggingFace-NLP/index.html","ac7a5a6321f941d338beb0b07fc58ec4"],["/categories/index.html","fcc577220a0408d37973690e1a12df59"],["/categories/前端/index.html","fc365d721c4a798db76d9e5e6f05b928"],["/categories/对话系列/index.html","078f1429a2b6a769f3ff94c8cfd1ee2c"],["/categories/教程/index.html","b94c8ae95f0b68b93e0615b845e8c007"],["/categories/杂谈/index.html","84ba069ddeba0f391ff7a70a5ced9173"],["/categories/杂项/index.html","c6782e1acf6a42de38a685b19b9f86a0"],["/categories/测试文档/index.html","60a56c8c3a2feb2857526348bda8a003"],["/categories/深度学习/index.html","f8c9d6591b7194b616cf9afa97491797"],["/categories/网络爬虫/index.html","57082ef32f70c955b1f48ab578428552"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","32ca482424d1f01ef4886e9cf610dcad"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","910f60bfa5c6054be516ba307a742aa6"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","1a37ed85f65f86ac122bbd796df0112a"],["/page/3/index.html","808d060264fd94f9d766987dd19efe03"],["/sw-register.js","a9a3a8b4c9e9d541195839dc2f9dd812"],["/tags/Gin框架/index.html","b733cc010e6d3cabb34826e7a571c632"],["/tags/Golang/index.html","57c93808660c9d94d4a64736eb242c21"],["/tags/Gorm/index.html","5e1702403a467caaecd75bf0d1c4a912"],["/tags/Go语言/index.html","6dbb06472dd4e46b292db6276c80627f"],["/tags/HuggingFace/index.html","091950a49efa196fc6ad6b6afdea0cfd"],["/tags/LLM/index.html","c8b6929fe216512cbff9ea11b8137287"],["/tags/Linux/index.html","020a7eb91740727822b275d2136a3163"],["/tags/MNIST/index.html","fb818dd6fa4503193a6a76b252eaa625"],["/tags/Mirai/index.html","c94c37fba2c3aae238c72f65edf15573"],["/tags/NLP/index.html","fb80948cf401f666078e6f7595c9a791"],["/tags/Pytorch/index.html","830f77276afc86139028eef22cc079a1"],["/tags/css/index.html","5f05cda47dc4d874bc10abd6e7fdff74"],["/tags/html/index.html","aadc9ef3d2e55c60cb68663b1836a715"],["/tags/index.html","a72fe8356856c4d250bab4e78e2ca1c3"],["/tags/python/index.html","40ecdfcdf2baf69c6acf1c36a8364ac1"],["/tags/前端/index.html","ac59474dd0d62a87f1de5c18acfd6c80"],["/tags/大语言模型/index.html","8b624680a8034a49fefb3775eaf5e9ee"],["/tags/张量/index.html","0672eb1a28e376c958d769879dafd543"],["/tags/数据处理/index.html","e39abb0ad8cbeecdfec80329e2ece4ec"],["/tags/数据库/index.html","013ad93dfad6d52b08eed629fd44a771"],["/tags/测试文本/index.html","63cf9ca73d52686937489f1371086b48"],["/tags/深度学习/index.html","942093da55e9d0dacab4a91a7433719f"],["/tags/爬虫/index.html","0f2a6357e1a295bdea993bb9970184a4"],["/tags/神经网络/index.html","a3bab0e05a17fc14a7f3e29e480da419"]];
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
