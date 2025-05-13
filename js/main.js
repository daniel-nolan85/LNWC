document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".count");
  const duration = 2000;
  const options = {
    threshold: 0.6,
  };

  const startCount = (el) => {
    const target = +el.getAttribute("data-target");
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const value = Math.round(target * progress);

      el.textContent = value;

      if (frame === totalFrames) {
        clearInterval(counter);
        el.textContent = target;
      }
    }, duration / totalFrames);
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        if (!el.classList.contains("counted")) {
          el.classList.add("counted");
          startCount(el);
        }
      }
    });
  }, options);

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});
