/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","91e695e067eb52fa3d773dbedc2cd250"],["/2023/11/05/测试/index.html","5a01d8631c3344b71d343ab6b0239534"],["/2023/11/06/1tensors/index.html","e7f39a085ffd55b50aef8b675efb6f0a"],["/2023/11/06/blogs/index.html","9c8977f513cdeb43bc333a76ae2d4816"],["/2023/11/07/nn/index.html","2bed6ba4689a4007fc198d888acb1dd9"],["/2023/11/10/MNIST/index.html","fdaf184fd8f606202edc171d9b53761a"],["/2023/11/10/datapr/index.html","4b00f76ac9b047e0dbc5b68177c8b806"],["/2023/11/12/css1/index.html","353159553cda298a600d1bd204a5997c"],["/2023/11/13/css2/index.html","604a0dd90d31eaa9632703763f19a707"],["/2023/11/15/css3/index.html","a69fd137120c56df8f2df08934859f60"],["/2023/11/16/huggingface1/index.html","368847553eb17ff848314751780628b7"],["/2023/11/17/huggingface2/index.html","40017f003db0577cfc2327ce8c6b4df0"],["/2023/11/18/huggingface3/index.html","259d0c864d9c74b833c79ecc76fdf6c4"],["/2023/11/19/huggingface4/index.html","a419006d2b0e69141412f4e3bf953ae8"],["/2023/11/24/css4/index.html","b234e3c717823b9fbf47c3c5c927f202"],["/2023/11/26/ssn1/index.html","ee2e38fcee8ea630c4ef50e6547ca2ec"],["/2023/11/27/miraiqqbot/index.html","06a6c0afdbdb4d94b67d5c050dade510"],["/2023/12/21/ssn2/index.html","76fe6f5bf49da5bfc45365177ef18c58"],["/2024/01/02/llm1/index.html","be6fbef746b2249fe7935fde228c0bf1"],["/2024/01/20/go1/index.html","48a6528d8f5b43d7363da5234eb2d4b3"],["/2024/02/02/zt1/index.html","e44ba3425684865c8032ef877d81ec34"],["/2024/02/04/go2/index.html","f383e90a6bf9df175922d03b9a56f3b7"],["/2024/02/09/go3/index.html","351924bd6f67b3f7dbf70ba15f5f8e5e"],["/2024/02/12/go4/index.html","2ef2def29286600abdcffb49b9723544"],["/2024/02/17/go5/index.html","1de85a08637983dc6ddb7fe986f8ecf0"],["/2024/04/06/pc/index.html","91d59cd64f897042ced92b42a03fd856"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","f07f3ae01f968d67b0003722bd5a4718"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","2c2b46a3183aa5a9932fa250edb93ce6"],["/archives/2023/11/page/2/index.html","1d41697edebbcb0df0f0ab8617ba4210"],["/archives/2023/12/index.html","e31b39c01ef0d109dfff89dbbed86369"],["/archives/2023/index.html","1d44333ac92300b267521ebd4b4e3e2c"],["/archives/2023/page/2/index.html","dd14318361dc9f05c0e3e3e636dca573"],["/archives/2024/01/index.html","d285493c1d6ec0c4dba75592bb70e042"],["/archives/2024/02/index.html","46cbc3e1fdcedb85eed37142ebf18789"],["/archives/2024/04/index.html","f87d82a2e114cd817ca4779d02c969cf"],["/archives/2024/index.html","aea7d79204aaf1c7506876edb0ead05b"],["/archives/index.html","57d5fa99700e0378257e2892fb674972"],["/archives/page/2/index.html","c12457029d8c964c41a0aa33f404167a"],["/archives/page/3/index.html","dbdbc1ade840b22b13a6735a6dbeb3a4"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","6f335133f24412ac67ed656d772b8875"],["/categories/HuggingFace-NLP/index.html","6fc505a8a9995e51a147eecd3cc1fbbe"],["/categories/index.html","6c63f3b957deaef36d555259d728e5fc"],["/categories/python/index.html","8999a1a229aa2d52a860c1c8a1d14993"],["/categories/前端/index.html","4953521213eadad1113c3f0ae4c38a64"],["/categories/对话系列/index.html","6ab0ba0c76818167f08311c97e1f8897"],["/categories/教程/index.html","0ca9c3dd5c85e3be0ccbfd0294f314c5"],["/categories/杂谈/index.html","1c756e3236acf9f06d540eec54ad8ab1"],["/categories/杂项/index.html","4fb8cee9d338b21f860bd369f3f6b722"],["/categories/测试文档/index.html","68feb518bd0bd2980fa038a54cee2f89"],["/categories/深度学习/index.html","64ac7e5259d71b4f400b8940274f4b76"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","7e732b9e6cc78b44c7467da07e9e973a"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","a903190023653732693cb76d5cd5399b"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","05811c274aaa646c04f6abe4ddea412a"],["/page/3/index.html","19245c7785077cff0081c2a27f48df31"],["/sw-register.js","a564115fa172f640cdd56b2665a4c67c"],["/tags/Gin框架/index.html","61c5182f9f254146612d961a7e3047d1"],["/tags/Golang/index.html","fbfca64f35c8c4fe21c82500c8a8488b"],["/tags/Gorm/index.html","ffab69daf4d6e5f6a148a0bd761475f7"],["/tags/Go语言/index.html","280c97df2cb3d4597f1c52327df4c5f3"],["/tags/HuggingFace/index.html","ebe7cdfc5107ab0ea1a4fed1d682ebea"],["/tags/LLM/index.html","c33c1d1c26ec2093c8306f772bdb572b"],["/tags/Linux/index.html","2ede38898c3ff6b37bb67e684fd549ac"],["/tags/MNIST/index.html","aee424dcf96b5183023baa66f6a516c8"],["/tags/Mirai/index.html","9cd38c5475be5760c407d9e21ed9c35b"],["/tags/NLP/index.html","7be34f9d247b7e5b0eeb47e5e9a48a2c"],["/tags/Pytorch/index.html","bf8a90856935986d9feb068173dbc7bf"],["/tags/css/index.html","ed5b590f48dbdd8eefb1f77a4f617ffc"],["/tags/html/index.html","e78d85b1ff6236b847ca40485125b201"],["/tags/index.html","cc2634f3f4c7812eb1a663d54e4b6262"],["/tags/python/index.html","aac77bb93624609de496141210eaa429"],["/tags/前端/index.html","b2b1c18964fb0a17200e79215f272fc8"],["/tags/大语言模型/index.html","af7a01e0bde86aa9cf1b2912ff0c8985"],["/tags/张量/index.html","eafa59a9c7b83abfbfbdaf4d0ca7eefa"],["/tags/数据处理/index.html","a36fe07703e58fe11cab07ef2fd86e4e"],["/tags/数据库/index.html","4d62088308def358a6906de291f1d0b2"],["/tags/测试文本/index.html","9b31b39802b92e0e767f6d43ea3b007c"],["/tags/深度学习/index.html","9de6ee7d16e4ab6810ad3f3580dfd538"],["/tags/爬虫/index.html","4e842981a53d118d59ebc19bda7aa8f8"],["/tags/神经网络/index.html","622424d04ae41243411a4bc47bf2390f"]];
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
