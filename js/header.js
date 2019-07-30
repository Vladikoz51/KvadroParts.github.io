var buttonScheme = document.querySelector('.header__menu-subitem--scheme');
var buttonProducer = document.querySelector('.header__menu-subitem--producer');
var subItemsScheme = document.querySelectorAll('.header__menu-subitem--scheme:not(:first-of-type)');
var subItemsProducer = document.querySelectorAll('.header__menu-subitem--producer:not(:first-of-type)');
var dropMenu = document.querySelector('.header__drop-down-menu');
var menuButton = document.querySelector('.header__menu-icon-container');
var mobileHead = document.querySelector('.header__logo-and-menu-icons');

function itemsHideShow(nameClass,elements) {
  for (var i = 0; i < elements.length; i++) {
  elements[i].classList.toggle(nameClass);
  }
}

itemsHideShow('header__menu-subitem--hidden',subItemsProducer);
itemsHideShow('header__menu-subitem--hidden',subItemsScheme);

buttonScheme.onclick = function() {
  itemsHideShow('header__menu-subitem--hidden',subItemsScheme);
}

buttonProducer.onclick = function() {
  itemsHideShow('header__menu-subitem--hidden',subItemsProducer);
}

menuButton.onclick = function() {
  dropMenu.classList.toggle('header__drop-down-menu--hidden');
}

dropMenu.classList.toggle('header__drop-down-menu--hidden');

var line1 = document.querySelector('.menu-icon__line:nth-of-type(1)');
var line2 = document.querySelector('.menu-icon__line:nth-of-type(2)');
var line3 = document.querySelector('.menu-icon__line:nth-of-type(3)');
var line4 = document.querySelector('.menu-icon__line:nth-of-type(4)');
var line5 = document.querySelector('.menu-icon__line:nth-of-type(5)');
var icon = document.querySelector('.header__menu-icon');
icon.onclick = function () {
  line1.classList.toggle('menu-icon__line-1--click');
  line2.classList.toggle('menu-icon__line-2--click');
  line3.classList.toggle('menu-icon__line-3--click');
  line4.classList.toggle('menu-icon__line-4--click');
  line5.classList.toggle('menu-icon__line-5--click'); 
}












