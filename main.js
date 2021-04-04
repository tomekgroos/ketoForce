
// grabbed elements

const upButton = document.querySelector(".up-button");
const moveRight = document.querySelectorAll(".move-right");
const moveLeft = document.querySelectorAll(".move-left");


// animation fade left and right

const options = {
  root: null,
  threshold: 0.1,
  rootMargin: "50px",
};

const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = "fadeRight 1.5s ease-in-out";
      observerRight.unobserve(entry.target);
    } else if (entry.isIntersecting === true) {
      return;
    }
  });
}, options);

const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = "fadeLeft 1.5s ease-in-out";
      observerLeft.unobserve(entry.target);
    } else if (entry.isIntersecting === true) {
      return;
    }
  });
}, options);

moveRight.forEach((el) => {
  observerRight.observe(el);
});

moveLeft.forEach((el) => {
  observerLeft.observe(el);
});


// back to top button

const goUp = () => {
  window.addEventListener("scroll", () => {
    upButton.classList.toggle("active", window.scrollY > 500);
  });

  upButton.onclick = () => {
    window.scrollTo(0, 0);
  };
};
