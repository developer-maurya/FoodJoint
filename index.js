function nextSlide() {
    const slider = document.getElementById('slider');
    const slideWidth = 260; 
    slider.scrollLeft += slideWidth * 2; 
  }
  
  function prevSlide() {
    const slider = document.getElementById('slider');
    const slideWidth = 280;
    slider.scrollLeft -= slideWidth * 2; 
  }
  function nextSlides() {
    const slider = document.getElementById('sliders');
    const slideWidth = 260; 
    slider.scrollLeft += slideWidth * 2; 
  }
  
  function prevSlides() {
    const slider = document.getElementById('sliders');
    const slideWidth = 280;
    slider.scrollLeft -= slideWidth * 2; 
  }
  

  
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('filterModal');


openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

