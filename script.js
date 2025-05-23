document.addEventListener("DOMContentLoaded", () => {
  // IntersectionObserver para animação fade-in
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  };

  const observer = new IntersectionObserver((entries, observerSelf) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observerSelf.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".section").forEach(section => {
    observer.observe(section);
  });
});
