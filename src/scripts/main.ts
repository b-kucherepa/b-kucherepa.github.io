window.onload = function () {
  saveLang();
  initCopyrightYear();
  initAge();
  initH1Animation();
  initTheme();
  initNavSelector();
};

function saveLang(): void {
  localStorage.setItem("lang", document.documentElement.lang);
}

function initCopyrightYear(): void {
  const estYear: number = 2023;
  const curYear: number = new Date().getFullYear();
  const copyright: HTMLElement | null = document.getElementById("copyright");

  if (copyright) {
    copyright.innerHTML +=
      estYear === curYear ? ` ${estYear}` : ` ${estYear}-${curYear}`;
  }
}

function initAge(): void {
  const msInYear: number = 31536000000;
  const birthday: number = new Date(96, 1, 1).getTime();
  const curDate: number = new Date().getTime();
  const myAge: number = Math.floor((curDate - birthday) / msInYear);
  const ageCell: HTMLElement | null = document.getElementById("my-age");

  if (ageCell) {
    ageCell.getElementsByTagName("p")[0].innerHTML = myAge.toString();
  }
}

function initH1Animation(): void {
  window.addEventListener("scroll", animateH1);
}

function initNavSelector(): void {
  const sectSel: HTMLElement | null =
    document.getElementById("section-selector");
  sectSel?.addEventListener("change", loadSection);
}

function removeElemById(element: string): void {
  const domElem: HTMLElement | null = document.getElementById(element);

  if (domElem) {
    domElem.style.display = "none";
  }
}

function restoreElemById(element: string, displayAs: string): void {
  const domElem: HTMLElement | null = document.getElementById(element);

  if (domElem) {
    domElem.style.display = displayAs;
  }
}

function setTheme(theme: string): void {
  document.documentElement.className = theme;
  localStorage.setItem("theme", theme);

  if (theme === "dark") {
    removeElemById("sel-light-theme-icon");
    restoreElemById("unsel-light-theme-icon", "inline-block");
    restoreElemById("sel-dark-theme-icon", "inline-block");
    removeElemById("unsel-dark-theme-icon");
  } else {
    restoreElemById("sel-light-theme-icon", "inline-block");
    removeElemById("unsel-light-theme-icon");
    removeElemById("sel-dark-theme-icon");
    restoreElemById("unsel-dark-theme-icon", "inline-block");
  }
}

function initTheme(): void {
  const lightIcon: HTMLElement | null = document.getElementById(
    "unsel-light-theme-icon"
  );
  const darkIcon: HTMLElement | null = document.getElementById(
    "unsel-dark-theme-icon"
  );
  lightIcon?.addEventListener("click", () => {
    setTheme("light");
  });
  darkIcon?.addEventListener("click", () => {
    setTheme("dark");
  });

  let theme: string | null = localStorage.getItem("theme");
  if (!theme) {
    const isPrefDark: boolean = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    theme = isPrefDark ? "dark" : "light";
  }
  setTheme(theme);
}

function getSectionY(): number {
  const sectSel: HTMLSelectElement | null = document.getElementById(
    "section-selector"
  ) as HTMLSelectElement;

  if (sectSel) {
    const sectTag: string = sectSel.selectedOptions[0].value;
    const section: HTMLElement | null = document.getElementById(sectTag);

    if (section) {
      return section.getBoundingClientRect().top;
    }
  }
  return 0;
}

function getNavBarHeight(): number {
  const nav: HTMLElement | null = document.getElementById("nav-bar");
  return nav ? nav.offsetHeight : 0;
}

function loadSection(): void {
  const sectScrollY: number = getSectionY();
  const navHeight: number = getNavBarHeight();
  const scrollStep: number = sectScrollY - navHeight;

  window.scroll({
    top: window.scrollY + scrollStep,
    behavior: "smooth",
  });
}

function animateH1(): void {
  const h1Collection: HTMLCollectionOf<HTMLHeadingElement> =
    document.getElementsByTagName("h1");
  const h1Array: HTMLHeadingElement[] = Array.from(h1Collection);

  const topmostH1: HTMLHeadingElement | undefined = h1Array.find((h1) => {
    const h1ScrollY: number = h1.getBoundingClientRect().top;
    return 0 < h1ScrollY && h1ScrollY < window.innerHeight;
  });

  if (topmostH1) {
    topmostH1.animate(
      [
        { backgroundSize: "100%" },
        { backgroundSize: "400%" },
        { backgroundSize: "200%" },
        { backgroundSize: "100%" },
      ],
      {
        duration: 1200,
      }
    );
  }
}
