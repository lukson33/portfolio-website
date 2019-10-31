const nav = document.getElementsByTagName("nav")[0];
const burger = document.getElementById("burger");
const text = document.querySelectorAll(".text");
const exit = document.getElementById("exit");
const html = document.getElementsByTagName("html")[0];

window.addEventListener("resize", () => {
  if (window.innerWidth < 800) {
    nav.classList.add("hidden");
    burger.classList.remove("hidden");
  } else if (window.innerWidth > 800) {
    nav.classList.remove("hidden");
    burger.classList.add("hidden");
  }
});

window.addEventListener("load", () => {
  html.classList.add("disable-scroll");
  if (window.innerWidth > 800) {
    nav.classList.remove("hidden");
    burger.classList.add("hidden");
  }
});

burger.addEventListener("click", () => {
  nav.classList.toggle("hidden");

  text.forEach((t, i) => {
    if (t.style.animation) {
      t.style.animation = "";
      setTimeout(function() {
        burger.classList.remove("absolute");
      }, 300);
    } else {
      t.style.animation = `fadeText 0.5s ease forwards ${i / 14 + 0.1}s`;
      nav.classList.add("fixed");
      burger.classList.add("z-index-toggle");
    }
  });
});

exit.addEventListener("click", () => {
  nav.classList.add("hidden");
  setTimeout(function() {
    nav.classList.remove("fixed");
    burger.classList.remove("z-index-toggle");
    burger.classList.remove("absolute");
    text.forEach(t => (t.style.animation = ""));
  }, 300);
});

text.forEach(t =>
  t.addEventListener("click", () => {
    nav.classList.remove("fixed");
    if (window.innerWidth < 800) {
      nav.classList.add("hidden");
    }

    text.forEach(t => (t.style.animation = ""));
  })
);

//Enable scroll
setTimeout(() => {
  html.classList.remove("disable-scroll");
}, 4000);

//Loading animations
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
        html.classList.remove("disable-scroll");
      }
    });

  anime({
    targets: ".header",
    delay: 400,
    opacity: 1,
    duration: 1800,
    easing: "easeOutExpo"
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

//Navigation scrolling
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
