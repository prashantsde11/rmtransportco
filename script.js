let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Below code for slide in previous and next slide code Written by me
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
  });
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function toggleMenu() {
  document.querySelector('.header-right').classList.toggle('active');
}


// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
