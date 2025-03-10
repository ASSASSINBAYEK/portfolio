document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      loadingScreen.style.opacity = "0";
      setTimeout(() => loadingScreen.remove(), 500);
    }, 2000);
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  const backButton = document.createElement("button");
  backButton.innerHTML = "↑";
  backButton.className = "back-to-top";
  document.body.appendChild(backButton);

  window.addEventListener("scroll", () => {
    backButton.style.opacity = window.scrollY > 300 ? "1" : "0";
    backButton.style.pointerEvents = window.scrollY > 300 ? "auto" : "none";
  });

  backButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".content-section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease-out";
    observer.observe(section);
  });

  const profileImage = document.querySelector(".profile-image");
  if (profileImage) {
    profileImage.addEventListener("mouseenter", () => {
      profileImage.style.transform = "scale(1.05) rotateZ(2deg)";
    });

    profileImage.addEventListener("mouseleave", () => {
      profileImage.style.transform = "scale(1) rotateZ(0)";
    });
  }

  let touchPos = { x: null, y: null };

  document.addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
      touchPos.x = e.touches[0].clientX;
      touchPos.y = e.touches[0].clientY;

      if (window.pJSDom && window.pJSDom.length > 0) {
        const pJS = window.pJSDom[0].pJS;
        pJS.interactivity.mouse.pos_x = touchPos.x;
        pJS.interactivity.mouse.pos_y = touchPos.y;
      }
    },
    { passive: false }
  );
  const yearSpan = document.getElementById("copyright-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
