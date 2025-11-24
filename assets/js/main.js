// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Auto update footer year
document.getElementById("year").textContent = new Date().getFullYear();
