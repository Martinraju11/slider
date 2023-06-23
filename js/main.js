var image = document.querySelectorAll(".image");
var previousSlide = document.getElementById("previousSlide");
var nextSlide = document.getElementById("nextSlide");

var slide = 1;
showSlide(slide);

nextSlide.addEventListener("click", function () {
  showSlide(slide+=1);
})
previousSlide.addEventListener("click", function () {
  showSlide(slide-=1);
})

function showSlide(n) {
  if (n> image.length) {
    slide = 1;
  }
  if (n < 1) {
    slide = image.length;
  }

for (let i = 0; i < image.length; i++) {
  image[i].style.display = "none";
}
image[slide - 1].style.display = "block";
}