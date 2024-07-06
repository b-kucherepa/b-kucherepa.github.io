"use strict";
function loadLang() {
    var _a;
    let lang = (_a = localStorage.getItem("lang")) !== null && _a !== void 0 ? _a : "en-EN";
    const langPrefix = lang.slice(0, 2);
    window.location.href = `./main-${langPrefix}.html`;
}
loadLang();
