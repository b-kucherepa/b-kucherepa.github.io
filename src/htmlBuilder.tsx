import { renderToString } from "react-dom/server";
import { readFile, writeFile } from "fs/promises";
import Page from "./reactComponents/Page.js";

const FILE_PREFIX = "GENERATED";
const DOCTYPE = "<!DOCTYPE html>";

const generateFiles = (data: any): void => {
  for (let lang of data.langs) {
    writeFile(
      `${FILE_PREFIX}${lang}.html`,
      DOCTYPE + renderToString(<Page data={data} lang={lang} />)
    );
  }
};

readFile("src/data.json")
  .then((json) => JSON.parse(json.toString()))
  .then((data) => generateFiles(data));
