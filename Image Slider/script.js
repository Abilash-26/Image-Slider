const image = document.querySelector(".slide-image");
const imageNumber = document.querySelector(".slide-image-number");
const totalImageNumber = document.querySelector(".total-image-number");
const prevBtn = document.querySelector(".backward")
const nextBtn = document.querySelector(".forward")


const images = ["./img/1.jpg",
"./img/2.jpg",
"./img/3.jpg",
"./img/4.jpg"];


let currentImage = 0;

window.addEventListener("DOMContentLoaded", showImage);

function showImage() {
    image.src = images[currentImage];
    imageNumber.textContent = currentImage + 1 ;
    totalImageNumber.textContent = images.length
}


nextBtn.addEventListener("click", function(){
    currentImage++;
    if(currentImage > images.length - 1) {
        currentImage = 0;
    }
    showImage(currentImage)
});

prevBtn.addEventListener("click", function () {
    currentImage--;
    if (currentImage < 0) {
      currentImage = images.length - 1;
    }
    showImage(currentImage);
  });