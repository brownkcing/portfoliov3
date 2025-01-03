function scrollToSection() {
    const sections = document.querySelectorAll('section');
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          history.replaceState(null, null, `#${sectionId}`);
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));
  
    window.addEventListener('wheel', (event) => {
      if (event.deltaY > 0) {
        // Scrolling down
        const nextSection = document.querySelector(`#${window.location.hash.slice(1)} + section`);
        if (nextSection) {
          nextSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      } else {
        // Scrolling up
        const previousSection = document.querySelector(`#${window.location.hash.slice(1)}`).previousElementSibling;
        if (previousSection) {
          previousSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', scrollToSection);