import { centerUl } from './mainGame.mjs'
import { wuJiangUrl, cards } from './data.mjs'
//计时器函数
export function countDown(num, item, father, father_Father) {
  if (typeof num === 'number' && num > 0 && typeof item === 'object') {
    item.textContent = num
    let timer = setInterval(() => {
      num--
      item.textContent = num
      console.log(num)
      console.log(item)
      if (num <= 0) {
        clearInterval(timer)
        if (typeof father === 'object') {
          father.style.display = 'none'
        }
        if (typeof father_Father === 'object') {
          father_Father.style.display = 'block'
        }
      }
    }, 1000)
    return timer
  }
}
//出牌动态效果函数
export function choiceCard(cardLi = null, cardLis = []) {
  if (cardLis.length > 0) {
    cardLis.forEach(item => {
      if (item == cardLi) {
        item.style.transform = 'translateY(-20px)'
        console.log("选中了")
      } else {
        item.style.transform = 'translateY(0px)'
        console.log("未选中")
      }
    })
  } else {
    console.log("出牌动态效果函数调用错误")
  }

}
//更新牌堆函数
export function updateCard(man) {
  console.log(man, "更新牌堆")
  if (man.cardUl == null) return
  man.cardUl.innerHTML = '' //清空牌堆
  man.card.forEach(item => {
    const li = document.createElement('li')
    li.style.backgroundImage = `url(${item})`
    man.cardUl.appendChild(li)
  })
}
//抽牌函数
function suiJiCards(cards) {
  let currentIndex = cards.length
  let randomIndex
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    let temp = cards[currentIndex]
    cards[currentIndex] = cards[randomIndex]
    cards[randomIndex] = temp
  }
  return cards
}
let myCards = [...cards] //复制一份cards数组
myCards = suiJiCards(myCards) //洗牌
export function drawCard(man, n = 2) {
  for (let i = 0; i < n; i++) {
    if (myCards.length <= 0) {
      myCards = [...cards] //复制一份cards数组
      myCards = suiJiCards(myCards) //洗牌
    }
    const card = myCards.pop()
    man.card.push(card)
  }
  updateCard(man)
}
//随机弃牌函数
export function dropCard(man) {
  while (man.card.length > man.blood) {
    const index = Math.floor(Math.random() * man.card.length)
    man.card.splice(index, 1)
  }
  updateCard(man)
}
//更新角色血量
export function updateBlood(man) {
  if (man.blood >= 0) {
    if (man.blood > 0) {
      man.playerDiv.style.backgroundImage = `url(${man.wuJiang.replace(/\d/, man.blood)})`
      return
    }
    if (man.blood == 0) {
      man.card.forEach(item => {
        if (item.includes('tao') || item.includes('jiu')) {
          man.card.splice(man.card.indexOf(item), 1)
          delCard(man, item)
          man.blood += 1
          updateBlood(man)
          return
        }
      })
      wuJiangUrl.forEach(item => {
        if (item.includes(man.wuJiang)) {
          const bg = item.replace(/\d/, man.blood)
          man.playerDiv.style.backgroundImage = `url(${bg})`
          console.log(bg)
        }
      })
      dropCard(man)
    }
  } else man.blood = 0
}
//删除牌函数
export function delCard(man = null, card = null) {
  if (man != null && card != null) {
    if (centerUl.children.length >= 4) {
      centerUl.removeChild(centerUl.children[0])
    }
    if (man.card.includes(card)) {
      man.card.splice(man.card.indexOf(card), 1)
      updateCard(man)
      const li = document.createElement('li')
      li.style.backgroundImage = `url(${card})`
      centerUl.appendChild(li)
    } else if (man.panDing.includes(card)) {
      man.panDing.splice(man.panDing.indexOf(card), 1)
      updateCard(man)
      const li = document.createElement('li')
      li.style.backgroundImage = `url(${card})`
      centerUl.appendChild(li)
    }
  } else {
    console.log("删除牌函数调用错误")
  }
}
//杀函数
export function shaCard(man1 = null, man2 = null, card = null) {
  if (man1 == null || man2 == null || card == null) {
    console.log("杀函数调用错误")
    return
  }
  if (man1.sha) {
    delCard(man1, card)
    console.log("出杀了")
    man1.sha = false
    if (!shanCard(man2)) {
      console.log('没闪成功')
      man2.blood -= man1.shaCount
      if (man2.blood <= 0) man2.blood = 0
      updateBlood(man2)
    }
  }
}
//闪函数
export function shanCard(man = null) {
  if (man != null) {
    for (let i = 0; i < man.card.length; i++) {
      if (man.card[i].includes('shan')) {
        delCard(man, man.card[i])
        console.log("闪了")
        return true
      }
    }
    return false
  } else {
    console.log("闪函数调用错误")
    return false
  }
}
//桃函数
export function taoCard(man = null, card = null) {
  if (man != null && card != null) {
    if (man.blood < man.maxBlood) {
      man.blood++
      updateBlood(man)
      delCard(man, card)
      console.log("桃了")
    }
  } else {
    console.log("桃函数调用错误")
    return
  }
}
//酒函数
export function jiuCard(man = null, card = null) {
  if (man != null && card != null) {
    if (man.blood > 0 && man.shaCount == 1) {
      man.shaCount++
    } else if (man.blood == 0) {
      man.blood = 1
      updateBlood(man)
    }
    delCard(man, card)
    console.log("酒了")
  }
}
//判定函数
export function panDingCard(man = null, card = null) {
  if (card != null) {
    if (myCards.length <= 0) {
      myCards = [...cards] //复制一份cards数组
      myCards = suiJiCards(myCards) //洗牌
    }
    let pdCard = myCards.pop()
    if (card.includes('bingLiangCunDuan')) {
      delCard(man, card)
      console.log("兵粮寸断了")
      if (pdCard.includes('MH')) {

        return false
      } else {
        console.log("兵粮寸断判定成功")
        return true
      }
    } else if (card.includes('leBuSiShu')) {
      delCard(man, card)
      console.log("乐不思蜀了")
      if (myCards.pop().includes('RedT')) {
        return false
      } else {
        console.log("乐不思蜀判定成功")
        return true
      }
    }
  } else {
    console.log("判定函数调用错误")
    return
  }

}
//过河拆桥函数
export function guoHeChaiQiaoCard(man = null, card = null) {
  if (man != null && card != null) {
    if (man.card.includes(card)) {
      delCard(man, card)
    } else if (man.panDing.includes(card)) {
      delCard(man, card)
    } else if (man.dao == card) {
      man.dao = null
    } else if (man.jia == card) {
      man.jia = null
    } else if (man.addHorse == card) {
      man.addHorse = null
    } else if (man.delHorse == card) {
      man.delHorse = null
    }
    console.log("过河拆桥了")
  } else {
    console.log("过河拆桥函数调用错误")
    return
  }
}
//决斗函数
export function jueDouCard(man1 = null, man2 = null, card = null) {
  if (man1 != null && man2 != null && card != null) {
    delCard(man1, card)
    let flag = true
    while (flag) {
      for (let i = 0; i < man2.card.length; i++) {
        if (man2.card[i].includes('sha-') || man2.card[i].includes('Sha-')) {
          delCard(man2, card[i])
        } else {
          man2.blood--
          updateBlood(man2)
          flag = false
          return
        }
      }
      if (!flag) return
      for (let i = 0; i < man1.card.length; i++) {
        if (man1.card[i].includes('sha-') || man1.card[i].includes('Sha-')) {
          delCard(man1, card[i])
          console.log("决斗了")
        } else {
          man1.blood--
          updateBlood(man1)
          flag = false
          return
        }
      }
    }
  } else {
    console.log("决斗函数调用错误")
  }
}
//南蛮入侵函数
export function nanManRuQinCard(man = null, card = null, mans = []) {
  if (man != null && card != null && mans.length > 0) {
    delCard(man, card)
    console.log("南蛮入侵了")
    for (let i = 0; i < mans.length; i++) {
      const len = mans[i].card.length
      if (mans[i].blood <= 0) continue
      let j
      for (j = 0; j < mans[i].card.length; j++) {
        if (mans[i].card[j].includes('sha-') || mans[i].card[j].includes('wuXieKeJi') || mans[i].card[j].includes('Sha-')) {
          delCard(mans[i], mans[i].card[j])
          break
        }
      }
      if (len == mans[i].card.length) {
        mans[i].blood--
        updateBlood(mans[i])
      }

    }
  } else {
    console.log("南蛮入侵函数调用错误")
  }
}
//万箭齐发函数
export function wanJianQiFaCard(man = null, card = null, mans = []) {
  if (man != null && card != null && mans.length > 0) {
    delCard(man, card)
    console.log("万箭齐发了")
    for (let i = 0; i < mans.length; i++) {
      const len = mans[i].card.length
      if (mans[i].blood <= 0) continue
      let j
      for (j = 0; j < mans[i].card.length; j++) {
        if (mans[i].card[j].includes('shan') || mans[i].card[j].includes('wuXieKeJi')) {
          delCard(mans[i], mans[i].card[j])
          break
        }
      }
      if (mans[i].card.length === len) {
        mans[i].blood--
        updateBlood(mans[i])
      }
    }
  } else {
    console.log("万箭齐发函数调用错误")
  }
}
//五谷丰登函数
export function wuGuFengDengCard(man = null, card = null, mans = []) {
  if (man != null && card != null && mans.length > 0) {
    delCard(man, card)
    console.log("五谷丰登了")
    mans.forEach(item => {
      if (item.blood > 0) drawCard(item, 1)
    })
  } else {
    console.log("五谷丰登函数调用错误")
  }
}
//无中生有函数
export function wuZhongShengYouCard(man = null, card = null) {
  if (man != null && card != null) {
    delCard(man, card)
    console.log("无中生有了")
    drawCard(man, 2)
  } else {
    console.log("无中生有函数调用错误")
  }
}