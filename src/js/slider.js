export function sliderOn() {
  let leftButton = document.querySelector(".slider__previous");
  let rightButton = document.querySelector(".slider__next");
  let num = document.getElementById("number");
  let sliderParent = document.querySelector(".slider__info");
  let sliderLeft = document.querySelector(".slider__left");
  let sliderMiddle = document.querySelector(".slider__middle");
  let sliderRight = document.querySelector(".slider__right");
  let sliderHide = document.querySelector(".slider__hide");

  leftButton.addEventListener("click", () => {
    let numMiddle = sliderMiddle.nextElementSibling.getAttribute("imageNum");
    sliderMiddle.classList.add("img" + numMiddle);

    let numLeft = sliderLeft.nextElementSibling.getAttribute("imageNum");
    sliderLeft.classList.add("img" + numLeft);

    let numRight = sliderRight.nextElementSibling.getAttribute("imageNum");
    sliderRight.classList.add("img" + numRight);

    let numHide = sliderParent.firstElementChild.getAttribute("imageNum");
    sliderHide.classList.add("img" + numHide);

    sliderMiddle.classList.remove("img" + sliderMiddle.getAttribute("imageNum"));
    sliderLeft.classList.remove("img" + sliderLeft.getAttribute("imageNum"));
    sliderRight.classList.remove("img" + sliderRight.getAttribute("imageNum"));
    sliderHide.classList.remove("img" + sliderHide.getAttribute("imageNum"));

    sliderMiddle.removeAttribute("imageNum");
    sliderMiddle.setAttribute("imageNum", numMiddle);

    sliderLeft.removeAttribute("imageNum");
    sliderLeft.setAttribute("imageNum", numLeft);

    sliderRight.removeAttribute("imageNum");
    sliderRight.setAttribute("imageNum", numRight);

    sliderHide.removeAttribute("imageNum");
    sliderHide.setAttribute("imageNum", numHide);

    if (num.innerHTML > 1) num.innerHTML = parseInt(num.innerHTML) - 1;
    else num.innerHTML = 4;
  });
  rightButton.addEventListener("click", () => {
    let numMiddle = sliderMiddle.previousElementSibling.getAttribute("imageNum");
    sliderMiddle.classList.add("img" + numMiddle);

    let numLeft = sliderParent.lastElementChild.getAttribute("imageNum");
    sliderLeft.classList.add("img" + numLeft);

    let numRight = sliderRight.previousElementSibling.getAttribute("imageNum");
    sliderRight.classList.add("img" + numRight);

    let numHide = sliderHide.previousElementSibling.getAttribute("imageNum");
    sliderHide.classList.add("img" + numHide);

    sliderMiddle.classList.remove("img" + sliderMiddle.getAttribute("imageNum"));
    sliderLeft.classList.remove("img" + sliderLeft.getAttribute("imageNum"));
    sliderRight.classList.remove("img" + sliderRight.getAttribute("imageNum"));
    sliderHide.classList.remove("img" + sliderHide.getAttribute("imageNum"));

    sliderMiddle.removeAttribute("imageNum");
    sliderMiddle.setAttribute("imageNum", numMiddle);

    sliderLeft.removeAttribute("imageNum");
    sliderLeft.setAttribute("imageNum", numLeft);

    sliderRight.removeAttribute("imageNum");
    sliderRight.setAttribute("imageNum", numRight);

    sliderHide.removeAttribute("imageNum");
    sliderHide.setAttribute("imageNum", numHide);

    if (num.innerHTML < 4) num.innerHTML = parseInt(num.innerHTML) + 1;
    else num.innerHTML = 1;
  });
}
