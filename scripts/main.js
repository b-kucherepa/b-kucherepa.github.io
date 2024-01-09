window.onload = function () {
    saveLang();
    initCopyrightYear();
    initAge();
    initH1Animation();
    initTheme();
    initNavSelector();
}

function saveLang() {
    localStorage.setItem('lang', document.documentElement.lang);
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
    const myAge = Math.ceil((curDate - birthday) / msInYear);
    const ageLine = document.getElementById('my-age');
    ageLine.innerHTML = myAge;
}

function initH1Animation() {
    window.addEventListener('scroll', animateH1);
}

function initTheme() {
    const lightIcon = document.getElementById('unsel-light-theme-icon');
    const darkIcon = document.getElementById('unsel-dark-theme-icon');
    lightIcon.addEventListener('click', () => { setTheme("light"); });
    darkIcon.addEventListener('click', () => { setTheme("dark"); });

    let theme = localStorage.getItem('theme');
    if (!theme) {
        const isPrefDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        theme = (isPrefDark === true) ? "dark" : "light";
    }
    setTheme(theme);
}

function initNavSelector() {
    const sectSel = document.getElementById('section-selector');
    sectSel.addEventListener('change', loadSection);
}

function setTheme(theme) {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);

    if (theme === "dark") {
        removeElemById('sel-light-theme-icon');
        restoreElemById('unsel-light-theme-icon', 'inline-block');
        restoreElemById('sel-dark-theme-icon', 'inline-block');
        removeElemById('unsel-dark-theme-icon');
    }
    else {
        restoreElemById('sel-light-theme-icon', 'inline-block');
        removeElemById('unsel-light-theme-icon');
        removeElemById('sel-dark-theme-icon');
        restoreElemById('unsel-dark-theme-icon', 'inline-block');
    }
}

function removeElemById(element) {
    const domElem = document.getElementById(element);
    domElem.style.display = 'none';
}

function restoreElemById(element, option) {
    const domElem = document.getElementById(element);
    domElem.style.display = option;
}

function loadSection() {
    const sectScrollY = getSectionY();
    const navHeight = getNavBarHeight();
    const scrollStep = sectScrollY - navHeight;
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

function animateH1() {
    const h1Array = document.getElementsByTagName('h1');
    for (const h1 of h1Array) {
        const h1ScrollY = h1.getBoundingClientRect().top;
        if (0 < h1ScrollY && h1ScrollY < window.innerHeight) {
            h1.animate([
                { backgroundSize: '100%' },
                { backgroundSize: '400%' },
                { backgroundSize: '200%' },
                { backgroundSize: '100%' }],
                {
                    duration: 1200,
                })
        }
    }
}