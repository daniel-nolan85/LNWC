const currentYear = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  const navbarHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-main" >
  <div class="container">
    <a href="/index.html" class="navbar-brand" data-aos="zoom-in" data-aos-duration="1000">
      <img
        src="/images/lnwc-logo-round.png"
        width="80"
        alt="LNWC logo"
        class="d-inline-block align-top"
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      data-aos="fade-left" data-aos-duration="1000"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" data-aos="fade-up" data-aos-duration="1000">
      <ul class="navbar-nav ms-lg-auto">
        <li class="nav-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <a href="/index.html" class="nav-link" data-match="/index.html">Home</a>
        </li>
        <li class="nav-item dropdown" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <a
            href="#"
            class="nav-link dropdown-toggle"
            id="aboutDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >About</a>
          <ul class="dropdown-menu" aria-labelledby="aboutDropdown">
            <li><a href="/about/about.html" class="dropdown-item" data-match="/about/about.html">About</a></li>
            <li><a href="/about/organization.html" class="dropdown-item" data-match="/about/organization.html">Organization</a></li>
            <li><a href="/about/membership.html" class="dropdown-item" data-match="/about/membership.html">Membership</a></li>
            <li><a href="/about/donations.html" class="dropdown-item" data-match="/about/donations.html">Donations</a></li>
            <li><a href="/about/faq.html" class="dropdown-item" data-match="/about/faq.html">FAQ</a></li>
            <li><a href="/about/contact-us.html" class="dropdown-item" data-match="/about/contact-us.html">Contact Us</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <a
            href="#"
            class="nav-link dropdown-toggle"
            id="activitiesDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >Activities</a>
          <ul class="dropdown-menu" aria-labelledby="activitiesDropdown">
            <li><a href="/activities/activities.html" class="dropdown-item" data-match="/activities/activities.html">Activities</a></li>
            <li><a href="/activities/calendar.html" class="dropdown-item" data-match="/activities/calendar.html">Calendar</a></li>
            <li><a href="/activities/projects.html" class="dropdown-item" data-match="/activities/projects.html">Projects</a></li>
            <li><a href="/activities/volunteer.html" class="dropdown-item" data-match="/activities/volunteer.html">Volunteer</a></li>
            <li><a href="/activities/events.html" class="dropdown-item" data-match="/activities/events.html">Events</a></li>
            <li><a href="/activities/pictures.html" class="dropdown-item" data-match="/activities/pictures.html">Pictures</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <a
            href="#"
            class="nav-link dropdown-toggle"
            id="resourcesDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >Resources</a>
          <ul class="dropdown-menu" aria-labelledby="resourcesDropdown">
            <li><a href="/resources/resources.html" class="dropdown-item" data-match="/resources/resources.html">Resources</a></li>
            <li><a href="/resources/diy-projects.html" class="dropdown-item" data-match="/resources/diy-projects.html">DIY Projects</a></li>
            <li><a href="/resources/internet-links.html" class="dropdown-item" data-match="/resources/internet-links.html">Internet Links</a></li>
          </ul>
        </li>
        <li class="nav-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <a href="/fish-attractor-map.html" class="nav-link" data-match="/fish-attractor-map.html">Fish Attractor Map</a>
        </li>
      </ul>
      <a href="/donate.html" class="btn btn-white btn-lg mt-2 mb-3 my-lg-0 ms-lg-4" data-aos="fade-left" data-aos-duration="1000">Donate Today</a>
    </div>
  </div>
</nav>

        `;

  const headerHTML = `
        <header
      class="hero-header text-white text-center d-flex align-items-center"
    >
      <div class="container">
        <h1 class="display-4" data-aos="fade-down">Protect. Conserve. Restore</h1>
        <hr class="hr-main" data-aos="zoom-in" data-aos-delay="150" />
        <p class="lead mt-3" data-aos="fade-up" data-aos-delay="100">
          LNWC is a chapter of the North Carolina Wildlife Federation (NCWF) - a
          community based organization whose mission is to protect, conserve and
          restore wildlife and habitat of the Lake Norman area.
        </p>
      </div>
    </header>
      `;

  const footerHTML = `
        <footer class="footer bg-dark text-light py-4">
  <div class="container">
    <div class="row text-center text-lg-start align-items-center">
      
      <!-- Left Navigation Links -->
      <div class="col-lg-4 mb-3 mb-md-0">
        <ul class="nav flex-column">
          <li class="nav-item" data-aos="fade-right">
            <a href="/index.html" class="nav-link text-light" data-match="/">Home</a>
          </li>
          <li class="nav-item dropdown" data-aos="fade-right" data-aos-delay="100">
            <a href="#" class="nav-link dropdown-toggle text-light" data-bs-toggle="dropdown">About</a>
            <ul class="dropdown-menu">
              <li><a href="/about/about.html" class="dropdown-item" data-match="about.html">About</a></li>
              <li><a href="/about/organization.html" class="dropdown-item" data-match="organization.html">Organization</a></li>
              <li><a href="/about/membership.html" class="dropdown-item" data-match="membership.html">Membership</a></li>
              <li><a href="/about/donations.html" class="dropdown-item" data-match="donations.html">Donations</a></li>
              <li><a href="/about/faq.html" class="dropdown-item" data-match="faq.html">FAQ</a></li>
              <li><a href="/about/contact-us.html" class="dropdown-item" data-match="contact-us.html">Contact Us</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown" data-aos="fade-right" data-aos-delay="200">
            <a href="#" class="nav-link dropdown-toggle text-light" data-bs-toggle="dropdown">Activities</a>
            <ul class="dropdown-menu">
              <li><a href="/activities/activities.html" class="dropdown-item" data-match="activities.html">Activities</a></li>
              <li><a href="/activities/calendar.html" class="dropdown-item" data-match="calendar.html">Calendar</a></li>
              <li><a href="/activities/projects.html" class="dropdown-item" data-match="projects.html">Projects</a></li>
              <li><a href="/activities/volunteer.html" class="dropdown-item" data-match="volunteer.html">Volunteer</a></li>
              <li><a href="/activities/events.html" class="dropdown-item" data-match="events.html">Events</a></li>
              <li><a href="/activities/pictures.html" class="dropdown-item" data-match="pictures.html">Pictures</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown" data-aos="fade-right" data-aos-delay="300">
            <a href="#" class="nav-link dropdown-toggle text-light" data-bs-toggle="dropdown">Resources</a>
            <ul class="dropdown-menu">
              <li><a href="/resources/resources.html" class="dropdown-item" data-match="resources.html">Resources</a></li>
              <li><a href="/resources/diy-projects.html" class="dropdown-item" data-match="diy-projects.html">DIY Projects</a></li>
              <li><a href="/resources/internet-links.html" class="dropdown-item" data-match="internet-links.html">Internet Links</a></li>
            </ul>
          </li>
          <li class="nav-item" data-aos="fade-right" data-aos-delay="400">
            <a href="/fish-attractor-map.html" class="nav-link text-light" data-match="fish-attractor-map.html">Fish Attractor Map</a>
          </li>
        </ul>
      </div>

      <!-- Center Logo -->
      <div class="col-lg-4 mb-4 mb-md-0 text-center py-4 py-lg-0">
        <a href="/index.html" data-aos="zoom-in">
          <img
            src="/images/lnwc-logo-round.png"
            width="100"
            alt="LNWC Logo"
            class="img-fluid"
          />
        </a>
      </div>

      <!-- Right Socials and CTAs -->
      <div class="col-lg-4 mx-auto mx-lg-0 ms-lg-auto" style="max-width: 200px">
        <div class="d-flex justify-content-between mb-4" data-aos="fade-up" data-aos-delay="300">
          <a href="mailto:email@example.com" class="text-white" aria-label="Email"><i class="fas fa-envelope fa-lg"></i></a>
          <a href="https://facebook.com" class="text-white" aria-label="Facebook"><i class="fab fa-facebook-f fa-lg"></i></a>
          <a href="https://x.com" class="text-white" aria-label="X"><i class="fab fa-x-twitter fa-lg"></i></a>
          <a href="https://meetup.com" class="text-white" aria-label="Meetup"><i class="fab fa-meetup fa-lg"></i></a>
        </div>

        <div class="d-flex flex-column">
          <a href="/about/membership.html" class="btn btn-main mb-2"" data-aos="zoom-in" data-aos-delay="100">Join LNWC</a>
          <a href="/about/donations.html" class="btn btn-main"" data-aos="zoom-in" data-aos-delay="100">Donate Today</a>
        </div>
      </div>



      <!-- Bottom Copyright -->
      <div class="col-12 text-center mt-4">
        <p id="copyright" data-aos="fade-down" data-aos-delay="100" data-aos-offset="0">
          © Copyright 2007-${currentYear} | All rights reserved. | Lake Norman Wildlife Conservationists (LNWC) | info@LNWC.org
        </p>
      </div>

    </div>
  </div>
</footer>
      `;

  document.getElementById("navbar-container").innerHTML = navbarHTML;
  document.getElementById("header-container").innerHTML = headerHTML;
  document.getElementById("footer-container").innerHTML = footerHTML;
});

document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;

  const links = document.querySelectorAll(".nav-link, .dropdown-item");
  links.forEach((link) => {
    const matchPath = link.getAttribute("data-match");
    if (matchPath && currentPath.endsWith(matchPath)) {
      link.classList.add("active");

      const dropdown = link.closest(".dropdown-menu");
      if (dropdown) {
        const parentNavLink = dropdown
          .closest(".nav-item.dropdown")
          .querySelector(".nav-link.dropdown-toggle");
        if (parentNavLink) {
          parentNavLink.classList.add("active");
        }
      }
    }
  });
});
