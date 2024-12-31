/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","6647ecc4275e4993ab590ea547a20bb3"],["/2023/11/05/测试/index.html","ba32652b98294fc329173f0ab9a4a137"],["/2023/11/06/1tensors/index.html","d1853487a94747d7cf0cf536d8a4affc"],["/2023/11/06/blogs/index.html","82747919e9b0572fc51c8a5a1f28e8de"],["/2023/11/07/nn/index.html","b6d7fbaf94a411b489e193a6640b6f5c"],["/2023/11/10/MNIST/index.html","d5e879f35c43e56c2e2c5ee7119107d3"],["/2023/11/10/datapr/index.html","0fce366d5f5aa20dda7f96c7e46d137b"],["/2023/11/12/css1/index.html","9b2f8e4e2be042d2dc70d46e059267e7"],["/2023/11/13/css2/index.html","e7854685fac288c84b6e9ce239d0a104"],["/2023/11/15/css3/index.html","a24b361b766a368eba9d1f640bccaead"],["/2023/11/16/huggingface1/index.html","54c53b7f5e39ac2b68e1cb333f3074c2"],["/2023/11/17/huggingface2/index.html","d4793c4fb5cc87db06c49692eaf6ffa7"],["/2023/11/18/huggingface3/index.html","1ab41630a1b81e061e9c8c1bbf4e9a1e"],["/2023/11/19/huggingface4/index.html","f4b2a265a7cf7b27d5fe8f42b20668cf"],["/2023/11/24/css4/index.html","a7486ad68b0e82b727d876c5e997c80e"],["/2023/11/26/ssn1/index.html","cba21a283720a4e9079d797e4ba9ea6f"],["/2023/11/27/miraiqqbot/index.html","f8931a2bfdbf8585a81e5bd18286a2fa"],["/2023/12/21/ssn2/index.html","bfeb400d2e7448a62256b7be76e8a9a0"],["/2024/01/02/llm1/index.html","0a810dc069a3f99e81a06fb11095bd1c"],["/2024/01/20/go1/index.html","79ac29ae8b832bd3d2e2429fe0fd35a8"],["/2024/02/02/zt1/index.html","3164b7449a3dcd994d903ff1f4cbac7e"],["/2024/02/04/go2/index.html","ce4b78489049b967d1f09e56ade404bf"],["/2024/02/09/go3/index.html","ff9acbbe7e8b2874a788f8ec0a28e129"],["/2024/02/12/go4/index.html","d4a7258b784fb6d04443df32bbd1cdfe"],["/2024/02/17/go5/index.html","a7fbdbcfa5fbd9b0ae080bcf238336a3"],["/2024/04/06/pc1/index.html","3b05d256451ade011d85b49fd5171d90"],["/2024/05/07/pc2/index.html","c4768eca56df5557eb26a892ddfa4a7e"],["/2024/05/19/htp/index.html","a1ef222b14e0a003366f7fc09b758af9"],["/2024/05/21/go6/index.html","4f9976eb949edd12967d5bf97264f583"],["/2024/06/03/ssl/index.html","081104d811d4ce813318705a89ea7fa3"],["/2024/06/24/cursor/index.html","fbade51805a2113246b5835b309447c7"],["/2024/06/25/clslinux/index.html","fcf0d19f5cc8d59908ee7b36b205106a"],["/2024/07/23/live2d/index.html","19688c0491914c39046cf0833c588038"],["/2024/10/04/kfzx/index.html","989d331ecafae6118fad3915c25d43e7"],["/2024/11/07/daye/index.html","a0c7355fc4f198b78bb70ad67d9fb1de"],["/2024/12/31/dy1vf1/index.html","2348720e4df1cf054a9e3c88c27921eb"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","1f13ebb9f64680c3de180ac2a1514b3f"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","9a8a801e89e1bfb0a43fef4c2a5a9ce7"],["/archives/2023/11/page/2/index.html","0f647e18f9fc0b3cf78ab90370d6bf82"],["/archives/2023/12/index.html","c8bb850857c3b6925659d853b788a816"],["/archives/2023/index.html","31c9de66aef30500ef9163d374bfb1fc"],["/archives/2023/page/2/index.html","d9d579d15fc8efe60c35a0b5f3ccbc46"],["/archives/2024/01/index.html","6e6c0ddc151d57651523a89d08868756"],["/archives/2024/02/index.html","584c8a189b638d339c7e51038424fd84"],["/archives/2024/04/index.html","21e86db4f21326e1a88291e41b32d870"],["/archives/2024/05/index.html","ba4b68cd296cadd2a320d86c4e3cdd85"],["/archives/2024/06/index.html","4b60e3b622ebe0d722fded72deff7f49"],["/archives/2024/07/index.html","0877b76a6a0eb617a08e6fa303672b85"],["/archives/2024/10/index.html","b2339c6a8da7dace79cfe1b1572e3db2"],["/archives/2024/11/index.html","8c71927289f281e0a8b52b244108226d"],["/archives/2024/12/index.html","9183e8cdd3b68a7e927d41a71e77f192"],["/archives/2024/index.html","df8ae1705ede9144f3430fc158c18273"],["/archives/2024/page/2/index.html","2b9e5ed80ed8c608bc6a0d64ad132649"],["/archives/index.html","8daeb1bbea892bf811a21b17acf8b97e"],["/archives/page/2/index.html","7a8b955c57e18ae80fad5528be5b4649"],["/archives/page/3/index.html","406fb431a449054cd3d1308b974746f8"],["/archives/page/4/index.html","db055ee21f34a0ef7b36269965b46d88"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","24a51c428360840b79ffcde3315c14ae"],["/categories/HuggingFace-NLP/index.html","7a02ecb6b49f96b29ab13b6df9029552"],["/categories/index.html","3f8603bdf26b1e66ab60a9f6b3b8df8d"],["/categories/丁曲/index.html","c1d4f32bdfc233e538cb3e13a6951521"],["/categories/前端/index.html","e2f9ed04bce669a4234b54e5e7d9fcf6"],["/categories/对话系列/index.html","7cae43d3d1ea668dfc461cc9b5d51d8b"],["/categories/教程/index.html","805df17d7764ea6adc46e74d80639ac4"],["/categories/杂谈/index.html","f3aa6cde5cf787fe5ab99c64b0d9d98d"],["/categories/杂项/index.html","c4e0acc5ef3e31cc26b408eb9af7bbfe"],["/categories/测试文档/index.html","2aa5d10a65ff6b3733d5c7b67bdd885d"],["/categories/深度学习/index.html","68847f8602e33c21089cedb913eee923"],["/categories/经验分享/index.html","f8d0102fa6622c9ae1658b1db28414da"],["/categories/网络爬虫/index.html","4e9b9062f7321befcbe6d0dfbd799f53"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","99125cb1fade5db7a6dd1656be6af788"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/clslinux/clslinux0.jpg","4df81190521280de69520c0b009e8b5f"],["/images/clslinux/clslinux1.png","c3321d5f149d272f1a10ab2ec150c820"],["/images/clslinux/clslinux2.png","63ee9a68c861d1aa4a78c9cd2ba142b7"],["/images/clslinux/clslinux3.png","8238df845bd32dd43f323c87eaeb4db2"],["/images/clslinux/clslinux4.png","d582a7db24df865a3213dbcacb5a0955"],["/images/clslinux/clslinux5.png","21b1f5b964c3910936c076fb691a8aa4"],["/images/cursor/cursor0.jpg","f774201001001971eac95fa43242ce7e"],["/images/cursor/cursor1.png","5098299f84539d49ae8e80d3c2b3e73c"],["/images/cursor/cursor2.png","4e72b0dc17312fdf680fb155dcadc6e9"],["/images/cursor/cursor3.png","236ad4f3dd1d1ebbc2a3239eaf2d6e3f"],["/images/daye/daye0.jpg","a129e4439995d03439f5a245921bb8e2"],["/images/dy1vf1/dy1vf10.jpg","ac54d7c88e346e818a020193c9ea6d74"],["/images/dy1vf1/dy1vf11.jpg","b350d39634d0b0fa94074a0e8204523b"],["/images/dy1vf1/dy1vf11.png","188ed66982d5de183e78ae2effe4835a"],["/images/kfzx/kfzx0.png","ad38d78341b62b6bc821fd2d341c7a15"],["/images/live2d/live2d0.png","469daa68d1a08c91375cbe06e87232f2"],["/images/live2d/live2d1.png","40ab8beef1a4da0ccb7a3a6df7cb50f2"],["/images/live2d/live2d2.png","fd5dd6d4ec48377072778d43a951b5b4"],["/images/live2d/live2d3.png","cf1d850ca520f28ee14e476f96c78727"],["/images/net/net0.jpg","7912a54a8c47f3979e10255f730ec31b"],["/images/ssl/ssl1.png","eacca74c8f59bfb4582131362941d4b3"],["/images/ssl/ssl2.png","30e5e1f3f4ed95f1995147d8ecb770ab"],["/images/ssl/ssl3.png","2c69d73a7918cdc790bac1b631914969"],["/images/ssl/ssl4.png","d6d06ee53806442c6aa7b048bce37f48"],["/images/ssl/ssl5.png","d5013e168b274323cded1713995ade47"],["/images/ssl/ssl6.png","ff07c9cc76679d92ed8857bf6628eaba"],["/images/ssl/ssl7.png","4e4a058882c2f7ea9a7a153a2df09a92"],["/images/ssl/ssl8.png","ac2966c2d16e6b4ab6ba898ff3237536"],["/images/ssl/ssl9.png","9bb2f7d3a43159617c7cae352e1c5cad"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","3015086da2e014095a16f0eef5365a7d"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","70c9772766fca684b431eccf8bd837ad"],["/page/3/index.html","c38d656d14c8ed0fe2bd3e075c04d29b"],["/page/4/index.html","3a8b83d5533426670cbedfc882ccfa84"],["/sw-register.js","69994f0e5726a39282fff541e032d62f"],["/tags/Clash/index.html","aa48d36757782f506eb15d71034cb3c9"],["/tags/Gin框架/index.html","4d90abdfbf05503e02828829d053d214"],["/tags/Golang/index.html","65d48433f131d910164667e828f15df2"],["/tags/Gorm/index.html","4ea1b016824622a231c431af10f6bfd9"],["/tags/Go语言/index.html","cf781d4018b36501cf20fc89e6299f61"],["/tags/HuggingFace/index.html","ab6c0d7e34ef2fc7564892222a10af9b"],["/tags/LLM/index.html","2f38a5445745f31dc36bea39d42cb702"],["/tags/Linux/index.html","72c7d41bac3b28bca04bab67a1f0e01f"],["/tags/Live2D/index.html","6382f1bacfd317c7b71f78a14055698c"],["/tags/MNIST/index.html","b70a3687ad6687563f5108812c10bdcd"],["/tags/Mirai/index.html","3720ae2ec81ba9c2696c9d4e44173d5a"],["/tags/NGINX/index.html","3ee4dac3ee5c3ca918b0dd86b04b97b7"],["/tags/NLP/index.html","0baa66aca1f9dab077b254bda68361a8"],["/tags/Pytorch/index.html","d9054ffd499dd1bc1ad44e0ec2f8f45b"],["/tags/SSL/index.html","8b9a432daacc36c49939c542a17cc0fe"],["/tags/css/index.html","01dc523766e774f2664e2f8e667d626f"],["/tags/html/index.html","50db8b329edafd94fb55aa15291a031c"],["/tags/index.html","43a017538d8b8ea3be2edac40b1cfd81"],["/tags/python/index.html","0d8294a26d4b97815d093888cee8f4b5"],["/tags/丁曲/index.html","c6e3bc639c6374420d58d9a1145ad490"],["/tags/前端/index.html","de7030fb3422673467d4423ecddd469b"],["/tags/大语言模型/index.html","821d3c8a0ec91ce99e78d90fec0af6cb"],["/tags/张量/index.html","b013ebab3242c2d2d05568b9a9ed2b73"],["/tags/技巧/index.html","0eb1b72579b945fd3a129055ff1eec48"],["/tags/抽象/index.html","06bf41a45658d5713798927cd0e3c80d"],["/tags/数据处理/index.html","a09535b2a35f786c4427e66690a2b75c"],["/tags/数据库/index.html","bc8a2f015af833c5307b8cb387753788"],["/tags/测试文本/index.html","d5d4cc61cb17a3e8a2e5df5683eb310d"],["/tags/浏览器/index.html","4cd74d270084c24a3252492f7bfc5a15"],["/tags/深度学习/index.html","3bc89659bc7344a485eaebe08882b505"],["/tags/爬虫/index.html","7063303dcb8d25537f7b2de47e425aeb"],["/tags/神经网络/index.html","4249253ab1c30ad61d581fe2a820b59c"],["/tags/纪实/index.html","dd20b3dfabdf8d2549213b762ff91ab3"],["/tags/语录/index.html","232a6d3c44f0026a711b5cb5fc11d3c6"],["/tags/鼠标/index.html","47abdaaf8f1dca1afb30915395dc3819"]];
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
