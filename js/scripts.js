const src = document.getElementById("logo");
const changeOnhover = e => {
    e.target.setAttribute('src', '../img/output.gif')
};
const changeOnUnhover = e => {
    e.target.setAttribute('src', '../img/logo-white-3.png')
};
src.addEventListener("mouseover", changeOnhover);
src.addEventListener("mouseout", changeOnUnhover);
