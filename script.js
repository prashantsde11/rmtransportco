let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const showSlide = index => {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
};

const changeSlide = step => {
  currentSlide = (currentSlide + step + totalSlides) % totalSlides;
  showSlide(currentSlide);
};

const nextSlide = () => changeSlide(1);
const prevSlide = () => changeSlide(-1);

const toggleMenu = () => {
  document.querySelector('.header-right').classList.toggle('active');
};

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
