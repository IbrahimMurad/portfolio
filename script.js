// Fade-up on scroll using IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-up').forEach((el, i) => {
  // Stagger cards in the same parent
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  observer.observe(el);
});
