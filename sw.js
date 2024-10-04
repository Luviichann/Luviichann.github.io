/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","58599ab8699f0ab13377a7f9f22baa19"],["/2023/11/05/测试/index.html","af5a00bc3b24ca18f20afbd6f489a20c"],["/2023/11/06/1tensors/index.html","ac6704cc579d15a7fdfb2021882a5ddc"],["/2023/11/06/blogs/index.html","6d0dd21b8d5f9071192bb080ff9c4567"],["/2023/11/07/nn/index.html","aea5693de31576986624b22ba3e48a24"],["/2023/11/10/MNIST/index.html","bfcee727841b55212a494d88bac60a00"],["/2023/11/10/datapr/index.html","37e3a9a66c3fe8cea500c31f04971712"],["/2023/11/12/css1/index.html","a1a83b01bf64c40e828b390dffdc35d4"],["/2023/11/13/css2/index.html","06adec89f019dbcf917227e977c24346"],["/2023/11/15/css3/index.html","308584b7bfb8a0febf63306693077af2"],["/2023/11/16/huggingface1/index.html","2fa8dfbc8616f43688c0ddaaf6195a34"],["/2023/11/17/huggingface2/index.html","111f86d06d90d46143f469c4d71116f3"],["/2023/11/18/huggingface3/index.html","d4e4df4155b4a283ba30e3b8338972ce"],["/2023/11/19/huggingface4/index.html","19e558bf669c6b3310df5ab42881cec5"],["/2023/11/24/css4/index.html","7f5b691e83eabc9487fdb90e46f1bd61"],["/2023/11/26/ssn1/index.html","291c215aa536ed6f7ee4e09427d0144d"],["/2023/11/27/miraiqqbot/index.html","3534ce4e23c6945f8d613d88e5c6560e"],["/2023/12/21/ssn2/index.html","3e0d92a4c59d49b5d9c7b6a80adae760"],["/2024/01/02/llm1/index.html","1c2a6a179728f9d3043cfd6a17d54521"],["/2024/01/20/go1/index.html","14d9c260bff86af51ad1534b24f1c939"],["/2024/02/02/zt1/index.html","3161386c418b528888314d08ec784852"],["/2024/02/04/go2/index.html","89d93e1f9ee6906327352579ddbabab2"],["/2024/02/09/go3/index.html","fe78aa9c5643ec78e832617bfa14aee0"],["/2024/02/12/go4/index.html","698a6500df1d8afed6d9c37e010ac7cb"],["/2024/02/17/go5/index.html","6ee26e4fc028aba7771564fedc803e6f"],["/2024/04/06/pc1/index.html","062c699c813f4d9bb8b295bf5a9f1ee7"],["/2024/05/07/pc2/index.html","e3456232b45df5a032ebc786a4b35369"],["/2024/05/19/htp/index.html","8e8c4ff9f99255ae2d18c259477a2804"],["/2024/05/21/go6/index.html","d4f9d74d95d9b62139b7f743eee91d30"],["/2024/06/03/ssl/index.html","9ac52f622c116d3a68dc685e00df5046"],["/2024/06/24/cursor/index.html","a9fc4935c49620afda6207a479e6999a"],["/2024/06/25/clslinux/index.html","6fadea5149b1ce7c75d433468e6e53f6"],["/2024/07/23/live2d/index.html","41ae908619446df91677f88ea8a63f00"],["/2024/10/04/kfzx/index.html","fcae1ed3574a441f810ccd764c63fbb4"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","ba62343c37b38dab06994f6d07725f5d"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","5995dc9192f07605f7caf8d7349454e5"],["/archives/2023/11/page/2/index.html","f32217da90692baf5c5d0a9d323ad0de"],["/archives/2023/12/index.html","ed082a5e00bc73bb95bbcd5c1852cdf9"],["/archives/2023/index.html","a4a9da3b4b9209d93c1fcd59bd167085"],["/archives/2023/page/2/index.html","08e6f9f9aba46b5d16679794a6c422a7"],["/archives/2024/01/index.html","2eee7fb37c644c2489de8fd80b786064"],["/archives/2024/02/index.html","a9a632e43a91f91b8c5d93ff73195666"],["/archives/2024/04/index.html","8667458daed82b1d968f43650c738e78"],["/archives/2024/05/index.html","357bc718ec53952b0cd72e558a55ed2a"],["/archives/2024/06/index.html","89df7d51328c899dafa2ec99a0cb2006"],["/archives/2024/07/index.html","23d6e924b91bfd7b1ba7bb854d921c0c"],["/archives/2024/10/index.html","d8bac2571e1c7ce6d1bd4a5148898bd4"],["/archives/2024/index.html","59e0b70fcb382fbdcfc5c2b2f7fdc36a"],["/archives/2024/page/2/index.html","e6ba71dd1f4b5a1eb7c4dc02d8e0de5d"],["/archives/index.html","011066f5f485c1977d1d2fbdb3752393"],["/archives/page/2/index.html","d8c7a1465e743a28aeba61a1961f47c6"],["/archives/page/3/index.html","37e5af318792314e5b64bc3dd05cd145"],["/archives/page/4/index.html","81d8e4d1d5313cbe5b3f4abd228d316d"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","06a26c2bcff02071efedbe1c29642407"],["/categories/HuggingFace-NLP/index.html","d1cd1fe47453e924735e9f8010cde2dd"],["/categories/index.html","771a29bd290122e3c015069b1cccf168"],["/categories/前端/index.html","0831d6993e36c197405dc37a0bb9f145"],["/categories/对话系列/index.html","786f10419cb70396ab9126a9c220a39e"],["/categories/教程/index.html","07b1603748a8828df6cfddcc0fc2b7c8"],["/categories/杂谈/index.html","a6a3de2bc12a28653ee782ec1cf53450"],["/categories/杂项/index.html","85a5516bbe791c2d3bd9442da0bc209d"],["/categories/测试文档/index.html","019989b173b41855126e95dc68617a44"],["/categories/深度学习/index.html","aabeb487ed32b6ad428d36efb6b74e79"],["/categories/经验分享/index.html","85e8390a8e97adf81109cd265806480c"],["/categories/网络爬虫/index.html","2d61b206fce8dca6f6ad2a9d7d3bb913"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","e2ab41674a734fa0ea032fa75701af5c"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/clslinux/clslinux0.jpg","4df81190521280de69520c0b009e8b5f"],["/images/clslinux/clslinux1.png","c3321d5f149d272f1a10ab2ec150c820"],["/images/clslinux/clslinux2.png","63ee9a68c861d1aa4a78c9cd2ba142b7"],["/images/clslinux/clslinux3.png","8238df845bd32dd43f323c87eaeb4db2"],["/images/clslinux/clslinux4.png","d582a7db24df865a3213dbcacb5a0955"],["/images/clslinux/clslinux5.png","21b1f5b964c3910936c076fb691a8aa4"],["/images/cursor/cursor0.jpg","f774201001001971eac95fa43242ce7e"],["/images/cursor/cursor1.png","5098299f84539d49ae8e80d3c2b3e73c"],["/images/cursor/cursor2.png","4e72b0dc17312fdf680fb155dcadc6e9"],["/images/cursor/cursor3.png","236ad4f3dd1d1ebbc2a3239eaf2d6e3f"],["/images/kfzx/kfzx0.png","ad38d78341b62b6bc821fd2d341c7a15"],["/images/live2d/live2d0.png","469daa68d1a08c91375cbe06e87232f2"],["/images/live2d/live2d1.png","40ab8beef1a4da0ccb7a3a6df7cb50f2"],["/images/live2d/live2d2.png","fd5dd6d4ec48377072778d43a951b5b4"],["/images/live2d/live2d3.png","cf1d850ca520f28ee14e476f96c78727"],["/images/net/net0.jpg","7912a54a8c47f3979e10255f730ec31b"],["/images/ssl/ssl1.png","eacca74c8f59bfb4582131362941d4b3"],["/images/ssl/ssl2.png","30e5e1f3f4ed95f1995147d8ecb770ab"],["/images/ssl/ssl3.png","2c69d73a7918cdc790bac1b631914969"],["/images/ssl/ssl4.png","d6d06ee53806442c6aa7b048bce37f48"],["/images/ssl/ssl5.png","d5013e168b274323cded1713995ade47"],["/images/ssl/ssl6.png","ff07c9cc76679d92ed8857bf6628eaba"],["/images/ssl/ssl7.png","4e4a058882c2f7ea9a7a153a2df09a92"],["/images/ssl/ssl8.png","ac2966c2d16e6b4ab6ba898ff3237536"],["/images/ssl/ssl9.png","9bb2f7d3a43159617c7cae352e1c5cad"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","2e17c68aaf878c8ec47ddaeba75b91ca"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","677451cf0d9e0666fc2f833a0e1775ea"],["/page/3/index.html","b7e9b5482f4b270132b9d5d2c99ce321"],["/page/4/index.html","280673d49e39bc42f1f5f5920b55ac62"],["/sw-register.js","974a1256f0b3e9b9d6055bf0a0a4bf85"],["/tags/Clash/index.html","20850c4e10dfa263495da609e2ef0fb6"],["/tags/Gin框架/index.html","1d855ac56fafd9537007442eb1214e34"],["/tags/Golang/index.html","02984898cbca8240faac58403afeac2f"],["/tags/Gorm/index.html","8b3e2282de38893ddb342f0e73b956d2"],["/tags/Go语言/index.html","03790c6abc7ad183a20ec953ebc0cba2"],["/tags/HuggingFace/index.html","5979fcbc87c88eeccd16ccbfe5adfc2a"],["/tags/LLM/index.html","03a826627f70ea38967dd037b450117f"],["/tags/Linux/index.html","3e27e40a3d181c336b8eefbde75877ce"],["/tags/Live2D/index.html","62fc25aebfcd7a36013634effd99573b"],["/tags/MNIST/index.html","13bad5b43e4f18d999b1274cebeb4a9d"],["/tags/Mirai/index.html","dba6b5a331c4c25d355c9d521a95183f"],["/tags/NGINX/index.html","4be8666765edb5945b32eb7edb802205"],["/tags/NLP/index.html","2f6878a29f847833ae8e544d62addfa9"],["/tags/Pytorch/index.html","5d6dfd44ede29244e84cb7b28b4948c6"],["/tags/SSL/index.html","47ed1e3dc9fa42080080d22d9adfa3ea"],["/tags/css/index.html","b176aa01d30ee8c55d99a83060649146"],["/tags/html/index.html","316f9f38ae984686a001034b135042b3"],["/tags/index.html","e458ac1b76d93123e2e58d5cff6fb259"],["/tags/python/index.html","a2e4eb8a83690aea3e2c7a886d484e81"],["/tags/前端/index.html","05b7427b5a6951e55b68ffbae252b945"],["/tags/大语言模型/index.html","a4bf799b724679015402338868bdefe3"],["/tags/张量/index.html","dd1dbbb4918608d908b74f40818ea07e"],["/tags/技巧/index.html","7acdce12c0effd4530d5de85441846aa"],["/tags/数据处理/index.html","25c2345ebde3c50b74bafe6df4091cd2"],["/tags/数据库/index.html","74f771a20d8d3637803d1acbac43c41c"],["/tags/测试文本/index.html","5dc7cca014c9fb6190ae4b239baa631d"],["/tags/浏览器/index.html","9615fb86ea092d4d40b7dd0bc0279e01"],["/tags/深度学习/index.html","ee7769aebb485258a12863b35871a03e"],["/tags/爬虫/index.html","afb5f81aabe5d186707ed28fa333aad6"],["/tags/神经网络/index.html","eac4133e992c5703d92ddf8e4047328b"],["/tags/纪实/index.html","b62691b21da7b14fd908f58a1f943d34"],["/tags/鼠标/index.html","3d6ceb24e38b5ad5757d92229b91aa78"]];
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
