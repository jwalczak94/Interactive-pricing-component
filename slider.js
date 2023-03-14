"use strict";

const priceValue = document.getElementById("priceValue");
const viewsValue = document.getElementById("views");
const sliderBar = document.querySelector(".slider");
const discountCheckbox = document.getElementById("discount");
const discountSpan = document.querySelector(".discount");

window.addEventListener("resize", function () {
  if (window.innerWidth <= 768) {
    discountSpan.innerHTML = "25%";
    console.log(window.innerWidth);
  } else {
    discountSpan.innerHTML = "25% discount";
  }
});
let discount = 1;

function getPrice(value) {
  switch (value) {
    case 0:
      return ["10K", 8];
    case 1:
      return ["50k", 12];
    case 2:
      return ["100k", 16];
    case 3:
      return ["500k", 24];
    case 4:
      return ["1M", 36];
    default:
      return [-1, -1];
  }
}

function rangeSlide() {
  let price = Number(sliderBar.value);

  viewsValue.innerHTML = `${getPrice(price)[0]} pageviews`;
  priceValue.innerHTML = `$${getPrice(price)[1] * discount}.00`;
}

discountCheckbox.addEventListener("click", function () {
  if (this.checked) {
    discount = 0.75;
  } else {
    discount = 1;
  }

  rangeSlide();
});

sliderBar.addEventListener("change", rangeSlide);
