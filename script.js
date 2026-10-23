const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    nav.querySelectorAll("a").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".hero-copy, .hero-art, .section-heading, .service-card, .project-card, .skills-layout, .social-card, .about-layout, .contact-copy, .contact-form");
revealItems.forEach((item) => item.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`Hi Israel,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);
  document.getElementById("formFeedback").textContent = "Opening your email app…";
  window.location.href = `mailto:israeljohn647@gmail.com?subject=${subject}&body=${body}`;
});