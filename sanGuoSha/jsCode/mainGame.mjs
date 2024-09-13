// 主游戏页面
export const centerUl = document.querySelector("#centerUl");
//数据导入
import { wuJiangUrl, LiHui, touXiang } from './data.mjs'
//方法导入
import {
  countDown, drawCard, updateCard, shaCard, taoCard, jiuCard,
  panDingCard, guoHeChaiQiaoCard, jueDouCard, nanManRuQinCard,
  wanJianQiFaCard, wuGuFengDengCard, wuZhongShengYouCard,
  dropCard, choiceCard,
  delCard
} from './util.mjs'
//账户信息对象
class UserData {
  constructor(head = 1, winNum = 0, loseNum = 0, winRate = 0) {
    this.head = head
    this.winNum = winNum
    this.loseNum = loseNum
    this.winRate = winRate
    this.level = 1
  }
}
const userData = new UserData()
let loginUsers
let users = JSON.parse(localStorage.getItem('currentUser'))
for (let i = 0; i < localStorage.length; i++) {
  if (localStorage.key(i) === 'loginUsers') {
    loginUsers = JSON.parse(localStorage.getItem(localStorage.key(i)))
  }
}
function getUserData() {
  loginUsers.forEach(user => {
    if (user.userName === users.userName && user.passWord === users.passWord) {
      if (user.userData !== null) {
        userData.head = user.userData.head
        userData.winNum = user.userData.winNum
        userData.loseNum = user.userData.loseNum
        userData.winRate = user.userData.winRate
        userData.level = user.userData.level
      }
    }
  })
}
getUserData()
function updateUserData(userData = null) {
  if (userData != null) {
    for (let i = 0; i < loginUsers.length; i++) {
      if (loginUsers[i].userName === users.userName && loginUsers[i].passWord === users.passWord) {
        loginUsers[i].userData = userData
        localStorage.setItem('loginUsers', JSON.stringify(loginUsers))
      }
    }
  } else {
    console.log("玩家数据为空，保存失败")
  }
}
//玩家对象
class Player {
  constructor(id, playerDiv = null, wuJiang, blood, card = [], sha = true, shan = false, addHorse, delHorse, dao, jia, panDing = [], cardUl = null, countDownDiv = null, maxBlood, shaCount = 1) {
    this.id = id
    this.playerDiv = playerDiv
    this.wuJiang = wuJiang
    this.blood = blood || maxBlood
    this.card = card//手牌
    this.sha = sha
    this.shan = shan
    this.addHorse = addHorse
    this.delHorse = delHorse
    this.dao = dao
    this.jia = jia//防御牌
    this.panDing = panDing//判定牌
    this.cardUl = cardUl
    this.countDownDiv = countDownDiv
    this.maxBlood = maxBlood
    this.shaCount = shaCount
    this.isDead = false
  }
}
//加载界面
const images = ["./images/onload/login_random_bg_1.jpg",
  "./images/onload/login_random_bg_2.jpg",
  "./images/onload/login_random_bg_3.jpg",
  "./images/onload/login_random_bg_4.jpg"]
window.onload = () => {
  const url = images[Math.floor(Math.random() * images.length)]
  document.querySelector("#onloading").style.backgroundImage = `url(${url}) `
  document.querySelector("#onloading").style.backgroundSize = "contain"
  document.querySelector("#onloading").style.backgroundRepeat = "no-repeat"
  document.querySelector("#onloading").style.backgroundPosition = "center center"
  document.querySelector('#heads').style.display = 'none'
}
//展示胜率
document.querySelector('#headRight').addEventListener('click', () => {
  if (document.querySelector('#headRight2').style.height != '100%') {
    document.querySelector('#headRight2').style.height = '100%'
  } else {
    document.querySelector('#headRight2').style.height = '0'
  }
})
document.querySelector('#winNum').textContent = `胜：${userData.winNum}`
document.querySelector('#loseNum').textContent = `负：${userData.loseNum}`
document.querySelector('#winRate').textContent = `胜率：${userData.winRate}%`
//展示等级
document.querySelector('#userLevel').textContent = `${userData.level}`
//登录
//加载头像
document.querySelector('#userHeadBg').style.backgroundImage = `url('./images/xiaoTubiaoImages/head${userData.head}.png')`
const heads = document.querySelectorAll('.heads')
for (let i = 0; i < heads.length; i++) {
  heads[i].style.backgroundImage = `url('./images/xiaoTubiaoImages/head${i + 1}.png')`
  heads[i].style.backgroundSize = "contain"
  heads[i].style.backgroundRepeat = "no-repeat"
  heads[i].style.backgroundPosition = "center center"
}
//选择头像
document.querySelector('#userHeadBg').addEventListener('click', (e) => {
  if (e.target.dataset.id === 'userHead') {
    if (document.querySelector('#heads').style.display == 'none') {
      document.querySelector('#heads').style.display = 'grid'
    } else {
      document.querySelector('#heads').style.display = 'none'
    }
  }

})
document.querySelector('#heads').addEventListener('click', (e) => {
  const index = e.target.dataset.index
  if (index != null) {
    document.querySelector('#userHeadBg').style.backgroundImage = `url('./images/xiaoTubiaoImages/head${index}.png')`
    userData.head = index
    updateUserData(userData)
  }
  document.querySelector('#heads').style.display = 'none'
})
//加载动画
let loading = document.getElementById("loading")
let horse = document.getElementById("horse")
let step = 4
let horseStep = 10
let myLoading = setInterval(() => {
  if (Math.random() > 0 && Math.random() < 0.2) {
    step += 1
    horseStep += 1
  } else if (Math.random() > 0.2 && Math.random() < 0.8) {
    step += 0.7
    horseStep += 0.7
  } else if (Math.random() > 0.6 && Math.random() < 1) {
    step += 0.5
    horseStep += 0.5
  }
  loading.style.width = step + "%"
  horse.style.left = horseStep + "%"
  if (step >= 80) {
    document.querySelector("#onloading").style.display = "none"
    document.querySelector("#mainGame").style.display = "block"
    document.querySelector('body').style.background = "url('./images/Loginimages/gameBg.png')"
    document.querySelector('body').style.backgroundSize = "cover"
    document.querySelector('body').style.backgroundRepeat = "no-repeat"
    clearInterval(myLoading)
  }
  loading.style.width = step + "%"
}, 5)
//武将页面
const wuJiangBg = document.querySelector("#wuJiangBg")
const wuJiang = document.querySelector("#wuJiang")
const back = document.querySelector("#back")
wuJiang.addEventListener('click', () => {
  wuJiangBg.style.display = "block"
  document.querySelector('#mainGame').style.display = "none"
})
back.addEventListener('click', () => {
  wuJiangBg.style.display = "none"
  document.querySelector('#mainGame').style.display = "block"
})
//武将列表
const wuJiangs = document.querySelector("#wuJiangs")
wuJiangUrl.forEach((item) => {
  const div = document.createElement('div')
  div.style.backgroundImage = `url(${item})`
  div.style.backgroundSize = "contain"
  div.style.backgroundRepeat = "no-repeat"
  div.style.backgroundPosition = "center center"
  div.style.width = "200px"
  div.style.height = "250px"
  div.style.cursor = "pointer"
  div.dataset.name = item;
  wuJiangs.appendChild(div)
})
console.log(wuJiangs.children)
let index = 0
for (let item of wuJiangs.children) {
  index++
  for (let liHui of LiHui) {
    if (item.dataset.name.includes(liHui.name)) {
      const div = document.createElement('div')
      div.style.display = 'none'
      div.innerHTML = liHui.html
      item.appendChild(div)
      console.log(index)
      if (index % 4 == 0 || index % 4 == 3) {
        item.querySelector('div:nth-of-type(1) div:nth-of-type(1)').style.top = '-50%'
        item.querySelector('div:nth-of-type(1) div:nth-of-type(1)').style.left = '-200%'
      }
    }
  }
  item.addEventListener('mouseover', () => {
    item.querySelector('div:nth-of-type(1)').style.display = 'block'
  })
  item.addEventListener('mouseout', () => {
    item.querySelector('div:nth-of-type(1) ').style.display = 'none'
  })
}
//匹配
const match = document.querySelector("#match")
let timer
match.addEventListener('click', () => {
  timer = countDown(30, document.querySelector('#restTime-noReady'), document.querySelector('#piPeiBg'), document.querySelector('#mainGame'))
  if (typeof timer == 'number') {
    document.querySelector('#mainGame').style.display = "none"
    document.querySelector('#piPeiBg').style.display = 'block'
  }

})
const readyBtn = document.querySelector('#readyBtn')
let readyFlag = false
readyBtn.addEventListener('click', () => {
  if (!readyFlag) {
    readyFlag = true
    const player1 = new Player(1)
    player1.cardUl = document.querySelector('#cardList')
    const player2 = new Player(2)
    const player3 = new Player(3)
    const player4 = new Player(4)
    const players = [player1, player2, player3, player4]
    let sits = [document.querySelector('#sit2'), document.querySelector('#sit3'), document.querySelector('#sit4')]
    readyBtn.style.backgroundImage = "url('./images/xiaoTubiaoImages/hasConfirmBg.png')"
    readyBtn.textContent = "已准备"
    document.querySelector('#noReady').style.display = 'none'
    document.querySelector('#ready').style.display = 'block'
    document.querySelector('#restTime-ready').textContent = document.querySelector('#restTime-noReady').textContent
    let waiteTime
    if (document.querySelector('#restTime-noReady').textContent > 10) waiteTime = Math.floor(Math.random() * 10)
    else waiteTime = Math.floor(Math.random() * document.querySelector('#restTime-noReady').textContent)
    const readyCount = setInterval(() => {
      waiteTime--
      if (waiteTime <= 0) {
        readyFlag = false
        readyBtn.style.backgroundImage = "url('./images/xiaoTubiaoImages/confirmBg.png')"
        readyBtn.textContent = "请准备"
        document.querySelector('#noReady').style.display = 'block'
        document.querySelector('#ready').style.display = 'none'
        clearInterval(readyCount)
        clearInterval(timer)
        document.querySelector('#piPeiBg').style.display = 'none'
        document.querySelector('#choiceWuJiangBg').style.display = 'block'
        const restId = countDown(15, document.querySelector('#choiceRestTime span:first-child'))
        //选择武将
        const choiceCount = setInterval(() => {
          if (document.querySelector('#choiceRestTime span:first-child').textContent <= 0) {

            let wjU = [...wuJiangUrl]
            if (getComputedStyle(document.querySelector('#choiceWuJiangLeft')).backgroundImage.includes('wuJiangBg.png') || document.querySelector('#choiceWuJiangLeft').style.backgroundImage.includes('wuJiangBg.png')) {
              player1.wuJiang = wjU.splice(Math.floor(Math.random() * wjU.length), 1)[0]
              player1.maxBlood = Number(player1.wuJiang.match(/\d/))
              player1.blood = player1.maxBlood
              player2.wuJiang = wjU.splice(Math.floor(Math.random() * wjU.length), 1)[0]
              player2.maxBlood = Number(player2.wuJiang.match(/\d/))
              player2.blood = player2.maxBlood
              player3.wuJiang = wjU.splice(Math.floor(Math.random() * wjU.length), 1)[0]
              player3.maxBlood = Number(player3.wuJiang.match(/\d/))
              player3.blood = player3.maxBlood
              player4.wuJiang = wjU.splice(Math.floor(Math.random() * wjU.length), 1)[0]
              player4.maxBlood = Number(player4.wuJiang.match(/\d/))
              player4.blood = player4.maxBlood
            } else {
              player1.wuJiang = document.querySelector('#choiceWuJiangLeft').style.backgroundImage.match(/url\('(.*?)'\)/)[1]
              player1.maxBlood = Number(player1.wuJiang.match(/\d/))
              player1.blood = player1.maxBlood
              wjU.splice(wjU.indexOf(player1.wuJiang), 1)
              player2.wuJiang = wjU.splice(Math.floor(Math.random() * wjU.length), 1)[0]
              player2.maxBlood = Number(player2.wuJiang.match(/\d/))
              player2.blood = player2.maxBlood
              player3.wuJiang = wjU.splice(Math.floor(Math.random() * wjU.length), 1)[0]
              player3.maxBlood = Number(player3.wuJiang.match(/\d/))
              player3.blood = player3.maxBlood
              player4.wuJiang = wjU.splice(Math.floor(Math.random() * wjU.length), 1)[0]
              player4.maxBlood = Number(player4.wuJiang.match(/\d/))
              player4.blood = player4.maxBlood
            }
            //初始化对局
            for (let i = 0; i < players.length; i++) {
              let index = Math.floor(Math.random() * sits.length)
              if (i != 0) players[i].playerDiv = sits.splice(index, 1)[0]
              else players[i].playerDiv = document.querySelector(`#sit1`)
              console.log(players[i].playerDiv)
              if (i == 1) {
                players[i].playerDiv.querySelector('div:nth-of-type(2)').textContent = '友方'
              } else if (i !== 0) {
                players[i].playerDiv.querySelector('div:nth-of-type(2)').textContent = '敌方'
              }
              players[i].playerDiv.style.backgroundImage = `url('${players[i].wuJiang}')`
              if (i !== 0) players[i].playerDiv.querySelector('.countDown').textContent = ''
              players[i].playerDiv.querySelector('.panDingDiv').textContent = ''
            }
            initCard(players)
            updateCard(players[0], document.querySelector('#cardList'))
            beginTurn(player1, player2, player3, player4, players)
            document.querySelector('#choiceWuJiangBg').style.display = 'none'
            document.querySelector('#choiceWuJiangLeft').style.backgroundImage = "url('./images/xiaoTubiaoImages/wuJiangBg.png')"
            document.querySelector('#gamingBg').style.display = 'block'
            console.log(player1.wuJiang, player2.wuJiang, player3.wuJiang, player4.wuJiang)
            clearInterval(choiceCount)
          }
        }, 1000)
        document.querySelector('#choiceWuJiangBg button').onclick = () => {
          if (!getComputedStyle(document.querySelector('#choiceWuJiangLeft')).backgroundImage.includes('wuJiangBg.png') || !document.querySelector('#choiceWuJiangLeft').style.backgroundImage.includes('wuJiangBg.png')) {

            let wjU = [...wuJiangUrl]
            player1.wuJiang = document.querySelector('#choiceWuJiangLeft').style.backgroundImage.match(/url\("(.*?)"\)/)[1]
            player1.maxBlood = Number(player1.wuJiang.match(/\d/))
            player1.blood = player1.maxBlood
            console.log(player1.wuJiang)
            wjU.splice(wjU.indexOf(player1.wuJiang), 1)
            player2.wuJiang = wjU.splice(Math.floor(Math.random() * wjU.length), 1)[0]
            player2.maxBlood = Number(player2.wuJiang.match(/\d/))
            player2.blood = player2.maxBlood
            player3.wuJiang = wjU.splice(Math.floor(Math.random() * wjU.length), 1)[0]
            player3.maxBlood = Number(player3.wuJiang.match(/\d/))
            player3.blood = player3.maxBlood
            player4.wuJiang = wjU.splice(Math.floor(Math.random() * wjU.length), 1)[0]
            player4.maxBlood = Number(player4.wuJiang.match(/\d/))
            player4.blood = player4.maxBlood
            //初始化对局
            console.log(sits)
            for (let i = 0; i < players.length; i++) {
              let index = Math.floor(Math.random() * sits.length)
              if (i == 0) {
                players[i].playerDiv = document.querySelector(`#sit1`)
                players[i].playerDiv.style.backgroundImage = `url(${players[i].wuJiang})`
              }
              else if (i == 1) {
                players[i].playerDiv = sits.splice(index, 1)[0]
                players[i].playerDiv.querySelector('div:nth-of-type(2)').textContent = '友方'
                players[i].playerDiv.style.backgroundImage = `url(${players[i].wuJiang})`
              } else {
                players[i].playerDiv = sits.splice(index, 1)[0]
                players[i].playerDiv.querySelector('div:nth-of-type(2)').textContent = '敌方'
                players[i].playerDiv.style.backgroundImage = `url('${players[i].wuJiang}')`
              }
              if (i !== 0) players[i].playerDiv.querySelector('.countDown').textContent = ''
              players[i].playerDiv.querySelector('.panDingDiv').textContent = ''
              console.log(players[i].playerDiv)
            }
            initCard(players)
            updateCard(players[0], document.querySelector('#cardList'))
            beginTurn(player1, player2, player3, player4, players)
            document.querySelector('#choiceWuJiangBg').style.display = 'none'
            document.querySelector('#choiceWuJiangLeft').style.backgroundImage = "url('./images/xiaoTubiaoImages/wuJiangBg.png')"
            document.querySelector('#gamingBg').style.display = 'block'
            console.log(player1.wuJiang, player2.wuJiang, player3.wuJiang, player4.wuJiang)
            clearInterval(choiceCount)
            clearInterval(restId)
          }
        }
      }
      document.querySelector('#restTime-ready').textContent = document.querySelector('#restTime-noReady').textContent
    }, 1000)
  }
})
//选择武将
const choiceWuJiangs = document.querySelector("#choiceWuJiangs")
wuJiangUrl.forEach((item) => {
  const div = document.createElement('div')
  div.style.backgroundImage = `url(${item})`
  div.style.backgroundSize = "contain"
  div.style.backgroundRepeat = "no-repeat"
  div.style.backgroundPosition = "center center"
  div.style.width = "150px"
  div.style.height = "200px"
  div.style.cursor = "pointer"
  div.dataset.name = item;
  choiceWuJiangs.appendChild(div)
  div.addEventListener('click', () => {
    document.querySelector("#choiceWuJiangLeft").style.backgroundImage = `url(${div.dataset.name})`
    document.querySelector("#choiceWuJiangLeft").style.backgroundSize = "contain"
    document.querySelector("#choiceWuJiangLeft").style.backgroundRepeat = "no-repeat"
    document.querySelector("#choiceWuJiangLeft").style.backgroundPosition = "center center"
  })
})
//初始化手牌
function initCard(players) {
  for (let i = 1; i <= 4; i++) {
    players.forEach((item) => {
      if (item.playerDiv != null && item.playerDiv.id.includes(i)) {
        drawCard(item, 4)
      }
      console.log(item)
    })
  }
}
//游戏进程主逻辑
function beginTurn(player1, player2, player3, player4, players) {
  document.querySelector('#centerDiv').style.display = 'block'
  //回合制
  let myCards = []//已选牌
  let Man = []//已选目标
  let i = 0//当前玩家
  let now = null//当前玩家
  let second = 14//下一个玩家
  let myTurn = true//是否是我的回合 
  let win = 0
  let lose = 0
  let qiPaiFlag = true
  const round = setInterval(() => {
    //判断输赢
    players.forEach((item) => {
      if (item.id == 1 && item.blood <= 0 && !item.isDead) {
        lose++
        item.isDead = true
      } else if (item.id == 2 && item.blood <= 0 && !item.isDead) {
        lose++
        item.isDead = true
      } else if (item.id == 3 && item.blood <= 0 && !item.isDead) {
        win++
        item.isDead = true
      } else if (item.id == 4 && item.blood <= 0 && !item.isDead) {
        win++
        item.isDead = true
      }
    })
    console.log(`**********win:${win}**********lose:${lose}**********`)
    console.log(`**********${players[0].isDead}**********${players[1].isDead}**********${players[2].isDead}**********${players[3].isDead}**********`)
    if (win == 2) {
      clearInterval(round)
      userData.winNum++
      userData.winRate = (userData.winNum / (userData.winNum + userData.loseNum)).toFixed(2) * 100
      document.querySelector('#centerDiv').style.display = 'none'
      document.querySelector('#gamingBg').style.display = 'none'
      document.querySelector('#mainGame').style.display = 'block'
      document.querySelector('#winNum').textContent = `胜：${userData.winNum}`
      document.querySelector('#loseNum').textContent = `负：${userData.loseNum}`
      document.querySelector('#winRate').textContent = `胜率：${userData.winRate}%`
      userData.level = Math.floor((userData.winNum + userData.loseNum) / 10) + 1
      document.querySelector('#userLevel').textContent = userData.level
      updateUserData(userData)
      return
    } else if (lose == 2) {
      clearInterval(round)
      userData.loseNum++
      userData.winRate = (userData.winNum / (userData.winNum + userData.loseNum)).toFixed(2) * 100
      document.querySelector('#centerDiv').style.display = 'none'
      document.querySelector('#gamingBg').style.display = 'none'
      document.querySelector('#mainGame').style.display = 'block'
      document.querySelector('#winNum').textContent = `胜：${userData.winNum}`
      document.querySelector('#loseNum').textContent = `负：${userData.loseNum}`
      document.querySelector('#winRate').textContent = `胜率：${userData.winRate}%`
      userData.level = Math.floor((userData.winNum + userData.loseNum) / 10) + 1
      document.querySelector('#userLevel').textContent = userData.level
      updateUserData(userData)
      return
    }
    if ((i != 0 && i % 4 == 0 && second == 15) || (i == 0 && second == 14)) {
      player2.playerDiv.querySelector('.panDingDiv').textContent = ''
      player3.playerDiv.querySelector('.panDingDiv').textContent = ''
      player4.playerDiv.querySelector('.panDingDiv').textContent = ''
      if (player1.blood <= 0) {
        i++
        second = 15
        console.log(`**********${i % 4}**********已阵亡**********`)
        return
      }
      now = null
      myTurn = true
      player1.sha = true
      player1.shaCount = 1
      let flag1 = true
      let flag2 = true
      if (player1.panDing.length > 0) {
        while (player1.panDing.length > 0) {
          let card = player1.panDing.pop()
          if (card.includes('bingLiangCunDuan')) {
            player1.playerDiv.querySelector('.panDingDiv').textContent = '兵粮寸断判定失败'
            if (panDingCard(player1, card)) {
              flag1 = false
            }
          } else if (card.includes('leBuSiShu')) {
            player1.playerDiv.querySelector('.panDingDiv').textContent = '乐不思蜀判定失败'
            if (panDingCard(player1, card)) {
              flag2 = false
            }
          }
        }
      }
      if (flag1) {
        drawCard(player1, 2)
      } else {
        player1.playerDiv.querySelector('.panDingDiv').textContent = '兵粮寸断判定成功'
      }
      if (!flag2) {
        second = 15
        i++
        player1.playerDiv.querySelector('.panDingDiv').textContent = '乐不思蜀判定成功'
        dropCard(player1)
        return
      }
      updateCard(player1)
    } else if (second == 15) {
      qiPaiFlag = true
      document.querySelector('#chuPai').style.display = 'none'
      myTurn = false
      if (!player1.isDead) {
        choiceCard(null, document.querySelector('#cardList').querySelectorAll('li'))
        updateCard(player1)
      }
      let flag1 = true
      let flag2 = true
      for (let I = 0; I < players.length; I++) {
        if (players[I].playerDiv != null && players[I].playerDiv.id.includes(i % 4 + 1)) {
          now = players[I]
          players[I].sha = true
          players[I].shaCount = 1
          if (players[I].blood <= 0) {
            i++
            second = 15
            console.log(`**********${i % 4}**********已阵亡**********`)
            return
          }
          //判断是否需要判定
          if (players[I].panDing.length > 0) {
            players[I].panDing.forEach(card => {
              if (card.includes('bingLiangCunDuan')) {
                players[I].playerDiv.querySelector('.panDingDiv').textContent = '兵粮寸断判定失败'
                if (panDingCard(players[I], card)) {
                  flag1 = false
                }
              } else if (card.includes('leBuSiShu')) {
                players[I].playerDiv.querySelector('.panDingDiv').textContent = '乐不思蜀判定失败'
                if (panDingCard(players[I], card)) {
                  flag2 = false
                }
              } else {
                players[I].playerDiv.querySelector('.panDingDiv').textContent = ''
              }
            })
          }
          if (flag1) {
            drawCard(players[I], 2)
          } else {
            players[I].playerDiv.querySelector('.panDingDiv').textContent = '兵粮寸断判定成功'
          }
          if (!flag2) {
            second = 15
            i++
            players[I].playerDiv.querySelector('.panDingDiv').textContent = '乐不思蜀判定成功'
            dropCard(players[I])
            return
          }
          //判断是否需要加血
          if (players[I].blood < players[I].maxBlood) {
            players[I].card.forEach(card => {
              if (card.includes('tao')) {
                taoCard(players[I], card)
              }
            })
          }
        } else {
          console.log(`${I}:${players[I].playerDiv.querySelector('.panDingDiv')}`)
          players[I].playerDiv.querySelector('.panDingDiv').textContent = ''
        }
      }
    }
    //判断是否需要出牌
    if (now != null && now.id == 2) {
      now.card.forEach(card => {
        if (card.includes('wuZhongShengYou') && second == 11) {
          drawCard(now, 2)
        }
        if ((card.includes('bingLiangCunDuan') || card.includes('leBuSiShu')) && second == 8) {
          now.card.splice(now.card.indexOf(card), 1)
          delCard(now, card)
          let flag = true
          if (0.5 > Math.random()) {
            if (players[2].blood > 0) {
              for (let I = 0; I < players[2].card.length; I++) {
                if (players[2].card[I].includes('wuXieKeJi')) {
                  flag = false
                  delCard(players[2], players[2].card[I])
                  break
                }
              }
              if (flag) players[2].panDing.push(card)
            } else {
              for (let I = 0; I < players[3].card.length; I++) {
                if (players[3].card[I].includes('wuXieKeJi')) {
                  flag = false
                  delCard(players[3], players[3].card[I])
                  break
                }
              }
              if (flag) players[3].panDing.push(card)
            }
          } else {
            if (players[3].blood > 0) {
              for (let I = 0; I < players[3].card.length; I++) {
                if (players[3].card[I].includes('wuXieKeJi')) {
                  flag = false
                  delCard(players[3], players[3].card[I])
                  break
                }
              }
              if (flag) players[3].panDing.push(card)
            } else {
              for (let I = 0; I < players[2].card.length; I++) {
                if (players[2].card[I].includes('wuXieKeJi')) {
                  flag = false
                  delCard(players[2], players[2].card[I])
                  break
                }
              }
              if (flag) players[2].panDing.push(card)
            }
          }
        }
        if ((card.includes('sha-') || card.includes('Sha-')) && second == 5) {
          let nm = false
          now.card.forEach(card2 => {
            if (card2.includes('nanManRuQin')) {
              nanManRuQinCard(now, card2, players)
              nm = true
            }
          })
          if (!nm && now) {
            if (players[2].blood > players[3].blood) {
              if (players[3].blood > 0) shaCard(now, players[3], card)
              else shaCard(now, players[2], card)
            } else {
              if (players[2].blood > 0) shaCard(now, players[2], card)
              else shaCard(now, players[3], card)
            }
          }
        }
        if (card.includes('shan') && second == 3) {
          now.card.forEach(card2 => {
            if (card2.includes('wanJianQiFa')) {
              wanJianQiFaCard(now, card2, players)
            }
          })
        }
      })
    } else if (now != null && (now.id == 3 || now.id == 4)) {
      now.sha = true
      now.card.forEach(card => {
        if (card.includes('wuZhongShengYou') && second == 11) {
          drawCard(now, 2)
        }
        if ((card.includes('bingLiangCunDuan') || card.includes('leBuSiShu')) && second == 8) {
          now.card.splice(now.card.indexOf(card), 1)
          let flag = true
          if (0.5 > Math.random()) {
            if (players[0].blood > 0) {
              for (let I = 0; I < players[0].card.length; I++) {
                if (players[0].card[I].includes('wuXieKeJi')) {
                  flag = false
                  delCard(players[0], players[0].card[I])
                  break
                }
              }
              if (flag) players[0].panDing.push(card)
            } else {
              for (let I = 0; I < players[1].card.length; I++) {
                if (players[1].card[I].includes('wuXieKeJi')) {
                  flag = false
                  delCard(players[1], players[1].card[I])
                  break
                }
              }
              if (flag) players[1].panDing.push(card)
            }
          } else {
            if (players[1].blood > 0) {
              for (let I = 0; I < players[1].card.length; I++) {
                if (players[1].card[I].includes('wuXieKeJi')) {
                  flag = false
                  delCard(players[1], players[1].card[I])
                  break
                }
              }
              if (flag) players[1].panDing.push(card)
            }
            else {
              for (let I = 0; I < players[1].card.length; I++) {
                if (players[1].card[I].includes('wuXieKeJi')) {
                  flag = false
                  delCard(players[1], players[1].card[I])
                  break
                }
              }
              if (flag) players[0].panDing.push(card)
            }
          }
        }
        if ((card.includes('sha-') || card.includes('Sha-')) && second == 5) {
          let nm = false
          now.card.forEach(card2 => {
            if (card2.includes('nanManRuQin')) {
              nanManRuQinCard(now, card2, players)
              nm = true
            }
          })
          if (!nm && now) {
            if (players[0].blood > players[1].blood) {
              if (players[1].blood > 0) shaCard(now, players[1], card)
              else shaCard(now, players[0], card)
            } else {
              if (players[0].blood > 0) shaCard(now, players[0], card)
              else shaCard(now, players[1], card)
            }
          }
        }
        if (card.includes('shan') && second == 3) {
          now.card.forEach(card2 => {
            if (card2.includes('wanJianQiFa')) {
              wanJianQiFaCard(now, card2, players)
            }
          })
        }
      })
    }
    if (myTurn) {
      document.querySelector('#chuPai').style.display = 'block'
      document.querySelector('#chuPai').querySelector('span').textContent = second
    } else {
      now.playerDiv.querySelector('div:nth-of-type(3)').textContent = second
    }
    second--
    if (second <= 0) {
      if (now != null) {
        now.playerDiv.querySelector('div:nth-of-type(3)').innerHTML = ''
      }
      players.forEach(item => {
        if (item.playerDiv != null && item.playerDiv.id.includes(i % 4 + 1)) {
          dropCard(item)
        }
      })
      console.log('回合结束', players)
      i++
      second = 15
    }
    console.log(i)
  }, 1000)
  document.querySelector('#cardList').onclick = (e) => {
    if (myTurn) {
      players[0].card.forEach(card => {
        if (e.target.style.backgroundImage.includes(card)) {
          Man = []
          choiceCard(e.target, document.querySelector('#cardList').querySelectorAll('li'))
          if (myCards.length >= 1) myCards.shift()
          myCards.push(card)
        }
      })

    }
  }
  document.querySelector('#sit1').onclick = (e) => {
    if (myTurn) {
      LiHui.forEach(item => {
        if (e.target.style.backgroundImage.includes(item.name)) {
          players.forEach(item2 => {
            if (item2.wuJiang.includes(item.name)) {
              if (Man.length >= 1) Man.shift()
              Man.push(item2)
            }
          })

        }
      })
    }
  }
  document.querySelector('#sit2').onclick = (e) => {
    if (myTurn) {
      LiHui.forEach(item => {
        if (e.target.style.backgroundImage.includes(item.name)) {
          players.forEach(item2 => {
            if (item2.wuJiang.includes(item.name)) {
              if (Man.length >= 1) Man.shift()
              Man.push(item2)
            }
          })

        }
      })
    }
  }
  document.querySelector('#sit3').onclick = (e) => {
    if (myTurn) {
      LiHui.forEach(item => {
        if (e.target.style.backgroundImage.includes(item.name)) {
          players.forEach(item2 => {
            if (item2.wuJiang.includes(item.name)) {
              if (Man.length >= 1) Man.shift()
              Man.push(item2)
            }
          })

        }
      })
    }
  }
  document.querySelector('#sit4').onclick = (e) => {
    if (myTurn) {
      LiHui.forEach(item => {
        if (e.target.style.backgroundImage.includes(item.name)) {
          players.forEach(item2 => {
            if (item2.wuJiang.includes(item.name)) {
              if (Man.length >= 1) Man.shift()
              Man.push(item2)
            }
          })

        }
      })
    }
  }

  document.querySelector('#chuPai').onclick = (e) => {
    console.log(`**********myTurn:${myTurn}**********e.target:${e.target}**********`)
    if (myTurn && e.target.dataset.name == 'chuPaiBtn') {
      console.log(`**********myCards:${myCards}**********Man:${Man}**********`)
      if (myCards.length > 0) {
        let card = myCards.pop()
        if (card.includes('tao')) {
          taoCard(players[0], card)
        } else if (card.includes('nanManRuQin')) {
          nanManRuQinCard(players[0], card, players)
        } else if (card.includes('wanJianQiFa')) {
          wanJianQiFaCard(players[0], card, players)
        } else if (card.includes('wuZhongShengYou')) {
          drawCard(players[0], 2)
          delCard(players[0], card)
        } else if (card.includes('bingLiangCunDuan') || card.includes('leBuSiShu')) {
          if (Man.length > 0) {
            Man.pop().panDing.push(card)
            delCard(players[0], card)
          }
        } else if (card.includes('sha-') || card.includes('Sha-')) {
          console.log(`${player1.sha}`)
          shaCard(players[0], Man.pop(), card)
        } else if (card.includes('jiu')) {
          jiuCard(players[0], card)
        } else if (card.includes('guoHeChaiQiao')) {

        } else if (card.includes('jueDou')) {
          jueDouCard(players[0], Man.pop(), card)
        } else if (card.includes('wuGuFengDeng')) {
          wuGuFengDengCard(players[0], card, players)
        }
      }
      Man = []
    } else if (e.target.dataset.name == 'qiPaiBtn' && myTurn && qiPaiFlag) {
      Man = []
      myCards = []
      dropCard(players[0])
      second = 0
      qiPaiFlag = false
    }

  }
  // function throttle(fnc, wait) {
  //   let timer = null
  //   return function () {
  //     if (!timer) {
  //       timer = setTimeout(() => {
  //         fnc()
  //         timer = null
  //       }, wait)
  //     }
  //   }
  // }
}
