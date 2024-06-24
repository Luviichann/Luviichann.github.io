/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","19a215b49b80b21908dfbd63b6dc0db7"],["/2023/11/05/测试/index.html","2cb619c546b027f6ee4627ce295a4a21"],["/2023/11/06/1tensors/index.html","9c4eac118618913889833cba93281002"],["/2023/11/06/blogs/index.html","f81da8fdc1a946eca0c0550a21bcc9c7"],["/2023/11/07/nn/index.html","e1bb5bbc54aea7e9bac0c14e1011fd93"],["/2023/11/10/MNIST/index.html","74c63489c1528ab4c7c0b9b15f07ba28"],["/2023/11/10/datapr/index.html","d021025035f0b127ecc3c1e903a34a3f"],["/2023/11/12/css1/index.html","cb8fcb88af541d459c112bbe60d79682"],["/2023/11/13/css2/index.html","005485c69873399ec49884c7f102b635"],["/2023/11/15/css3/index.html","83e0060c284dac4eeb512b59762c1cac"],["/2023/11/16/huggingface1/index.html","abd6926e22f5c5ac96972496b727592f"],["/2023/11/17/huggingface2/index.html","75911e03e6a21cc52f63c799e9a81a3f"],["/2023/11/18/huggingface3/index.html","4795ffa871ebbd5ea3fb794ac7165d5b"],["/2023/11/19/huggingface4/index.html","0852a79f3b7c9c9c67ea750335fb96c6"],["/2023/11/24/css4/index.html","a8f45878d7bfa5ac7502c7a63ee0a517"],["/2023/11/26/ssn1/index.html","43299ece6f5546a210f4ef5ed71e3ef6"],["/2023/11/27/miraiqqbot/index.html","d43aff3319a969864706731ae3d18d6b"],["/2023/12/21/ssn2/index.html","e0d3a2aa49d2962bced60d002270704b"],["/2024/01/02/llm1/index.html","8bc9db6ebc2da7e901133603274563e6"],["/2024/01/20/go1/index.html","263f12e0a5f7ed8c4691365133d374ab"],["/2024/02/02/zt1/index.html","a235640833a2804e2e69df8ed6341f36"],["/2024/02/04/go2/index.html","8cf12bf319cfed4cf24bd967726588e4"],["/2024/02/09/go3/index.html","83fdff45b48e8020088d8e65e15e03a4"],["/2024/02/12/go4/index.html","7d91f658fc3c8075af5fe7b3403e49f1"],["/2024/02/17/go5/index.html","4cda5747d43379dd802676f13fa47caa"],["/2024/04/06/pc1/index.html","2ca7e9c05921b9970a8af28c8f15490d"],["/2024/05/07/pc2/index.html","966ee1a8ba29b6546db12c26fbca47dd"],["/2024/05/19/htp/index.html","5c58298ceb9a051e950fe0fb3b637571"],["/2024/05/21/go6/index.html","ce60b5e9fc95435d97e1a9eda5cbdd41"],["/2024/06/03/cursor/index.html","6ba87fe09d9375fca148de734c7d7d65"],["/2024/06/03/ssl/index.html","8b83a411ef38d63ef8ed654deeea79e5"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","f0abcbdcd398b5201aedeafb6eaceb38"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","a0672067cd885bfce25ecd3246e09978"],["/archives/2023/11/page/2/index.html","5bb97bc039d977c2a26b2d71905613f8"],["/archives/2023/12/index.html","4194d5e5d278981a334863014396e4ba"],["/archives/2023/index.html","ce11b72940af3bd7771b839c94d9f2f5"],["/archives/2023/page/2/index.html","619c2d4a1d16b6660c189f3d44dcc7fc"],["/archives/2024/01/index.html","ab100e0bb0e44be499a26de6f7d0effd"],["/archives/2024/02/index.html","a53c39198d3193b733bf585c6b8580d5"],["/archives/2024/04/index.html","d68c95cebdc9386d70845be25f244bb2"],["/archives/2024/05/index.html","9d973faf43586900a2d6e6540578a2b6"],["/archives/2024/06/index.html","a3733990a33f71b2191b37f6dfd5dce8"],["/archives/2024/index.html","4a2d9d727d710e385636055c4c78aaeb"],["/archives/2024/page/2/index.html","18682f1435a57aa2f8611afd2468fcfb"],["/archives/index.html","fb56721653e18ceae17fe74ddbe16f74"],["/archives/page/2/index.html","f89601eab894e7fd8186bd81650da345"],["/archives/page/3/index.html","bf098a9be2b56e5179cc45c192d52cab"],["/archives/page/4/index.html","ece299b6acca98b5dd01030b50d4c48e"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","dca64a1d36d439af138734e37136443e"],["/categories/HuggingFace-NLP/index.html","5537343959305a7a31f930cb3ee034c6"],["/categories/index.html","0f92b6c0c188877d8e8be6ccc5512ca3"],["/categories/前端/index.html","e55ae68fd5468714a673fb203fb19e13"],["/categories/对话系列/index.html","c61bdf94ccaf1afebdb343afbe8ae6fd"],["/categories/教程/index.html","2adf9818ea49e631b8ca7b4b15ff4cdd"],["/categories/杂谈/index.html","b3d237d3853bd0f7b9a09f1071c3ce4d"],["/categories/杂项/index.html","b133d6eb3b8ab92237d3ccbdf94075ba"],["/categories/测试文档/index.html","1a402e62151d69bcc1b1b75a0ae884df"],["/categories/深度学习/index.html","51d7187deeff87531e0e41ff40b4ba50"],["/categories/经验分享/index.html","2a373b24a3727fe7a057037eaf6c44a2"],["/categories/网络爬虫/index.html","639364468cafa5df6f8bef4db4248f57"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","d10ba743536d04e7332189f7dd6b1d1b"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/cursor/cursor0.jpg","f774201001001971eac95fa43242ce7e"],["/images/ssl/ssl1.png","eacca74c8f59bfb4582131362941d4b3"],["/images/ssl/ssl2.png","30e5e1f3f4ed95f1995147d8ecb770ab"],["/images/ssl/ssl3.png","2c69d73a7918cdc790bac1b631914969"],["/images/ssl/ssl4.png","d6d06ee53806442c6aa7b048bce37f48"],["/images/ssl/ssl5.png","d5013e168b274323cded1713995ade47"],["/images/ssl/ssl6.png","ff07c9cc76679d92ed8857bf6628eaba"],["/images/ssl/ssl7.png","4e4a058882c2f7ea9a7a153a2df09a92"],["/images/ssl/ssl8.png","ac2966c2d16e6b4ab6ba898ff3237536"],["/images/ssl/ssl9.png","9bb2f7d3a43159617c7cae352e1c5cad"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","7a26ab78183cc84a07a9158c684fdebd"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","d86fe9b60e72f92ab31cdf6a4fb28c49"],["/page/3/index.html","23c1e91699d0b7e4e0c796aba7631f35"],["/page/4/index.html","c783ebfca8a2e2fcff2bba16780a6803"],["/sw-register.js","81a17f43e7390055ab0778abe1930758"],["/tags/Gin框架/index.html","46fe6c34e1d648e4b4b41e6cfb324d55"],["/tags/Golang/index.html","384a52b1d31bc255f885521a088aaf91"],["/tags/Gorm/index.html","e649c17e9f513c30905e053fa0449017"],["/tags/Go语言/index.html","8763293bb9f8edcd08901453d718e27a"],["/tags/HuggingFace/index.html","42696874a7ff8f33564eab23718b94f3"],["/tags/LLM/index.html","21bbafd55dd1764f37d33418e7ea6748"],["/tags/Linux/index.html","31f40f46c57a2d8d09226bea0003e072"],["/tags/MNIST/index.html","fdbebbd784dad3ad1e3ebf91a6533b81"],["/tags/Mirai/index.html","e9f098ab674d817ac16dad98ab5ae591"],["/tags/NGINX/index.html","890b64300763351894e60280b0db7853"],["/tags/NLP/index.html","40d374229aed730e0332526c301728e0"],["/tags/Pytorch/index.html","8695a7b502cb6454998be8ee2db5eccb"],["/tags/SSL/index.html","235c3c040074a48c148a4780c75ef741"],["/tags/css/index.html","08cc10ac3266376a7a75bf951cc79a0c"],["/tags/html/index.html","79b100fb7c400cf371819678fda2af3d"],["/tags/index.html","edd7758fb43b5695a014e47384825616"],["/tags/python/index.html","51873cc07112c5f576025f81c9ca10c5"],["/tags/前端/index.html","35ad6a7a76c3b602ebcaad288a1b31aa"],["/tags/大语言模型/index.html","b1db9e9da2fb5994c0e96885ce73f354"],["/tags/张量/index.html","2de010b833aae68001132a95a6294cc9"],["/tags/技巧/index.html","4117e28df660245d2211311b521cbe2b"],["/tags/数据处理/index.html","c22ef6702934d78d5a22db034c2e876e"],["/tags/数据库/index.html","cfb82bd047524674de7dde6b86c0cbac"],["/tags/测试文本/index.html","7163df8070d6541bd290a89d537a1cca"],["/tags/深度学习/index.html","739fa1f5664ffac56ccd529125fcdde1"],["/tags/爬虫/index.html","90e91fa9110b1c5bde984954d4748f02"],["/tags/神经网络/index.html","72eb23498c5b376d73b1e922da7eec7d"]];
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
