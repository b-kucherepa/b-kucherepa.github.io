"use strict";
loadLang();
function loadLang() {
    let lang = localStorage.getItem('lang');
    if (!lang) {
        lang = navigator.language ? navigator.language : "en-EN";
    }
    switch (lang.slice(0, 2)) {
        case 'ru':
            window.location.href = "./mainrus.html";
            break;
        default:
            window.location.href = "./maineng.html";
    }
}
