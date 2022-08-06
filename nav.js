let toggle = document.querySelector(".options .menu .toggle-bar");
let nav    = document.querySelector(".options .menu .nav");
let closeBtn = document.querySelector(".options .menu .nav .close");

toggle.onclick = function () {
    nav.classList.add("open");
}
closeBtn.onclick = function () {
    nav.classList.remove("open");
}
document.onkeyup = function (e) {
    if(e.key == "Escape"){
        nav.classList.remove("open"); 
    }
}