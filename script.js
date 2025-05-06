let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const total = slides.length;
const headerRight = document.querySelector('.header-right');

const showSlide = index => {
  document.querySelector('.slide.active')?.classList.remove('active');
  slides[index].classList.add('active');
};

const nextSlide = () => showSlide(currentSlide = (currentSlide + 1) % total);
const prevSlide = () => showSlide(currentSlide = (currentSlide - 1 + total) % total);

const toggleMenu = () => headerRight.classList.toggle('active');

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
