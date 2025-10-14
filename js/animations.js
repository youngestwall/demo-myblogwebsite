// Animation Observer
document.addEventListener("DOMContentLoaded", function () {
  // Scroll Reveal Animation
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        if (entry.target.classList.contains("scroll-once")) {
          observer.unobserve(entry.target);
        }
      } else if (!entry.target.classList.contains("scroll-once")) {
        entry.target.classList.remove("visible");
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-reveal class
  document.querySelectorAll(".scroll-reveal").forEach((element) => {
    observer.observe(element);
  });

  // Add floating animation to decorative elements
  document.querySelectorAll(".floating-element").forEach((element, index) => {
    element.style.animationDelay = `${index * 0.2}s`;
  });

  // Navbar Scroll Effect
  let lastScroll = 0;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      navbar.classList.remove("scroll-up");
      return;
    }

    if (
      currentScroll > lastScroll &&
      !navbar.classList.contains("scroll-down")
    ) {
      // Scroll Down
      navbar.classList.remove("scroll-up");
      navbar.classList.add("scroll-down");
    } else if (
      currentScroll < lastScroll &&
      navbar.classList.contains("scroll-down")
    ) {
      // Scroll Up
      navbar.classList.remove("scroll-down");
      navbar.classList.add("scroll-up");
    }

    lastScroll = currentScroll;
  });

  // Add page transition effect
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.hostname === window.location.hostname) {
        e.preventDefault();
        document.body.classList.add("page-transition-out");

        setTimeout(() => {
          window.location.href = this.href;
        }, 300);
      }
    });
  });

  // Initialize page transition
  document.body.classList.add("page-transition-in");
  setTimeout(() => {
    document.body.classList.remove("page-transition-in");
  }, 500);

  // Add interactive hover effects
  document.querySelectorAll(".interactive-element").forEach((element) => {
    element.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      this.style.setProperty("--mouse-x", `${x}px`);
      this.style.setProperty("--mouse-y", `${y}px`);
    });
  });
});
