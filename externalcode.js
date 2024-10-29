////////////////
// Barba JS //
////////////////

// Zorg dat je Barba.js en GSAP in je project hebt opgenomen voordat je dit script toevoegt.
document.addEventListener("DOMContentLoaded", function () {
  // Barba.js init
  barba.init({
    transitions: [
      {
        name: "fade-transition",
        async leave(data) {
          await gsap.to(".transition-overlay", {
            duration: 1,
            opacity: 1,
            ease: "Expo.easeInOut",
          });
          data.current.container.style.opacity = 0;
        },
        enter(data) {
          data.next.container.style.opacity = 0;
          gsap.to(data.next.container, {
            duration: 1,
            opacity: 1,
            ease: "Expo.easeInOut",
          });
          gsap.to(".transition-overlay", {
            duration: 1,
            opacity: 0,
            ease: "Expo.easeInOut",
          });
        },
      },
    ],
  });
});
