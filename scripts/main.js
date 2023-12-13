window.onload = function () {
    initJsOnlyElements();
    initCopyrightYear()
    const sectSel = document.getElementById('section-selector');
    sectSel.addEventListener('change', loadSection);
}

function initJsOnlyElements() {
    const jsOnlyElements = document.getElementsByClassName('jsOnly');
    for (let element of jsOnlyElements) {
        element.style.display = 'contents';
    }
}

function initCopyrightYear(){
    const estYear = 2023;
    const curYear = new Date().getFullYear()
    const copyright = document.getElementById('copyright');

    copyright.innerHTML += (estYear===curYear)? ` ${estYear}` : ` ${estYear}-${curYear}`;
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


