var slides = document.querySelectorAll('.main-slider__slider-item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);
var playing = true;
var nextButton = document.querySelector('.main-slider__next-slide');
var previousButton = document.querySelector('.main-slider__previous-slide');
var dots = document.querySelectorAll('.main-slider__slider-dot');

function nextSlide() {
  goToSlide(currentSlide + 1);
  activateDot();
}

function previousSlide() {
  goToSlide(currentSlide - 1);
  activateDot();
}

function pauseSlideShow() {
  playing = false;
  clearInterval(slideInterval);
}

function playSlideShow() {
  playing = true;
  slideInterval = setInterval(nextSlide,5000);
}

function goToSlide(n) {
  slides[currentSlide].className = 'main-slider__slider-item';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'main-slider__slider-item main-slider__slider-item--showing';
}

nextButton.onclick = function() {
  pauseSlideShow();
  nextSlide();
}

previousButton.onclick = function() {
  pauseSlideShow();
  previousSlide();
}

function activateDot() {
  for(var i = 0; i < slides.length; i++) {
    if(slides[i].className == 'main-slider__slider-item') {
      dots[i].className = 'main-slider__slider-dot';
    }
    else if(slides[i].className == 'main-slider__slider-item main-slider__slider-item--showing') {
      dots[i].className = 'main-slider__slider-dot main-slider__slider-dot--active';
    }
  }
}

