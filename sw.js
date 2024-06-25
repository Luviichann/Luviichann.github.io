/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","40efe621bb955547ec62f61181c35d6e"],["/2023/11/05/测试/index.html","3581113ce5958713149652d31b9ee08f"],["/2023/11/06/1tensors/index.html","7d5c08ce0c54510ce0dfa951920902f4"],["/2023/11/06/blogs/index.html","3540a3631d9981a4be2b4f195072c794"],["/2023/11/07/nn/index.html","ab2f033c12beec7ad960fbe3853a81c4"],["/2023/11/10/MNIST/index.html","20e5d355af8950de0527bed8d32af114"],["/2023/11/10/datapr/index.html","61f74dac685cf10f8335752466d73428"],["/2023/11/12/css1/index.html","98629357e224f14834a95d31570cfa4e"],["/2023/11/13/css2/index.html","be1c5777a1b05f37fb506349d9d0f65b"],["/2023/11/15/css3/index.html","6b188d1747f3131a2e18153fae2fb5fb"],["/2023/11/16/huggingface1/index.html","e978633bb0678a9c7236f7ab46e92bb5"],["/2023/11/17/huggingface2/index.html","0726652b66e355d4351e8832f3915153"],["/2023/11/18/huggingface3/index.html","77e70a5bbc6b79ee03152290a3320e61"],["/2023/11/19/huggingface4/index.html","a46211e4f8e855a75cceff894a3710ba"],["/2023/11/24/css4/index.html","17670880d110d7265d69b94a240f84ed"],["/2023/11/26/ssn1/index.html","a117ec12dffd0e667c47bc2ed38217ce"],["/2023/11/27/miraiqqbot/index.html","f9ae5b4e6c77d0c5994ca43e8d8dfb47"],["/2023/12/21/ssn2/index.html","3f89df3b1807891ad780ea4f6324f0ee"],["/2024/01/02/llm1/index.html","2170dbfa9e7751401876e476efe02755"],["/2024/01/20/go1/index.html","355298e9ccacee0e066c5341f542579a"],["/2024/02/02/zt1/index.html","043c4a77a902b1ea59f40b9ec16a2a01"],["/2024/02/04/go2/index.html","0eacd7cfd1904be67434055ae7e34de4"],["/2024/02/09/go3/index.html","43d7bc96c45059519bdf9da9ac683891"],["/2024/02/12/go4/index.html","5b26bc3d444e2a6a30b257598a5f6c1e"],["/2024/02/17/go5/index.html","20fa1fac01fd77643ee2dbe94e16c08b"],["/2024/04/06/pc1/index.html","e7e6de3f4c856aa65934794c008d1882"],["/2024/05/07/pc2/index.html","5e5c9297cfd85df13e81942b12e2104d"],["/2024/05/19/htp/index.html","c4a094e874135ce9f2bd4dd22e7b8c04"],["/2024/05/21/go6/index.html","9516c03d04913d3a27807745283f82f3"],["/2024/06/03/ssl/index.html","1c8ebb45071fe71becac5ecdec461d71"],["/2024/06/24/cursor/index.html","4d8274561b02eab768e8c5fbdb9a6a3e"],["/2024/06/25/clslinux/index.html","710c41af1c66b294e21175d7fa712908"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","8cf51339704929537858f6c3052aad8a"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","1a2e02ce61877bccd8ce11533e817af8"],["/archives/2023/11/page/2/index.html","75e5a4caa1285f6e328f1e915db2e9d2"],["/archives/2023/12/index.html","df35523938787e56d089593971e23a37"],["/archives/2023/index.html","dc939904d8b929cd46e4aa1a2ff23955"],["/archives/2023/page/2/index.html","da43de1c3080b4c544fb65042c96513c"],["/archives/2024/01/index.html","d3cde875dbe35592b80b40502f2f3908"],["/archives/2024/02/index.html","120515d8fb6421dfb5f325286fc3c658"],["/archives/2024/04/index.html","74974ed73289d7e550b0356634ea9c41"],["/archives/2024/05/index.html","443b083ea6336a1fc70b57740c4dca50"],["/archives/2024/06/index.html","cd7dbc06ca75a4f8d9b52c6ffd68350f"],["/archives/2024/index.html","fe886099c23335577f924114316fd18b"],["/archives/2024/page/2/index.html","8a339d2b20afd6289a41a03ad75a70c8"],["/archives/index.html","e3529212409f1824f86d3c5052067972"],["/archives/page/2/index.html","bc77252819101cba2007819276786132"],["/archives/page/3/index.html","5c2f03e9e9e2e5210d00385282538d07"],["/archives/page/4/index.html","5d772b20e16ea101782353021153acae"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","bb36503d3464e155e5bf87b19757bb4a"],["/categories/HuggingFace-NLP/index.html","4ea3e79c6574731b6697edadac056446"],["/categories/index.html","20f002aff72b0afba902b2f2a206ac92"],["/categories/前端/index.html","65868183d0093954f9e2c251891ec1e4"],["/categories/对话系列/index.html","1aaad5ab27476f01c48efb05728f087e"],["/categories/教程/index.html","88c5dd3bf8ecb0118d9a255cd50dcd8a"],["/categories/杂谈/index.html","abb3c16104f882136b34a577550b0da0"],["/categories/杂项/index.html","10f9ba2c30ea0ac0757d62dc8025a4fb"],["/categories/测试文档/index.html","9cce8fb203ae646e774f12be7ebc65b5"],["/categories/深度学习/index.html","7c5149de1f45cbefe2008e61ba361411"],["/categories/经验分享/index.html","ad12de0530287dc4e62db1dd58a91865"],["/categories/网络爬虫/index.html","850108d2f1b4f8b3738f233156411056"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","ca16cd96e3ec18aa23a5a92b49e1ddfb"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/clslinux/clslinux0.jpg","4df81190521280de69520c0b009e8b5f"],["/images/clslinux/clslinux1.png","c3321d5f149d272f1a10ab2ec150c820"],["/images/clslinux/clslinux2.png","63ee9a68c861d1aa4a78c9cd2ba142b7"],["/images/clslinux/clslinux3.png","8238df845bd32dd43f323c87eaeb4db2"],["/images/clslinux/clslinux4.png","d582a7db24df865a3213dbcacb5a0955"],["/images/clslinux/clslinux5.png","21b1f5b964c3910936c076fb691a8aa4"],["/images/cursor/cursor0.jpg","f774201001001971eac95fa43242ce7e"],["/images/cursor/cursor1.png","5098299f84539d49ae8e80d3c2b3e73c"],["/images/cursor/cursor2.png","4e72b0dc17312fdf680fb155dcadc6e9"],["/images/cursor/cursor3.png","236ad4f3dd1d1ebbc2a3239eaf2d6e3f"],["/images/ssl/ssl1.png","eacca74c8f59bfb4582131362941d4b3"],["/images/ssl/ssl2.png","30e5e1f3f4ed95f1995147d8ecb770ab"],["/images/ssl/ssl3.png","2c69d73a7918cdc790bac1b631914969"],["/images/ssl/ssl4.png","d6d06ee53806442c6aa7b048bce37f48"],["/images/ssl/ssl5.png","d5013e168b274323cded1713995ade47"],["/images/ssl/ssl6.png","ff07c9cc76679d92ed8857bf6628eaba"],["/images/ssl/ssl7.png","4e4a058882c2f7ea9a7a153a2df09a92"],["/images/ssl/ssl8.png","ac2966c2d16e6b4ab6ba898ff3237536"],["/images/ssl/ssl9.png","9bb2f7d3a43159617c7cae352e1c5cad"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","6389143c6c9887637d013426e0d650a1"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","0bd4a0325298e1eda4f54d13e41c37c1"],["/page/3/index.html","9cca2a9b29b93c50a33d0a0ade94972c"],["/page/4/index.html","90f5cb56f70d500dc9b45c0ce898aa56"],["/sw-register.js","d1b581155826b10ba1e6c2d05df1698a"],["/tags/Clash/index.html","b04cad09beac53629380b87426fb6192"],["/tags/Gin框架/index.html","9907b0e24cecce935cedbecd9ca702e9"],["/tags/Golang/index.html","85b4f5432413dcdc8c0b4f58e06421fc"],["/tags/Gorm/index.html","25cdee23daa0b38f69b98c4b3b67a54e"],["/tags/Go语言/index.html","a2c3d2513ed725eb896bd2a17a275324"],["/tags/HuggingFace/index.html","3fe0696a8058a7ee533409a22c22b6ba"],["/tags/LLM/index.html","a752450fcfa1dbc4be995788d6c1ad70"],["/tags/Linux/index.html","90b78d850096529f730a31d408bac84b"],["/tags/MNIST/index.html","f6d8b9b7dc6c22c035e969a719570f40"],["/tags/Mirai/index.html","c8d3d4c260337dc6e1174a502b57094f"],["/tags/NGINX/index.html","d9dcefdd0632bbf5f224af61dbf532d1"],["/tags/NLP/index.html","2203024acf5a078dacf743a3bb4490c4"],["/tags/Pytorch/index.html","a100b2c6bdbfd81d5bf8eab82d943b13"],["/tags/SSL/index.html","61d56aa276ccaf41591a87a502d9d520"],["/tags/css/index.html","53f2553b6adb6f4ece3a820a44cc3799"],["/tags/html/index.html","2a579f3187208ea53dfec42af25e8885"],["/tags/index.html","ceba860a7e6a0333d522addbcc45975c"],["/tags/python/index.html","b3e54d341f81a1351e571c540336564d"],["/tags/前端/index.html","ceebd1b7a17927df1d283dddda191ba8"],["/tags/大语言模型/index.html","25265a09dd7e048057191738a1aa4077"],["/tags/张量/index.html","2bdc26abedce3b2f090d4301880de980"],["/tags/技巧/index.html","3f51c1f6a777e5564552ba994111cf24"],["/tags/数据处理/index.html","f220f14f3a710efb9482a1bdf0adcf4c"],["/tags/数据库/index.html","c01c32c61ae0200488d612a92975722a"],["/tags/测试文本/index.html","7f322b162ebbd3aa9fbcbe54ac9f9571"],["/tags/浏览器/index.html","d3dfce0b9151bbea5599dd6d8714e7fd"],["/tags/深度学习/index.html","fad4850814cd6173b0121a51220f9434"],["/tags/爬虫/index.html","27ad57989b76044585dd6672c27a3b6b"],["/tags/神经网络/index.html","1aa84dff535163a83b0a01a2389be3d8"],["/tags/鼠标/index.html","7777f47fe620b16fe8aec8a910a64644"]];
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
