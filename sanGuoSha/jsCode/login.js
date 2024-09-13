
// 初始化变量
const phoneTest = /^1[3-9]\d{9}$/;//判断手机号正则表达式
const loginError = document.querySelector('#loginError')
const loginForm = document.querySelector('#loginForm')
const registerForm = document.querySelector('#registerForm')
const phoneError = document.querySelector('#phoneError')
const passWordError = document.querySelector('#passWordError')
const yanZhengMaError = document.querySelector('#yanZhengMaError')
const yanZhengMaDiv = document.querySelector('#yanZhengMaDiv')
const loginUserName = []
const loginPassWord = []
let loginUsers = []
for (let i = 0; i < localStorage.length; i++) {
  if (localStorage.key(i) === 'loginUsers') {
    loginUsers = JSON.parse(localStorage.getItem(localStorage.key(i)))
  }
}
for (let i = 0; i < loginUsers.length; i++) {
  loginUserName.push(loginUsers[i].userName)
  loginPassWord.push(loginUsers[i].passWord)
}
class Users {
  constructor(userName, passWord, userData = null) {
    this._PWstate = false
    this._UNstate = false
    this.passWord = passWord
    this.userName = userName
    this.userData = userData

  }
  set passWord(passWord) {
    if (passWord === '') {
      loginError.textContent = '☣️密码不能为空'
    } else {
      this._PWstate = true
      this._passWord = passWord

    }
  }
  set userName(userName) {
    if (userName === '') {
      loginError.textContent = '☣️账号不能为空'
    } else {
      if (phoneTest.test(userName)) {
        console.log('账号格式正确')
        this._UNstate = true
        this._userName = userName

      } else {
        loginError.textContent = '☣️账号格式不正确'
      }
    }
  }

}
let users
//登录验证函数
if (loginForm !== null) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const userName = loginForm.elements['userName'].value
    const passWord = loginForm.elements['loginPassWord'].value
    users = new Users(userName, passWord)
    if (users._UNstate && users._PWstate) {
      console.log('登录成功')
      if (loginUserName.includes(users.userName) && loginPassWord[loginUserName.indexOf(users.userName)] === users.passWord) {
        console.log('登录成功')
        loginError.textContent = ''
        localStorage.setItem('currentUser', JSON.stringify(users))
        location.href = './mainGame.html'
      } else loginError.textContent = '☣️账号或密码错误'
    }
  })
}

//注册验证码函数
let getYanZhengMa = () => {
  let yanZhengMaAllChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let yanZhengMa = ''
  for (let i = 0; i < 6; i++) {
    yanZhengMa += yanZhengMaAllChar.charAt(Math.floor(Math.random() * yanZhengMaAllChar.length))
  }
  yanZhengMaDiv.textContent = yanZhengMa
}
if (document.querySelector('#yanZhengMaBtn') !== null) {
  document.querySelector('#yanZhengMaBtn').addEventListener('click', getYanZhengMa)
}

//注册函数
if (registerForm !== null) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const phone = registerForm.elements['phone'].value
    const passWord = registerForm.elements['registerPassWord'].value
    const yanZhengMa = registerForm.elements['yanZhengMa'].value
    if (phoneTest.test(phone)) {
      console.log('手机号格式正确')
      phoneError.textContent = ''
    } else {
      phoneError.textContent = '☣️手机号格式不正确'
      return
    }
    if (passWord.length < 8 || passWord.length > 30) {
      passWordError.textContent = '☣️密码长度必须在8-30位之间'
      return
    }
    if (yanZhengMa.length !== 6) {
      yanZhengMaError.textContent = '☣️验证码长度必须为6位'
      return
    } else yanZhengMaError.textContent = ''
    users = new Users(phone, passWord)
    if (users._UNstate && users._PWstate && yanZhengMa.toUpperCase() === yanZhengMaDiv.textContent.toUpperCase()) {
      console.log('注册成功')
      phoneError.textContent = ''
      passWordError.textContent = ''
      yanZhengMaError.textContent = ''
      loginUserName.push(users.userName)
      loginPassWord.push(users.passWord)
      loginUsers.push(users)
      localStorage.setItem('loginUsers', JSON.stringify(loginUsers))
      localStorage.setItem('currentUser', JSON.stringify(users))
      location.href = './mainGame.html'
    } else yanZhengMaError.textContent = '☣️验证码错误'

  })
}
//切换密码铭文显示函数
function yanJing() {
  if (loginForm.elements['loginPassWord'].type === 'text') {
    loginForm.elements['loginPassWord'].type = 'password'

  } else loginForm.elements['loginPassWord'].type = 'text'
}
if (document.querySelector('#yanJing') !== null) {
  document.querySelector('#yanJing').addEventListener('click', yanJing)
}
