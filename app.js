let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[n].classList.add("active");
}

function nextSlide() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  showSlide(index);
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  showSlide(index);
}

// Auto slide every 6 seconds
setInterval(() => {
  nextSlide();
}, 9000);