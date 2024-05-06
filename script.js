
document.addEventListener("DOMContentLoaded", function() {
  var navbarToggle = document.querySelector(".navbar-toggle");
  var navbarLinks = document.querySelector(".navbar-links");

  // Toggle navbar links when the toggle button is clicked
  navbarToggle.addEventListener("click", function() {
    navbarLinks.classList.toggle("active");
  });
});

