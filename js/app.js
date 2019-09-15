document.addEventListener("DOMContentLoaded", () => {
  // Wrapper animation
  anime
    .timeline({
      targets: ".welcome",
      easing: "easeOutExpo"
    })
    .add({
      opacity: 1,
      duration: 1200
    })
    .add({
      delay: 2700,
      translateX: "100vw",
      duration: 1500,
      complete: function(anime) {
        document.querySelector(".welcome").remove();
      }
    });

  // Heading animation
  anime({
    targets: ".welcome-heading",
    delay: 400,
    opacity: 1,
    duration: 1800,
    translateY: ["-30px", "0"],
    easing: "easeOutExpo"
  });

  // Subheading animation
  anime({
    targets: ".welcome-sub-heading",
    delay: 600,
    opacity: 1,
    duration: 1800,
    translateY: ["-30px", "0"],
    easing: "easeOutExpo"
  });

  // Loader wrapper animation
  anime({
    targets: ".loader-wrapper",
    opacity: 1,
    easing: "easeOutExpo",
    duration: 2000,
    delay: 1200
  });

  // Loader animation
  anime({
    targets: ".loader",
    opacity: 1,
    easing: "easeOutExpo",
    duration: 2500,
    delay: 2000,
    width: ["0%", "100%"]
  });

  // Header animation
  anime({
    targets: ".fade",
    opacity: 1,
    easing: "easeOutExpo",
    duration: 2300,
    delay: (el, i) => 5200 + 200 * i,
    translateY: ["-15px", "0px"]
  });

  anime({
    targets: ".nav-link",
    opacity: 1,
    easing: "easeOutExpo",
    duration: 2300,
    delay: (el, i) => 5200 + 200 * i,
    translateY: ["-15px", "0px"]
  });
});

$(".click-about").click(function() {
  $("html,body").animate(
    {
      scrollTop: $("#about").offset().top
    },
    "slow"
  );
});

$(".click-projects").click(function() {
  $("html,body").animate(
    {
      scrollTop: $("#projects").offset().top
    },
    "slow"
  );
});

$(".click-contact").click(function() {
  $("html,body").animate(
    {
      scrollTop: $("#contact").offset().top
    },
    "slow"
  );
});
