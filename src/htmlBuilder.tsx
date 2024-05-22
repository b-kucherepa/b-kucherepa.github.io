import { renderToString } from "react-dom/server";
import { readFile, writeFile } from "fs/promises";
import Page from "./reactComponents/Page.js";

const DOCTYPE = "<!DOCTYPE html>";

function generateFiles (data: any): void {
  for (let lang of data.langs) {
    writeFile(
      `${data.pagePrefix}${lang}.html`,
      DOCTYPE + renderToString(<Page data={data} lang={lang}/>)
    );
  }
};
 
readFile("src/data.json")
  .then((json) => JSON.parse(json.toString()))
  .then((data) => generateFiles(data));
