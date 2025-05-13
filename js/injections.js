const currentYear = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  const navbarHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-main">
      <div class="container">
        <a href="#" class="navbar-brand">
          <img
            src="images/lnwc-logo-round-less-border_1.png"
            height="auto"
            width="80"
            alt="LNWC logo"
            class="d-line-block align-top"
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
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-lg-auto">
            <li class="nav-item active">
              <a href="#" class="nav-link active">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >About</a
              >
              <ul class="dropdown-menu" aria-labelledby="aboutDropdown">
                <li><a href="#" class="dropdown-item">About</a></li>
                <li><a href="#" class="dropdown-item">Organization</a></li>
                <li><a href="#" class="dropdown-item">Membership</a></li>
                <li><a href="#" class="dropdown-item">Donations</a></li>
                <li><a href="#" class="dropdown-item">FAQ</a></li>
                <li><a href="#" class="dropdown-item">Contact Us</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                id="activitiesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Activities</a
              >
              <ul class="dropdown-menu" aria-labelledby="activitiesDropdown">
                <li><a href="#" class="dropdown-item">Activities</a></li>
                <li><a href="#" class="dropdown-item">Calendar</a></li>
                <li><a href="#" class="dropdown-item">Projects</a></li>
                <li><a href="#" class="dropdown-item">Volunteer</a></li>
                <li><a href="#" class="dropdown-item">Events</a></li>
                <li><a href="#" class="dropdown-item">Pictures</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                id="resourcesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Resources</a
              >
              <ul class="dropdown-menu" aria-labelledby="resourcesDropdown">
                <li><a href="#" class="dropdown-item">Resources</a></li>
                <li><a href="#" class="dropdown-item">DIY Projects</a></li>
                <li><a href="#" class="dropdown-item">Internet Links</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Fish Attractor Map</a>
            </li>
          </ul>
          <a href="#" class="btn btn-white btn-lg mt-2 mb-3 my-lg-0 ms-lg-4">Donate Today</a>
        </div>
      </div>
    </nav>
        `;
  const headerHTML = `
        <header
      class="hero-header text-white text-center d-flex align-items-center"
    >
      <div class="container">
        <h1 class="display-4">Protect. Conserve. Restore</h1>
        <hr class="hr-main" />
        <p class="lead mt-3">
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
        <div class="col-lg-4 mb-3 mb-md-0">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a href="#" class="nav-link text-light">Home</a>
            </li>

            <li class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle text-light"
                data-bs-toggle="dropdown"
              >About</a>
              <ul class="dropdown-menu">
                <li><a href="#" class="dropdown-item">About</a></li>
                <li><a href="#" class="dropdown-item">Organization</a></li>
                <li><a href="#" class="dropdown-item">Membership</a></li>
                <li><a href="#" class="dropdown-item">Donations</a></li>
                <li><a href="#" class="dropdown-item">FAQ</a></li>
                <li><a href="#" class="dropdown-item">Contact Us</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle text-light"
                data-bs-toggle="dropdown"
              >Activities</a>
              <ul class="dropdown-menu">
                <li><a href="#" class="dropdown-item">Activities</a></li>
                <li><a href="#" class="dropdown-item">Calendar</a></li>
                <li><a href="#" class="dropdown-item">Projects</a></li>
                <li><a href="#" class="dropdown-item">Volunteer</a></li>
                <li><a href="#" class="dropdown-item">Events</a></li>
                <li><a href="#" class="dropdown-item">Pictures</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle text-light"
                data-bs-toggle="dropdown"
              >Resources</a>
              <ul class="dropdown-menu">
                <li><a href="#" class="dropdown-item">Resources</a></li>
                <li><a href="#" class="dropdown-item">DIY Projects</a></li>
                <li><a href="#" class="dropdown-item">Internet Links</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link text-light">Fish Attractor Map</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-4 mb-4 mb-md-0 text-center py-4 py-lg-0">
          <a href="#">
            <img
              src="images/lnwc-logo-round-less-border_1.png"
              width="100"
              alt="LNWC Logo"
              class="img-fluid"
            />
          </a>
        </div>

        <div class="col-lg-4 mx-auto mx-lg-0 ms-lg-auto " style="max-width: 200px">
          <div class="d-flex justify-content-between mb-4">
            <a
              href="mailto:email@example.com"
              class="text-white"
              aria-label="Email"
            ><i class="fas fa-envelope fa-lg"></i></a>
            <a
              href="https://facebook.com"
              class="text-white"
              aria-label="Facebook"
            ><i class="fab fa-facebook-f fa-lg"></i></a>
            <a href="https://x.com" class="text-white" aria-label="X"
              ><i class="fab fa-x-twitter fa-lg"></i></a>
            <a
              href="https://meetup.com"
              class="text-white"
              aria-label="Meetup"
            ><i class="fab fa-meetup fa-lg"></i></a>
          </div>

          <div class="d-flex flex-column">
            <a href="#join" class="btn btn-main mb-2">Join LNWC</a>
            <a href="#newsletter" class="btn btn-main">Donate Today</a>
          </div>
        </div>

        <div class="col-12 text-center mt-4">
          <p id="copyright" class="mb-0">© Copyright 2007-${currentYear} | All rights reserved. | Lake Norman Wildlife Conservationists (LNWC) | info@LNWC.org</p>
        </div>
      </div>
    </div>
  </footer>
      `;

  document.getElementById("navbar-container").innerHTML = navbarHTML;
  document.getElementById("header-container").innerHTML = headerHTML;
  document.getElementById("footer-container").innerHTML = footerHTML;
});
