self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('my-cache')
      .then(function (cache) {
        return cache.addAll([
          './images/wuJiangs/myImages/diaoChan3.png',
          './images/wuJiangs/myImages/diaoChan2.png',
          './images/wuJiangs/myImages/diaoChan1.png',
          './images/wuJiangs/myImages/diaoChan0.png',
          './images/wuJiangs/myImages/guanYu4.png',
          './images/wuJiangs/myImages/guanYu3.png',
          './images/wuJiangs/myImages/guanYu2.png',
          './images/wuJiangs/myImages/guanYu1.png',
          './images/wuJiangs/myImages/guanYu0.png',
          './images/wuJiangs/myImages/guoJia3.png',
          './images/wuJiangs/myImages/guoJia2.png',
          './images/wuJiangs/myImages/guoJia1.png',
          './images/wuJiangs/myImages/guoJia0.png',
          './images/wuJiangs/myImages/huangYueYing3.png',
          './images/wuJiangs/myImages/huangYueYing2.png',
          './images/wuJiangs/myImages/huangYueYing1.png',
          './images/wuJiangs/myImages/huangYueYing0.png',
          './images/wuJiangs/myImages/huaTuo3.png',
          './images/wuJiangs/myImages/huaTuo2.png',
          './images/wuJiangs/myImages/huaTuo1.png',
          './images/wuJiangs/myImages/huaTuo0.png',
          './images/wuJiangs/myImages/luSu3.png',
          './images/wuJiangs/myImages/luSu2.png',
          './images/wuJiangs/myImages/luSu1.png',
          './images/wuJiangs/myImages/luSu0.png',
          './images/wuJiangs/myImages/lvBu4.png',
          './images/wuJiangs/myImages/lvBu3.png',
          './images/wuJiangs/myImages/lvBu2.png',
          './images/wuJiangs/myImages/lvBu1.png',
          './images/wuJiangs/myImages/lvBu0.png',
          './images/wuJiangs/myImages/siMaYi3.png',
          './images/wuJiangs/myImages/siMaYi2.png',
          './images/wuJiangs/myImages/siMaYi1.png',
          './images/wuJiangs/myImages/siMaYi0.png',
          './images/wuJiangs/myImages/sunShangXiang3.png',
          './images/wuJiangs/myImages/sunShangXiang2.png',
          './images/wuJiangs/myImages/sunShangXiang1.png',
          './images/wuJiangs/myImages/sunShangXiang0.png',
          './images/wuJiangs/myImages/zhangFei4.png',
          './images/wuJiangs/myImages/zhangFei3.png',
          './images/wuJiangs/myImages/zhangFei2.png',
          './images/wuJiangs/myImages/zhangFei1.png',
          './images/wuJiangs/myImages/zhangFei0.png',
          './images/wuJiangs/myImages/zhaoYun4.png',
          './images/wuJiangs/myImages/zhaoYun3.png',
          './images/wuJiangs/myImages/zhaoYun2.png',
          './images/wuJiangs/myImages/zhaoYun1.png',
          './images/wuJiangs/myImages/zhaoYun0.png',
          './images/wuJiangs/myImages/zhouYu4.png',
          './images/wuJiangs/myImages/zhouYu3.png',
          './images/wuJiangs/myImages/zhouYu2.png',
          './images/wuJiangs/myImages/zhouYu1.png',
          './images/wuJiangs/myImages/zhouYu0.png',
          './images/wuJiangs/myImages/zhuGeLiang3.png',
          './images/wuJiangs/myImages/zhuGeLiang2.png',
          './images/wuJiangs/myImages/zhuGeLiang1.png',
          './images/wuJiangs/myImages/zhuGeLiang0.png',
          './images/wuJiangs/zhuGeLiangLiHui.png',
          './images/wuJiangs/zhaoYunLiHui.png',
          './images/wuJiangs/huangYueYingLiHui.png',
          './images/wuJiangs/zhangFeiLiHui.png',
          './images/wuJiangs/guanYuLiHui.png',
          './images/wuJiangs/diaoChanLiHui.png',
          './images/wuJiangs/huaTuoLiHui.png',
          './images/wuJiangs/lvBuLiHui.png',
          './images/wuJiangs/guoJiaLiHui.png',
          './images/wuJiangs/siMaYiLiHui.png',
          './images/wuJiangs/luSuLiHui.png',
          './images/wuJiangs/sunShangXiangLiHui.png',
          './images/wuJiangs/zhouYuLiHui.png'
        ]);
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});