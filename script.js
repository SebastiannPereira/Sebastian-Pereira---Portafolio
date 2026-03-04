// Scroll fade-in animation
const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  faders.forEach(section => {
    const sectionPos = section.getBoundingClientRect().top;
    if (sectionPos < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});
