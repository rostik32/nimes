let sliderBigLine = document.querySelector(".slider-big-line");
let slideBig = document.querySelector(".slide-big");
let widthSlideBig = slideBig.offsetWidth;
let bigSlides = document.querySelectorAll(".slide-big");
let btnNext = document.querySelector(".btn-next");
let btnPrev = document.querySelector(".btn-prev");
let slideSmall = document.querySelectorAll(".slide-small");
let widthSlideSmall = slideSmall[0].offsetWidth;
let marginRightSlideSmall = parseInt(
  window.getComputedStyle(slideSmall[0], null).getPropertyValue("margin-right")
);
let fullWidthSmallSlider = widthSlideSmall + marginRightSlideSmall;
let sliderSmallLine = document.querySelector(".slider-small-line");
let currentImg = 0;
let position = 0;

let checkBtn = function () {
  if (position === 0) {
    btnPrev.disabled = true;
  } else {
    btnPrev.disabled = false;
  }
  if (position >= widthSlideBig * 5) {
    btnNext.disabled = true;
  } else {
    btnNext.disabled = false;
  }
};

let addClass = function () {
  sliderBigLine.style.transform = `translateX(-${position}px)`;
  slideSmall[currentImg].classList.add("active");
};

for (let i = 0; i < slideSmall.length; i++) {
  slideSmall[i].addEventListener("click", function () {
    slideSmall[currentImg].classList.remove("active");
    currentImg = i;
    position = currentImg * widthSlideBig;
    addClass();
    if (currentImg === 3) {
      sliderSmallLine.style.transform = `translateX(-${fullWidthSmallSlider}px)`;
    }
    if (currentImg === 4) {
      sliderSmallLine.style.transform = `translateX(-${
        fullWidthSmallSlider * 2
      }px)`;
    }
    if (currentImg === 1) {
      sliderSmallLine.style.transform = `translateX(0px)`;
    }
    if (currentImg === 2) {
      sliderSmallLine.style.transform = `translateX(-${fullWidthSmallSlider}px)`;
    }
    checkBtn();
  });
}

btnNext.addEventListener("click", function () {
  slideSmall[currentImg].classList.remove("active");
  currentImg++;
  position += widthSlideBig;
  addClass();
  if (currentImg === 4) {
    sliderSmallLine.style.transform = `translateX(-${fullWidthSmallSlider}px)`;
  }
  if (currentImg === 5) {
    sliderSmallLine.style.transform = `translateX(-${
      fullWidthSmallSlider * 2
    }px)`;
  }
  checkBtn();
});

btnPrev.addEventListener("click", function () {
  slideSmall[currentImg].classList.remove("active");
  currentImg--;
  position -= widthSlideBig;
  addClass();
  if (currentImg === 1) {
    sliderSmallLine.style.transform = `translateX(0px)`;
  }
  checkBtn();
});
if (currentImg === 3) {
  sliderSmallLine.style.transform = `translateX(-${fullWidthSmallSlider}px)`;
}
if (currentImg === 5) {
  sliderSmallLine.style.transform = `translateX(-${
    fullWidthSmallSlider * 2
  }px)`;
}
checkBtn();
