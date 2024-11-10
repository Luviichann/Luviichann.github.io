/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","41e8b2096dd1794120846ff537779838"],["/2023/11/05/测试/index.html","d2f67499203c8d91ec2df7c3fffb7f7d"],["/2023/11/06/1tensors/index.html","461de366fa969e446cc63ddbdc2d0c77"],["/2023/11/06/blogs/index.html","3bca211609f05f1597e27475abdaefa8"],["/2023/11/07/nn/index.html","5480f08072281e6449dd856313a6d909"],["/2023/11/10/MNIST/index.html","22e73818466014691a12cfaa4f36dc36"],["/2023/11/10/datapr/index.html","23cf27c95f941a66c3f58c52d52a0fb4"],["/2023/11/12/css1/index.html","195a4963b144332e9fc9cc62401c5324"],["/2023/11/13/css2/index.html","b68e0952eaceaceb882b39b739d68937"],["/2023/11/15/css3/index.html","aaf04f04470ef1abfab9bc5c73b99f2c"],["/2023/11/16/huggingface1/index.html","9a4b9ea9f85ed8643b52897959a0d87a"],["/2023/11/17/huggingface2/index.html","9dc8a20884519b9eaf0c74e3cab32a58"],["/2023/11/18/huggingface3/index.html","c64a2f6d275a025d00ff60f0a6442f2c"],["/2023/11/19/huggingface4/index.html","f49379f48de1fe1898e81c0223ba549c"],["/2023/11/24/css4/index.html","5a8805f2c1081a97d628833d7c570650"],["/2023/11/26/ssn1/index.html","dee107d864f10fee522b6ae274b152ea"],["/2023/11/27/miraiqqbot/index.html","2b81e66e77e50564bd396d4b53285b2e"],["/2023/12/21/ssn2/index.html","2ba842956986bd5e339d89bc52a6383d"],["/2024/01/02/llm1/index.html","661aa6872d6db4b97e332b12f10c69a7"],["/2024/01/20/go1/index.html","492da57a18cfa3ce2db934b8823d16db"],["/2024/02/02/zt1/index.html","1ce744874caa4cbd062ada673ca00ee9"],["/2024/02/04/go2/index.html","f1ccea52cca4b63837e2bd79599a1b3f"],["/2024/02/09/go3/index.html","d86b970b4ef8c83efe51c332a9b1b5fe"],["/2024/02/12/go4/index.html","cbf396f68135ce11dc1680b78039867c"],["/2024/02/17/go5/index.html","5f86eaedec77610445f358910c3e7748"],["/2024/04/06/pc1/index.html","26189706e261d5ce8c5cd784096203c8"],["/2024/05/07/pc2/index.html","1700e27e27882541a55eb0aedc7fa018"],["/2024/05/19/htp/index.html","39f9d13baf4770fc8735fbd0c8c91d50"],["/2024/05/21/go6/index.html","adeff5f065e405dc0ab8af5527e47c99"],["/2024/06/03/ssl/index.html","4b3673d9a7d00da3099c1edf13fc9531"],["/2024/06/24/cursor/index.html","7e405b9e0fd4368a504a8e419a0c373d"],["/2024/06/25/clslinux/index.html","0c65a882f5167c9b0e6ddb0c5ecf06b1"],["/2024/07/23/live2d/index.html","5bb669d38fbc7b4163842b8e73862c6b"],["/2024/10/04/kfzx/index.html","a023acdd3a3618d96d60687a83164eaa"],["/2024/11/07/daye/index.html","6735081973020faa96e72bd9c42f9ca6"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","8e252c07ec76ea7921271839552826b6"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","c61feb3fd5698f73938b673c49a0352d"],["/archives/2023/11/page/2/index.html","3b17e9fd181d07d77ab8ce60d474e89f"],["/archives/2023/12/index.html","4df619e84a7acad92236fe116b3617c6"],["/archives/2023/index.html","83c20f52cf39025df833964f61dffd90"],["/archives/2023/page/2/index.html","e62f4acf2e68abe10b906b1ff54d3b0c"],["/archives/2024/01/index.html","690dd43c757bf5baa5c3458ecb0c3124"],["/archives/2024/02/index.html","2015e114be8cc6a79eed56cbec9d5dd7"],["/archives/2024/04/index.html","bbd8540b09f8a7e175c21ad95dd9f242"],["/archives/2024/05/index.html","b7911721b67639d22c629970e2db5633"],["/archives/2024/06/index.html","2419531e51062be385b6e21c737cdcd8"],["/archives/2024/07/index.html","e44e51390c2226c63000c49466953fef"],["/archives/2024/10/index.html","df0b103cb8b92db18bd8aa6af3809b59"],["/archives/2024/11/index.html","cbbb0010e81f9f3a15ba6781d89d426f"],["/archives/2024/index.html","ae408ba3215582f43019decfcea0712a"],["/archives/2024/page/2/index.html","7079acde58aa825bc28dc63d5bed3409"],["/archives/index.html","42c5dd6d07351c16f431c7c3c678d34d"],["/archives/page/2/index.html","6995c360f0c05836cd6834f88f81d751"],["/archives/page/3/index.html","d42d1ef6014360730c4ecb04344d8059"],["/archives/page/4/index.html","cfe447fe1519b40f6d7e7e3d7132ead8"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","0e608e9fcd79680cb35d18f377d439d5"],["/categories/HuggingFace-NLP/index.html","d2fbf145fae7cbf73941f75dd8a3a1de"],["/categories/index.html","caf51efe7625249acc1c41f4e720f2f2"],["/categories/前端/index.html","38dd6a857dd59a5ec23e5feb70976eb8"],["/categories/对话系列/index.html","256d5b8a346da192c6dafb033758ab38"],["/categories/教程/index.html","becaee064b4fb4d9adfa544039394c7b"],["/categories/杂谈/index.html","08f569f3f037495bb967c6ba77e0b935"],["/categories/杂项/index.html","1616003d9a095ca6006e77812e313fc0"],["/categories/测试文档/index.html","93bb601800436065df4beb7c22b398f9"],["/categories/深度学习/index.html","05bdbb374a176ac58c87b76f8ffd5bc1"],["/categories/经验分享/index.html","47446ab42ba482eae3c5f570c864416c"],["/categories/网络爬虫/index.html","50e3dc2bfc31246412ea2d81e9ee1f09"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","7f8ae290d4d4b7f6f0778cb9b28259c6"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/clslinux/clslinux0.jpg","4df81190521280de69520c0b009e8b5f"],["/images/clslinux/clslinux1.png","c3321d5f149d272f1a10ab2ec150c820"],["/images/clslinux/clslinux2.png","63ee9a68c861d1aa4a78c9cd2ba142b7"],["/images/clslinux/clslinux3.png","8238df845bd32dd43f323c87eaeb4db2"],["/images/clslinux/clslinux4.png","d582a7db24df865a3213dbcacb5a0955"],["/images/clslinux/clslinux5.png","21b1f5b964c3910936c076fb691a8aa4"],["/images/cursor/cursor0.jpg","f774201001001971eac95fa43242ce7e"],["/images/cursor/cursor1.png","5098299f84539d49ae8e80d3c2b3e73c"],["/images/cursor/cursor2.png","4e72b0dc17312fdf680fb155dcadc6e9"],["/images/cursor/cursor3.png","236ad4f3dd1d1ebbc2a3239eaf2d6e3f"],["/images/daye/daye0.jpg","a129e4439995d03439f5a245921bb8e2"],["/images/kfzx/kfzx0.png","ad38d78341b62b6bc821fd2d341c7a15"],["/images/live2d/live2d0.png","469daa68d1a08c91375cbe06e87232f2"],["/images/live2d/live2d1.png","40ab8beef1a4da0ccb7a3a6df7cb50f2"],["/images/live2d/live2d2.png","fd5dd6d4ec48377072778d43a951b5b4"],["/images/live2d/live2d3.png","cf1d850ca520f28ee14e476f96c78727"],["/images/net/net0.jpg","7912a54a8c47f3979e10255f730ec31b"],["/images/ssl/ssl1.png","eacca74c8f59bfb4582131362941d4b3"],["/images/ssl/ssl2.png","30e5e1f3f4ed95f1995147d8ecb770ab"],["/images/ssl/ssl3.png","2c69d73a7918cdc790bac1b631914969"],["/images/ssl/ssl4.png","d6d06ee53806442c6aa7b048bce37f48"],["/images/ssl/ssl5.png","d5013e168b274323cded1713995ade47"],["/images/ssl/ssl6.png","ff07c9cc76679d92ed8857bf6628eaba"],["/images/ssl/ssl7.png","4e4a058882c2f7ea9a7a153a2df09a92"],["/images/ssl/ssl8.png","ac2966c2d16e6b4ab6ba898ff3237536"],["/images/ssl/ssl9.png","9bb2f7d3a43159617c7cae352e1c5cad"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","a65d2ec1809f7b91bdaa89c1be1c5064"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","58f483986180e54a35af92e890818e2d"],["/page/3/index.html","7ce94f9ad17ae0eb75b38e2afc5aef50"],["/page/4/index.html","e9c1e69329727b402e67983dcb2a1ec5"],["/sw-register.js","6b985708969f252028ce3a7d56bfe3f9"],["/tags/Clash/index.html","9f9d5bfb2e7c8cb44280e764d42a4209"],["/tags/Gin框架/index.html","930d6b767c481588bb86b8f52fefc0d1"],["/tags/Golang/index.html","42c0d7c87df4617837843e4b1c4d2a9e"],["/tags/Gorm/index.html","f5ac6fe2c8c671e9bfd86c0225e8a683"],["/tags/Go语言/index.html","b45d5d7b0d9a17fb8236265a06aa1e32"],["/tags/HuggingFace/index.html","70912797d0230fb14cdb31f4d742c5b6"],["/tags/LLM/index.html","2e2950ed74a3c6c7331d5f9c14206d9f"],["/tags/Linux/index.html","aa9e10a7b0e232d846146f8ffe984b5c"],["/tags/Live2D/index.html","db75396f6f1b710e4de4c02ae222b7d9"],["/tags/MNIST/index.html","05bf29960c2a59325007a5fae92c2b0b"],["/tags/Mirai/index.html","21065461442cdf60658d37e6e4c40d14"],["/tags/NGINX/index.html","e3e98af59e3438543c33cd4592688199"],["/tags/NLP/index.html","1f3cf970ae860167d8c5ee5a1d68ee08"],["/tags/Pytorch/index.html","5855ddc731659a48c440de0d3816b548"],["/tags/SSL/index.html","71b34c25828cce8b2473328ae05e9b68"],["/tags/css/index.html","23cb3f15d4deea4ebd4e5af832e076a6"],["/tags/html/index.html","e6439e6b40dd3d9a696d18722dbc2b95"],["/tags/index.html","ffe93d007c6f17d8abad5adac699c5d4"],["/tags/python/index.html","5a96c04af31f36b5363089336a0c2ea7"],["/tags/前端/index.html","73618f12989a13e3dc89929567441e64"],["/tags/大语言模型/index.html","d2130ee01735bab47efd05177c22a731"],["/tags/张量/index.html","23354deaaab38d8b10e971dab1d8ad01"],["/tags/技巧/index.html","a0fb48f0d9863e55e9eda3ac1d9f97f6"],["/tags/数据处理/index.html","a0c9ee052683ad0b26afc3c2f8271418"],["/tags/数据库/index.html","362b3bebeb3953b7094bfc522ad44e78"],["/tags/测试文本/index.html","94301a77a50fe5eb10a80d3015f4bdd0"],["/tags/浏览器/index.html","3182c0ce0cdb7eaf7ce25aff284801cb"],["/tags/深度学习/index.html","d5813ebb1c906099e294a63bb37e0e29"],["/tags/爬虫/index.html","a72dcef06b8a58276ade966e53f51a23"],["/tags/神经网络/index.html","309a5bfee674337c8efc0b0111ec4f54"],["/tags/纪实/index.html","3c7c472c7dbbbaa9bceb04eb3c7136a4"],["/tags/语录/index.html","57cbc3be9cb10befa9ae0e5ad4fd99b6"],["/tags/鼠标/index.html","0fb09524f40aaacb9a6c32037829ea3d"]];
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
