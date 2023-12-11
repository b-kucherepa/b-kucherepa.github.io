loadLang();

function loadLang () {
    const lang = navigator.language ? navigator.language : "en";
    const isRu = lang.includes("ru");
    if (isRu)
    {
        window.location.href = "./mainrus.html";
    }
    else
    {
        window.location.href = "./maineng.html";
    }
}