
const upButton = document.querySelector(".up-button");
const moveRight = document.querySelectorAll(".move-right");
const moveLeft = document.querySelectorAll(".move-left");


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = "fadeRight 1.5s ease-in";
      observer.unobserve(entry.target);
    } else if (entry.isIntersecting === true) {
      return;
    }
  });
}, options);

const goUp = () => {
  window.addEventListener("scroll", () => {
    upButton.classList.toggle("active", window.scrollY > 500);
  });

  upButton.onclick = () => {
    window.scrollTo(0, 0);
  };
};
