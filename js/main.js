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
    root: null,
    threshold: 1.0,
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

          const delay =
            window.scrollY === 0 && entry.intersectionRatio === 1 ? 1000 : 0;

          setTimeout(() => startCount(el), delay);
        }
      }
    });
  }, options);

  counters.forEach((counter) => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => observer.observe(counter));
    } else {
      observer.observe(counter);
    }
  });

  // About Page Form
  const checkbox = document.getElementById("otherCheck");
  const inputGroup = document.getElementById("otherTextGroup");

  if (checkbox && inputGroup) {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        inputGroup.classList.add("open");
      } else {
        inputGroup.classList.remove("open");
      }
    });
  }

  // FAQ
  const questions = document.querySelectorAll(".accordion-question");
  console.log("Accordion elements found:", questions.length);
  questions.forEach((question) => {
    question.addEventListener("click", function () {
      console.log("click");

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

  // Calendar
  const calendarEl = document.getElementById("calendar");

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    contentHeight: "auto",
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "",
    },
    buttonText: {
      today: "Today",
    },
    eventClassNames: function () {
      return ["custom-event"];
    },
    events: function (fetchInfo, successCallback, failureCallback) {
      fetch("/data/events.json")
        .then((response) => {
          if (!response.ok) throw new Error("Network response was not ok");
          return response.json();
        })
        .then((data) => {
          successCallback(data);
        })
        .catch((error) => {
          console.error("Error fetching events:", error);
          failureCallback(error);
        });
    },
    eventClick: function (info) {
      console.log("Event clicked:", info.event.title);
      info.jsEvent.preventDefault();

      const { title, start, extendedProps, url } = info.event;

      document.getElementById("modalTitle").textContent = title;
      document.getElementById("modalDescription").textContent =
        extendedProps.description || "";

      const metaHtml = `
        ${
          start
            ? `<p class="meta-line"><i class="fa-regular fa-calendar-days text-main pe-2"></i><span>${start.toLocaleDateString()}</span></p>`
            : ""
        }
        ${
          extendedProps.time
            ? `<p class="meta-line"><i class="fa-regular fa-clock text-main pe-1"></i><span>${extendedProps.time}</span></p>`
            : ""
        }
        ${
          extendedProps.location
            ? `<p class="meta-line"><i class="fa-solid fa-location-dot text-main pe-2"></i><span>${extendedProps.location}</span></p>`
            : ""
        }
        ${
          extendedProps.price
            ? `<p class="meta-line"><i class="fa-solid fa-money-bill-wave text-main pe-1"></i><span>${extendedProps.price}</span></p>`
            : ""
        }
        ${
          extendedProps.ages
            ? `<p class="meta-line"><i class="fa-solid fa-user-group text-main pe-1"></i><span>${extendedProps.ages}</span></p>`
            : ""
        }
      `;

      document.getElementById("modalMeta").innerHTML = metaHtml;

      const modalCTA = document.getElementById("modalCTA");

      if (url) {
        const isExternal =
          !url.startsWith("/") && !url.includes(window.location.hostname);

        modalCTA.innerHTML = `<a href="${url}" class="btn btn-main btn-lg mt-4" ${
          isExternal ? 'target="_blank" rel="noopener noreferrer"' : ""
        }>Learn More</a>`;
      } else {
        modalCTA.innerHTML = "";
      }

      document.getElementById("eventModal").style.display = "flex";
    },
  });

  calendar.render();

  // Calendar Modal logic
  document.getElementById("closeModal").onclick = () => {
    document.getElementById("eventModal").style.display = "none";
  };
  window.onclick = (e) => {
    if (e.target.id === "eventModal") {
      document.getElementById("eventModal").style.display = "none";
    }
  };
});

// Gallery
const imageList = [
  "/images/pictures/img1.webp",
  "/images/pictures/img2.webp",
  "/images/pictures/img3.webp",
  "/images/pictures/img4.webp",
  "/images/pictures/img5.webp",
  "/images/pictures/img6.webp",
  "/images/pictures/img7.webp",
  "/images/pictures/img8.webp",
  "/images/pictures/img9.webp",
  "/images/pictures/img10.webp",
  "/images/pictures/img11.webp",
  "/images/pictures/img12.webp",
  "/images/pictures/img13.webp",
  "/images/pictures/img14.webp",
  "/images/pictures/img15.webp",
  "/images/pictures/img16.webp",
  "/images/pictures/img17.webp",
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
