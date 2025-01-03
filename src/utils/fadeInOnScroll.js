function fadeInOnScroll() {
  const elements = document.querySelectorAll('.fade-in-section');

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;

    if (elementTop < viewportHeight * 0.8 && elementBottom > 0) {
      element.classList.add('opacity-100');
      element.classList.remove('opacity-0');
      element.classList.add('translate-y-0');
      element.classList.remove('translate-y-10');
    }
  });
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);