// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// ===== Hamburger Toggle =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active"); // Hamburger animation
  navLinks.classList.toggle("active");   // Show/hide mobile menu
  document.body.classList.toggle("no-scroll"); // Optional: prevent scrolling
});

// Close menu when a link is clicked (mobile)
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });
});

// ===== Blobs Cursor Follow =====
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.querySelector(".blob1").style.transform =
    `translate(${x * 40}px, ${y * 40}px)`;

  document.querySelector(".blob2").style.transform =
    `translate(${x * -30}px, ${y * -30}px)`;

  document.querySelector(".blob3").style.transform =
    `translate(${x * 25}px, ${y * 25}px)`;
});

// ===== Blobs Scroll Parallax =====
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  document.querySelector(".blob1").style.top = `${scrollY * 0.08 - 150}px`;
  document.querySelector(".blob2").style.bottom = `${scrollY * 0.05 - 200}px`;
  document.querySelector(".blob3").style.top = `${scrollY * 0.06 + 200}px`;
});
