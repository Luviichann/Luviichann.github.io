/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","d4c8aecae0469a82df48ed58c8a5e4a1"],["/2023/11/05/测试/index.html","9c4766b9f2fe73eb85e07f1dbe55e250"],["/2023/11/06/1tensors/index.html","fa7d76f27097726c05b50992969c7d65"],["/2023/11/06/blogs/index.html","74c0e3245253f1724d34460ba525cd38"],["/2023/11/07/nn/index.html","8487327482bdd00a08b8fe271e0e817d"],["/2023/11/10/MNIST/index.html","1c64e5241ee6c2c4de4e8c3b9522bf81"],["/2023/11/10/datapr/index.html","8c0b588258514d677a63e1683abfa62d"],["/2023/11/12/css1/index.html","72a229f57868d75cb0a4a957eeef1d00"],["/2023/11/13/css2/index.html","9f64b404889c5219724dc1fffb4cca8b"],["/2023/11/15/css3/index.html","77b5a78ba460e8f2459871da615d507f"],["/2023/11/16/huggingface1/index.html","109adceae6041bfb8cb0fa3e56b3fae4"],["/2023/11/17/huggingface2/index.html","deca1a3b9ceea9831f206f7a251407bd"],["/2023/11/18/huggingface3/index.html","dc6cf9c09d2fe64417ac2c8987028e52"],["/2023/11/19/huggingface4/index.html","7b9d45b6281371446c88225ae15f323b"],["/2023/11/24/css4/index.html","e9877aa5fc9eec6b3d4c312717c1d8de"],["/2023/11/26/ssn1/index.html","e7ad24f6b0979facec031cd714321686"],["/2023/11/27/miraiqqbot/index.html","e0a8e18b080288a983a215d94d3c4045"],["/2023/12/21/ssn2/index.html","b892cdbf442904d6e416d5e767c2c727"],["/2024/01/02/llm1/index.html","a56b2b8c2b566c8e14af2558ab164e0b"],["/2024/01/20/go1/index.html","508d73f0fb1bcfe8e7b302f5b72161d3"],["/2024/02/02/zt1/index.html","78efa758ff90f3d26b9f18aa24b18047"],["/2024/02/04/go2/index.html","8e4b7b7fd1506dbb9530177bdca312e6"],["/2024/02/09/go3/index.html","982702b011e4e917623134c3c19cd316"],["/2024/02/12/go4/index.html","6710d0db6413181773afa20aa1a8afa9"],["/2024/02/17/go5/index.html","9cbce8640ebd6118b97ca186df96aee2"],["/2024/04/06/pc1/index.html","deb75cf7171f9bab86bded002685c23a"],["/2024/05/07/pc2/index.html","c6df2415da60b5f7f507168e104280a5"],["/2024/05/19/htp/index.html","fb016ff351445050090ea96bc090b1bd"],["/2024/05/21/go6/index.html","b03e9ebee26e4ba75a2e59cfcaf0eabc"],["/2024/06/03/ssl/index.html","c3bcb6194c2e3a14284948b1c423f575"],["/2024/06/24/cursor/index.html","2c9882dd36a496ba0046354b03133a8e"],["/2024/06/25/clslinux/index.html","1b82d3d7f102e285cd2996b4c59e0787"],["/2024/07/23/live2d/index.html","48eace81418c3550b292bf0fd4211c1c"],["/2024/10/04/kfzx/index.html","e58149d503755398f3988ba9644ee300"],["/2024/11/07/daye/index.html","66e8c3f0bb2b40bd69dba8e664480d6c"],["/2024/12/31/dy1vf1/index.html","584f3c2b21511ffbd37d1f632e2682a4"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","c9303c32abdb5b241f36064725c07ce6"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","549c2c37a978179b8532e1cabb8d26f7"],["/archives/2023/11/page/2/index.html","17c96e61fc0fc6020cf3f2d510f4a3f7"],["/archives/2023/12/index.html","53b43526bc94280064c13b77485d2951"],["/archives/2023/index.html","0a4949bb6256080a8b0079a8d403a74f"],["/archives/2023/page/2/index.html","a85cbcc55a672f7498abe3164de6917d"],["/archives/2024/01/index.html","ad8edab05acf41123cfd6dc74da39220"],["/archives/2024/02/index.html","0bcf8278b8606e4dfe89acf75239b1ff"],["/archives/2024/04/index.html","dd74c0ca7c22358ad03c7b6f7061d699"],["/archives/2024/05/index.html","98a246f28fe4cc56a9f04dd8155fd602"],["/archives/2024/06/index.html","ef8eb28ce0d9f95ad531cef8c5e2b73e"],["/archives/2024/07/index.html","8b5be9b83398b6b3dcc8f8ebadca3f3a"],["/archives/2024/10/index.html","1e2aac94797985b0f78ddc39bdf7a25b"],["/archives/2024/11/index.html","ef15abf6c159ec4756200ca0fc899d23"],["/archives/2024/12/index.html","efd8fcd3ab9bdf88c1442217d727b363"],["/archives/2024/index.html","817ffbf47e9414a993e4e43a797d43d2"],["/archives/2024/page/2/index.html","056bcf8f0351d1e150409c5e1aa7c74c"],["/archives/index.html","04875345921a46a7d3d1fcebfebe48d4"],["/archives/page/2/index.html","6ed5d17a5f27e9e5aa9d910efdd0ed0e"],["/archives/page/3/index.html","fa599a82714ceac5229cf1e19e20b063"],["/archives/page/4/index.html","4ba4bfc66165a4c386567fc05ab6d2e0"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","cd434b7004ca8c7f6ed784d707e8852e"],["/categories/HuggingFace-NLP/index.html","3c1a19f366f7fab7292074f75f0646d5"],["/categories/index.html","6847138d186dfad121ea04c24300b015"],["/categories/丁曲/index.html","dc9617894b5aa40a263b32af8db60274"],["/categories/前端/index.html","9d37e54391cd9bd7511180f60138ede8"],["/categories/对话系列/index.html","d4dc6a766f63ff4ec756db8d6405c1d2"],["/categories/教程/index.html","34ff149d138ced7d406e3d165f2c7b61"],["/categories/杂谈/index.html","8c4028bd55a9e663d7ad7073f53dae05"],["/categories/杂项/index.html","b7214aee7f1050b0bf785c182af9646d"],["/categories/测试文档/index.html","f7540910bc73cef1b0dbe95a0dfa9782"],["/categories/深度学习/index.html","924690954bd38ff04a28cbcdfda2e390"],["/categories/经验分享/index.html","10b5ab862c74633345e150d1dbb74660"],["/categories/网络爬虫/index.html","ab60d4e25134e50e1d1e80f5af7837c9"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","0a7f6ba62bca1e1deaee04a1d9da041e"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/clslinux/clslinux0.jpg","4df81190521280de69520c0b009e8b5f"],["/images/clslinux/clslinux1.png","c3321d5f149d272f1a10ab2ec150c820"],["/images/clslinux/clslinux2.png","63ee9a68c861d1aa4a78c9cd2ba142b7"],["/images/clslinux/clslinux3.png","8238df845bd32dd43f323c87eaeb4db2"],["/images/clslinux/clslinux4.png","d582a7db24df865a3213dbcacb5a0955"],["/images/clslinux/clslinux5.png","21b1f5b964c3910936c076fb691a8aa4"],["/images/cursor/cursor0.jpg","f774201001001971eac95fa43242ce7e"],["/images/cursor/cursor1.png","5098299f84539d49ae8e80d3c2b3e73c"],["/images/cursor/cursor2.png","4e72b0dc17312fdf680fb155dcadc6e9"],["/images/cursor/cursor3.png","236ad4f3dd1d1ebbc2a3239eaf2d6e3f"],["/images/daye/daye0.jpg","a129e4439995d03439f5a245921bb8e2"],["/images/dy1vf1/dy1vf10.jpg","ac54d7c88e346e818a020193c9ea6d74"],["/images/dy1vf1/dy1vf11.jpg","b350d39634d0b0fa94074a0e8204523b"],["/images/dy1vf1/dy1vf11.png","188ed66982d5de183e78ae2effe4835a"],["/images/kfzx/kfzx0.png","ad38d78341b62b6bc821fd2d341c7a15"],["/images/live2d/live2d0.png","469daa68d1a08c91375cbe06e87232f2"],["/images/live2d/live2d1.png","40ab8beef1a4da0ccb7a3a6df7cb50f2"],["/images/live2d/live2d2.png","fd5dd6d4ec48377072778d43a951b5b4"],["/images/live2d/live2d3.png","cf1d850ca520f28ee14e476f96c78727"],["/images/net/net0.jpg","7912a54a8c47f3979e10255f730ec31b"],["/images/ssl/ssl1.png","eacca74c8f59bfb4582131362941d4b3"],["/images/ssl/ssl2.png","30e5e1f3f4ed95f1995147d8ecb770ab"],["/images/ssl/ssl3.png","2c69d73a7918cdc790bac1b631914969"],["/images/ssl/ssl4.png","d6d06ee53806442c6aa7b048bce37f48"],["/images/ssl/ssl5.png","d5013e168b274323cded1713995ade47"],["/images/ssl/ssl6.png","ff07c9cc76679d92ed8857bf6628eaba"],["/images/ssl/ssl7.png","4e4a058882c2f7ea9a7a153a2df09a92"],["/images/ssl/ssl8.png","ac2966c2d16e6b4ab6ba898ff3237536"],["/images/ssl/ssl9.png","9bb2f7d3a43159617c7cae352e1c5cad"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","3015086da2e014095a16f0eef5365a7d"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","70c9772766fca684b431eccf8bd837ad"],["/page/3/index.html","c38d656d14c8ed0fe2bd3e075c04d29b"],["/page/4/index.html","75ffb1e13b58949689f9ad44fff3e5a7"],["/sw-register.js","6d10d2c0c1f95f5bb766e0760ac1af54"],["/tags/Clash/index.html","6a637e821e2e559c4fcf1d3c8d190fd6"],["/tags/Gin框架/index.html","4527834dff00eab3a1ea43bfcf14bd00"],["/tags/Golang/index.html","3a8205dff39b313be6947b44612997e9"],["/tags/Gorm/index.html","8e078c8a7371196a7626fe5c60b5595e"],["/tags/Go语言/index.html","4f84446de707990eb7584ad576fe5ec0"],["/tags/HuggingFace/index.html","34e090a21358a72a95749b4a87e631f5"],["/tags/LLM/index.html","57a415a4b12d3d06e8943a536c07c9ba"],["/tags/Linux/index.html","6c7bab3df9ef6fc8c69c136f86254ca9"],["/tags/Live2D/index.html","81e375da6fac61dce7fbc40c907ddf18"],["/tags/MNIST/index.html","27191408c03f276511e0057bc7df8fab"],["/tags/Mirai/index.html","2c8b9082e0e22f8a210456db404f4d1c"],["/tags/NGINX/index.html","c07de7915e2feafec5a74db7099fb312"],["/tags/NLP/index.html","63b49243a08e54436d1022389d4770ff"],["/tags/Pytorch/index.html","9188c1d66b4b3f442ba94d6dbfac7463"],["/tags/SSL/index.html","0d0afd2317c63b3c2f942c5a9392c252"],["/tags/css/index.html","3e61f6d7effb7e86241f87503dbc9e96"],["/tags/html/index.html","c64b4c0aabf9db3c3e7900590e6c1224"],["/tags/index.html","b682178bd11db0b7145cbe784c069dc0"],["/tags/python/index.html","b98d556e60b2cf222fe95b670bea171f"],["/tags/丁曲/index.html","8149406d28c650ec3cec8b9b4c205907"],["/tags/前端/index.html","35accb8e2fdbfedfe7a0c8d6a1097031"],["/tags/大语言模型/index.html","d22f7fd694339113a386b43724411184"],["/tags/张量/index.html","1a91a4c2cd2f76ef93d852ec836b306c"],["/tags/技巧/index.html","7729b8a1dcf5bbd0a49610e18a35c576"],["/tags/抽象/index.html","a7bc791c501658c3ba1eeddfa6fdb204"],["/tags/数据处理/index.html","44cfaec96a266d0994cf31c73cf8f27a"],["/tags/数据库/index.html","b73956bc410215aea1fcb10328b87685"],["/tags/测试文本/index.html","d48c6ab8cc6cc9730ce61925c10d2906"],["/tags/浏览器/index.html","2726571e6ebc2cd3741fcb7d25250b4a"],["/tags/深度学习/index.html","7a9c92ec73aa4677734d925eafea72dc"],["/tags/爬虫/index.html","48acb584d82ec2189d49dc0a9549cc29"],["/tags/神经网络/index.html","5dde102a0b5c8d49a45df8257a8b897f"],["/tags/纪实/index.html","ac4ea0873e6b9fccbbcafbfe6877b89e"],["/tags/语录/index.html","7a09e22942af2d89db9f5cd09d7038d4"],["/tags/鼠标/index.html","7756b8f77a0ccaa4a19a34415757b832"]];
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
