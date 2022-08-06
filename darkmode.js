let darkMode = localStorage.getItem('darkmode');
let mainToggle = document.querySelector(".toggle");

function addDarkMode(){
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'enabled');
    mainToggle.setAttribute("aria-label", "Switch to light theme");
}
function removeDarkMode(){
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'disabled');
    mainToggle.setAttribute("aria-label", "Switch to dark theme");
}

if(darkMode == 'enabled'){
    addDarkMode();
}

mainToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkmode');
    
    if(darkMode == 'disabled'){
        addDarkMode();
    }else{
        removeDarkMode();
    }
});

mainToggle.addEventListener('mousedown', () => {
    toggle.classList.add('pulsing');
    setTimeout(() => {
        mainToggle.classList.remove('pulsing');
    }, 650);
});