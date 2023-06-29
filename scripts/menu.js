const menuBurger = document.querySelector("#burger");
const menuBurgerMobile = document.querySelector("#burger-mobile");
const overlay_navigation = document.querySelector(".overlay-navigation");

const navli = document.querySelectorAll("nav li");

menuBurger.addEventListener("click", nav);
menuBurgerMobile.addEventListener("click", nav);

function nav() {
  overlay_navigation.classList.toggle("overlay-active");

  if (overlay_navigation.classList.contains("overlay-active")) {
    overlay_navigation.classList.remove("overlay-slide-up");
    navli.forEach((li, i) => {
      li.classList.remove(`slide-in-nav-item-delay-${i}-reverse`);
      li.classList.add(`slide-in-nav-item-delay-${i}`);
    });
    overlay_navigation.classList.add("overlay-slide-down");
  } else {
    navli.forEach((li, i) => {
      li.classList.remove(`slide-in-nav-item-delay-${i}`);
      li.classList.add(`slide-in-nav-item-delay-${i}-reverse`);
    });

    overlay_navigation.classList.remove("overlay-slide-down");
    overlay_navigation.classList.add("overlay-slide-up");
  }
}
