const src = document.getElementById("logo");
const src2 = document.getElementById("footer-logo");

const changeOnhover = e => {
    e.target.setAttribute('src', '../img/output.gif')
};
const changeOnUnhover = e => {
    e.target.setAttribute('src', '../img/logo-white-3.png')
};

const changeOnhover2 = e => {
    e.target.setAttribute('src', '../img/paritours.gif')
};
const changeOnUnhover2 = e => {
    e.target.setAttribute('src', '../img/paritours-pink-logo-1x.png')
};

src.addEventListener("mouseover", changeOnhover);
src.addEventListener("mouseout", changeOnUnhover);

src2.addEventListener("mouseover", changeOnhover2);
src2.addEventListener("mouseout", changeOnUnhover2);