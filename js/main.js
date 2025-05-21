// AOS
AOS.init({
  offset: 120,
  delay: 0,
  duration: 900,
  easing: "ease",
  once: true,
  mirror: false,
  anchorPlacement: "top-bottom",
});

// AOS Staggered
setTimeout(() => {
  const items = document.querySelectorAll(".staggered-el");
  const rows = {};

  items.forEach((item, index) => {
    const top = item.getBoundingClientRect().top;
    const roundedTop = Math.round(top);

    if (!rows[roundedTop]) rows[roundedTop] = [];
    rows[roundedTop].push(item);
  });

  Object.values(rows).forEach((rowItems) => {
    rowItems.forEach((item, i) => {
      item.setAttribute("data-aos-delay", i * 100);
    });
  });
}, 100);

// Countup
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

  // FAQ
  const questions = document.querySelectorAll(".accordion-question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const icon = this.querySelector(".fa-plus-circle");

      document.querySelectorAll(".accordion-answer").forEach((el) => {
        if (el !== answer) {
          el.style.maxHeight = null;
          el.classList.remove("open");
        }
      });

      document.querySelectorAll(".fa-plus-circle").forEach((el) => {
        if (el !== icon) {
          el.classList.remove("rotate");
        }
      });

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.classList.remove("open");
        icon.classList.remove("rotate");
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.classList.add("open");
        icon.classList.add("rotate");
      }
    });
  });
});

// Gallery
const imageList = [
  "/images/pictures/img1.jpg",
  "/images/pictures/img2.jpg",
  "/images/pictures/img3.jpg",
  "/images/pictures/img4.jpg",
  "/images/pictures/img5.jpg",
  "/images/pictures/img6.jpg",
  "/images/pictures/img7.jpg",
  "/images/pictures/img8.jpg",
  "/images/pictures/img9.jpg",
  "/images/pictures/img10.jpg",
  "/images/pictures/img11.jpg",
  "/images/pictures/img12.jpg",
  "/images/pictures/img13.jpg",
  "/images/pictures/img14.jpg",
  "/images/pictures/img15.jpg",
  "/images/pictures/img16.jpg",
  "/images/pictures/img17.jpg",
];

const gallery = document.getElementById("gallery");
const modalImage = document.getElementById("modalImage");
const modal = new bootstrap.Modal(document.getElementById("photoModal"));
let currentIndex = 0;

imageList.forEach((src, index) => {
  const delay = index * 100;

  const col = document.createElement("div");
  col.className = "col-6 col-md-4 col-lg-3";
  col.innerHTML = `
    <div class="gallery-img-wrapper">
      <img src="${src}" 
           class="gallery-img staggered-el" 
           data-index="${index}" 
           alt="Thumbnail ${index + 1}" 
           data-aos="zoom-in" 
           data-aos-delay="${delay}" 
           loading="lazy" />
    </div>
  `;
  gallery.appendChild(col);
});

gallery.addEventListener("click", (e) => {
  if (e.target.classList.contains("gallery-img")) {
    currentIndex = parseInt(e.target.getAttribute("data-index"));
    modalImage.src = imageList[currentIndex];
    modal.show();
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  modalImage.src = imageList[currentIndex];
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imageList.length;
  modalImage.src = imageList[currentIndex];
});
