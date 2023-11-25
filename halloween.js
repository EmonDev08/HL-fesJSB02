let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
let container = document.getElementById("container");
let count = 50;
for (var i = 0; i < 50; i++) {
  let leftSnow = Math.floor(Math.random() * container.clientWidth);
  let topSnow = Math.floor(Math.random() * container.clientHeight);
  let widthSnow = Math.floor(Math.random() * 50);
  let timeSnow = Math.floor(Math.random() * 5 + 5);
  let blurSnow = Math.floor(Math.random() * 10);
  console.log(leftSnow);
  let div = document.createElement("div");
  div.classList.add("snow");
  div.style.left = leftSnow + "px";
  div.style.top = topSnow + "px";
  div.style.width = widthSnow + "px";
  div.style.height = widthSnow + "px";
  div.style.animationDuration = timeSnow + "s";
  div.style.filter = "blur(" + blurSnow + "px)";
  container.appendChild(div);
}
console.log('hi');
