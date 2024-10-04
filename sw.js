/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","09be257fa2ec6447bd46c9dcc0f402ba"],["/2023/11/05/测试/index.html","e4f913199c15837549155fa687660b73"],["/2023/11/06/1tensors/index.html","adf94784602e5c399eaa576ee1f34c38"],["/2023/11/06/blogs/index.html","26f78da5d7535463fee262b3214c54fd"],["/2023/11/07/nn/index.html","904d2c1427793bbbf39c3a12a332f742"],["/2023/11/10/MNIST/index.html","0e11a19c0b6efb8ca41a59f7d922e796"],["/2023/11/10/datapr/index.html","d8c0dc2e5cf7e1662ef97f43bbd12748"],["/2023/11/12/css1/index.html","dc5134215522c9c2e0793d35c4d099c7"],["/2023/11/13/css2/index.html","b94ec1f8df378fe228f5a15448389d2f"],["/2023/11/15/css3/index.html","1671a652998c41104ad0f202dae5a4ee"],["/2023/11/16/huggingface1/index.html","9657ce6a5a978521c15e88796161895b"],["/2023/11/17/huggingface2/index.html","df4a72abf3053e6b5db6d383f91530ba"],["/2023/11/18/huggingface3/index.html","2d25ed3f567db0274620ce45dccb5b2c"],["/2023/11/19/huggingface4/index.html","43b716d804bb53ad97972965e8d81510"],["/2023/11/24/css4/index.html","9ab122b960f1a51637757e416f9820aa"],["/2023/11/26/ssn1/index.html","832c47a1681844a96fffa9d6262b2e54"],["/2023/11/27/miraiqqbot/index.html","d8405b1b808df22f0ab114c39a01de42"],["/2023/12/21/ssn2/index.html","ae986a290e009f8564bc8a879995516a"],["/2024/01/02/llm1/index.html","0e6250c711f3fca55c4b27b06cc5a1e5"],["/2024/01/20/go1/index.html","ba01de819cfa4d606b0df16dc2159ad5"],["/2024/02/02/zt1/index.html","448d82719a7c815707bcf46aefe62132"],["/2024/02/04/go2/index.html","1f9296d0159fae5b44d1da07720dbba2"],["/2024/02/09/go3/index.html","5e5a90e1fefd4d863b49c89a3bff6213"],["/2024/02/12/go4/index.html","967c170c1d19443e0e2c33facdd645af"],["/2024/02/17/go5/index.html","d6dbd24ae661a5ec095b8a20e473c589"],["/2024/04/06/pc1/index.html","9d9e2e5abcaac7e2207945edcf4b1a36"],["/2024/05/07/pc2/index.html","7872a98c3081befb90a79b3a90523672"],["/2024/05/19/htp/index.html","c67d1ffeb408d03d8c6e31e68c5b1c08"],["/2024/05/21/go6/index.html","05a702b53c900f7f427aed329bb1ff42"],["/2024/06/03/ssl/index.html","4f09416f9d5811eafc670752532c8823"],["/2024/06/24/cursor/index.html","d021687baceaac146736a4180d1dc5e4"],["/2024/06/25/clslinux/index.html","4fc76fd81a8ca6515cb4fe744946b768"],["/2024/07/23/live2d/index.html","e0d218342014e12d9a54037a573830b4"],["/2024/10/04/kfzx/index.html","cc839c0d3c561fd1751f6bbe9281a331"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","4b041aac8af9ef38c44a533e7204684c"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","fa82afd33b4240424fed217405eb7bf0"],["/archives/2023/11/page/2/index.html","da64e967d722a25a0e0d11f7384606e2"],["/archives/2023/12/index.html","b814f3888f440aa9efacbad6a9f3db84"],["/archives/2023/index.html","cc27c634efa0a913147d5a3ceb2d9b30"],["/archives/2023/page/2/index.html","8de16ed74f73aca87bb6895a0a8cd51b"],["/archives/2024/01/index.html","56eba8f9e7daca701f18a9dae3fbba8e"],["/archives/2024/02/index.html","a43936d970ccfc9a7f572d0730bd7fe9"],["/archives/2024/04/index.html","c3c3b827fa5c872fdba508420d995d0a"],["/archives/2024/05/index.html","3c4f83d5d9415c34ca35628913fa13c3"],["/archives/2024/06/index.html","be21c4b24b32fe9dcc2e1df9977734e8"],["/archives/2024/07/index.html","8acd7815f56662db335fa95e8151e77b"],["/archives/2024/10/index.html","c8761a96709d350d702b2769b34e253f"],["/archives/2024/index.html","7b84336bbe0c9c63e6100442c4f94c35"],["/archives/2024/page/2/index.html","56d7129d4712e0a110759e6b7e1a49c9"],["/archives/index.html","f9e55c2cce2180eec4881b056748f80a"],["/archives/page/2/index.html","637e846aeea9aaca79dbee7b694c6fc3"],["/archives/page/3/index.html","ae5604590c5aaf122cdadcd063297945"],["/archives/page/4/index.html","8db8a8bef4b54900e08cb97f5a6a25d5"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","31382886860dedba5545ddaf367753f5"],["/categories/HuggingFace-NLP/index.html","b0894811d5871d5ba20982105d81ccc6"],["/categories/index.html","04a3600b885e1e9f1939d0751a934c43"],["/categories/前端/index.html","c6c17edd23e1bbf38c44551b88b5d79b"],["/categories/对话系列/index.html","6a4014e0bc0706e8a6e180a11c943dbc"],["/categories/教程/index.html","ec2c8a4c1fc01ec7a68af2eb8e9a56b8"],["/categories/杂谈/index.html","99b5848b76a18df287d45b72818644d1"],["/categories/杂项/index.html","9b3912db1bf1a92a75ecab0f6b71e7c8"],["/categories/测试文档/index.html","a88f2d5fe2be93f8824a17f1c03d09a6"],["/categories/深度学习/index.html","079cf9fa497493e3d1e7f062eed3205f"],["/categories/经验分享/index.html","e23cb83d2bd30a10ca49e0171a2279ad"],["/categories/网络爬虫/index.html","3c0555e5c3f10832449343e75a750bc3"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","c070cbe645d07937b7b554b2bfa2f6d7"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/clslinux/clslinux0.jpg","4df81190521280de69520c0b009e8b5f"],["/images/clslinux/clslinux1.png","c3321d5f149d272f1a10ab2ec150c820"],["/images/clslinux/clslinux2.png","63ee9a68c861d1aa4a78c9cd2ba142b7"],["/images/clslinux/clslinux3.png","8238df845bd32dd43f323c87eaeb4db2"],["/images/clslinux/clslinux4.png","d582a7db24df865a3213dbcacb5a0955"],["/images/clslinux/clslinux5.png","21b1f5b964c3910936c076fb691a8aa4"],["/images/cursor/cursor0.jpg","f774201001001971eac95fa43242ce7e"],["/images/cursor/cursor1.png","5098299f84539d49ae8e80d3c2b3e73c"],["/images/cursor/cursor2.png","4e72b0dc17312fdf680fb155dcadc6e9"],["/images/cursor/cursor3.png","236ad4f3dd1d1ebbc2a3239eaf2d6e3f"],["/images/kfzx/kfzx0.png","ad38d78341b62b6bc821fd2d341c7a15"],["/images/live2d/live2d0.png","469daa68d1a08c91375cbe06e87232f2"],["/images/live2d/live2d1.png","40ab8beef1a4da0ccb7a3a6df7cb50f2"],["/images/live2d/live2d2.png","fd5dd6d4ec48377072778d43a951b5b4"],["/images/live2d/live2d3.png","cf1d850ca520f28ee14e476f96c78727"],["/images/net/net0.jpg","7912a54a8c47f3979e10255f730ec31b"],["/images/ssl/ssl1.png","eacca74c8f59bfb4582131362941d4b3"],["/images/ssl/ssl2.png","30e5e1f3f4ed95f1995147d8ecb770ab"],["/images/ssl/ssl3.png","2c69d73a7918cdc790bac1b631914969"],["/images/ssl/ssl4.png","d6d06ee53806442c6aa7b048bce37f48"],["/images/ssl/ssl5.png","d5013e168b274323cded1713995ade47"],["/images/ssl/ssl6.png","ff07c9cc76679d92ed8857bf6628eaba"],["/images/ssl/ssl7.png","4e4a058882c2f7ea9a7a153a2df09a92"],["/images/ssl/ssl8.png","ac2966c2d16e6b4ab6ba898ff3237536"],["/images/ssl/ssl9.png","9bb2f7d3a43159617c7cae352e1c5cad"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","2e17c68aaf878c8ec47ddaeba75b91ca"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","677451cf0d9e0666fc2f833a0e1775ea"],["/page/3/index.html","b7e9b5482f4b270132b9d5d2c99ce321"],["/page/4/index.html","c6b3bcd6b6232245ff2ed39d85bd4221"],["/sw-register.js","4e378a797705fc1e670a00cdbcf49e8b"],["/tags/Clash/index.html","8b33d16e24f189545a4c26ba2321a733"],["/tags/Gin框架/index.html","d44af84edc7fa90c6bc67a14ce9782a8"],["/tags/Golang/index.html","2e547d7b98e0a0659dfb3aba2328ea6e"],["/tags/Gorm/index.html","09ada719327c3f504021da651380a548"],["/tags/Go语言/index.html","0210376f3a0eee78120eca5ef810475a"],["/tags/HuggingFace/index.html","cb8b5b538fb3b7922b58857a6c765b1b"],["/tags/LLM/index.html","a28aad538054ecbfe1e11246e7069f8e"],["/tags/Linux/index.html","84ae9111b86020ce7401488f86fc8e90"],["/tags/Live2D/index.html","df8ed8035b0b7a150a93f340e4f57b41"],["/tags/MNIST/index.html","a8e65e38740b661af4de112138c6c458"],["/tags/Mirai/index.html","e3489587ca429dff7ea24f143027978d"],["/tags/NGINX/index.html","af948a117ff9aeff41034a75d9eeed10"],["/tags/NLP/index.html","a5f6a8f3c32e72445a5dae9090443c29"],["/tags/Pytorch/index.html","f74da0eab93a1dcebd9d06f532886694"],["/tags/SSL/index.html","1c70d0d72e4f7be22f12b239876cbf86"],["/tags/css/index.html","e6987002ba8a72551869bd67ac8904e9"],["/tags/html/index.html","219640e2069c7e9c3b6d61c7f0359015"],["/tags/index.html","84ed898c64ef8daeef65c5400aafb101"],["/tags/python/index.html","52640b0f4ebcac50e9a3e11f8b201465"],["/tags/前端/index.html","0b2f1bc654e8d6b24583542de2dd904c"],["/tags/大语言模型/index.html","d4a1ae4bbaf06cc95e7f4d839090d84b"],["/tags/张量/index.html","040e94c7d5bce10b4d4aca3ecf045ae2"],["/tags/技巧/index.html","9a521bb320ffc5658983914d22479933"],["/tags/数据处理/index.html","bb1eac4f91d8fc51d4eae9a2df3b4239"],["/tags/数据库/index.html","d044564430cbdb8beafb02bddb4c704b"],["/tags/测试文本/index.html","821ca7c5103179fc998eb1e65be55cea"],["/tags/浏览器/index.html","4dc4efdd19745dd13b2a1daec083f3ab"],["/tags/深度学习/index.html","387ba910298f98637db0135630487f42"],["/tags/爬虫/index.html","146f3c5ec2318cdc59a561a63492f242"],["/tags/神经网络/index.html","63cbf2fba5916d2ef813210af64bd03e"],["/tags/纪实/index.html","8e2ce7a1d01db0f5d45fa0f33e9248df"],["/tags/鼠标/index.html","99bfeba00ce028d1eafda4a9a51f5e9c"]];
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
