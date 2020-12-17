//////form

const form = document.querySelector(".form");

const validate = (fields) => {
  let valid = true
  fields.forEach((f) => {
    f.classList.remove("field_error");
    if (f.value.trim() == "") {
      f.classList.add("field_error");
      valid = false
    }
 });

 return valid
};

form.addEventListener("submit", function (e) {
  e.preventDefault ();
  const name = form.elements.name;
  const phone = form.elements.phone;
  const house = form.elements.house;

  const fields = [name, phone, house];

  const isValid = validate(fields);

  if (isValid) {
    console.log("валидация пройдена")
  } else {
    console.log("валидация не пройдена");
  }
});


////////slider


const buttons = document.querySelectorAll(".arrow");
const slider = document.querySelector(".slider__list");
const sliderItems = document.querySelectorAll(".slider__item");


buttons.forEach((button) => {
  button.addEventListener("click", e => {
    e.preventDefault();
    const itemWidth = sliderItems[0].offsetWidth;
    const itemSWidth = sliderItems.length * itemWidth;
    const currentLeft = window.getComputedStyle(slider).left.split("px") [0] * 1 || 0;
    const lengthEnd = itemSWidth + window.getComputedStyle(slider).left.split("px") [0] * 1 || 0;

  let left = 0;

    if(e.currentTarget.classList.contains("arrow_left")) {
      if(lengthEnd > itemWidth) {
        Left = currentLeft - itemWidth;
      } else {
        Left = 0;
      }
      slider.style.left = Left + "px";
    } else {
      if (lengthEnd == itemSWidth) {
        Left = itemWidth - itemSWidth;
        slider.style.left = Left + "px";
      } else {
        Left = currentLeft + itemWidth;
      }
      slider.style.left = Left + "px";
    }
  });
});


////////hamburger-menu



let button = document.querySelector("#toggle");
let menu = document.querySelector("#overlay");
let body = document.querySelector('body');

let toggleMenu = function () {
  button.classList.toggle('hamburger--active');
  menu.classList.toggle('overlay--open');
  body.classList.toggle('body-active-menu');
}

button.addEventListener('click', toggleMenu);

