let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const showSlide = (index) => {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
};

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
};

const toggleMenu = () => {
  document.querySelector('.header-right').classList.toggle('active');
};

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
