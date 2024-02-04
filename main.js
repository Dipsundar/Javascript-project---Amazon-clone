const images = document.querySelectorAll(".header-slider ul img");
const prevBtn = document.querySelector(".control_prev");
const nextBtn = document.querySelector(".control_next");

// image index initially set to 0
let imageIndex = 0;

// change slide function
function changeSlide() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[imageIndex].style.display = "block";
}

setInterval(() => {
  if (imageIndex < images.length - 1) {
    imageIndex++;
  } else {
    imageIndex = 0;
  }
  changeSlide();
}, 5000);

// previous button event
prevBtn.addEventListener("click", (e) => {
  if (imageIndex > 0) {
    imageIndex--;
  } else {
    imageIndex = images.length - 1;
  }
  changeSlide();
});

// next button event
nextBtn.addEventListener("click", (e) => {
  if (imageIndex < images.length - 1) {
    imageIndex++;
  } else {
    imageIndex = 0;
  }
  changeSlide();
});

// selection of products
const scrollContainer = document.querySelectorAll(".products");
// scrolling through mouse wheel
for (const item of scrollContainer) {
  item.addEventListener("wheel", (event) => {
    event.preventDefault();
    item.scrollLeft += event.deltaY;
  });
}
