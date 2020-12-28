//////form




////////slider

;(function() {
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
})()



////////hamburger-menu


;(function() {
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
})()



///////reviews

;(function() {
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
})()


//////team

;(function() {
  const openItem = item => {
    const container = item.closest(".team__item");
    container.addClass("team__item--active");
  
  }
  
  const closeEveryItem = container => {
    const itemContainer = container.find(".team__item");
    const closeTriangle = container.find(".triangle");
  
    itemContainer.removeClass("team__item--active");
    closeTriangle.removeClass("triangle--active");
  }
  
  $('.team__title').click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest(".team");
    const elemContainer = $this.closest(".team__item");
    const triangle = $this.children(".triangle");
  
   
    if (elemContainer.hasClass("team__item--active")) {
      closeEveryItem(container);
      triangle.removeClass("triangle--active");
  
    } else {
      closeEveryItem(container);
      openItem($this);
      triangle.addClass("triangle--active");
    }
  })
})()





