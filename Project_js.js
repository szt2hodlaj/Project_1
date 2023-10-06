var darkMode = false; 

function DarkModeChange() {
    var button = document.getElementById('DarkMode');
    if (darkMode) {
        document.documentElement.style.setProperty('--khszine', 'white');
        document.documentElement.style.setProperty('--szovszine', 'black');
        document.documentElement.style.setProperty('--ahsotetm', 'rgba(255, 255, 255, 0.5)');
        button.style.backgroundImage = "url(hold.jpg)";
        darkMode = false; 
    } else {
        document.documentElement.style.setProperty('--khszine', 'black');
        document.documentElement.style.setProperty('--szovszine', 'white');
        document.documentElement.style.setProperty('--ahsotetm', 'rgba(0, 0, 0, 0.5)');
        button.style.backgroundImage = "url(hold.jpg)";
        darkMode = true; 
        
    }
}

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