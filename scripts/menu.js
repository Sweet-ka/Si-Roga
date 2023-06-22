const menuBurger = document.querySelector('.burger');
const overlay_navigation = document.querySelector('.overlay-navigation');
const nav_item_1 = document.querySelector('nav li:nth-of-type(1)');
const nav_item_2 = document.querySelector('nav li:nth-of-type(2)');
const nav_item_3 = document.querySelector('nav li:nth-of-type(3)');
const nav_item_4 = document.querySelector('nav li:nth-of-type(4)');
const nav_item_5 = document.querySelector('nav li:nth-of-type(5)');

menuBurger.addEventListener('click', () => {
    overlay_navigation.classList.toggle('overlay-active');

    if (overlay_navigation.classList.contains('overlay-active')) {
      overlay_navigation.classList.remove('overlay-slide-up');
      nav_item_1.classList.remove('slide-in-nav-item-reverse');
      nav_item_2.classList.remove('slide-in-nav-item-delay-1-reverse');
      nav_item_3.classList.remove('slide-in-nav-item-delay-2-reverse');
      nav_item_4.classList.remove('slide-in-nav-item-delay-3-reverse');
      nav_item_5.classList.remove('slide-in-nav-item-delay-4-reverse');

      overlay_navigation.classList.add('overlay-slide-down')
      nav_item_1.classList.add('slide-in-nav-item');
      nav_item_2.classList.add('slide-in-nav-item-delay-1');
      nav_item_3.classList.add('slide-in-nav-item-delay-2');
      nav_item_4.classList.add('slide-in-nav-item-delay-3');
      nav_item_5.classList.add('slide-in-nav-item-delay-4');
    } else {
      overlay_navigation.classList.remove('overlay-slide-down');
      nav_item_1.classList.remove('slide-in-nav-item');
      nav_item_2.classList.remove('slide-in-nav-item-delay-1');
      nav_item_3.classList.remove('slide-in-nav-item-delay-2');
      nav_item_4.classList.remove('slide-in-nav-item-delay-3');
      nav_item_5.classList.remove('slide-in-nav-item-delay-4');
      
      overlay_navigation.classList.add('overlay-slide-up');
      nav_item_1.classList.add('slide-in-nav-item-reverse');
      nav_item_2.classList.add('slide-in-nav-item-delay-1-reverse');
      nav_item_3.classList.add('slide-in-nav-item-delay-2-reverse');
      nav_item_4.classList.add('slide-in-nav-item-delay-3-reverse');
      nav_item_5.classList.add('slide-in-nav-item-delay-4-reverse');
    }
  })