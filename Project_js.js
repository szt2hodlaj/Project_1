document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menuicondiv");
    const menu = document.getElementById("menudiv");
    const closeBtn = document.getElementById("closeBtn");
    const cim = document.getElementById("cim");

    menuIcon.addEventListener("click", function() {
        menu.style.display = "block";
        cim.style.display = "none"; 
    });

    closeBtn.addEventListener("click", function() {
        menu.style.display = "none";
        cim.style.display = "block";
    });
});

const root = document.querySelector(':root')

function Onchange(){
    const selectedColor = document.getElementById("valaszszint").value;
    root.style.setProperty('--szovszine', selectedColor);
    
    var fontSelector = document.getElementById("font-style-selector");
    var selectedFontIndex = fontSelector.selectedIndex; 
    var selectedFont = fontSelector.options[selectedFontIndex].text; 
    document.body.style.fontFamily = selectedFont;
    var orakElemek = document.getElementsByClassName('orak');

    for (var i = 0; i < orakElemek.length; i++) {
        orakElemek[i].style.fontFamily = selectedFont;
    }

}

const app = document.getElementById("app");
const toggleButton = document.getElementById("toggle-mode");

const savedMode = localStorage.getItem("mode");
if (savedMode) {
    app.classList.add(savedMode);
}

function toggleMode() {
    if (app.classList.contains("dark-mode")) {
        app.classList.remove("dark-mode");
        app.classList.add("light-mode");
        localStorage.setItem("mode", "light-mode");
    } else {
        app.classList.remove("light-mode");
        app.classList.add("dark-mode");
        localStorage.setItem("mode", "dark-mode");
    }
}

toggleButton.addEventListener("click", toggleMode);