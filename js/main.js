// ===== Smooth Scroll Animation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== Mobile Navbar Toggle =====
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isActive = navMenu.classList.toggle("active");
    navToggle.classList.toggle("open", isActive);
    document.body.classList.toggle("no-scroll", isActive); // Prevent background scroll
  });
}

// ===== Scroll-to-Top Button =====
const backToTop = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  backToTop?.classList.toggle("show", window.scrollY > 250);
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Hero Fade-in Animation =====
window.addEventListener("load", () => {
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.opacity = 0;
    heroContent.style.transform = "translateY(40px)";
    setTimeout(() => {
      heroContent.style.transition = "all 0.9s ease";
      heroContent.style.opacity = 1;
      heroContent.style.transform = "translateY(0)";
    }, 400);
  }
});

// ===== Close Mobile Menu on Link Click =====
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      navToggle.classList.remove("open");
      document.body.classList.remove("no-scroll");
    }
  });
});

// ===== Hide Navbar on Scroll Down (Optional smooth UX) =====
let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (!navbar) return;
  const currentScroll = window.scrollY;
  if (currentScroll > lastScrollTop && currentScroll > 100) {
    navbar.classList.add("nav-hidden"); // hide on scroll down
  } else {
    navbar.classList.remove("nav-hidden"); // show on scroll up
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
