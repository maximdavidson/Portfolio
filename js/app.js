AOS.init();

// internal link

document.addEventListener('DOMContentLoaded', function () {
   document.querySelector('.work').addEventListener('click', function (event) {
      event.preventDefault(); // предотвращает стандартное действие ссылки
      window.scrollTo({
         top: document.querySelector('.works').offsetTop,
         behavior: 'smooth' // плавный эффект прокрутки.
      });
   });
});

const navItems = document.querySelectorAll('.work');

function closeMenu() {
   nav.classList.remove('open');
   navBtnImg.src = "./image/nav-open.png";
}

navItems.forEach((item) => {
   item.addEventListener('click', () => {
      closeMenu();
   });
});

// menu

const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav_button');
const navBtnImg = document.querySelector('.nav-btn-img');

navBtn.onclick = () => {
   if (nav.classList.toggle('open')) {
      navBtnImg.src = "./image/nav-close.png";
   } else {
      navBtnImg.src = "./image/nav-open.png";
   }
}