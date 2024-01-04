loadLang();

function loadLang() {
    let lang = localStorage.getItem('lang');
    if (!lang) {
        lang = navigator.language ? navigator.language : "en";
    }
    const isRu = lang.includes("ru");
    if (isRu) {
        localStorage.setItem('lang', "ru");
        window.location.href = "./mainrus.html";
    }
    else {
        localStorage.setItem('lang', "en");
        window.location.href = "./maineng.html";
    }
}