document.addEventListener("DOMContentLoaded", function() {
  const benefits = document.querySelectorAll(".benefit");

  // Scroll animation trigger
  function revealOnScroll() {
      benefits.forEach((benefit, index) => {
          const rect = benefit.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight - 50) {
              benefit.style.animationDelay = `${index * 0.2}s`;
              benefit.classList.add("visible");
          }
      });
  }

  window.addEventListener("scroll", revealOnScroll);
});
