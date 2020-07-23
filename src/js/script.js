
import logo from "../assets/tele2.png"
import mts from "../assets/MTS.png"
import megafon from "../assets/megafon.png"
import yota from "../assets/yota.png"
import bilane from "../assets/bilane.png"
import { sliderOn } from "./slider.js";

document.addEventListener("DOMContentLoaded", created)
window.addEventListener("resize", checkWidth)

function created() {
  createTable()
  checkWidth()
  sliderOn()
}

function checkWidth() {
  let list = document.querySelector(".header__right__list")
  let logo = document.querySelector(".header__menu")
  let menu = document.querySelector(".main__menu")
  let mainLeft = document.querySelector(".main__left")
  let mainRight = document.querySelector(".main__right")
  let oneMenu = document.querySelector(".main__menu__one")
  let twoMenu = document.querySelector(".main__menu__two")

  if (document.documentElement.clientWidth < 711) {
    list.classList.add("hide")
    logo.classList.remove("hide")
  } else {
    list.classList.remove("hide")
    logo.classList.add("hide")
  }

  if (document.documentElement.clientWidth < 833) {
    menu.classList.remove("hide")
    if (!twoMenu.classList.contains("isActive")) {
      mainRight.style.display = "none"
    } else mainLeft.style.display = "none"

    oneMenu.addEventListener("click", () => {
      oneMenu.classList.add("isActive")
      if (twoMenu.classList.contains("isActive")) twoMenu.classList.remove("isActive")
      mainRight.style.display = "none"
      mainLeft.style.display = "block"
    })
    twoMenu.addEventListener("click", () => {
      if (oneMenu.classList.contains("isActive")) oneMenu.classList.remove("isActive")
      twoMenu.classList.add("isActive")
      mainLeft.style.display = "none"
      mainRight.style.display = "block"
    })
  } else {
    menu.classList.add("hide")
    mainLeft.style.display = "block"
    mainRight.style.display = "block"
  }
}

let phones = [
  { phone: "+7 (999) 700 58-76", operater: logo},
  { phone: "+7 (999) 720 58-00", operater: bilane},
  { phone: "+7 (999) 720 52-00", operater: yota},
  { phone: "+7 (929) 722 22-00", operater: megafon},
  { phone: "+7 (999) 720 08-00", operater: bilane},
  { phone: "+7 (920) 920 58-00", operater: logo},
  { phone: "+7 (999) 000 58-00", operater: mts},
  { phone: "+7 (999) 800 58-00", operater: logo},
  { phone: "+7 (999) 720 30-00", operater: mts},
  { phone: "+7 (999) 720 22-22", operater: megafon},
  { phone: "+7 (999) 920 53-33", operater: bilane},
  { phone: "+7 (999) 999 99-00", operater: logo},
  { phone: "+7 (999) 999 88-88", operater: megafon}
]

let phoneButtons = []

class PhoneInfo {
  constructor(info) {
    this.phone = info.phone
    this.operater = info.operater
  }
  create(index) {
    let wrapper = document.querySelector(".phone__list__info")
    let parentEl = document.createElement("div")
    parentEl.className = "phone__list__info__row"

    let phone = document.createElement("h3")
    phone.innerHTML = this.phone
    phone.className = "phone__list__info__number"
    
    let img = document.createElement("img")
    img.src = this.operater
    img.className = "phone__list__info__image"

    let tariffe = document.createElement("div")
    tariffe.className = "phone__list__info__tariffe"

    let spanTariffe1 = document.createElement("span")
    spanTariffe1.innerHTML = 'Домашний'

    let spanTariffe2 = document.createElement("span")
    spanTariffe2.innerHTML = '50 гб'
    spanTariffe2.className = "phone__list__info__tariffe-one"

    let spanTariffe3 = document.createElement("span")
    spanTariffe3.innerHTML = '500 минут'
    spanTariffe3.className = "phone__list__info__tariffe-two"

    let spanTariffe4 = document.createElement("span")
    spanTariffe4.innerHTML = '20 SMS'
    spanTariffe4.className = "phone__list__info__tariffe-three"

    let btn = document.createElement("button")
    btn.innerHTML = "Заказать"
    btn.className = "phone__list__info__btn"
    btn.id = "button " + index
    btn.setAttribute("phone", this.phone)
    phoneButtons.push(btn)

    wrapper.appendChild(parentEl)

    parentEl.appendChild(phone)
    parentEl.appendChild(img)

    parentEl.appendChild(tariffe)

    tariffe.appendChild(spanTariffe1)
    tariffe.appendChild(spanTariffe2)
    tariffe.appendChild(spanTariffe3)
    tariffe.appendChild(spanTariffe4)

    parentEl.appendChild(btn)
  }
}

function createTable() {
  for (let i = 0; i < phones.length; i++) {
    let phoneInfo = new PhoneInfo(phones[i])
    phoneInfo.create(i)
  }
  phoneButtons.forEach(item => {
    item.addEventListener("click", event => {
      let btn = event.target
      let phone = btn.getAttribute("phone")
      // остальная логика...
    })
  })
}
