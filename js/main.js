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

let toggleMenu = function (e) {
  e.preventDefault ();
  button.classList.toggle('hamburger--active');
  menu.classList.toggle('overlay--open');
  body.classList.toggle('body-active-menu');
};

button.addEventListener('click', toggleMenu);


let closeMenu = document.querySelector(".hamburger--active");


closeMenu.addEventListener('click', (e) => {
   e.preventDefault ();
   button.classList.remove ('hamburger--active');
   menu.classList.remove ('overlay--open');
   body.classList.remove ('body-active-menu');
});


///////reviews

const findBlockByAlias = (alias) => {
  return $(".reviews__item").filter((ndx, item) => {
    return $(item).attr("data-linked-with") === alias;
  });
};

const findContentByAlias = (alias) => {
  return $(".reviews__content-item").filter((ndx, item) => {
    return $(item).attr("data-content") === alias;
  });
};


$(".interactive-avatar__link").click((e) => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-open");
  const itemToShow = findBlockByAlias(target);
  const contentToShow = findContentByAlias(target);
  const curItem = $this.closest(".reviews__switcher-item");


  itemToShow.addClass("reviews__item--active").siblings().removeClass("reviews__item--active");
  curItem.addClass("interactive-avatar--active").siblings().removeClass("interactive-avatar--active");
  contentToShow.addClass("reviews__content-item--active").siblings().removeClass("reviews__content-item--active");

});

//////team

const openItem = item => {
  const container = item.closest(".team__item");
  const contentBlock = container.find(".team__content");
  const textBlock = contentBlock.find(".team__content-block");
  const reqHeight = textBlock.height();

  container.addClass("active");
  contentBlock.height(reqHeight);
}

const closeEveryItem = container => {
  const items = container.find(".team__content");
  const itemContainer = container.find(".team__item");

  itemContainer.removeClass("active");
  items.height(0);
}

$('.team__title').click(e => {
  const $this = $(e.currentTarget);
  const container = $this.closest(".team");
  const elemContainer = $this.closest(".team__item");

  if (elemContainer.hasClass("active")) {
    closeEveryItem(container);
  } else {
    closeEveryItem(container);
    openItem($this);
  }




  


})




