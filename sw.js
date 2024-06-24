/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","859214147df327f15a4b8076b4a4e655"],["/2023/11/05/测试/index.html","9aea70a98c631d1273a80b46dd30d03e"],["/2023/11/06/1tensors/index.html","a6a773159dddb0058e2860be37608d3d"],["/2023/11/06/blogs/index.html","81d6d7ba9c98b955d745291e4100f480"],["/2023/11/07/nn/index.html","c011b39bc2ed1e5573947a31693b6c61"],["/2023/11/10/MNIST/index.html","6180f9eebbb1b4de30a10b2c940e866b"],["/2023/11/10/datapr/index.html","4c293c7c5059f7f7ed0223ca5c9dc905"],["/2023/11/12/css1/index.html","103212625096900ffb13118d87d8526b"],["/2023/11/13/css2/index.html","000538b9418c95fc86affdc2b322c0a5"],["/2023/11/15/css3/index.html","f1b11b73ad1f7c70c95aeff4c8afd8ba"],["/2023/11/16/huggingface1/index.html","502b9cd78d0b2a9477f3aa684526b096"],["/2023/11/17/huggingface2/index.html","ec8861d858001f6703b627d1f528f4ee"],["/2023/11/18/huggingface3/index.html","5c8bb4995b6f18bd49873fe46a43f704"],["/2023/11/19/huggingface4/index.html","a33a9d09b269b96066224ab6e706ee2e"],["/2023/11/24/css4/index.html","55f3ca7636d083e7dc0a63eee5286c1c"],["/2023/11/26/ssn1/index.html","ee37aac0eae9b28e523347d21500956c"],["/2023/11/27/miraiqqbot/index.html","1e1dd62af83b7d5d93759ee62b9f395a"],["/2023/12/21/ssn2/index.html","cab3d427afe6b94825ea6765421891da"],["/2024/01/02/llm1/index.html","e75ac1d82713ec2dbb44747533829f39"],["/2024/01/20/go1/index.html","21ae97643c38d1b7d28820bb5f9790c0"],["/2024/02/02/zt1/index.html","e114978ed1bee8b7aec7d917a8b8f5d1"],["/2024/02/04/go2/index.html","0fbfea046d14229cae26cc7ed0b0eb40"],["/2024/02/09/go3/index.html","4284deefa9eb290cab0fa15274a188e0"],["/2024/02/12/go4/index.html","fcd3cb61a6ddc224646f5d7693a16dff"],["/2024/02/17/go5/index.html","68896de1f0a88ab9217e3954af6cb9e1"],["/2024/04/06/pc1/index.html","4fe424c52c2279c2c21672dfd92330d5"],["/2024/05/07/pc2/index.html","2ca24febc4e246cccbc4d3ea2e678704"],["/2024/05/19/htp/index.html","a892fd90685c56506d719af5945c54a8"],["/2024/05/21/go6/index.html","ffce1813de877d2b23bdc43cc61df6ec"],["/2024/06/03/ssl/index.html","c0a14bdf7e39de36195adffceaa6495c"],["/2024/06/24/cursor/index.html","d72462d5acf20c8330703a85c75b837e"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","be0288364011a80afaae97aefbf2e875"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","12e8d6b9f0ce75c7e3f8c57ee50c0799"],["/archives/2023/11/page/2/index.html","01a6c27d38f486f43c3cfee5c1afc765"],["/archives/2023/12/index.html","ecd9fde9ac1b61c8f9ce6f7b3a5e0411"],["/archives/2023/index.html","a95d84d82a24e5ace62db9a60498ac45"],["/archives/2023/page/2/index.html","cd683ac21a1eaac2e682dfc075ad30e1"],["/archives/2024/01/index.html","d8770c89c3141ae8a26ed5329fcf2bb0"],["/archives/2024/02/index.html","a083f8d39b9f299a520640eccc7e60c0"],["/archives/2024/04/index.html","f865c1ce4354f7781d4b92310c5cd2a6"],["/archives/2024/05/index.html","24f1b5224eb3b417e933830473cae731"],["/archives/2024/06/index.html","9275144a5e1200ef41e949f2c95aa2fd"],["/archives/2024/index.html","c216ecae61b3684384eb9df845c08c16"],["/archives/2024/page/2/index.html","6fdd1adfc07ea93c037f3657ed338485"],["/archives/index.html","a1ff434ad9c6df25ec4e6e178bb21297"],["/archives/page/2/index.html","a3bc65eb8524bfe7c71cd97c70df28d9"],["/archives/page/3/index.html","856c4263e3a6e0dcb500caccb0124e9e"],["/archives/page/4/index.html","5b2ddae9cf383bcf54e0760ea5c01044"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","1c4b0b051c3bd60dfc2ef32c32654553"],["/categories/HuggingFace-NLP/index.html","e8e59795da094cddeb26194e7f39beff"],["/categories/index.html","f047dbeb78c0b4001260fe860eaf6f87"],["/categories/前端/index.html","c6104e43affaa26320f2f237e2e11257"],["/categories/对话系列/index.html","ed2dfec01514a515bdf1b602bb73cf58"],["/categories/教程/index.html","743fb71cde8c08158c0205aac97febf7"],["/categories/杂谈/index.html","57e38bf98572be6ad665b79792d10d4f"],["/categories/杂项/index.html","9f9f640b85b82ce0153d71e13ddb4bd0"],["/categories/测试文档/index.html","b8041330dbcde863a92f86dc4c34aafb"],["/categories/深度学习/index.html","675e48e9b4999700e003b35270d85fa8"],["/categories/经验分享/index.html","2129a01b4e21f11e04323ad432016ea1"],["/categories/网络爬虫/index.html","54b30ea424791adc40dfd5ddcf31ace2"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","b2dbbd7a0e59709210a88b74849a2452"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/cursor/cursor0.jpg","f774201001001971eac95fa43242ce7e"],["/images/cursor/cursor1.png","5098299f84539d49ae8e80d3c2b3e73c"],["/images/cursor/cursor2.png","4e72b0dc17312fdf680fb155dcadc6e9"],["/images/cursor/cursor3.png","236ad4f3dd1d1ebbc2a3239eaf2d6e3f"],["/images/ssl/ssl1.png","eacca74c8f59bfb4582131362941d4b3"],["/images/ssl/ssl2.png","30e5e1f3f4ed95f1995147d8ecb770ab"],["/images/ssl/ssl3.png","2c69d73a7918cdc790bac1b631914969"],["/images/ssl/ssl4.png","d6d06ee53806442c6aa7b048bce37f48"],["/images/ssl/ssl5.png","d5013e168b274323cded1713995ade47"],["/images/ssl/ssl6.png","ff07c9cc76679d92ed8857bf6628eaba"],["/images/ssl/ssl7.png","4e4a058882c2f7ea9a7a153a2df09a92"],["/images/ssl/ssl8.png","ac2966c2d16e6b4ab6ba898ff3237536"],["/images/ssl/ssl9.png","9bb2f7d3a43159617c7cae352e1c5cad"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","ace65b2ad1ac478ebd5c692136f4d8b6"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","a9cd2c00b201d3f71c189d4644af2894"],["/page/3/index.html","77f31e0ff234ed0e2ba070c8b131e9ae"],["/page/4/index.html","a00565d262c3ead5e708b14e9cd16014"],["/sw-register.js","10000e3a07bd5a85cb2a541a83829e7a"],["/tags/Gin框架/index.html","699596ba81f5675f75603b48624801ea"],["/tags/Golang/index.html","59728fd2ae19cf60cd372c9932e24c44"],["/tags/Gorm/index.html","96ea2bfe23d8fac4cc48bafc6081548f"],["/tags/Go语言/index.html","3d41bb340b48567e10bdfb1577188fa0"],["/tags/HuggingFace/index.html","5c47a2bf34e9364647450ad767a3987e"],["/tags/LLM/index.html","441f5f98c0e5d633e696bc8be1a38634"],["/tags/Linux/index.html","6e284a5847b76cb27cbaf1437092485d"],["/tags/MNIST/index.html","55440edf49fbca21dd06998567943f05"],["/tags/Mirai/index.html","0c70bdfd426fdd050e956db39cb11994"],["/tags/NGINX/index.html","caf7fae531cb76e7bffc0ad35eac71a3"],["/tags/NLP/index.html","c36086bf9d6888325edaf34e43192c10"],["/tags/Pytorch/index.html","00f9723880c436e59f2a7dc86f858fcf"],["/tags/SSL/index.html","3463607c6873ad5a69b13b8bacd2e5ce"],["/tags/css/index.html","37df90c0aeb0487ddff2555d37fd6ab5"],["/tags/html/index.html","428b756245dc9bbc6e59f66ca1a0a412"],["/tags/index.html","2ad3707d55d0b03e99503dd73892cab8"],["/tags/python/index.html","01888cd55ca9a8a9debd28d1d7702023"],["/tags/前端/index.html","736c38bb632a140dae64fc3fd03ecc71"],["/tags/大语言模型/index.html","6438532e284a9d6a80ddc079ae4ec212"],["/tags/张量/index.html","377ba0252cad743e07f30fc33e6c4992"],["/tags/技巧/index.html","3ce5580e52a6b69a086101268d16f559"],["/tags/数据处理/index.html","3e57f4b1d643f0949f9d1be2967ed9ef"],["/tags/数据库/index.html","21280415b0d834818c9f3221030563f1"],["/tags/测试文本/index.html","3add68877baedfee9dca33dd0a3ffd57"],["/tags/浏览器/index.html","397cf47a1882d63ed00a4cef03266cf4"],["/tags/深度学习/index.html","ddd5fc7ccba22939552a0c34cbb7e309"],["/tags/爬虫/index.html","25103432d8ce95c822af7616ad9cc293"],["/tags/神经网络/index.html","484ebf71c26a2fb01ef87d19fdbc9667"],["/tags/鼠标/index.html","1bbe7cd147fa5e5faeead8ebeab4b648"]];
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
