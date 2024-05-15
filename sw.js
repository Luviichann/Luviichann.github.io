/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","1ca1e3744d6d94a85b2a35a8088e1f67"],["/2023/11/05/测试/index.html","591542da14baea9f1b5eff1bd671ccaf"],["/2023/11/06/1tensors/index.html","66b54e166ff50f5c3aadfae6ffa521d4"],["/2023/11/06/blogs/index.html","6a97060852842d57715ff63b059a3498"],["/2023/11/07/nn/index.html","411f17cb62af997c029226ca91490854"],["/2023/11/10/MNIST/index.html","df0154f400eefed21c445c60fb3991d0"],["/2023/11/10/datapr/index.html","4419d3aed565a3e794776184c86b1c37"],["/2023/11/12/css1/index.html","7c09ff8f3f5a6996397c48a16aa44f20"],["/2023/11/13/css2/index.html","35ebcbdfe9a1dd45386ba739b7b9e6f6"],["/2023/11/15/css3/index.html","275c87634bc116cbd5eb293ed797a716"],["/2023/11/16/huggingface1/index.html","990b876d58804c87ecdcfd62355820ac"],["/2023/11/17/huggingface2/index.html","49afe0ef81672a0465317d75f254bb78"],["/2023/11/18/huggingface3/index.html","cc4e360e63896b8c0f2eadd00087bb84"],["/2023/11/19/huggingface4/index.html","caa148f6762d10266858379f5f58dedd"],["/2023/11/24/css4/index.html","1d48417c7e713de3127d560e07a90d95"],["/2023/11/26/ssn1/index.html","fcc5523f65cd7198db6e480d659d03ee"],["/2023/11/27/miraiqqbot/index.html","a76c295db726cfd242ad72c8771b8a3f"],["/2023/12/21/ssn2/index.html","a5af611c9bed236307f5fd8e26ebe1cf"],["/2024/01/02/llm1/index.html","04a2b7262afed655722aa288783a2a51"],["/2024/01/20/go1/index.html","9e540592da9cb4d4ec2e4618e3bff13b"],["/2024/02/02/zt1/index.html","fb78726050bafa5b0bf5864b1fa2ce72"],["/2024/02/04/go2/index.html","88f26da6b04d1d8b2d64216bff2f9232"],["/2024/02/09/go3/index.html","14a4b68815de9686c115aaed0f90ea98"],["/2024/02/12/go4/index.html","e89f05af944dc92c32299b86d9e3ba97"],["/2024/02/17/go5/index.html","6316527cf8e8e14cb25848c9b57e900f"],["/2024/04/06/pc1/index.html","e8c4e0d5265fd6b481399b7dd9ea3b91"],["/2024/05/07/pc2/index.html","071e29250ccbb2910f8578dede7b1069"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","e8299e65fad484e4665d54abba73e62c"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","296e6b4519e42d5d32426049635891a7"],["/archives/2023/11/page/2/index.html","f6bffd18a8cfbdba07f28b62d468e90d"],["/archives/2023/12/index.html","ec49aee0f9593406880b1a0c272e5e6a"],["/archives/2023/index.html","e6fcc40cde5d32576b168ae850e2e7dc"],["/archives/2023/page/2/index.html","b42b1c8a0e20244af70935e8356cb4fc"],["/archives/2024/01/index.html","293c45c55ccbd607f1a2e11783fe6a06"],["/archives/2024/02/index.html","0c0dda449c6f39b74c135105794726fd"],["/archives/2024/04/index.html","57fa20d8256d459dc0b9301729960481"],["/archives/2024/05/index.html","0e5367fa1e5dbfc2624895cc9f19102f"],["/archives/2024/index.html","33a91cb3e3629868eb9f4d061c0d656f"],["/archives/index.html","359fb5edeca92ece00cfbce77e138466"],["/archives/page/2/index.html","25f13d26fd1c633cc1dd8f9ae73546bf"],["/archives/page/3/index.html","fc2014f71eb13b226859f4006a96b3ed"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","4fca7c941a0c362e6ed9efb13f087a17"],["/categories/HuggingFace-NLP/index.html","37fbf525f7a3a384a2a699f4d3ea19a0"],["/categories/index.html","8b761bcbe62241f97ceefa3f24fb9cbb"],["/categories/前端/index.html","c864b8ac59c51fa1da15b0b996cac7a5"],["/categories/对话系列/index.html","b7e5676e15236fb64f1d6c96f27f6b4d"],["/categories/教程/index.html","783c4b6b655253852d3b5770ad6b1492"],["/categories/杂谈/index.html","3d39c84fb41528f3ec4afce7fe281087"],["/categories/杂项/index.html","81ee096b9f1fe1edf4a6aac9f6c6bb8b"],["/categories/测试文档/index.html","eb05648a8f146dd74bbf882d7ca4331c"],["/categories/深度学习/index.html","470e7593b8c95fa04e267c76dadd050f"],["/categories/网络爬虫/index.html","9e8930d9da77375a9262bde92f67ca3f"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","a25495680b920d397ac659c30fce55e3"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","499d00338ec48f3a0fe82cb4818031ec"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","7fb0b90850d582fe07b4983c6de69cc2"],["/page/3/index.html","a6a8c75be0191ae2f6425fda8a88f9a4"],["/sw-register.js","af13f36196c005b157b7914dd68f7bb2"],["/tags/Gin框架/index.html","107fa1ffa23b6b8da33b356744bb1d64"],["/tags/Golang/index.html","a8063e06fd2808a44d9aa7382f68de5e"],["/tags/Gorm/index.html","941f5fd530946f1f19766f54dff709c7"],["/tags/Go语言/index.html","eceb676532357e26ebccd4067822349c"],["/tags/HuggingFace/index.html","ac7ed15f6b44381af1e017cf9a901ef5"],["/tags/LLM/index.html","bc59932f23388e5416969594be4eb629"],["/tags/Linux/index.html","f08d5f45fe24548446aefde1afbdf3b9"],["/tags/MNIST/index.html","085ae638de321a454d0c652225d621e6"],["/tags/Mirai/index.html","5d0231ed96f05238734134e7e4253b8a"],["/tags/NLP/index.html","18e07b0b2c9481670568ffc2a6efb903"],["/tags/Pytorch/index.html","cde77dffda148db5b8cc59b8dd47aa3e"],["/tags/css/index.html","1c7e78d6942d005c6e47342dc14abd32"],["/tags/html/index.html","1db745009c7e7de5266d02a4aec67536"],["/tags/index.html","f77c521ecc261f18e1136e8f5b756111"],["/tags/python/index.html","c679b4f80d73e0abb8f79f52770374d0"],["/tags/前端/index.html","6802d2571b42218ee9d771881ee9ae64"],["/tags/大语言模型/index.html","ef33504c24c65b9ec20cee0de8f44880"],["/tags/张量/index.html","741ad4bc3485b16f6afc1107add145d6"],["/tags/数据处理/index.html","4067ba134e26578f89fc611c4ec4841d"],["/tags/数据库/index.html","40db953f16a879eb910b89ed6eee030d"],["/tags/测试文本/index.html","8d969d3334f6865756f7521abedb5318"],["/tags/深度学习/index.html","0ec5f7fce1897fac26fb9fbb47f82483"],["/tags/爬虫/index.html","cddd062eb424cfefe5e66e7e67bb174a"],["/tags/神经网络/index.html","f1a25da94419e92a072a9a8bd9c1c013"]];
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
