document.querySelector('.arrow.right').onclick = () => {
    document.getElementById('scroll-container').scrollBy({ left: 300, behavior: 'smooth' });
  };
  document.querySelector('.arrow.left').onclick = () => {
    document.getElementById('scroll-container').scrollBy({ left: -300, behavior: 'smooth' });
  };
  