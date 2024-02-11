function toggleDescription() {
  const carDetails = document.getElementById("carDetails");
  const description = carDetails.querySelector("p");
  description.classList.toggle("show-description");
}

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}
