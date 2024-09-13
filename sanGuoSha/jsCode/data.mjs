const wuJiangUrl = [
  './images/wuJiangs/myImages/diaoChan3.png',
  './images/wuJiangs/myImages/guanYu4.png',
  './images/wuJiangs/myImages/guoJia3.png',
  './images/wuJiangs/myImages/huangYueYing3.png',
  './images/wuJiangs/myImages/huaTuo3.png',
  './images/wuJiangs/myImages/luSu3.png',
  './images/wuJiangs/myImages/lvBu4.png',
  './images/wuJiangs/myImages/siMaYi3.png',
  './images/wuJiangs/myImages/sunShangXiang3.png',
  './images/wuJiangs/myImages/zhangFei4.png',
  './images/wuJiangs/myImages/zhaoYun4.png',
  './images/wuJiangs/myImages/zhouYu4.png',
  './images/wuJiangs/myImages/zhuGeLiang3.png'
]
const LiHui = [
  {
    name: 'zhuGeLiang',
    html: `<div style=" position: relative;left:-50px;  width: 600px; height: 500px;">
          <div
            style="width: 100%;height: 100%;background-image: url('./images/wuJiangs/zhuGeLiangLiHui.png');background-repeat: no-repeat;background-size: contain;">
          </div>
          <span
            style="position: absolute;top:140px;left:280px;font-size: 18px;color: #ffffff;text-shadow: -1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red">诸葛亮</span>
          <span style="position: absolute;top:180px;left:230px;font-size: 16px;color: greenyellow;">观星:</span>
          <span style="position: absolute;top:180px;left:270px;color: #ffffffd0;">准备阶段，你可以观看牌堆顶的 X 张牌（X 为存活角色数且最多为
          5），然后将其中任意数量的牌置于牌堆顶，将其余的牌置于牌堆底。</span>
          <span style="position: absolute;top:260px;left:230px;font-size: 16px;color: greenyellow;">空城：</span>
          <span style="position: absolute;top:260px;left:270px;color: #ffffffd0;">锁定技，若你没有手牌，你不能成为【杀】和【决斗】的目标。</span>
        </div>`
  },
  {
    name: 'zhaoYun',
    html: `<div style=" position: relative;left:-50px;  width: 600px; height: 500px;">
    <div
      style="width: 100%;height: 100%;background-image: url('./images/wuJiangs/zhaoYunLiHui.png');background-repeat: no-repeat;background-size: contain;">
    </div>
    <span
      style="position: absolute;top:180px;left:280px;font-size: 18px;color: #ffffff;text-shadow: -1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red">赵云</span>

      <span style="position: absolute;top:230px;left:230px;font-size: 16px;color: greenyellow;">龙胆：</span>
      <span style="position: absolute;top:230px;left:270px;color: #ffffffd0;">你可以将【杀】当【闪】、【闪】当【杀】使用或打出。
      </span>
    </div>`
  },
  {
    name: 'huangYueYing',
    html: `<div style=" position: relative; width: 600px; height: 500px;">
    <div
      style="width: 100%;height: 100%;background-image: url('./images/wuJiangs/huangYueYingLiHui.png');background-repeat: no-repeat;background-size: contain;">
    </div>
    <span
      style="position: absolute;top:180px;left:280px;font-size: 18px;color: #ffffff;text-shadow: -1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red">黄月英</span>

    <span style="position: absolute;top:230px;left:230px;font-size: 16px;color: greenyellow;">集智：</span>
    <span style="position: absolute;top:230px;left:270px;color: #ffffffd0;">当你使用普通锦囊牌时，你可以摸一张牌。
    </span>
    <span style="position: absolute;top:260px;left:230px;font-size: 16px;color: greenyellow;">奇才：</span>
    <span style="position: absolute;top:260px;left:270px;color: #ffffffd0;">锁定技，你使用锦囊牌无距离限制。
    </span>
  </div>`
  },
  {
    name: 'zhangFei',
    html: ` <div style=" position: relative;left:-50px; width: 600px; height: 500px;">
    <div
      style="width: 100%;height: 100%;background-image: url('./images/wuJiangs/zhangFeiLiHui.png');background-repeat: no-repeat;background-size: contain;">
    </div>
    <span
      style="position: absolute;top:180px;left:280px;font-size: 18px;color: #ffffff;text-shadow: -1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red">张飞</span>

    <span style="position: absolute;top:230px;left:230px;font-size: 16px;color: greenyellow;">咆哮：</span>
    <span style="position: absolute;top:230px;left:270px;color: #ffffffd0;">锁定技，你使用【杀】无次数限制。 </span>
  </div>`
  },
  {
    name: 'guanYu',
    html: `<div style=" position: relative;left:-50px; width: 600px; height: 500px;">
    <div
      style="width: 100%;height: 100%;background-image: url('./images/wuJiangs/guanYuLiHui.png');background-repeat: no-repeat;background-size: contain;">
    </div>
    <span
      style="position: absolute;top:180px;left:280px;font-size: 18px;color: #ffffff;text-shadow: -1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red">关羽</span>

    <span style="position: absolute;top:230px;left:230px;font-size: 16px;color: greenyellow;">武圣：</span>
    <span style="position: absolute;top:230px;left:270px;color: #ffffffd0;">你可以将一张红色牌当【杀】使用或打出。 </span>
  </div>`
  },
  {
    name: 'diaoChan',
    html: `<div style=" position: relative;left:-50px; width: 600px; height: 500px;">
    <div
      style="width: 100%;height: 100%;background-image: url('./images/wuJiangs/diaoChanLiHui.png');background-repeat: no-repeat;background-size: contain;">
    </div>
    <span
      style="position: absolute;top:170px;left:280px;font-size: 18px;color: #ffffff;text-shadow: -1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red">貂蝉</span>

    <span style="position: absolute;top:205px;left:230px;font-size: 16px;color: greenyellow;">离间：</span>
    <span
      style="position: absolute;top:205px;left:270px;color: #ffffffd0;">出牌阶段限一次，你可以弃置一张牌并选择两名男性角色，令其中一名男性角色对另一名男性角色使用一张【决斗】。
    </span>
    <span style="position: absolute;top:275px;left:230px;font-size: 16px;color: greenyellow;">闭月：</span>
    <span style="position: absolute;top:275px;left:270px;color: #ffffffd0;">结束阶段，你可以摸一张牌。 </span>
  </div>`
  },
  {
    name: 'huaTuo',
    html: `<div style=" position: relative;left:-50px; width: 600px; height: 500px;">
    <div
      style="width: 100%;height: 100%;background-image: url('./images/wuJiangs/huaTuoLiHui.png');background-repeat: no-repeat;background-size: contain;">
    </div>
    <span
      style="position: absolute;top:170px;left:280px;font-size: 18px;color: #ffffff;text-shadow: -1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red">华佗</span>

    <span style="position: absolute;top:205px;left:230px;font-size: 16px;color: greenyellow;">青囊：</span>
    <span style="position: absolute;top:205px;left:270px;color: #ffffffd0;">出牌阶段限一次，你可以弃置一张手牌并令一名角色回复 1 点体力。
    </span>
    <span style="position: absolute;top:250px;left:230px;font-size: 16px;color: greenyellow;">急救：</span>
    <span style="position: absolute;top:250px;left:270px;color: #ffffffd0;">你的回合外，你可以将一张红色牌当【桃】使用。 </span>
  </div>`
  },
  {
    name: 'lvBu',
    html: `<div style=" position: relative;left:-50px; width: 600px; height: 500px;">
    <div
      style="width: 100%;height: 100%;background-image: url('./images/wuJiangs/lvBuLiHui.png');background-repeat: no-repeat;background-size: contain;">
    </div>
    <span
      style="position: absolute;top:170px;left:280px;font-size: 18px;color: #ffffff;text-shadow: -1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red">吕布</span>

    <span style="position: absolute;top:205px;left:230px;font-size: 16px;color: greenyellow;">无双：</span>
    <span
      style="position: absolute;top:205px;left:270px;color: #ffffffd0;">锁定技，当你使用【杀】指定一个目标后，该角色需连续使用两张【闪】才能抵消此【杀】；与你进行【决斗】的角色每次需连续打出两张【杀】。
    </span>
  </div>`
  },
  {
    name: 'guoJia',
    html: `<div style=" position: relative;left:-50px; width: 600px; height: 500px;">
    <div
      style="width: 100%;height: 100%;background-image: url('./images/wuJiangs/guoJiaLiHui.png');background-repeat: no-repeat;background-size: contain;">
    </div>
    <span
      style="position: absolute;top:170px;left:280px;font-size: 18px;color: #ffffff;text-shadow: -1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red">郭嘉</span>

    <span style="position: absolute;top:205px;left:230px;font-size: 16px;color: greenyellow;">天妒：</span>
    <span style="position: absolute;top:205px;left:270px;color: #ffffffd0;">当你的判定牌生效后，你可以获得此牌。
    </span>
    <span style="position: absolute;top:245px;left:230px;font-size: 16px;color: greenyellow;">遗计：</span>
    <span style="position: absolute;top:245px;left:270px;color: #ffffffd0;">当你受到 1 点伤害后，你可以摸两张牌，然后你可以将这些牌交给任意角色。
    </span>
  </div>`
  },
  {
    name: 'siMaYi',
    html: `<div style=" position: relative;left:-50px; width: 600px; height: 500px;">
    <div
      style="width: 100%;height: 100%;background-image: url('./images/wuJiangs/siMaYiLiHui.png');background-repeat: no-repeat;background-size: contain;">
    </div>
    <span
      style="position: absolute;top:170px;left:280px;font-size: 18px;color: #ffffff;text-shadow: -1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red">司马懿</span>

    <span style="position: absolute;top:205px;left:230px;font-size: 16px;color: greenyellow;">反馈：</span>
    <span style="position: absolute;top:205px;left:270px;color: #ffffffd0;">当你受到伤害后，你可以获得伤害来源的一张牌。
    </span>
    <span style="position: absolute;top:245px;left:230px;font-size: 16px;color: greenyellow;">鬼才：</span>
    <span style="position: absolute;top:245px;left:270px;color: #ffffffd0;">当一名角色的判定牌生效前，你可以打出一张手牌代替之。

    </span>
  </div>`
  },
  {
    name: 'luSu',
    html: `<div style=" position: relative;left:-50px; width: 600px; height: 500px;">
    <div
      style="width: 100%;height: 100%;background-image: url('./images/wuJiangs/luSuLiHui.png');background-repeat: no-repeat;background-size: contain;">
    </div>
    <span
      style="position: absolute;top:170px;left:280px;font-size: 18px;color: #ffffff;text-shadow: -1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red">鲁肃</span>

    <span style="position: absolute;top:205px;left:230px;font-size: 16px;color: greenyellow;">好施：</span>
    <span style="position: absolute;top:205px;left:270px;color: #ffffffd0;">摸牌阶段，你可以多摸两张牌，然后若你的手牌数大于
      5，你须将一半（向下取整）的手牌交给手牌最少的一名其他角色。
    </span>
    <span style="position: absolute;top:285px;left:230px;font-size: 16px;color: greenyellow;">缔盟：</span>
    <span style="position: absolute;top:285px;left:270px;color: #ffffffd0;">出牌阶段限一次，你可以选择两名其他角色，令这两名角色交换手牌。
    </span>
  </div>`
  },
  {
    name: 'sunShangXiang',
    html: `<div style=" position: relative;left:-50px; width: 600px; height: 500px;">
    <div
      style="width: 100%;height: 100%;background-image: url('./images/wuJiangs/sunShangXiangLiHui.png');background-repeat: no-repeat;background-size: contain;">
    </div>
    <span
      style="position: absolute;top:170px;left:280px;font-size: 18px;color: #ffffff;text-shadow: -1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red">孙尚香</span>

    <span style="position: absolute;top:205px;left:230px;font-size: 16px;color: greenyellow;">枭姬：</span>
    <span style="position: absolute;top:205px;left:270px;color: #ffffffd0;">当你失去装备区里的一张牌后，你可以摸两张牌。
    </span>
    <span style="position: absolute;top:255px;left:230px;font-size: 16px;color: greenyellow;">结姻：</span>
    <span style="position: absolute;top:255px;left:270px;color: #ffffffd0;">出牌阶段限一次，你可以选择一名男性角色，弃置一张手牌并令你和该角色各回复 1 点体力。
    </span>
  </div>`
  },
  {
    name: 'zhouYu',
    html: `<div style=" position: relative;left:-50px; width: 600px; height: 500px;">
    <div
      style="width: 100%;height: 100%;background-image: url('./images/wuJiangs/zhouYuLiHui.png');background-repeat: no-repeat;background-size: contain;">
    </div>
    <span
      style="position: absolute;top:170px;left:280px;font-size: 18px;color: #ffffff;text-shadow: -1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red">周瑜</span>

    <span style="position: absolute;top:205px;left:230px;font-size: 16px;color: greenyellow;">英姿：</span>
    <span style="position: absolute;top:205px;left:270px;color: #ffffffd0;">摸牌阶段，你可以多摸一张牌。
    </span>
    <span style="position: absolute;top:235px;left:230px;font-size: 16px;color: greenyellow;">反间：</span>
    <span
      style="position: absolute;top:235px;left:270px;color: #ffffffd0;">出牌阶段限一次，你可以令一名其他角色选择一种花色，然后展示你的一张手牌并弃置此牌，若此牌花色与该角色选择的花色不同，该角色失去
      1 点体力。
    </span>
  </div>`
  }
]
const cards = [
  './images/cards/card/jiBen/huoSha-FK-4.png',
  './images/cards/card/jiBen/huoSha-FK-5.png',
  './images/cards/card/jiBen/huoSha-RedT-4.png',
  './images/cards/card/jiBen/huoSha-RedT-7.png',
  './images/cards/card/jiBen/huoSha-RedT-10.png',
  './images/cards/card/jiBen/jiu-BlackT-3.png',
  './images/cards/card/jiBen/jiu-BlackT-9.png',
  './images/cards/card/jiBen/jiu-FK-9.png',
  './images/cards/card/jiBen/jiu-MH-3.png',
  './images/cards/card/jiBen/jiu-MH-9.png',
  './images/cards/card/jiBen/leiSha-BlackT-4.png',
  './images/cards/card/jiBen/leiSha-BlackT-5.png',
  './images/cards/card/jiBen/leiSha-BlackT-6.png',
  './images/cards/card/jiBen/leiSha-BlackT-7.png',
  './images/cards/card/jiBen/leiSha-BlackT-8.png',
  './images/cards/card/jiBen/leiSha-MH-5.png',
  './images/cards/card/jiBen/leiSha-MH-6.png',
  './images/cards/card/jiBen/leiSha-MH-7.png',
  './images/cards/card/jiBen/leiSha-MH-8.png',
  './images/cards/card/jiBen/sha-BlackT-7.png',
  './images/cards/card/jiBen/sha-BlackT-8.png',
  './images/cards/card/jiBen/sha-BlackT-9.png',
  './images/cards/card/jiBen/sha-BlackT-10.png',
  './images/cards/card/jiBen/sha-FK-6.png',
  './images/cards/card/jiBen/sha-FK-7.png',
  './images/cards/card/jiBen/sha-FK-8.png',
  './images/cards/card/jiBen/sha-FK-9.png',
  './images/cards/card/jiBen/sha-FK-10.png',
  './images/cards/card/jiBen/sha-FK-13.png',
  './images/cards/card/jiBen/sha-MH-2.png',
  './images/cards/card/jiBen/sha-MH-3.png',
  './images/cards/card/jiBen/sha-MH-4.png',
  './images/cards/card/jiBen/sha-MH-5.png',
  './images/cards/card/jiBen/sha-MH-6.png',
  './images/cards/card/jiBen/sha-MH-7.png',
  './images/cards/card/jiBen/sha-MH-8.png',
  './images/cards/card/jiBen/sha-MH-9.png',
  './images/cards/card/jiBen/sha-MH-10.png',
  './images/cards/card/jiBen/sha-MH-11.png',
  './images/cards/card/jiBen/sha-RedT-10.png',
  './images/cards/card/jiBen/sha-RedT-11.png',
  './images/cards/card/jiBen/shan-FK-2.png',
  './images/cards/card/jiBen/shan-FK-3.png',
  './images/cards/card/jiBen/shan-FK-4.png',
  './images/cards/card/jiBen/shan-FK-5.png',
  './images/cards/card/jiBen/shan-FK-6.png',
  './images/cards/card/jiBen/shan-FK-7.png',
  './images/cards/card/jiBen/shan-FK-8.png',
  './images/cards/card/jiBen/shan-FK-9.png',
  './images/cards/card/jiBen/shan-FK-10.png',
  './images/cards/card/jiBen/shan-FK-11.png',
  './images/cards/card/jiBen/shan-RedT-2.png',
  './images/cards/card/jiBen/shan-RedT-8.png',
  './images/cards/card/jiBen/shan-RedT-9.png',
  './images/cards/card/jiBen/shan-RedT-11.png',
  './images/cards/card/jiBen/shan-RedT-12.png',
  './images/cards/card/jiBen/shan-RedT-13.png',
  './images/cards/card/jiBen/tao-FK-2.png',
  './images/cards/card/jiBen/tao-FK-3.png',
  './images/cards/card/jiBen/tao-FK-12.png',
  './images/cards/card/jiBen/tao-RedT-3.png',
  './images/cards/card/jiBen/tao-RedT-4.png',
  './images/cards/card/jiBen/tao-RedT-5.png',
  './images/cards/card/jiBen/tao-RedT-6.png',
  './images/cards/card/jiBen/tao-RedT-7.png',
  './images/cards/card/jiBen/tao-RedT-8.png',
  './images/cards/card/jiBen/tao-RedT-9.png',
  './images/cards/card/jiBen/tao-RedT-12.png',
  './images/cards/card/jinNang/bingLiangCunDuan-BlackT-10.png',
  './images/cards/card/jinNang/bingLiangCunDuan-MH-4.png',
  // './images/cards/card/jinNang/guoHeChaiQiao-BlackT-3.png',
  // './images/cards/card/jinNang/guoHeChaiQiao-BlackT-4.png',
  // './images/cards/card/jinNang/guoHeChaiQiao-BlackT-12.png',
  // './images/cards/card/jinNang/guoHeChaiQiao-MH-3.png',
  // './images/cards/card/jinNang/guoHeChaiQiao-MH-4.png',
  // './images/cards/card/jinNang/guoHeChaiQiao-RedT-12.png',
  './images/cards/card/jinNang/jueDou-BlackT-1.png',
  './images/cards/card/jinNang/jueDou-FK-1.png',
  './images/cards/card/jinNang/jueDou-MH-1.png',
  './images/cards/card/jinNang/leBuSiShu-MH-6.png',
  './images/cards/card/jinNang/leBuSiShu-BlackT-6.png',
  './images/cards/card/jinNang/leBuSiShu-RedT-6.png',
  './images/cards/card/jinNang/nanManRuQin-BlackT-7.png',
  './images/cards/card/jinNang/nanManRuQin-BlackT-13.png',
  './images/cards/card/jinNang/nanManRuQin-MH-7.png',
  './images/cards/card/jinNang/wanJianQiFa-RedT-1.png',
  './images/cards/card/jinNang/wuGuFengDeng-RedT-3.png',
  './images/cards/card/jinNang/wuGuFengDeng-RedT-4.png',
  './images/cards/card/jinNang/wuXieKeJi-BlackT-11.png',
  './images/cards/card/jinNang/wuXieKeJi-BlackT-13.png',
  './images/cards/card/jinNang/wuXieKeJi-MH-12.png',
  './images/cards/card/jinNang/wuXieKeJi-MH-13.png',
  './images/cards/card/jinNang/wuXieKeJi-RedT-1.png',
  './images/cards/card/jinNang/wuXieKeJi-RedT-13.png',
  './images/cards/card/jinNang/wuZhongShengYou-RedT-7.png',
  './images/cards/card/jinNang/wuZhongShengYou-RedT-8.png',
  './images/cards/card/jinNang/wuZhongShengYou-RedT-9.png',
  './images/cards/card/jinNang/wuZhongShengYou-RedT-11.png',
]
const touXiang = [
  './images/xiaoTubiaoImages/head1.png',
  './images/xiaoTubiaoImages/head2.png',
  './images/xiaoTubiaoImages/head3.png',
  './images/xiaoTubiaoImages/head4.png',
  './images/xiaoTubiaoImages/head5.png',
  './images/xiaoTubiaoImages/head6.png',
  './images/xiaoTubiaoImages/head7.png',
  './images/xiaoTubiaoImages/head8.png',
  './images/xiaoTubiaoImages/head9.png',
]
export { wuJiangUrl, LiHui, cards, touXiang }