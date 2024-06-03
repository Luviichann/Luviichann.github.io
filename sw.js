/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","4e063367596ec74768bf0432952140f1"],["/2023/11/05/测试/index.html","5951147eb5de3fad2189ffe206c8a77e"],["/2023/11/06/1tensors/index.html","7b32bec35229291fc9aa8261c98cf8ad"],["/2023/11/06/blogs/index.html","ba09915054f640263e9d86830de8e551"],["/2023/11/07/nn/index.html","0421224351194491a6bbbced7d1d5520"],["/2023/11/10/MNIST/index.html","505423472d695db3f390addfa5ca57c9"],["/2023/11/10/datapr/index.html","684738a9ff92298c9f156b6a95acdb09"],["/2023/11/12/css1/index.html","380f5334f3b3f057bab43f98b66440c6"],["/2023/11/13/css2/index.html","17cc784beee082e546043e38bf589583"],["/2023/11/15/css3/index.html","bb450fd9d69cd0179cfbedafd5832464"],["/2023/11/16/huggingface1/index.html","f27abfbe1b306e9aee374df01fe7b79c"],["/2023/11/17/huggingface2/index.html","0d187453c344e59cf383d9a39440a0fd"],["/2023/11/18/huggingface3/index.html","dd39b909318f8d9c6207f77526e3e7d9"],["/2023/11/19/huggingface4/index.html","a2a7cc24135073b17f383b941dc899ab"],["/2023/11/24/css4/index.html","de0ce3e3b8ef176b43cf6f0aa65501da"],["/2023/11/26/ssn1/index.html","b41e1fe5e6a983b36b460a86c805fcbe"],["/2023/11/27/miraiqqbot/index.html","ff4d9d78f968e27848bc23d3c86de731"],["/2023/12/21/ssn2/index.html","d419ad2423a93c6b0774b813e8494d0b"],["/2024/01/02/llm1/index.html","81376f73861512f3df78d2af280ac296"],["/2024/01/20/go1/index.html","5c3c1bb485ce4b6b9a802d87d13d66dc"],["/2024/02/02/zt1/index.html","0d90fca13ff87094e7d0b7194dd9b30f"],["/2024/02/04/go2/index.html","301f6ae4b8de14bde099b491fe766474"],["/2024/02/09/go3/index.html","de4e4eb18be548957982ae22f781bcc7"],["/2024/02/12/go4/index.html","3b57d718edf531e8e47c021f11100633"],["/2024/02/17/go5/index.html","ac83c743d0be29ea7d72bb6fa6dadd2a"],["/2024/04/06/pc1/index.html","3382d4be2e68e232f0411d8713b4c26c"],["/2024/05/07/pc2/index.html","de02a43f6ce3db44afcfede2f4d25e4c"],["/2024/05/19/htp/index.html","3d9a2f984699c6d534005fd3cf070a2b"],["/2024/05/21/go6/index.html","b1c5ac0610bfa7dc8cef6381ca6d98ee"],["/2024/06/03/ssl/index.html","926389a2f1914f0c226d9c67d675e50d"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","0d9a6183ed1bac5fbf211a4636a2d836"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","f1b0cc767baddd8098819158a7ae74aa"],["/archives/2023/11/page/2/index.html","f8c2b984f240fd674efc9ed78280a3e4"],["/archives/2023/12/index.html","847e8095838709236bf8abee77f01dac"],["/archives/2023/index.html","275ac4b207219fb20c93d8f1c75b820c"],["/archives/2023/page/2/index.html","764a08515b555d56bed8ecc88b948af4"],["/archives/2024/01/index.html","a7dc6a5e21b9672c7ab726a3a0237054"],["/archives/2024/02/index.html","0f1b91b550aaf9175fbd7795fb24ed66"],["/archives/2024/04/index.html","0e273f05f1bc2e2291327c92e2b171c7"],["/archives/2024/05/index.html","bc7e8e7325e5046925b704ef3896e695"],["/archives/2024/06/index.html","3dca503ac5a4246f4bf46cc66cdad861"],["/archives/2024/index.html","2a380cc0d28be6069e955747069e407b"],["/archives/2024/page/2/index.html","65fb590c6d233f08b125efff7a888592"],["/archives/index.html","227835283ba1c2a76dedc2efc8be4c65"],["/archives/page/2/index.html","118c817bca76e6aeb9d9a1e7b2f9067e"],["/archives/page/3/index.html","edf6cd94e37c1e1acdded6838f83519b"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","9b89a8d25af47428d2a993104d88e8ac"],["/categories/HuggingFace-NLP/index.html","fd0779bc55e309b7440e67cbb783f8a8"],["/categories/index.html","2cc434df4b40ded4eda4b223e82e2d91"],["/categories/前端/index.html","d65910363dfee23036011211201b3e2d"],["/categories/对话系列/index.html","f528ecae0aa5f1d8442b7b661a05ff2b"],["/categories/教程/index.html","1a8c233404afa23f8066d947ec928520"],["/categories/杂谈/index.html","d28c72df5f8a99c550fbb74787d84250"],["/categories/杂项/index.html","e6bdda40b79ba01645a60c2c45d7f641"],["/categories/测试文档/index.html","bd8fdf270838aefeca5eaa86b5f81374"],["/categories/深度学习/index.html","0570ca0a97ac66922cd0d1b587a2b1c9"],["/categories/经验分享/index.html","0c15d09ae8f94f2dd91d4e009c612910"],["/categories/网络爬虫/index.html","a32dbc008cfa2cec80594917ebaedd79"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","7408a4a6bc863ed34eb1244279d30950"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/ssl/ssl1.png","eacca74c8f59bfb4582131362941d4b3"],["/images/ssl/ssl2.png","30e5e1f3f4ed95f1995147d8ecb770ab"],["/images/ssl/ssl3.png","2c69d73a7918cdc790bac1b631914969"],["/images/ssl/ssl4.png","d6d06ee53806442c6aa7b048bce37f48"],["/images/ssl/ssl5.png","d5013e168b274323cded1713995ade47"],["/images/ssl/ssl6.png","ff07c9cc76679d92ed8857bf6628eaba"],["/images/ssl/ssl7.png","4e4a058882c2f7ea9a7a153a2df09a92"],["/images/ssl/ssl8.png","ac2966c2d16e6b4ab6ba898ff3237536"],["/images/ssl/ssl9.png","9bb2f7d3a43159617c7cae352e1c5cad"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","41a43f6e9849d79b9ca5e06673656432"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","dd08440900675ee9a63486c8c05dab30"],["/page/3/index.html","c5447c0c97711d70366f25904aa29d42"],["/sw-register.js","29d71ebc5d6506dd6a6a7e91ae5a85be"],["/tags/Gin框架/index.html","e1e7b5e0a74a300c47007d47b62326c5"],["/tags/Golang/index.html","e8b564ee857e40528460e52a83f06609"],["/tags/Gorm/index.html","4f35c6f29ded216e2020db157ad356ac"],["/tags/Go语言/index.html","7460b7071c765436767a0d0913871d4a"],["/tags/HuggingFace/index.html","fd38a78a0882e021d727efcbddf12c91"],["/tags/LLM/index.html","97ddfa95257859935b602131c48fb838"],["/tags/Linux/index.html","1ab3bd56c0f26132e906806caedeb50a"],["/tags/MNIST/index.html","47823cf1db554f37a9d72ddc0ffe8f73"],["/tags/Mirai/index.html","21b002176d518706a6fa00b5f8bf3f90"],["/tags/NGINX/index.html","4977d52fa0c7507a3298566be46cc59d"],["/tags/NLP/index.html","0b23c2dcd05fefbef4f846ba6596455e"],["/tags/Pytorch/index.html","0d4413d223e884bf07c377adb0e7e066"],["/tags/SSL/index.html","d4fa3716fac76c65279f4346be8654f1"],["/tags/css/index.html","6a10d820200efc737e89c729089fccb4"],["/tags/html/index.html","3dac734ccd43a389f0ae21ee5cf27f4b"],["/tags/index.html","6b73409a3341de7e9330fcaa7e40dfba"],["/tags/python/index.html","1694f7b432478fcb307b8e6c9fa18dd4"],["/tags/前端/index.html","608a0a6b33235268e2b7a5f22085440b"],["/tags/大语言模型/index.html","da920cef4a27283c2387fd9eec886103"],["/tags/张量/index.html","31fddc93c0f780ea1746c6e787d462cb"],["/tags/技巧/index.html","bd1b7b1184696141b6480d98889cf8cf"],["/tags/数据处理/index.html","fb5196c96fa949501eb7d17de4b52dd2"],["/tags/数据库/index.html","0ed96938bd68c8f21713bbe90b588cb7"],["/tags/测试文本/index.html","57396233350a6a8578e500e9a13aeb01"],["/tags/深度学习/index.html","555a645927af7d7945623c859a8dce18"],["/tags/爬虫/index.html","735e3aafe8227511665e8dde98427099"],["/tags/神经网络/index.html","5fa66d5f72af033dc9a8c306a8b835d9"]];
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
