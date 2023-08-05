// menu

const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav_button');
const navBtnImg = document.querySelector('.nav-btn-img');

navBtn.onclick = () => {
   if (nav.classList.toggle('open')) {
      navBtnImg.src = "../image/nav-close.png";
   } else {
      navBtnImg.src = "../image/nav-open.png";
   }
}