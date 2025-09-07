const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
let isOpen = false;

btn.addEventListener("click", () => {
  if (window.innerWidth <= 1000) {
    if (!isOpen) {
      menu.style.display = "flex";
      setTimeout(() => { menu.style.opacity = 1; }, 10); 
    } else {
      menu.style.opacity = 0;
      setTimeout(() => { menu.style.display = "none"; }, 300); 
    }
    isOpen = !isOpen;
  }
});

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
      el.classList.add('show'); 
    }, index * 200); 
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

document.getElementById("dave-img").onclick = function() {
    alert("watchhimbecamagawd");
  }

