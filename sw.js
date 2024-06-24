/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","7c01e6b1b79a41e279d70be57bccebfc"],["/2023/11/05/测试/index.html","0121fef75c5ff07fc300ca8d1e5082bd"],["/2023/11/06/1tensors/index.html","43931f7ae0ac1c5163b7ce0f85dc06bf"],["/2023/11/06/blogs/index.html","ac4f7402c3e9d2a6df2727642f510ee1"],["/2023/11/07/nn/index.html","2a7b9f514e5070eca6c136d3ff24dc03"],["/2023/11/10/MNIST/index.html","3e52972e5659e375056709baa6984871"],["/2023/11/10/datapr/index.html","db65cddadef4464c6d0aaa3da352d841"],["/2023/11/12/css1/index.html","097fd921058e22ab0604ac4d6850c4fd"],["/2023/11/13/css2/index.html","8d38d1412474a559ea59c1d975e14ffb"],["/2023/11/15/css3/index.html","e8bfb950c54b47fb5f15e56689adef44"],["/2023/11/16/huggingface1/index.html","28b2680b845e2b5eff9391948dae84eb"],["/2023/11/17/huggingface2/index.html","47bfda0ef426a5cb48315af11df3a664"],["/2023/11/18/huggingface3/index.html","67461102ddac82f7f7d053696c102ee6"],["/2023/11/19/huggingface4/index.html","2493e2e810e1461849db64957b723af4"],["/2023/11/24/css4/index.html","634193d170450a7169a0fd068866c7b8"],["/2023/11/26/ssn1/index.html","861ccc2c3dfda7bab5ab7ef24c9c7094"],["/2023/11/27/miraiqqbot/index.html","dca1bc779be1861bead1937bef2e8615"],["/2023/12/21/ssn2/index.html","fc1796d50eb3347613d6fe38bea87072"],["/2024/01/02/llm1/index.html","8980d5ea98ef084dfad6daf11a2e9b8b"],["/2024/01/20/go1/index.html","52ea258d6ad8bd7061876c58bb5ed152"],["/2024/02/02/zt1/index.html","3e8f7714c9af70aea1fd86891220c766"],["/2024/02/04/go2/index.html","2792e941d8d0247c49ef3221fb32b1e1"],["/2024/02/09/go3/index.html","d36139ada9aa4f0410ad2905b14291b3"],["/2024/02/12/go4/index.html","9ce7cd6e488bb12d7a7cf3d0f99a8681"],["/2024/02/17/go5/index.html","74d00dcda0897942167750522a62ff29"],["/2024/04/06/pc1/index.html","df097b89d8092314048eaff773a5458d"],["/2024/05/07/pc2/index.html","9b76ca1711e540fa683ae4835985e813"],["/2024/05/19/htp/index.html","b4b25f239af77807ce2a2045aeecb617"],["/2024/05/21/go6/index.html","a944cbc18f436eccfce13324746d4194"],["/2024/06/03/ssl/index.html","85c80c1d03c0820b54603e72267d0c35"],["/2024/06/24/cursor/index.html","2650d672c095c86bb0c746b459e50194"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","c50430d8a62d75700211a3ee35f2942c"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","1befbdf2a6002d91b6d334fd6946382d"],["/archives/2023/11/page/2/index.html","d2d7d016b1c91fffd30ccd1a52db7ba6"],["/archives/2023/12/index.html","5b3d86050d126d863ad08a8c6019a9b9"],["/archives/2023/index.html","de24bcad624308b0d0c6ea5b8cff68dc"],["/archives/2023/page/2/index.html","29c4c485ca04debe16ba1f6f41e31d7b"],["/archives/2024/01/index.html","34a75bab28e2e715d836eeab8b4d7729"],["/archives/2024/02/index.html","60353d21cf7904d0963e99481c5af552"],["/archives/2024/04/index.html","239652d4161c0401b2c1c1f6aa091b40"],["/archives/2024/05/index.html","53395ea15f925db6d91729d3dbe4c2fa"],["/archives/2024/06/index.html","d7000158f5dd0559699d015966b31557"],["/archives/2024/index.html","a43ab1b09b5ee7ee077ff2dcfbcf9244"],["/archives/2024/page/2/index.html","6d35790468c8c61235278910c6154eea"],["/archives/index.html","78190ac28dc40e85d2f27ea5f9fd5ecc"],["/archives/page/2/index.html","5526fc8d527cdffa83fdb7c1dacf0e2c"],["/archives/page/3/index.html","f375b80ddd620376fae6039d3ea61016"],["/archives/page/4/index.html","c81aad64fe937fdf3322451b985910a9"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","cbed258846d13c577b09bb08f7412d86"],["/categories/HuggingFace-NLP/index.html","f03943e187b53e94ee9377c7d3886fbc"],["/categories/index.html","a98891f2092a0e47322aed044c108143"],["/categories/前端/index.html","1d39952a5f3dc36b16dfa32ee2807986"],["/categories/对话系列/index.html","f2a3705b0e08d19a938d6ad5edb81c9c"],["/categories/教程/index.html","97d1b70c3cd93846e33e6a769377a8a8"],["/categories/杂谈/index.html","8633f14a1305500a3b0626e37571983a"],["/categories/杂项/index.html","bc4a0ce7b5d91f9eed88d1e28115ca9f"],["/categories/测试文档/index.html","29c2b851d3f9133b9102d6fec1ae0e57"],["/categories/深度学习/index.html","105c24cd06782b4e8cd8477754763e47"],["/categories/经验分享/index.html","b09bb41a6f2f3d029d5116a362f8938b"],["/categories/网络爬虫/index.html","e028529329a9ab5fc640bec8713874f3"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","c193a2f6ddfbe55391fc901ec5d59b84"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/cursor/cursor0.jpg","f774201001001971eac95fa43242ce7e"],["/images/cursor/cursor1.png","5098299f84539d49ae8e80d3c2b3e73c"],["/images/cursor/cursor2.png","4e72b0dc17312fdf680fb155dcadc6e9"],["/images/cursor/cursor3.png","236ad4f3dd1d1ebbc2a3239eaf2d6e3f"],["/images/ssl/ssl1.png","eacca74c8f59bfb4582131362941d4b3"],["/images/ssl/ssl2.png","30e5e1f3f4ed95f1995147d8ecb770ab"],["/images/ssl/ssl3.png","2c69d73a7918cdc790bac1b631914969"],["/images/ssl/ssl4.png","d6d06ee53806442c6aa7b048bce37f48"],["/images/ssl/ssl5.png","d5013e168b274323cded1713995ade47"],["/images/ssl/ssl6.png","ff07c9cc76679d92ed8857bf6628eaba"],["/images/ssl/ssl7.png","4e4a058882c2f7ea9a7a153a2df09a92"],["/images/ssl/ssl8.png","ac2966c2d16e6b4ab6ba898ff3237536"],["/images/ssl/ssl9.png","9bb2f7d3a43159617c7cae352e1c5cad"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","06b898d1ab5df75d85d057d3872ab457"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","273d62cdf9e1373920ae49eec954e363"],["/page/3/index.html","2101c835ace6248a68a206c75278e6e3"],["/page/4/index.html","43181dddcea9927e33346af08aaa2627"],["/sw-register.js","e03c9aa32d7060ece39859da3f04cf40"],["/tags/Gin框架/index.html","a4875faea10e6214974076b7e3efdae6"],["/tags/Golang/index.html","2c5934832217b753dcb7575b48ffd0d5"],["/tags/Gorm/index.html","f2b420b493cd714f0c11a553075f2cd5"],["/tags/Go语言/index.html","c90fe7f19ac6afcd6aab8c1750211d9c"],["/tags/HuggingFace/index.html","03c59049dd11ce9955f922b6f90d28f7"],["/tags/LLM/index.html","4ee740b95b3043e029dd0f361eadc783"],["/tags/Linux/index.html","fa0c1eb5b76a12e7c2995461fd7962f4"],["/tags/MNIST/index.html","5470f5183e9d8c6cade6581b619188d3"],["/tags/Mirai/index.html","a104922717c77e12b5fe926916e5fd64"],["/tags/NGINX/index.html","8923d26f15bca887f67771fb70c289c5"],["/tags/NLP/index.html","87b4e15becf037cec38cdc7ced532340"],["/tags/Pytorch/index.html","a026a1024bf3a47ded2c14eb878912e0"],["/tags/SSL/index.html","fad9c4fe1c054f9b79a58afa307507b9"],["/tags/css/index.html","9b314ac946b6633ea16853573c5665b1"],["/tags/html/index.html","5abd5fea097392daee91480a53bba77d"],["/tags/index.html","e9e258eaa9dac012c806479bd602c679"],["/tags/python/index.html","ac9bf8a3c28d1c064404d365b16e6b53"],["/tags/前端/index.html","8fa1a899d7e91d0a5c2054cf00cd4e6c"],["/tags/大语言模型/index.html","8c8440ae605dbf73ed91243096affd22"],["/tags/张量/index.html","18257a601880940a03791cfd1b1b0ae7"],["/tags/技巧/index.html","2384885d181e56d43839b844f59c4d68"],["/tags/数据处理/index.html","4603a63025e4b712c7acb0c6658ae99f"],["/tags/数据库/index.html","3deb73a06f00aab5f6bf05975acc4608"],["/tags/测试文本/index.html","02314f238b984592d186f7039daae6ed"],["/tags/浏览器/index.html","e113a9dfc38eae20a42cf7f3be92c672"],["/tags/深度学习/index.html","5ac731c22651bfe576d8426955c40c82"],["/tags/爬虫/index.html","6373f927f97b78e2e11f8ce039d0a85b"],["/tags/神经网络/index.html","0bd98508f19edc16358b91c5364cf049"],["/tags/鼠标/index.html","749ff7200fdc07515dd2d6c9393705a5"]];
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
