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

export async function loadJson(filePath: string) {
  return await readFile(filePath)
    .then((buffer) => buffer.toString())
    .then((json) => JSON.parse(json));
}
