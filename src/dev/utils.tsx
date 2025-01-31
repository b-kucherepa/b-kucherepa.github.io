import { readFile } from "fs/promises";

export const DATA_FOLDER = "src/data/";

export function processLink(
  rawLink: string,
  pagePrefixes: any,
  lang?: string
): string {
  switch (rawLink) {
    case "INDEX_PAGE":
      return `${pagePrefixes.index}.html`;
    case "MAIN_PAGE":
      return `${pagePrefixes.main}-${lang}.html`;
    case "FCC_SOLUTIONS_PAGE":
      return `${pagePrefixes.fccSolutions}-${lang}.html`;
    default:
      return rawLink;
  }
}

export function getLinkIconClass(link: string): string {
  try {
    const domain: string = new URL(link).hostname;
    switch (domain) {
      case "github.com":
        return "fab fa-github";
      case "linkedin.com":
      case "www.linkedin.com":
        return "fab fa-linkedin";
      case "t.me":
        return "fab fa-telegram";
      case "discord.com":
        return "fab fa-discord";
      case "amazon.com":
      case "www.amazon.com":
        return "fab fa-amazon";
      case "b-kucherepa.github.io":
      case "":
        return "fa fa-link";
      default:
        return "fa fa-external-link";
    }
  } catch {
    if (link.substring(-9) === "gmail.com") {
      return "fab fa-envelope"; 
    }
    else {
      return "fa fa-link";
    }
  }
}

export async function loadJson(filePath: string) {
  return await readFile(filePath)
    .then((buffer) => buffer.toString())
    .then((json) => JSON.parse(json));
}
