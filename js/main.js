// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
const basket = document.querySelector(".basket");
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
  if (event.target == basket) {
    basket.classList.remove("active");
    body.classList.remove("active");
  }
};
// menu end

// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.pageYOffset >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// faq start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      console.log("now active");
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end
// sliders
$(function () {
  $(".news__inner-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    speed: 600,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(function () {
  $(".credit__inner-slider").slick({
    dots: true,
    infinite: true,
    centerMode: false,
    arrows: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

$(function () {
  $(".today__inner-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          dots: true,

          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(function () {
  $(".join__inner-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          dots: true,

          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});


// custom arrows
var $status = $(".pagingInfo");
$(".infoClubs__slider").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: $slickElement.next().find(".prev"),
    nextArrow: $slickElement.next().find(".next"),
    dots: false,
    fade: false,
  });
});

const donateBtn = document.getElementById("donateBtn");
if (donateBtn) {
  const donateContent = document.getElementById("donateContent");
  donateBtn.onclick = () => {
    donateBtn.classList.toggle("active");
    donateContent.classList.toggle("active");
  };
}

const drops = document.querySelectorAll(".drop");
drops.forEach((drop) => {
  const dropBtn = drop.querySelector(".nav__inner-link");
  const dropMenu = drop.querySelector(".dropMenu");
  const dropBack = drop.querySelector(".dropMenu__back");
  if (dropBtn) {
    dropBtn.onclick = () => {
      console.log("asd");
      dropMenu.classList.add("active");
    };
  }
  if (dropBack) {
    dropBack.onclick = () => {
      dropMenu.classList.remove("active");
    };
  }
});

const lang = document.querySelector(".lang");
const langBtn = lang.querySelector(".lang__inner");
const langMenu = lang.querySelector(".dropMenu");
const langBack = lang.querySelector(".dropMenu__back");
if (langBtn) {
  langBtn.onclick = () => {
    langMenu.classList.add("active");
  };
}
if (langBack) {
  langBack.onclick = () => {
    langMenu.classList.remove("active");
  };
}

const basketBtn = document.querySelector(".basketBtn");
const basketBtnClose = document.querySelector(".basket__inner-close");
const basketLinks = document.querySelectorAll(".basketLink");
basketLinks.forEach((basketLink) => {
  if (basketLink) {
    basketLink.onclick = () => {
      basket.classList.add("active");
      document.body.classList.add("active");
    };
  }
});
if (basketBtn) {
  basketBtn.onclick = () => {
    basket.classList.add("active");
    document.body.classList.add("active");
  };
}
if (basketBtnClose) {
  basketBtnClose.onclick = () => {
    basket.classList.remove("active");
    document.body.classList.remove("active");
  };
}
