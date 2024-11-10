/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","b1997163e6525f34db0251675781fc4f"],["/2023/11/05/测试/index.html","1eb7ebf99acc2c1b7bfb2321f3c47c20"],["/2023/11/06/1tensors/index.html","358c9b858dd0dfe10cf1659e5f48630b"],["/2023/11/06/blogs/index.html","92b73b5aa0361ff6dcd068cfa6a6eec2"],["/2023/11/07/nn/index.html","600facbeff899cfe79d480a0f43ff298"],["/2023/11/10/MNIST/index.html","3584bbfdb9fd5efcdb13812670d77070"],["/2023/11/10/datapr/index.html","7bf39603bbaaa3ee16bfc9118ff07c89"],["/2023/11/12/css1/index.html","cf7a4a64502c18fad48c0703a370a36a"],["/2023/11/13/css2/index.html","77481b0989f559fff377f38b2341c7b8"],["/2023/11/15/css3/index.html","7d0b2f42ee009ec97974509a1e505092"],["/2023/11/16/huggingface1/index.html","74acefdc0fd64713a4a507154fd35a6b"],["/2023/11/17/huggingface2/index.html","a47cf2bdd529c3cd62a994573125d38f"],["/2023/11/18/huggingface3/index.html","ab82a749d87be30038c1a42e7bddb1d9"],["/2023/11/19/huggingface4/index.html","2c22a86c226e61ef9f8cb43b9b5207f1"],["/2023/11/24/css4/index.html","c5553b8cca5fb99d1826b6447545bd47"],["/2023/11/26/ssn1/index.html","a0f45c09914e751d9dbd166aeaa88671"],["/2023/11/27/miraiqqbot/index.html","cfeda8c9ab5c3a44485e49832ffec6d3"],["/2023/12/21/ssn2/index.html","e4fa1a971a45639c1a37b12d8b7dbb35"],["/2024/01/02/llm1/index.html","413e857a84cec2b9f93b6b19bd5cc9ed"],["/2024/01/20/go1/index.html","4d7a643915b8943135771739ce037e76"],["/2024/02/02/zt1/index.html","daee86149dc7c10918e68a23eb9baa04"],["/2024/02/04/go2/index.html","650ffea2be53107af72478a40865cd80"],["/2024/02/09/go3/index.html","e727bde9373b433450d11a7ff01574c8"],["/2024/02/12/go4/index.html","b99f575940a0f61d8bac1b93b65ea475"],["/2024/02/17/go5/index.html","d874e19ba024a3f8a2dd057ea38ffee5"],["/2024/04/06/pc1/index.html","69f4f710e010e030b556b7aad155ab0a"],["/2024/05/07/pc2/index.html","56d225f7a04d81d0ee2cc2af417942c4"],["/2024/05/19/htp/index.html","6ee94bd719cfcfaaf31f3b79ec3428d1"],["/2024/05/21/go6/index.html","feeba1f7e81b439e0b07813539f01c59"],["/2024/06/03/ssl/index.html","3095ff2df7b98a5ef260162025e07a9f"],["/2024/06/24/cursor/index.html","73878a6c5cc0322baff762614c8827cd"],["/2024/06/25/clslinux/index.html","ce374433374cc3bea981547fced7030c"],["/2024/07/23/live2d/index.html","ace6f28f5eb214abc423900d10da5b02"],["/2024/10/04/kfzx/index.html","1ce90182e39a662ec8cbdb2b2fb0386d"],["/2024/11/07/daye/index.html","2b26e22a9be614dc7c1ea9bdb4894b8c"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","26e9fb29d8df3a994160a93c14ed5a27"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","28c9b8de382046b2a10e0d1704089480"],["/archives/2023/11/page/2/index.html","6fb2f9f47bf0966e0dab82055833e8cb"],["/archives/2023/12/index.html","7010ccf32c8fe574bb168c49e320986a"],["/archives/2023/index.html","3330093ae091b5c0e5ea41dce2209e7e"],["/archives/2023/page/2/index.html","cded6d6dbdb2a110dae5dc674c607ebc"],["/archives/2024/01/index.html","4ea343cd55f54f13b60a78d2d308f574"],["/archives/2024/02/index.html","4b45990af08798c522b4a890fc2288ae"],["/archives/2024/04/index.html","21d625ab67c41a140c1293609c62ef2a"],["/archives/2024/05/index.html","30f1affff99a8c925dc0bd66d84aa889"],["/archives/2024/06/index.html","0368e0c9e61f957d04f6047a24fce4de"],["/archives/2024/07/index.html","d0a274caa0ea74321e38f981c48c3362"],["/archives/2024/10/index.html","8554fd786554d2b1ba35b43bbec295e5"],["/archives/2024/11/index.html","0f357b827672feff0bc45e91f8ecd654"],["/archives/2024/index.html","559b16ce1bedde60137679bc2a6a41ba"],["/archives/2024/page/2/index.html","3026bcc7be7b2c53dc18dcad484fa623"],["/archives/index.html","c11e75aec580f1cd8aef72d31dc49d69"],["/archives/page/2/index.html","d4a57f09885e4da5527136da328c5d67"],["/archives/page/3/index.html","8a3d94382b80c4693557a3a07a71717a"],["/archives/page/4/index.html","0f0dd92354ae1a3f256bc68c9375ce94"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","5c0783316336a6ee831d592621094d24"],["/categories/HuggingFace-NLP/index.html","eeaa80ed30df53508bdd400eddb9d7b7"],["/categories/index.html","3e787e07a50e32c1ca02b0e0a3dbce32"],["/categories/前端/index.html","4c147572fc428fa6bc7f2b2cb28640c1"],["/categories/对话系列/index.html","02f36cc39f5c2916baa3ca4b774f9392"],["/categories/教程/index.html","cb60a5bf26f0f42748188e9078c448b7"],["/categories/杂谈/index.html","003ffa6359c5cfacea6bc184c419c4b3"],["/categories/杂项/index.html","fe69f2690b8027bad0f946848a3be952"],["/categories/测试文档/index.html","54aa7bbfc8ecadc040a7aa84d59b71ef"],["/categories/深度学习/index.html","468abec90ee51db22610e1b5e8909bac"],["/categories/经验分享/index.html","2f39ca376d2c213a5a5bed1d42afda17"],["/categories/网络爬虫/index.html","01c97db717464e35642ba0a25796bf9e"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","e860f2690e977c21cdab04dd607fe576"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/clslinux/clslinux0.jpg","4df81190521280de69520c0b009e8b5f"],["/images/clslinux/clslinux1.png","c3321d5f149d272f1a10ab2ec150c820"],["/images/clslinux/clslinux2.png","63ee9a68c861d1aa4a78c9cd2ba142b7"],["/images/clslinux/clslinux3.png","8238df845bd32dd43f323c87eaeb4db2"],["/images/clslinux/clslinux4.png","d582a7db24df865a3213dbcacb5a0955"],["/images/clslinux/clslinux5.png","21b1f5b964c3910936c076fb691a8aa4"],["/images/cursor/cursor0.jpg","f774201001001971eac95fa43242ce7e"],["/images/cursor/cursor1.png","5098299f84539d49ae8e80d3c2b3e73c"],["/images/cursor/cursor2.png","4e72b0dc17312fdf680fb155dcadc6e9"],["/images/cursor/cursor3.png","236ad4f3dd1d1ebbc2a3239eaf2d6e3f"],["/images/daye/daye0.jpg","a129e4439995d03439f5a245921bb8e2"],["/images/kfzx/kfzx0.png","ad38d78341b62b6bc821fd2d341c7a15"],["/images/live2d/live2d0.png","469daa68d1a08c91375cbe06e87232f2"],["/images/live2d/live2d1.png","40ab8beef1a4da0ccb7a3a6df7cb50f2"],["/images/live2d/live2d2.png","fd5dd6d4ec48377072778d43a951b5b4"],["/images/live2d/live2d3.png","cf1d850ca520f28ee14e476f96c78727"],["/images/net/net0.jpg","7912a54a8c47f3979e10255f730ec31b"],["/images/ssl/ssl1.png","eacca74c8f59bfb4582131362941d4b3"],["/images/ssl/ssl2.png","30e5e1f3f4ed95f1995147d8ecb770ab"],["/images/ssl/ssl3.png","2c69d73a7918cdc790bac1b631914969"],["/images/ssl/ssl4.png","d6d06ee53806442c6aa7b048bce37f48"],["/images/ssl/ssl5.png","d5013e168b274323cded1713995ade47"],["/images/ssl/ssl6.png","ff07c9cc76679d92ed8857bf6628eaba"],["/images/ssl/ssl7.png","4e4a058882c2f7ea9a7a153a2df09a92"],["/images/ssl/ssl8.png","ac2966c2d16e6b4ab6ba898ff3237536"],["/images/ssl/ssl9.png","9bb2f7d3a43159617c7cae352e1c5cad"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","a65d2ec1809f7b91bdaa89c1be1c5064"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","58f483986180e54a35af92e890818e2d"],["/page/3/index.html","7ce94f9ad17ae0eb75b38e2afc5aef50"],["/page/4/index.html","e9c1e69329727b402e67983dcb2a1ec5"],["/sw-register.js","c19436697957871ba64cbba990d1a752"],["/tags/Clash/index.html","8949a1f49aa05de864df0a95bea4790f"],["/tags/Gin框架/index.html","0b0454c03a46623485d8a45103145729"],["/tags/Golang/index.html","ce90a78992e4e9bf7d59262cf1f98250"],["/tags/Gorm/index.html","2e7dd9ee639167095f8da2ff6a0e1f42"],["/tags/Go语言/index.html","2b24bee414287e242df7adbd4750017c"],["/tags/HuggingFace/index.html","f3811e4be551315fd1f8c67028476ac4"],["/tags/LLM/index.html","6a001d1d1ac95ed65066821ac4118296"],["/tags/Linux/index.html","5db566ecf571ebe0c36f4fd26a1b55ec"],["/tags/Live2D/index.html","2af81ab2df685cd94576c8fbf5ade143"],["/tags/MNIST/index.html","1fc9f4229a50c13c9859355dc7cbc7ef"],["/tags/Mirai/index.html","dc135967c8ce8849ad4b1b3f0055df0d"],["/tags/NGINX/index.html","c9e67fe27fa9fb8a8671d00f34d538f5"],["/tags/NLP/index.html","4993e620a04ab2d7a1c821b163d2daf2"],["/tags/Pytorch/index.html","f86dde74a931425da1319e81cae00392"],["/tags/SSL/index.html","1edbaa8208f669f90b622775f53c4fd6"],["/tags/css/index.html","04abdbefcbcab720b1f24f0f73db227d"],["/tags/html/index.html","29abbbfd2278cfaf1667f6a7caa3e418"],["/tags/index.html","72901164230c2b28f31683f67656a7d0"],["/tags/python/index.html","ab3d5d47b8403d236215a9d3de6179ed"],["/tags/前端/index.html","8a5f65ff9ae974470e0ed638da817a84"],["/tags/大语言模型/index.html","18fcb814ab8f00811fc72531d4ea32ce"],["/tags/张量/index.html","ebbc4a94bb933702aed322d007ace30d"],["/tags/技巧/index.html","734542f6d9702cc72789f8351ad4cb27"],["/tags/数据处理/index.html","4a2c92a35dc92771cd5fbdb03474cfa8"],["/tags/数据库/index.html","545563017023607a60759e0a485fcddf"],["/tags/测试文本/index.html","2429174e586b6a78b8449b9b3721ae65"],["/tags/浏览器/index.html","8ab2456019e022c5eb7d5c6447ddbe70"],["/tags/深度学习/index.html","c80e1b21f304e7509e768a361747cb82"],["/tags/爬虫/index.html","f7971c392eb04b9887f2e3d4b71b26fa"],["/tags/神经网络/index.html","bd32b78ebda3be70b4d92883fb624c03"],["/tags/纪实/index.html","e466ffb87ba767e3409bbbb98a618809"],["/tags/语录/index.html","8e28a093569f4f7cd5c10410a15a3ab4"],["/tags/鼠标/index.html","184bb1431a34a8f2709833e999d153ed"]];
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
