/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/05/hello-world/index.html","2a95f9285b5b5bf2efbcccea312be506"],["/2023/11/05/测试/index.html","fa5f74c7bfab34a00f4d7c62519d6053"],["/2023/11/06/1tensors/index.html","83e2839493e657f6f1e4533de85c4675"],["/2023/11/06/blogs/index.html","5282dd14cc3295a26f5725a422a3342a"],["/2023/11/07/nn/index.html","6d88d8f2a11896bf983f9414d51642c8"],["/2023/11/10/MNIST/index.html","09b3f68e8a04241745443662cb4c1b4a"],["/2023/11/10/datapr/index.html","9b88659f680eccfc442531f1ca69cf21"],["/2023/11/12/css1/index.html","7bd3b8f4bc20a4992c489d70fbb8d02d"],["/2023/11/13/css2/index.html","9f7eb4c8bd4ec70263051a77ff6f2715"],["/2023/11/15/css3/index.html","ca6566cab3dee94836b387bd59f20aa6"],["/2023/11/16/huggingface1/index.html","8e96a0f03b35af9316b3964110c893ad"],["/2023/11/17/huggingface2/index.html","c6cfd1808e23d6def96e4da4ebedd9fc"],["/2023/11/18/huggingface3/index.html","c18f31297b1fee3dd7e5dce3ea53e6b5"],["/2023/11/19/huggingface4/index.html","f98e4f623d8646669084784cc1491c9d"],["/2023/11/24/css4/index.html","2e57f25a9cade4d93414c3c3db594d4f"],["/2023/11/26/ssn1/index.html","104f8d5cebc296930a584850917fdf66"],["/2023/11/27/miraiqqbot/index.html","b0c2c4bc1cc2d4cbfc3151d4ed32d4f9"],["/2023/12/21/ssn2/index.html","eda7a64f640274242059d69b9ccbb162"],["/2024/01/02/llm1/index.html","24439f0bea451bddbc32a9951313b599"],["/2024/01/20/go1/index.html","543874bda6dc965bf19601be1541b9c0"],["/2024/02/02/zt1/index.html","b664b3a3722385d72582c786a9a4e391"],["/2024/02/04/go2/index.html","8092d381ec9e5388d03d40ccc37199a5"],["/2024/02/09/go3/index.html","ac8322b91df11b1b1489e4da8d3b9e26"],["/2024/02/12/go4/index.html","950855fafda191fffb445904d62a3c5f"],["/404.html","6fa9e2feba741266e8f7b1ea857a2efe"],["/about/index.html","a41d568847b92131d4d131361276dc69"],["/about/th.jpg","f5dad67635cebb130f17fadc11c48d31"],["/archives/2023/11/index.html","25ea46dccd66c0548c5fa6f39a6fa4b3"],["/archives/2023/11/page/2/index.html","23f1b0dd18eab39fd35bd3c60be5e706"],["/archives/2023/12/index.html","e29b3fb0d77d175a2c161f1089b021f1"],["/archives/2023/index.html","cc64bf83ea5d80fc9f3189d36e142188"],["/archives/2023/page/2/index.html","2143add4fad7cbcc9e27510c5b3a695e"],["/archives/2024/01/index.html","84bbbb52983e3e2cd841f0736f756729"],["/archives/2024/02/index.html","ec428a1abc432f9927fb543c6fa3363b"],["/archives/2024/index.html","873b8698adf5c3cc87b81d56026b7895"],["/archives/index.html","0d5a1c881d935f052587aa0d072e40b0"],["/archives/page/2/index.html","67089ea22ce4be745e313bfdf17e106f"],["/archives/page/3/index.html","8c252b6f79b18fc3c71ccfd6201b60d0"],["/avatar/avatar.jpg","0cbf16d6a82834ffe254a9256e498873"],["/categories/Go语言/index.html","0fc263b4ab8fb8aa3d8a81ff31a8f612"],["/categories/HuggingFace-NLP/index.html","f62d6336ce3c15145d15d0796770235b"],["/categories/index.html","35b2c66ad00cf84750aaf65fc1623de5"],["/categories/前端/index.html","0d5c7b3147a1f0140118e50b03f0a894"],["/categories/对话系列/index.html","514d722321590901eb12537020d8c205"],["/categories/教程/index.html","6e2f6d9df7a71d9ebcc5edafaca26733"],["/categories/杂谈/index.html","ea2273f5389177eef33b1e715441af4e"],["/categories/杂项/index.html","ca0e66b2a83ddd9bd21392292182044e"],["/categories/测试文档/index.html","3dd26d69f17c3a5d8111baa00a94e6ce"],["/categories/深度学习/index.html","a36abad1fb77f05dcc1a08fb8e758719"],["/css/loader.css","f0eb31a64da4cd15403798e338c7c1e5"],["/css/style.css","df465b97053072b526027ad91a47da13"],["/friend/index.html","67fa7e9366e46ca5d851c46b586c85ba"],["/images/algolia_logo.svg","1d3e05fbc6aae3eebf4522b8c251c66d"],["/images/banner.jpg","e29becf7b79084b1da1dc34f9151ef5b"],["/images/banner2.jpg","04e9158669e6ca5bfabf252f08048008"],["/images/banner_instead.gif","2f5709f4c4d216733803d9eff0c8e749"],["/images/banner_instead.jpg","25c1fde923cf8408b4060bbc70755d45"],["/images/taichi-fill.svg","36997066f50872ed12c09a957c9c2689"],["/images/taichi.svg","624ec7794968f44abbcea9af519e63f7"],["/images/wechatpay.jpg","5917c0d5862f9077638535fa5b9d46da"],["/index.html","84b26298abf550761e8b9329b3b06ef9"],["/js/FunnyTitle.js","138f57ccf033c79ce2cfa2d63f1befb8"],["/js/click_show_text.js","fbac41b7a1b33b34b5e31881c0465f3d"],["/js/fireworks.js","9a515e2802a285d3b38ed29d2a3ce5b8"],["/js/insertHighlight.js","580c2e3d8ecb8cdcfc97c9dc058792f5"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/script.js","b21f03c59529b94bdfc77519d7217665"],["/js/search.js","d5e127fc549950158de50cfa7e6346a9"],["/js/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/page/2/index.html","4c8a12c92d66e59830eb8363029d3430"],["/page/3/index.html","d4ad566f94d5bb9b5684d31638665d98"],["/sw-register.js","c387b52496ae881e9972f60252f1624c"],["/tags/Gin框架/index.html","20114233d82e6353c670b15e825ca3d5"],["/tags/Golang/index.html","a629cc0d61f24c936780d62cba2d98e9"],["/tags/Go语言/index.html","b5924b5c8290626345a8f18ed6e83005"],["/tags/HuggingFace/index.html","dd0defb71790bf0c02602545b6e7c698"],["/tags/LLM/index.html","a6c7a2e8d5c2da498af493b593358f6f"],["/tags/Linux/index.html","8425efe4a253cf823237b853adbfba43"],["/tags/MNIST/index.html","631b17e6fb279811622549ea7aa7e5ba"],["/tags/Mirai/index.html","4188214b374100163a38cdc381a37bba"],["/tags/NLP/index.html","c5e46f0f93b30956d9160f5848da8740"],["/tags/Pytorch/index.html","32108a8d0fc95f8f12accf3fc8dd9197"],["/tags/css/index.html","bc8c811f82c5216037aab486aa894bbc"],["/tags/html/index.html","415d7da785b588913e638ac8303cfee5"],["/tags/index.html","de77fa489d9bf728ac4907476729feb4"],["/tags/前端/index.html","ce2ba2063530d83168ba5cf462dca939"],["/tags/大语言模型/index.html","1a9982aa06f8213f1212e427ced141e6"],["/tags/张量/index.html","74682ca8f06ab314d0c95d1bbb2b519c"],["/tags/数据处理/index.html","81b8be4d1e58161ffe875de6dcded847"],["/tags/测试文本/index.html","8de07ad42d085b6718eeca655616ac27"],["/tags/深度学习/index.html","30a92f4b84173b981de2f1189b3a967c"],["/tags/神经网络/index.html","ad4ea806782eb1b01daf618f32083689"]];
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
