/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","92f1900fe54c0268630e0bc454643904"],["/2023/11/05/测试/index.html","e16d26271d685d706da4898d2ff9ef95"],["/2023/11/06/1tensors/index.html","afdb2d9cb2fb335524314639fd857d9a"],["/2023/11/06/blogs/index.html","87e5cc3bd2a97845fdcc4421e83971dc"],["/2023/11/07/nn/index.html","0ca8051d6f9b089287c925eeca075ff9"],["/2023/11/10/MNIST/index.html","900ddeef315c0ed10269240c426d4712"],["/2023/11/10/datapr/index.html","f31e6958413a6effb4de532aa7f461fa"],["/2023/11/12/css1/index.html","a7e838d8dfc15889974f61524ddf4328"],["/2023/11/13/css2/index.html","ef369633f2580291c0e13dd65692b2c0"],["/2023/11/15/css3/index.html","b16c93ac8c78dcd804806f541dbb0106"],["/2023/11/16/huggingface1/index.html","0f5e26ca72242a8adb863f808849e1f7"],["/2023/11/17/huggingface2/index.html","4f4c05588c254c49b2928626001e4322"],["/2023/11/18/huggingface3/index.html","dda8b20308039ffe1c8b11adc718d141"],["/2023/11/19/huggingface4/index.html","db6ab403791f93932fb5dfd1acab58b0"],["/2023/11/24/css4/index.html","9258ffccd62b365dfb436a9e3ac2de84"],["/2023/11/26/ssn1/index.html","a08ee0f33b91b91c8f8f4c804a12695f"],["/2023/11/27/miraiqqbot/index.html","017aba364d5d090b63126312f3806b84"],["/2023/12/21/ssn2/index.html","73cb8d0ca248a1ddce11978aebb04ba4"],["/2024/01/02/llm1/index.html","59f1b8708b934c7ee679799c11ac502b"],["/2024/01/20/go1/index.html","63f9f6d137c0c8533611c3a1ae2f1b6a"],["/2024/02/02/zt1/index.html","5ce5b846032ea3bcdce5d0cc4388ac64"],["/2024/02/04/go2/index.html","7d66861c1dfe11f705db12dbe44a0bae"],["/2024/02/09/go3/index.html","d969ad4745c1f78e998e33e665712984"],["/2024/02/12/go4/index.html","34f13bce432de7b96dfdbed0470c45e5"],["/2024/02/17/go5/index.html","d09ae49485335be635ecde39d9693434"],["/2024/04/06/pc1/index.html","57f5b042ba86be8856d965653e0a4a62"],["/2024/05/07/pc2/index.html","c4601661011dbb2324609bb87d5d293b"],["/2024/05/19/htp/index.html","1c9dbf960a3291e7a6219746802f2f5f"],["/2024/05/21/go6/index.html","f6e41e01d1f52d0de6820d827e4b9c8d"],["/2024/06/03/ssl/index.html","fa36eaf244e59ff09a479ded27742f63"],["/2024/06/24/cursor/index.html","a474afedec41a1c728307eaa491b6b9e"],["/2024/06/25/clslinux/index.html","1b45b5c9ae1ed60182f46ac2644d9271"],["/2024/07/23/live2d/index.html","3505424d1aaeef67a5b11c18ff9fdb14"],["/2024/10/04/kfzx/index.html","003dc19c94c86a575d9c25acf7bf0ef7"],["/2024/11/07/daye/index.html","42a80d212b6dfd556be8de3431152a79"],["/2024/12/31/dy1vf1/index.html","79ad44630a22304dc11b185e55ccd36d"],["/2025/01/06/mc1/index.html","bf1d63b2f8516dc35a1eca3bd4047ff3"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","8be14ec85e3d5e8c926eaf3efa1518d6"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","f660d51584d272d55a57fcf63a002b9e"],["/archives/2023/11/page/2/index.html","8284fc26770f2de6c21dccf9cf69ffd7"],["/archives/2023/12/index.html","93197cda5365c76a9c052866b4f6aa0a"],["/archives/2023/index.html","2490e5788d3af5005b060e9ad9e526c9"],["/archives/2023/page/2/index.html","d8bc20d08d87ffe3b143531ec409f09e"],["/archives/2024/01/index.html","793f4616a5ccc088320da64e7b47961e"],["/archives/2024/02/index.html","8b2e55f8ce9d0c596328a0b29057d559"],["/archives/2024/04/index.html","c6cebfd8f4f2f86702f8ccf4635e6999"],["/archives/2024/05/index.html","fd5bb6a930386f01853459f46b4c902e"],["/archives/2024/06/index.html","0a885c4ed97c09c9277a060e59bc1ae0"],["/archives/2024/07/index.html","d20b8ca4a43e6be77da4b103d5d77fbf"],["/archives/2024/10/index.html","d0ea8de29af54139f9f90208afd1da67"],["/archives/2024/11/index.html","375f150947efe46e312676c4f2a33ab8"],["/archives/2024/12/index.html","3ab823e49ba044ff699a2a5eeceaeb14"],["/archives/2024/index.html","b9b903b80ccc01b0f0c4402624a21dcb"],["/archives/2024/page/2/index.html","76cb3de3ecd51ba13346abcf2dc0698b"],["/archives/2025/01/index.html","5124671acadd063927e519bb2f3e5941"],["/archives/2025/index.html","5782f479b7d30cfab872078dcfde2071"],["/archives/index.html","88b42bb842ebdfa3f2d3dc2630cf0fd0"],["/archives/page/2/index.html","77aeba36453c6ba6f1b35ffe0cb6f7b9"],["/archives/page/3/index.html","e2bad33af1ae241d03a736a243fba116"],["/archives/page/4/index.html","cb2d574240d68b3017764ad89868f3e3"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","bbf195054bfe3334fce18cbd4bbbea5d"],["/categories/HuggingFace-NLP/index.html","944873188f5bfae77b61d36ddbde8ab6"],["/categories/index.html","efffed3db44d9bfeea44b2c1a8c3498f"],["/categories/丁曲/index.html","37786c6c607e44b4b1b13c7878aa8f8c"],["/categories/前端/index.html","71345c1d11bdf4850b3acda8acec6acc"],["/categories/对话系列/index.html","a515cab7040488ca6e7c07e5c18e5492"],["/categories/教程/index.html","e1e536f783dda60b401ad811b1079945"],["/categories/杂谈/index.html","40e9224bf94812062200a7e71d0b3fb1"],["/categories/杂项/index.html","2a0bdb78512065f88970e880fe03616e"],["/categories/测试文档/index.html","c925b7ea12ff7ec1ac708a05f76e0a9c"],["/categories/深度学习/index.html","b87a56efb7a33a6af1f1dd9bffefc752"],["/categories/游戏/index.html","765f7043c7e013798e9d3cebe736e7d8"],["/categories/经验分享/index.html","5bb67dc08482f785570c90d409a8cbb3"],["/categories/网络爬虫/index.html","c3cf23ecaf82b491ab3dec8981a88377"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","ad272f692098205d272b6634c0180dbd"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/clslinux/clslinux0.jpg","4df81190521280de69520c0b009e8b5f"],["/images/clslinux/clslinux1.png","c3321d5f149d272f1a10ab2ec150c820"],["/images/clslinux/clslinux2.png","63ee9a68c861d1aa4a78c9cd2ba142b7"],["/images/clslinux/clslinux3.png","8238df845bd32dd43f323c87eaeb4db2"],["/images/clslinux/clslinux4.png","d582a7db24df865a3213dbcacb5a0955"],["/images/clslinux/clslinux5.png","21b1f5b964c3910936c076fb691a8aa4"],["/images/cursor/cursor0.jpg","f774201001001971eac95fa43242ce7e"],["/images/cursor/cursor1.png","5098299f84539d49ae8e80d3c2b3e73c"],["/images/cursor/cursor2.png","4e72b0dc17312fdf680fb155dcadc6e9"],["/images/cursor/cursor3.png","236ad4f3dd1d1ebbc2a3239eaf2d6e3f"],["/images/daye/daye0.jpg","a129e4439995d03439f5a245921bb8e2"],["/images/dy1vf1/dy1vf10.jpg","ac54d7c88e346e818a020193c9ea6d74"],["/images/dy1vf1/dy1vf11.jpg","b350d39634d0b0fa94074a0e8204523b"],["/images/dy1vf1/dy1vf11.png","188ed66982d5de183e78ae2effe4835a"],["/images/kfzx/kfzx0.png","ad38d78341b62b6bc821fd2d341c7a15"],["/images/live2d/live2d0.png","469daa68d1a08c91375cbe06e87232f2"],["/images/live2d/live2d1.png","40ab8beef1a4da0ccb7a3a6df7cb50f2"],["/images/live2d/live2d2.png","fd5dd6d4ec48377072778d43a951b5b4"],["/images/live2d/live2d3.png","cf1d850ca520f28ee14e476f96c78727"],["/images/mc1/mc10.png","032933f57ff44a9feb285db96a02c7d7"],["/images/mc1/mc11.png","85838e19d9c933019467580da50c5b34"],["/images/mc1/mc12.png","6e24adb91ad43e59662a45720f1a1266"],["/images/mc1/mc13.png","6115a29b2b7d0d38264d714098ae7288"],["/images/mc1/mc14.png","582baaad7cfb37c2866d5d6c27d0cf04"],["/images/net/net0.jpg","7912a54a8c47f3979e10255f730ec31b"],["/images/ssl/ssl1.png","eacca74c8f59bfb4582131362941d4b3"],["/images/ssl/ssl2.png","30e5e1f3f4ed95f1995147d8ecb770ab"],["/images/ssl/ssl3.png","2c69d73a7918cdc790bac1b631914969"],["/images/ssl/ssl4.png","d6d06ee53806442c6aa7b048bce37f48"],["/images/ssl/ssl5.png","d5013e168b274323cded1713995ade47"],["/images/ssl/ssl6.png","ff07c9cc76679d92ed8857bf6628eaba"],["/images/ssl/ssl7.png","4e4a058882c2f7ea9a7a153a2df09a92"],["/images/ssl/ssl8.png","ac2966c2d16e6b4ab6ba898ff3237536"],["/images/ssl/ssl9.png","9bb2f7d3a43159617c7cae352e1c5cad"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","b3eb0f2b3666adf153f047248b2685c8"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","a7dfc210c98f42f02f7a05011bad0b1a"],["/page/3/index.html","eb0fcbda89aaa0901f43189f4baa1101"],["/page/4/index.html","76bd7e1b81c191812068a209e1696c5a"],["/sw-register.js","6b3ab6a29fcd28ac35f8c7fb91589f8b"],["/tags/Clash/index.html","0b6158960315dc90eb6007d2ee57ee49"],["/tags/Gin框架/index.html","f16f0c8c6f86b8b66e31e8a2495c18e4"],["/tags/Golang/index.html","5806d857749a70da70a43b45ee6ceaad"],["/tags/Gorm/index.html","21575b7a90aa2d0d535bd83d6f2e4cab"],["/tags/Go语言/index.html","ad2cde52762763a8ed90d587bac22732"],["/tags/HuggingFace/index.html","25989ef1676a811222d3e0357924ecf3"],["/tags/LLM/index.html","d43adfd96f8724dbc028ba5b600742d5"],["/tags/Linux/index.html","a1d236fcf51beaf969701b092807d9c4"],["/tags/Live2D/index.html","c1e441adc5cefadd86b25115fe8e1f42"],["/tags/MNIST/index.html","331a5ee67259eb478b47d8cffbd012dc"],["/tags/Minecraft/index.html","e0a428224eb472e7df11b8a952df67ca"],["/tags/Mirai/index.html","031c69781ecec60391cff0ec64a556a1"],["/tags/NGINX/index.html","23bee30613f5036ec74a3c421e7bfb28"],["/tags/NLP/index.html","52fda77afa95de55ffcff09344420a48"],["/tags/Pytorch/index.html","5d963196b8dd4d3d70cc4393f12bb637"],["/tags/SSL/index.html","92eee9395acfbb33be404eec3ee20329"],["/tags/css/index.html","b19a587f680113defa81a13e1a8c7d7f"],["/tags/html/index.html","9cfb3fe70ca5eab7bf0c6f2ba9df9f6c"],["/tags/index.html","d7a04402de240d986166a2d40f93f9b0"],["/tags/python/index.html","376b4973a3d308d8664c40ebee5069ac"],["/tags/丁曲/index.html","b48af54b4cb553c410751135c890c89f"],["/tags/前端/index.html","9019a8be54a1bbe415c7e9a9510c0109"],["/tags/大语言模型/index.html","7aa23ed24b1cefcd957426cc0a7ae6ae"],["/tags/张量/index.html","93975c94db94cfa44077a374b498b79c"],["/tags/我的世界/index.html","aec79ee2cc8846ab56c908d4e234a48d"],["/tags/技巧/index.html","1a343d53682fc0f5f0344416f6882013"],["/tags/抽象/index.html","ca48d1bf5b1a391b7e9261b2fcbdfb5f"],["/tags/数据处理/index.html","9d9c546665b6680c04b141a7aa39c744"],["/tags/数据库/index.html","81b0003376cd6141f60d56b44bda8a74"],["/tags/测试文本/index.html","b8656e1c1b91e65475f48c43d3080fe4"],["/tags/浏览器/index.html","595fb8cd8c47d9aff9074fc57db46eea"],["/tags/深度学习/index.html","0bdfc2300e80b1703443ef865a108196"],["/tags/游戏/index.html","fd7bc141c01b7edc35adb7b66a7b26d4"],["/tags/爬虫/index.html","c2a40f7a2be521c93ef6a5c34c18755e"],["/tags/神经网络/index.html","5cdf3118b97538ff8ae689a26e33454e"],["/tags/纪实/index.html","36cd3c988bcc9cc331113252deffb214"],["/tags/语录/index.html","72e8cd9efc3fc93fad325f6fccd69aac"],["/tags/鼠标/index.html","6862abe61462bd3f26a8ebe3a4c3de7e"]];
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
