document.addEventListener("DOMContentLoaded", () => {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: isMobile ? 30 : 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#00ff00",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.6,
        random: false,
      },
      size: {
        value: 8,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00ff00",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: isMobile ? 2 : 4,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: !("ontouchstart" in window),
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1,
          },
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });
});
