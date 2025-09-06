const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
let isOpen = false;

btn.addEventListener("click", () => {
  if (window.innerWidth <= 1000) {
    if (!isOpen) {
      menu.style.display = "flex";
      setTimeout(() => { menu.style.opacity = 1; }, 10); // плавне з’являння
    } else {
      menu.style.opacity = 0;
      setTimeout(() => { menu.style.display = "none"; }, 300); // після анімації зникнення
    }
    isOpen = !isOpen;
  }
});

// При зміні розміру вікна
window.addEventListener("resize", () => {
  if (window.innerWidth > 1000) {
    menu.style.display = "flex";
    menu.style.opacity = 1;
    isOpen = false;
  } else if (!isOpen) {
    menu.style.display = "none";
    menu.style.opacity = 0;
  }
});


window.addEventListener('load', () => {
  const fadeElems = document.querySelectorAll('.fade-in');
  fadeElems.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('show'); // додаємо клас, щоб запустити CSS transition
    }, index * 200); // затримка між елементами (0.2с)
  });
});

const photo = document.getElementById("dave-img");
const audio = document.getElementById("sound");
photo.addEventListener("click", () => {
  if (!audio.paused) {
    audio.currentTime = 0;
  }
  audio.play();
});

