/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","88280f79ec8414ee5fcb2a138be572f1"],["/2023/11/05/测试/index.html","a42734a3cb53846a1a39ce90cef65f04"],["/2023/11/06/1tensors/index.html","a25896ecf05590754992866c16dfec2e"],["/2023/11/06/blogs/index.html","6f57e9e17a0c3f40b0102adf0efbf696"],["/2023/11/07/nn/index.html","9cca81c3845c05b6ccd39205c2ada0f0"],["/2023/11/10/MNIST/index.html","50589d4a9412e4df6b5eea9fc1327672"],["/2023/11/10/datapr/index.html","fcb765868acbc6cdc4f51dd56b9c631b"],["/2023/11/12/css1/index.html","a6f2af37cc3f923c2023e7c87ab6337a"],["/2023/11/13/css2/index.html","3dfc8549278102ca058ef9163f25ac91"],["/2023/11/15/css3/index.html","2b8b462764963edb61d0a99af54ec53c"],["/2023/11/16/huggingface1/index.html","a07c92d0a5011ed75f7dc841e1b7851b"],["/2023/11/17/huggingface2/index.html","6a78c108b496e68a062970ce2e697c96"],["/2023/11/18/huggingface3/index.html","88b211219236a12c605449035ad19e5f"],["/2023/11/19/huggingface4/index.html","a96481ae66df71c8e3c3b6c34fa2b04b"],["/2023/11/24/css4/index.html","3fdc53a7fec9086e02fa0e441fb09606"],["/2023/11/26/ssn1/index.html","983384065b5c2fc2ccbeb6a2ca9516dd"],["/2023/11/27/miraiqqbot/index.html","5c6adb022e39c68b8dce9106be13130f"],["/2023/12/21/ssn2/index.html","07469409b88c6a40c16d35cc6691ff9e"],["/2024/01/02/llm1/index.html","34513ce0ed9abd21f128b7a725b9f4d9"],["/2024/01/20/go1/index.html","7c2647b2a677ea6407b68a2882c250d8"],["/2024/02/02/zt1/index.html","42a0ce2e5818e6b33eace5734a2e2681"],["/2024/02/04/go2/index.html","3d6ae84e83c0938d98b2f94d456e1116"],["/2024/02/09/go3/index.html","18869faee12427cb0fd2ddc907fd0786"],["/2024/02/12/go4/index.html","8383979362aaafed40f7b38ac8d4a439"],["/2024/02/17/go5/index.html","3155feead16a81580da79a6b622c9fb3"],["/2024/04/06/pc1/index.html","a5ddacd241e778e661ab3b579921f522"],["/2024/05/07/pc2/index.html","94387aea36377130d6d4ac100732c83b"],["/2024/05/19/htp/index.html","f8ed8e9d2eeca1dd003b96125f4b9170"],["/2024/05/21/go6/index.html","6cd5fba8953907d8516d1c8702db1f93"],["/2024/06/03/ssl/index.html","9940e5df581d7fa8b736e3509ad174e3"],["/2024/06/24/cursor/index.html","a11c351244eaa3dde1bf1c8675f24140"],["/2024/06/25/clslinux/index.html","84ca73e8a6521d929e358b8b141fc8b2"],["/2024/07/23/live2d/index.html","f214770c7b979f24be6b519349983ae7"],["/2024/10/04/kfzx/index.html","fa63fe7bc1d8e45d839797c4f86091d2"],["/2024/11/07/daye/index.html","7e4c2e3ab28dbcce6202b0e71dceaa5c"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","cdcf7107d36a4a6006dd15c79afdbf47"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","8c470d6624088147ea59ce40f54a3ecb"],["/archives/2023/11/page/2/index.html","2ee7345c818ce194b7eaa8b9d8815e27"],["/archives/2023/12/index.html","4891e32991cd253fbf9f0e429e89a577"],["/archives/2023/index.html","dfe3c023ec318642199d4886d4c8a012"],["/archives/2023/page/2/index.html","2db5da80d3dcb9e6765f5c815aa9ca4a"],["/archives/2024/01/index.html","f7a82b33d68ff1c605eb190c55ad8ea2"],["/archives/2024/02/index.html","e2edab79c5fd31afb8beb68b43fa8c3c"],["/archives/2024/04/index.html","79f55a5d282bd19f34cd28a0a33c0345"],["/archives/2024/05/index.html","31d8ecdc44fff1a555ca01b5017c0c9b"],["/archives/2024/06/index.html","340ac9dab3efc367500e2950edea0f3b"],["/archives/2024/07/index.html","25fae602936a657924453bcfc1bef044"],["/archives/2024/10/index.html","27f423b750c0d9556d77dbdfbb4a0cc7"],["/archives/2024/11/index.html","309bae853e98af49790751c3e16be9ba"],["/archives/2024/index.html","0e03955857bba665360f72dce5f6d7f8"],["/archives/2024/page/2/index.html","cab1737437bbbd4600c4ca535be48d3f"],["/archives/index.html","9eb2db310192144886e16c84185060b8"],["/archives/page/2/index.html","04cca40abf08c89a349cc146038d41bd"],["/archives/page/3/index.html","d35ef098fbfa690290da4e150138f48b"],["/archives/page/4/index.html","6057019948b3ec419f1b6ad4702bff24"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","b9fc72d1ec3ac9bb16f73ae398ec8594"],["/categories/HuggingFace-NLP/index.html","b76ddaa4bb254c3b3d18f1ffb283f6ad"],["/categories/index.html","2d8ff15eb6c4ce893fe9a4c129ffe991"],["/categories/前端/index.html","2e871d28d5e3b5f50d1f2ed361d639fe"],["/categories/对话系列/index.html","de24fab30a6e610e6f37fd3014835f9c"],["/categories/教程/index.html","5634ce10fd2d965f1c80a8f962a67938"],["/categories/杂谈/index.html","67d3e77b5a4e1d970572330307028f8e"],["/categories/杂项/index.html","acc63647ec263f8a87a6b0e81348b07f"],["/categories/测试文档/index.html","f6c7f1c427263acc20a929542e2e471e"],["/categories/深度学习/index.html","672b587498e3aea703b84cb5cffa5e8b"],["/categories/经验分享/index.html","74049b86a9ac8d855e70c6d08875bcb3"],["/categories/网络爬虫/index.html","0a755bb56d91bad4348eb1e29e926077"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","4c9ce0ec1023f3836eb96ff0589eb4b0"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/clslinux/clslinux0.jpg","4df81190521280de69520c0b009e8b5f"],["/images/clslinux/clslinux1.png","c3321d5f149d272f1a10ab2ec150c820"],["/images/clslinux/clslinux2.png","63ee9a68c861d1aa4a78c9cd2ba142b7"],["/images/clslinux/clslinux3.png","8238df845bd32dd43f323c87eaeb4db2"],["/images/clslinux/clslinux4.png","d582a7db24df865a3213dbcacb5a0955"],["/images/clslinux/clslinux5.png","21b1f5b964c3910936c076fb691a8aa4"],["/images/cursor/cursor0.jpg","f774201001001971eac95fa43242ce7e"],["/images/cursor/cursor1.png","5098299f84539d49ae8e80d3c2b3e73c"],["/images/cursor/cursor2.png","4e72b0dc17312fdf680fb155dcadc6e9"],["/images/cursor/cursor3.png","236ad4f3dd1d1ebbc2a3239eaf2d6e3f"],["/images/daye/daye0.jpg","a129e4439995d03439f5a245921bb8e2"],["/images/kfzx/kfzx0.png","ad38d78341b62b6bc821fd2d341c7a15"],["/images/live2d/live2d0.png","469daa68d1a08c91375cbe06e87232f2"],["/images/live2d/live2d1.png","40ab8beef1a4da0ccb7a3a6df7cb50f2"],["/images/live2d/live2d2.png","fd5dd6d4ec48377072778d43a951b5b4"],["/images/live2d/live2d3.png","cf1d850ca520f28ee14e476f96c78727"],["/images/net/net0.jpg","7912a54a8c47f3979e10255f730ec31b"],["/images/ssl/ssl1.png","eacca74c8f59bfb4582131362941d4b3"],["/images/ssl/ssl2.png","30e5e1f3f4ed95f1995147d8ecb770ab"],["/images/ssl/ssl3.png","2c69d73a7918cdc790bac1b631914969"],["/images/ssl/ssl4.png","d6d06ee53806442c6aa7b048bce37f48"],["/images/ssl/ssl5.png","d5013e168b274323cded1713995ade47"],["/images/ssl/ssl6.png","ff07c9cc76679d92ed8857bf6628eaba"],["/images/ssl/ssl7.png","4e4a058882c2f7ea9a7a153a2df09a92"],["/images/ssl/ssl8.png","ac2966c2d16e6b4ab6ba898ff3237536"],["/images/ssl/ssl9.png","9bb2f7d3a43159617c7cae352e1c5cad"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","a65d2ec1809f7b91bdaa89c1be1c5064"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","58f483986180e54a35af92e890818e2d"],["/page/3/index.html","7ce94f9ad17ae0eb75b38e2afc5aef50"],["/page/4/index.html","6ed0f19f37f5746da089c80d57ecb665"],["/sw-register.js","0055ffa03a66cf76418a934f432a5834"],["/tags/Clash/index.html","907f62066c4495d9ac997fa50e34b882"],["/tags/Gin框架/index.html","8eff7f7cfc02a44adc3fb05f4595c996"],["/tags/Golang/index.html","4dc6a6b39057bff801c5eafed52b61df"],["/tags/Gorm/index.html","9c8966872d1ee8ba44ccaf0912238754"],["/tags/Go语言/index.html","636bedcafb583d1db5e14d969ce859c1"],["/tags/HuggingFace/index.html","2f61e1b73db4b3a95a66fa0cb4b94e7d"],["/tags/LLM/index.html","7a4217b59031d7acd6f40b86ba4d577e"],["/tags/Linux/index.html","b1e64296ed244d079172d0bf283ef9d9"],["/tags/Live2D/index.html","55d225e2697f18352401bc46f3806189"],["/tags/MNIST/index.html","fc55c0bdd18639e9934439375757af27"],["/tags/Mirai/index.html","ad377ae216780124e9624665ac6bafc4"],["/tags/NGINX/index.html","15735b1a34ee0cbdc3c74befe47b3678"],["/tags/NLP/index.html","511fdfc1d463b5567f5cacbc8efd8032"],["/tags/Pytorch/index.html","2c79036aff7e0cc25a77bd179b3b449e"],["/tags/SSL/index.html","af04e33b3003a8b40db86e16498edf1a"],["/tags/css/index.html","5314cb66c65e8ddefeb26914feab5b89"],["/tags/html/index.html","476bd85fbc79ced95b9d1b8592747997"],["/tags/index.html","e5bc75044e3858c3b7908ae35fac2715"],["/tags/python/index.html","bf31c68b9cf356800bddbb2320b7d8b6"],["/tags/前端/index.html","6cc1fb8fa97c07a4b80f2e923cff67b9"],["/tags/大语言模型/index.html","f5173137c31d507216b7156fd7abef43"],["/tags/张量/index.html","8cd2472ae93278733ec23c6068705983"],["/tags/技巧/index.html","7b7ae0092dcf42d0e40752a702217e31"],["/tags/数据处理/index.html","650b5afcbdeeb1e86ff2086551c98139"],["/tags/数据库/index.html","5c7e63c7660775c33e4228077a42af09"],["/tags/测试文本/index.html","88203bccb2b3bf845d5ec80462c762e3"],["/tags/浏览器/index.html","fec1ad71346e85c205ef3f5642d60c2f"],["/tags/深度学习/index.html","62497d86e349d827cb4cbbaceddbdecb"],["/tags/爬虫/index.html","98afa56a7a692192c053485cec4db703"],["/tags/神经网络/index.html","ee8e19032d8ed74d7abdf31831e27ab1"],["/tags/纪实/index.html","549f965e2c0bf862ace562403a284ebb"],["/tags/语录/index.html","8c425413ea08e6f7e55f71b030cf9333"],["/tags/鼠标/index.html","c45f488fda3fbe49189910c8fe4b7fd6"]];
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
