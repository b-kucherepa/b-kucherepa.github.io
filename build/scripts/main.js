"use strict";
window.onload = function () {
    saveLang();
    initCopyrightYear();
    initAge();
    initH1Animation();
    initTheme();
    initNavSelector();
};
function saveLang() {
    localStorage.setItem("lang", document.documentElement.lang);
}
function initCopyrightYear() {
    const estYear = 2023;
    const curYear = new Date().getFullYear();
    const copyright = document.getElementById("copyright");
    if (copyright) {
        copyright.innerHTML +=
            estYear === curYear ? ` ${estYear}` : ` ${estYear}-${curYear}`;
    }
}
function initAge() {
    const msInYear = 31536000000;
    const birthday = new Date(96, 1, 1).getTime();
    const curDate = new Date().getTime();
    const myAge = Math.floor((curDate - birthday) / msInYear);
    const ageCell = document.getElementById("my-age");
    if (ageCell) {
        ageCell.getElementsByTagName("p")[0].innerHTML = myAge.toString();
    }
}
function initH1Animation() {
    window.addEventListener("scroll", animateH1);
}
function initNavSelector() {
    const sectSel = document.getElementById("section-selector");
    sectSel === null || sectSel === void 0 ? void 0 : sectSel.addEventListener("change", loadSection);
}
function removeElemById(element) {
    const domElem = document.getElementById(element);
    if (domElem) {
        domElem.style.display = "none";
    }
}
function restoreElemById(element, displayAs) {
    const domElem = document.getElementById(element);
    if (domElem) {
        domElem.style.display = displayAs;
    }
}
function setTheme(theme) {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
        removeElemById("sel-light-theme-icon");
        restoreElemById("unsel-light-theme-icon", "inline-block");
        restoreElemById("sel-dark-theme-icon", "inline-block");
        removeElemById("unsel-dark-theme-icon");
    }
    else {
        restoreElemById("sel-light-theme-icon", "inline-block");
        removeElemById("unsel-light-theme-icon");
        removeElemById("sel-dark-theme-icon");
        restoreElemById("unsel-dark-theme-icon", "inline-block");
    }
}
function initTheme() {
    const lightIcon = document.getElementById("unsel-light-theme-icon");
    const darkIcon = document.getElementById("unsel-dark-theme-icon");
    lightIcon === null || lightIcon === void 0 ? void 0 : lightIcon.addEventListener("click", () => {
        setTheme("light");
    });
    darkIcon === null || darkIcon === void 0 ? void 0 : darkIcon.addEventListener("click", () => {
        setTheme("dark");
    });
    let theme = localStorage.getItem("theme");
    if (!theme) {
        const isPrefDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        theme = isPrefDark ? "dark" : "light";
    }
    setTheme(theme);
}
function getSectionY() {
    const sectSel = document.getElementById("section-selector");
    if (sectSel) {
        const sectTag = sectSel.selectedOptions[0].value;
        const section = document.getElementById(sectTag);
        if (section) {
            return section.getBoundingClientRect().top;
        }
    }
    return 0;
}
function getNavBarHeight() {
    const nav = document.getElementById("nav-bar");
    return nav ? nav.offsetHeight : 0;
}
function loadSection() {
    const sectScrollY = getSectionY();
    const navHeight = getNavBarHeight();
    const scrollStep = sectScrollY - navHeight;
    window.scroll({
        top: window.scrollY + scrollStep,
        behavior: "smooth",
    });
}
function animateH1() {
    const h1Collection = document.getElementsByTagName("h1");
    const h1Array = Array.from(h1Collection);
    const topmostH1 = h1Array.find((h1) => {
        const h1ScrollY = h1.getBoundingClientRect().top;
        return 0 < h1ScrollY && h1ScrollY < window.innerHeight;
    });
    if (topmostH1) {
        topmostH1.animate([
            { backgroundSize: "100%" },
            { backgroundSize: "400%" },
            { backgroundSize: "200%" },
            { backgroundSize: "100%" },
        ], {
            duration: 1200,
        });
    }
}
