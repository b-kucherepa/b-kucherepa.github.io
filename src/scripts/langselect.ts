function loadLang(): void {
  let lang: string | null = localStorage.getItem("lang") ?? "en-EN";

  const langPrefix: string = lang.slice(0, 2);
  window.location.href = `./${langPrefix}.html`;
}

loadLang();
