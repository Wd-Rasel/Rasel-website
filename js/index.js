// start point
// menubar

let menuIcon = document.querySelector("#menu_icon");
let menu = document.querySelector("#main_menu");

menuIcon.addEventListener("click", () => {
  if (menu.className === "hidden") {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

// slider images
let i = 0;
let images = [];

// images list//

images[0] = "slide_img/Rasel_3.jpg";
images[1] = "slide_img/Rasel_4.jpg";
images[2] = "slide_img/slide_beaner.jpg";
images[3] = "slide_img/Rasel_5.jpg";

// change images//

function changeImg() {
  let sliderImg = document.querySelector("#slider_img");
  sliderImg.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", 4000);
}

window.onload = changeImg;
