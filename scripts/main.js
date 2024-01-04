window.onload = function () {
    saveLang();
    initCopyrightYear();
    initAge();
    initH1Animation();
    initTheme();
    initNavSelector();
}

function initCopyrightYear() {
    const estYear = 2023;
    const curYear = new Date().getFullYear();
    const copyright = document.getElementById('copyright');
    copyright.innerHTML += (estYear === curYear) ? ` ${estYear}` : ` ${estYear}-${curYear}`;
}

function initAge() {
    const msInYear = 31536000000;
    const birthday = new Date(96, 1, 1); //CHANGE!
    const curDate = new Date();
    const myAge = Math.floor((curDate - birthday) / msInYear);
    const ageLine = document.getElementById('my-age');
    ageLine.innerHTML = myAge;
}

function initH1Animation() {
    window.addEventListener('scroll', animateH);
}

function initTheme() {
    const lightIcon = document.getElementById('unsel-light-theme-icon');
    const darkIcon = document.getElementById('unsel-dark-theme-icon');
    lightIcon.addEventListener('click', setLightTheme);
    darkIcon.addEventListener('click', setDarkTheme);

    let theme = localStorage.getItem('theme');
    if (!theme) {
        const isPrefDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        theme = (isPrefDark === true) ? "dark" : "light";
    }
    setTheme(theme);
    loadColorTheme(theme);
}

function saveLang() {
    console.log(document.documentElement.lang);
    localStorage.setItem('lang', document.documentElement.lang);
}

function initNavSelector() {
    const sectSel = document.getElementById('section-selector');
    sectSel.addEventListener('change', loadSection);
}

function setLightTheme() { setTheme("light") };
function setDarkTheme() { setTheme("dark") };

function setTheme(theme) {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
    loadColorTheme(theme);
}

function loadColorTheme(theme) {
    const selLightIcon = document.getElementById('sel-light-theme-icon');
    const unselLightIcon = document.getElementById('unsel-light-theme-icon');
    const selDarkIcon = document.getElementById('sel-dark-theme-icon');
    const unselDarkIcon = document.getElementById('unsel-dark-theme-icon');

    if (theme === "dark") {
        selLightIcon.style.display = 'none';
        unselLightIcon.style.display = 'inline-block';
        selDarkIcon.style.display = 'inline-block';
        unselDarkIcon.style.display = 'none';
    }
    else {
        selLightIcon.style.display = 'inline-block';
        unselLightIcon.style.display = 'none';
        selDarkIcon.style.display = 'none';
        unselDarkIcon.style.display = 'inline-block';
    }
}

function loadSection() {
    const sectYpos = getSectionY();
    const navHeight = getNavBarHeight();
    const scrollStep = sectYpos - navHeight;
    window.scroll({
        top: window.scrollY + scrollStep,
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

function animateH() {
    const hArray = document.getElementsByTagName('h1');
    for (const h of hArray) {
        const hRelY = h.getBoundingClientRect().top;
        if (0 < hRelY && hRelY < window.innerHeight) {
            h.animate([
                { backgroundSize: '100%' },
                { backgroundSize: '400%' },
                { backgroundSize: '200%' },
                { backgroundSize: '100%' }
            ],
                {
                    duration: 1000,
                })
        }
    }
}


