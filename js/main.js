$(".single-item").slick();

$(".center").slick({
  // centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  // arrows: false,
  Infinity: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

// // const nav = document.querySelector(".header__main-nav_link");

// // // const open = document.querySelectorAll(".nav-active");

// // const openActive = function () {
// //   nav.classList.add("nav-active");
// //   console.log("clicked");
// // };

// // document.addEventListener("click", openActive);

const btnNavEL = document.querySelector(".btn-mobile-nav");
const HeaderEL = document.querySelector(".header__main-nav");
const btnMenu = document.querySelector(".icon-mobile-nav-menu");
const btnX = document.querySelector(".icon-mobile-nav-x");

btnNavEL.addEventListener("click", function () {
  HeaderEL.classList.toggle("nav-open");
});

btnMenu.addEventListener("click", () => {
  console.log("clicked");
  btnMenu.style.display = "none";
  btnX.style.display = "block";
});

btnX.addEventListener("click", () => {
  btnX.style.display = "none";
  btnMenu.style.display = "block";
});
