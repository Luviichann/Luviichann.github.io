/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","9d4ad15e0c1f365802342007310526f4"],["/2023/11/05/测试/index.html","bdf98ed4f070e2959d501b5a59e7d07e"],["/2023/11/06/1tensors/index.html","5ccd489c259cfba62f791acdc001d491"],["/2023/11/06/blogs/index.html","be0ef42f66d757d8ecbb1b8a80266045"],["/2023/11/07/nn/index.html","83e882c0c650e9e5f060283e2c67be5d"],["/2023/11/10/MNIST/index.html","7d211f66143f8be29dd8bbf2982aec9b"],["/2023/11/10/datapr/index.html","cd2688e81cd65b2f367a815ae218b6ba"],["/2023/11/12/css1/index.html","3e413ef5b6271cf6f56b12ee5419efe9"],["/2023/11/13/css2/index.html","a039f54555badb20eef44c6b81f86261"],["/2023/11/15/css3/index.html","090c3b244605f693a3ecd3b135c71105"],["/2023/11/16/huggingface1/index.html","481614a2a5e7766c520beb14f0d58155"],["/2023/11/17/huggingface2/index.html","a31c0d657909db14bea634aab7daa1cb"],["/2023/11/18/huggingface3/index.html","8201f12d3b61910783a0ebbdd506b0b7"],["/2023/11/19/huggingface4/index.html","7eba45b98096e63a7f4311d81fd707dc"],["/2023/11/24/css4/index.html","a32574b2d08d1d1c20c71acc50f14327"],["/2023/11/26/ssn1/index.html","83ff62a24c70a7cfad68125040cb9968"],["/2023/11/27/miraiqqbot/index.html","b30a194eb4b11800e41c35b8bdd273b7"],["/2023/12/21/ssn2/index.html","ad0139d382c137fdeb01bce4faeac723"],["/2024/01/02/llm1/index.html","25ae1978ddb42c69a76ea76f186ee44f"],["/2024/01/20/go1/index.html","4e5f588096149e2a6a41b4bdb4d7de93"],["/2024/02/02/zt1/index.html","f10cdc26804eddde728299dfd1c3699f"],["/2024/02/04/go2/index.html","3ca4757c20e80f81c704810858abba06"],["/2024/02/09/go3/index.html","fade2c64219b043483f899e676d882f5"],["/2024/02/12/go4/index.html","e709941685be12595f1a1aededc75f4c"],["/2024/02/17/go5/index.html","a6484094c952c08d9063be973e6a2826"],["/2024/04/06/pc1/index.html","589db12ff223df2af95e7f54502dc10b"],["/2024/05/07/pc2/index.html","fe7ecc5f3c8d0d2de7951ab769680b0f"],["/2024/05/19/htp/index.html","340706ae9c615053062d39e5b32860ff"],["/2024/05/21/go6/index.html","8b7bbcf29b52226ba0245ed1b9af68b9"],["/2024/06/03/ssl/index.html","9f6ad1472afa13cd64767653a8424b07"],["/2024/06/24/cursor/index.html","c0ef8fb882be8df4b64bb3b662fafd39"],["/2024/06/25/clslinux/index.html","20d79a4f0b188e90a65f7906efc2a87c"],["/2024/07/23/live2d/index.html","f13d005798769d0c15c895f8b74e66f4"],["/2024/10/04/kfzx/index.html","3efb3d08d0c24e0a66fa86d4d39ae530"],["/2024/11/07/daye/index.html","9ddbfeba5285ea28cf99cce16c91d656"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","08ef584ec8df89c837f40067c3a659e6"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","6df5c08e8b4e1d0f076a77992d451e6e"],["/archives/2023/11/page/2/index.html","6bc70b843fdacdf08dfca2072ce79ecf"],["/archives/2023/12/index.html","430b0b6880b0d37c4bacc69a4b09e063"],["/archives/2023/index.html","fd701f2a036af1d0afb9d1d72bb34afd"],["/archives/2023/page/2/index.html","15fe313f945a21b3206958d494a0833d"],["/archives/2024/01/index.html","c303c7c810a95ad2390dc3db02113fa2"],["/archives/2024/02/index.html","32f48ae9cac624970a86e8aed5d724ae"],["/archives/2024/04/index.html","4ddd6508abbf7e221179ea9eb68610a5"],["/archives/2024/05/index.html","b4f0e5ef7981149ba98b3531c6f0ee9b"],["/archives/2024/06/index.html","35a704dd50e62dc6916ba3ca16c7cf9e"],["/archives/2024/07/index.html","dd5a59ec263ae718d32c53280afbef5c"],["/archives/2024/10/index.html","4b44142dbe867642dd83ab4fa08a88b8"],["/archives/2024/11/index.html","a4b8839b12d1d3b948743436e65ac028"],["/archives/2024/index.html","5d67d07bf04128664a9497ef24c89346"],["/archives/2024/page/2/index.html","bdb67717173d625e3e5425aa0f715818"],["/archives/index.html","f3bfedb1d8ec819cb902ab62bfa6579e"],["/archives/page/2/index.html","b74458b2f81ae7d19024d43ae35c0319"],["/archives/page/3/index.html","fed648e17eb65bdd380ff9264bb13021"],["/archives/page/4/index.html","9991a277005871642260badb71be211d"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","d3bb034336d86512492673ff93b09d1a"],["/categories/HuggingFace-NLP/index.html","8a09097c946ebc02c5ab50933a46ef81"],["/categories/index.html","a78a294d04551fcea61fdc66cddfbc3f"],["/categories/前端/index.html","7c086093481dd1bdee79fe810ebe7ca2"],["/categories/对话系列/index.html","07ac1932f1b1705c6ea85defa7b07307"],["/categories/教程/index.html","b26e4e18fca335bd487beef1fe7e0c51"],["/categories/杂谈/index.html","13638067597e30a3c073754461ab7528"],["/categories/杂项/index.html","e9d097d4cd9e2cdd2ba06d1345234d7d"],["/categories/测试文档/index.html","0e861da2edb326b9b83fe404daa309a0"],["/categories/深度学习/index.html","e6826d67e0be0bb1b2021b330f9655be"],["/categories/经验分享/index.html","8e271dbe258a2153363b09e5d9187db3"],["/categories/网络爬虫/index.html","8c6db6ba05b3e3124365df1dd3167170"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","6badb73c1b6382618ffbeb332bec24bd"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/clslinux/clslinux0.jpg","4df81190521280de69520c0b009e8b5f"],["/images/clslinux/clslinux1.png","c3321d5f149d272f1a10ab2ec150c820"],["/images/clslinux/clslinux2.png","63ee9a68c861d1aa4a78c9cd2ba142b7"],["/images/clslinux/clslinux3.png","8238df845bd32dd43f323c87eaeb4db2"],["/images/clslinux/clslinux4.png","d582a7db24df865a3213dbcacb5a0955"],["/images/clslinux/clslinux5.png","21b1f5b964c3910936c076fb691a8aa4"],["/images/cursor/cursor0.jpg","f774201001001971eac95fa43242ce7e"],["/images/cursor/cursor1.png","5098299f84539d49ae8e80d3c2b3e73c"],["/images/cursor/cursor2.png","4e72b0dc17312fdf680fb155dcadc6e9"],["/images/cursor/cursor3.png","236ad4f3dd1d1ebbc2a3239eaf2d6e3f"],["/images/daye/daye0.jpg","a129e4439995d03439f5a245921bb8e2"],["/images/kfzx/kfzx0.png","ad38d78341b62b6bc821fd2d341c7a15"],["/images/live2d/live2d0.png","469daa68d1a08c91375cbe06e87232f2"],["/images/live2d/live2d1.png","40ab8beef1a4da0ccb7a3a6df7cb50f2"],["/images/live2d/live2d2.png","fd5dd6d4ec48377072778d43a951b5b4"],["/images/live2d/live2d3.png","cf1d850ca520f28ee14e476f96c78727"],["/images/net/net0.jpg","7912a54a8c47f3979e10255f730ec31b"],["/images/ssl/ssl1.png","eacca74c8f59bfb4582131362941d4b3"],["/images/ssl/ssl2.png","30e5e1f3f4ed95f1995147d8ecb770ab"],["/images/ssl/ssl3.png","2c69d73a7918cdc790bac1b631914969"],["/images/ssl/ssl4.png","d6d06ee53806442c6aa7b048bce37f48"],["/images/ssl/ssl5.png","d5013e168b274323cded1713995ade47"],["/images/ssl/ssl6.png","ff07c9cc76679d92ed8857bf6628eaba"],["/images/ssl/ssl7.png","4e4a058882c2f7ea9a7a153a2df09a92"],["/images/ssl/ssl8.png","ac2966c2d16e6b4ab6ba898ff3237536"],["/images/ssl/ssl9.png","9bb2f7d3a43159617c7cae352e1c5cad"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","a65d2ec1809f7b91bdaa89c1be1c5064"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","58f483986180e54a35af92e890818e2d"],["/page/3/index.html","7ce94f9ad17ae0eb75b38e2afc5aef50"],["/page/4/index.html","e9c1e69329727b402e67983dcb2a1ec5"],["/sw-register.js","ef4b2939400028b6727997783d574eb9"],["/tags/Clash/index.html","3e43c8bba74dff44852d6237145ea655"],["/tags/Gin框架/index.html","6789b0e72bbfb934083666ccc8ec9c44"],["/tags/Golang/index.html","4a4858d667a1aa7a7c985d68430e87fa"],["/tags/Gorm/index.html","56d1c7ef6afda8976b713a2767fee661"],["/tags/Go语言/index.html","4956db1e48552be9a4fc3cc8414e3b8c"],["/tags/HuggingFace/index.html","cd8468a7e7e1db1c33ac6e28f979aca9"],["/tags/LLM/index.html","b8454da1f4fbffcc4a39e0829616fffb"],["/tags/Linux/index.html","5cd1224b2feb33a7579b1b128eaa3f42"],["/tags/Live2D/index.html","d8f25698e9fd8359beb0d9b35ee574aa"],["/tags/MNIST/index.html","168f784348b46950ca570f8691d61690"],["/tags/Mirai/index.html","4a9900001c5fdf749758c86a4164c4ff"],["/tags/NGINX/index.html","33807f7e9aa8f84d0121e4cc164a9896"],["/tags/NLP/index.html","3b322f4304b25a62ce686a867fc5864b"],["/tags/Pytorch/index.html","cbb3904434d743ac7f9e97f9d02c4c8e"],["/tags/SSL/index.html","0142742be5374dd8dd20c859e80cd217"],["/tags/css/index.html","a9f74c8d485018b12975e7d1c15a1349"],["/tags/html/index.html","2075b6ecfbd1c68c327901c2a3a5d330"],["/tags/index.html","b9369cbb1b8137e6bc4ab353a7a4e05d"],["/tags/python/index.html","52f266afbd7e7798b1d94acb8748f50e"],["/tags/前端/index.html","8cccfd6f7bf1b4ede5bfa4592d59b468"],["/tags/大语言模型/index.html","08e26774624ec6f08732364413789466"],["/tags/张量/index.html","f118485c77eab96c8eede03518001ad7"],["/tags/技巧/index.html","2eedebdc30c06291c02e90b0f99eb725"],["/tags/数据处理/index.html","ce3a18cbfb22ed2b5590000a11b34eb9"],["/tags/数据库/index.html","87e6c43ba97cf5a3d1a3720c4bd46f98"],["/tags/测试文本/index.html","99731158b25839c6b549e9b333447229"],["/tags/浏览器/index.html","de72fb77dbe94d573c0c79bf6e809251"],["/tags/深度学习/index.html","9f81e4f6dcaa1711299f7570e3fbd239"],["/tags/爬虫/index.html","7683c45c7c941984a1a92c5f0a71aa8b"],["/tags/神经网络/index.html","e9e27cb1d0e6de289eabc159c0aefe2d"],["/tags/纪实/index.html","922a371fb86c2e590b6cc91ea0199d75"],["/tags/语录/index.html","a312e5bff8ad0c3680968a8fbc9ed8d0"],["/tags/鼠标/index.html","b42b3b2e7eab2c42e4a4c9121a773b21"]];
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
