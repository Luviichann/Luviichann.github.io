/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","d5fde2ca99232bf897a44e9db0c6ef20"],["/2023/11/05/测试/index.html","452150bd6f67d617c2c0163f027bca3f"],["/2023/11/06/1tensors/index.html","6943ba2a5763872329169402ec01149e"],["/2023/11/06/blogs/index.html","0d0b312577837afd82f094dfda56b593"],["/2023/11/07/nn/index.html","ee8d4125117612a906c17b3a9e1001e0"],["/2023/11/10/MNIST/index.html","6aee0f5ac19815df828494fd96cf11af"],["/2023/11/10/datapr/index.html","e5b1a97a794435372d15a150a7a5675c"],["/2023/11/12/css1/index.html","1574088aebc874895576a2a1fbfbb3fd"],["/2023/11/13/css2/index.html","dc7f8ac5fb1be3d4a74132b15d447e59"],["/2023/11/15/css3/index.html","50c4df6f2e8877baa08bb1446d09190a"],["/2023/11/16/huggingface1/index.html","592f11548a2a20bea731f7b0291b73e6"],["/2023/11/17/huggingface2/index.html","0960e8f39de0c52c7e31fb634298c032"],["/2023/11/18/huggingface3/index.html","dc12abd292d2cb5c228b351d66b92c1c"],["/2023/11/19/huggingface4/index.html","799c629a74deb8d35b1542b37c325744"],["/2023/11/24/css4/index.html","474e8d6f827bc5bcd68be0adec33d622"],["/2023/11/26/ssn1/index.html","6189d45eb0dca8def1a4523461770df0"],["/2023/11/27/miraiqqbot/index.html","5eb473c9545fc31339f81a44bf6a0ae1"],["/2023/12/21/ssn2/index.html","2a31e5b37b901d87e12883909f73c2df"],["/2024/01/02/llm1/index.html","18a1b7e7aad28996e0f02b643e8fe39f"],["/2024/01/20/go1/index.html","54c2bd63ec4b7ef05dc71623ea8db1ba"],["/2024/02/02/zt1/index.html","085b7ece7ad13b87f97372c2c44b234e"],["/2024/02/04/go2/index.html","0be307096c6549b9a21538aa7bbb79e1"],["/2024/02/09/go3/index.html","8d7bd6748063d56920cceb41a4f10e4a"],["/2024/02/12/go4/index.html","cb26fd004a611520797beff9d6c85d65"],["/2024/02/17/go5/index.html","072a9045a342eb28db9d297571a48434"],["/2024/04/06/pc1/index.html","0b6980218cfc5f7d9551ff113dafb95d"],["/2024/05/07/pc2/index.html","86733368fa5038c7d8f6383663f52d3d"],["/2024/05/19/htp/index.html","2a24c0fa087f819330fc316f1cab75be"],["/2024/05/21/go6/index.html","95645014b69f34ba63296c055c06bf94"],["/2024/06/03/ssl/index.html","04b80bf3ef2b1114e7b05afca58932ca"],["/2024/06/24/cursor/index.html","636eff01a6f514d139e24092e6ffc19e"],["/2024/06/25/clslinux/index.html","128b88e27dda1e992c179cc5cc5451f1"],["/2024/07/23/live2d/index.html","aae1cc687dc135e7c0029461e69e58a0"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","7d5013e310f28f0b7336c61fec0a738f"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","4e94ab599f8741de8f4860fcfd082c0a"],["/archives/2023/11/page/2/index.html","db4c68818889eb3e1eedece209741d51"],["/archives/2023/12/index.html","466b9588b83467175568264b098acbc4"],["/archives/2023/index.html","56ef96eb27e0ebb573b43a6cb19905fd"],["/archives/2023/page/2/index.html","afe4466a679ee3e3ecaa899181634b9a"],["/archives/2024/01/index.html","319a1e4b3cff0718f75e2c43b6e58690"],["/archives/2024/02/index.html","551605d1048f76cb7cf59a593ba95951"],["/archives/2024/04/index.html","74da686827cca17802bc5690808d9e9c"],["/archives/2024/05/index.html","33bb36647234007be4c54193e08e1d8c"],["/archives/2024/06/index.html","bade3a635e25e16f41b5fd753d427a67"],["/archives/2024/07/index.html","de224fa8e369e89e3e4e15a66be46ac4"],["/archives/2024/index.html","e0d310f2d32dc9a159f14dc27b12aa1c"],["/archives/2024/page/2/index.html","049515cbfa214e6cc0d27c6235559992"],["/archives/index.html","98c8c7296a27dad78750201c4af7f13f"],["/archives/page/2/index.html","c1773d8dfdf63eefc2cb3e1118a989be"],["/archives/page/3/index.html","c83c41715a5118aceb0fd589da9967f7"],["/archives/page/4/index.html","af5345bce1528444781858cddb2bec51"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","0f97176d0b627ff94e3c1f54e2153197"],["/categories/HuggingFace-NLP/index.html","92b290ea028efe17cb1036899f8246da"],["/categories/index.html","8e95ffc23d4bcfae9187ee30722aa011"],["/categories/前端/index.html","29505c4250b21dd4f03a0a5046887fc7"],["/categories/对话系列/index.html","64eae6815aff0065f08df6afdd77a2a0"],["/categories/教程/index.html","b36bc44a37c0b23e67aa57298c5712e4"],["/categories/杂谈/index.html","a043bc2d53e3497334b74be7f4739802"],["/categories/杂项/index.html","19cff474bba3a6d30bd3e1738b30b132"],["/categories/测试文档/index.html","1b8806d15261929b26d6da39a6b63f07"],["/categories/深度学习/index.html","c62128ac059fec7559d3a37923234e55"],["/categories/经验分享/index.html","c9db513ccb51179b2ba87b4dcc5463f7"],["/categories/网络爬虫/index.html","e17c2a420a05bd725eff578afce9ebce"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","8931b9b3a1faaf23f99d3d198886e566"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/clslinux/clslinux0.jpg","4df81190521280de69520c0b009e8b5f"],["/images/clslinux/clslinux1.png","c3321d5f149d272f1a10ab2ec150c820"],["/images/clslinux/clslinux2.png","63ee9a68c861d1aa4a78c9cd2ba142b7"],["/images/clslinux/clslinux3.png","8238df845bd32dd43f323c87eaeb4db2"],["/images/clslinux/clslinux4.png","d582a7db24df865a3213dbcacb5a0955"],["/images/clslinux/clslinux5.png","21b1f5b964c3910936c076fb691a8aa4"],["/images/cursor/cursor0.jpg","f774201001001971eac95fa43242ce7e"],["/images/cursor/cursor1.png","5098299f84539d49ae8e80d3c2b3e73c"],["/images/cursor/cursor2.png","4e72b0dc17312fdf680fb155dcadc6e9"],["/images/cursor/cursor3.png","236ad4f3dd1d1ebbc2a3239eaf2d6e3f"],["/images/live2d/live2d0.png","469daa68d1a08c91375cbe06e87232f2"],["/images/live2d/live2d1.png","40ab8beef1a4da0ccb7a3a6df7cb50f2"],["/images/live2d/live2d2.png","fd5dd6d4ec48377072778d43a951b5b4"],["/images/live2d/live2d3.png","cf1d850ca520f28ee14e476f96c78727"],["/images/net/net0.jpg","7912a54a8c47f3979e10255f730ec31b"],["/images/ssl/ssl1.png","eacca74c8f59bfb4582131362941d4b3"],["/images/ssl/ssl2.png","30e5e1f3f4ed95f1995147d8ecb770ab"],["/images/ssl/ssl3.png","2c69d73a7918cdc790bac1b631914969"],["/images/ssl/ssl4.png","d6d06ee53806442c6aa7b048bce37f48"],["/images/ssl/ssl5.png","d5013e168b274323cded1713995ade47"],["/images/ssl/ssl6.png","ff07c9cc76679d92ed8857bf6628eaba"],["/images/ssl/ssl7.png","4e4a058882c2f7ea9a7a153a2df09a92"],["/images/ssl/ssl8.png","ac2966c2d16e6b4ab6ba898ff3237536"],["/images/ssl/ssl9.png","9bb2f7d3a43159617c7cae352e1c5cad"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","99d1fe905ef812a1cf8a4afd8f61fb25"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","96ec3fc2d7c74680b68b4b305943fcd2"],["/page/3/index.html","62139696bda84e7fc0c575af23b56dca"],["/page/4/index.html","958ef22f45d71cc3b01596e07f2e19fe"],["/sw-register.js","7494dd1521a5d63dcde8b0365a6597c2"],["/tags/Clash/index.html","2a7b75b5911305fb59c9f60ac1c80e80"],["/tags/Gin框架/index.html","68a4b92b02e2256efd39a8ff7814b52f"],["/tags/Golang/index.html","356e8940a9b0f85bd5e318f59475b2b4"],["/tags/Gorm/index.html","166deedff003a3b829d00c5019caf58e"],["/tags/Go语言/index.html","f7242bed7decc893f63af222a1901a1e"],["/tags/HuggingFace/index.html","d3008ffe2933ed05cad89e0b9c6f9fd1"],["/tags/LLM/index.html","2381430708fd8286ed127b7da97137e5"],["/tags/Linux/index.html","d0d92701e63d035628c17ad9a8540eff"],["/tags/Live2D/index.html","9f20cca4e5ad5f37396ddb205ab5a1a4"],["/tags/MNIST/index.html","f69bdf55ea5595b74569b5431d548931"],["/tags/Mirai/index.html","074cac0fb62e63c5be70b4aa41ed862e"],["/tags/NGINX/index.html","9d46aaf0015ad6a0dffe6d97acb2a6bb"],["/tags/NLP/index.html","ae352d0e9d08687e06047308a80027bb"],["/tags/Pytorch/index.html","88baca49a8dfcbe04d5ca8a0dffffc83"],["/tags/SSL/index.html","54ed1bc4044b3d3ae294d7d331cecebe"],["/tags/css/index.html","73f7264e866028504c85392091aa6539"],["/tags/html/index.html","76a708a265a77a1b50a8c1b1568b203b"],["/tags/index.html","b26ed25b75dc68428c0d54c63efb873e"],["/tags/python/index.html","cc5407b1c03c424e4dc8b5b580f6f571"],["/tags/前端/index.html","10239de7cf66c81eb2a0c19f6c137506"],["/tags/大语言模型/index.html","9f176950ad898f754651e3afc226eeeb"],["/tags/张量/index.html","31a74f1bbec03446e17e8eb1370667d2"],["/tags/技巧/index.html","295d5d035b38d02a3c9be6741ccffcd1"],["/tags/数据处理/index.html","55743c9bf3351cd9da084c06406a1302"],["/tags/数据库/index.html","b8c8c626c188474ca5567ad453d9ddf0"],["/tags/测试文本/index.html","be9fc1050677397410f76f64745be24e"],["/tags/浏览器/index.html","6329b2ab83505e93e75187bb1099ede6"],["/tags/深度学习/index.html","89c8d6f2a66b18878e2a6221f60b29eb"],["/tags/爬虫/index.html","4d99fc0f99bdb4681eb45da9ca0621d6"],["/tags/神经网络/index.html","dd2f1bdf8166dd82a83162e877b5bbdb"],["/tags/鼠标/index.html","fb4503fa836122c00efad457f114b2b0"]];
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
