'use strict';

const slidContainer = document.querySelector('.slider-container');
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');

const downBtn = document.querySelector('.down-btn');
const upBtn = document.querySelector('.up-btn');

const slidesLenght = leftSlide.querySelectorAll('div').length;
const imgs = rightSlide.querySelectorAll('div');

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLenght - 1) * 100}vh`;
const sliderHeight = slidContainer.clientHeight;
console.log(sliderHeight);
function change(position) {
  const sliderHeight = slidContainer.clientHeight;
  if (position === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLenght - 1) {
      activeSlideIndex = 0;
    }
  } else {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLenght - 1;
    }
  }
  rightSlide.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  leftSlide.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
  // leftSlide.style.top = `-${activeSlideIndex * 100}vh`;
}

upBtn.addEventListener('click', () => change('up'));
downBtn.addEventListener('click', () => change('down'));
