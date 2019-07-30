var slides = document.querySelectorAll('.description-slider__slider-item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);
var playing = true;
var nextButton = document.querySelector('.description-slider__next-slide');
var previousButton = document.querySelector('.description-slider__previous-slide');

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
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
  slides[currentSlide].className = 'description-slider__slider-item';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'description-slider__slider-item description-slider__slider-item--showing';
}

nextButton.onclick = function() {
  pauseSlideShow();
  nextSlide();
}

previousButton.onclick = function() {
  pauseSlideShow();
  previousSlide();
}

