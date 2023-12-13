window.onload = function () {
    initCopyrightYear();
    initTheme();
    const sectSel = document.getElementById('section-selector');
    sectSel.addEventListener('change', loadSection);
}

function initCopyrightYear(){
    const estYear = 2023;
    const curYear = new Date().getFullYear()
    const copyright = document.getElementById('copyright');

    copyright.innerHTML += (estYear===curYear)? ` ${estYear}` : ` ${estYear}-${curYear}`;
}

function initTheme(){
    const lightIcon = document.getElementById('light-theme-icon');
    const darkIcon = document.getElementById('dark-theme-icon');
    lightIcon.addEventListener('click', setLightTheme);
    darkIcon.addEventListener('click', setDarkTheme);

    const isPrefDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = (isPrefDark===true) ? "dark" : "light";
    setTheme(theme);
    loadColorTheme(theme);
}

function setLightTheme() {setTheme("light")};
function setDarkTheme() {setTheme("dark")};

function setTheme(theme) {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
    loadColorTheme(theme);
}

function loadColorTheme(theme) {
    const lightIcon = document.getElementById('light-theme-icon');
    const darkIcon = document.getElementById('dark-theme-icon');
    
    if (theme === "dark") {
        lightIcon.setAttribute('src', "icons/sun-unselected.png");
        lightIcon.setAttribute('title', "Set to light theme");
        lightIcon.setAttribute('alt', "Unfilled sun icon");
        darkIcon.setAttribute('src', "icons/moon-selected.png");
        darkIcon.setAttribute('title', "Dark theme is set");
        darkIcon.setAttribute('alt', "Filled moon icon");
    }
    else {
        lightIcon.setAttribute('src', "icons/sun-selected.png");
        lightIcon.setAttribute('title', "Light theme is set");
        lightIcon.setAttribute('alt', "Filled sun icon");
        darkIcon.setAttribute('src', "icons/moon-unselected.png");
        darkIcon.setAttribute('title', "Set to dark theme");
        darkIcon.setAttribute('alt', "Unfilled moon icon");
    }
}

function loadSection() {
    const sectYpos = getSectionY();
    const navHeight = getNavBarHeight();
    const scrollStep = sectYpos - navHeight;
    window.scroll({
        top: window.scrollY+scrollStep,
        behavior: 'smooth'
    })
}

function getSectionY() {
    const sectSel = document.getElementById('section-selector');
    const sectTag = sectSel[sectSel.selectedIndex].value;
    const section = document.getElementById(sectTag);
    return section.getBoundingClientRect().top;
}

function getNavBarHeight() {
    const nav = document.getElementById('navigation-bar');
    return nav.offsetHeight;
}


