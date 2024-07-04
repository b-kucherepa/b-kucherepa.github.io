import { renderToString } from "react-dom/server";
import { readFile, writeFile } from "fs/promises";
import DataPage from "./reactComponents/DataPage.js";
import IndexPage from "./reactComponents/IndexPage.js";

const DOCTYPE = "<!DOCTYPE html>";

async function generateFiles(): Promise<void> {
  const data = await readFile("src/data.json")
  .then((buffer) => buffer.toString())
  .then((json) => JSON.parse(json));

  const freeCodeCampData = await readFile("src/freeCodeCampData.json")
  .then((buffer) => buffer.toString())
  .then((json) => JSON.parse(json));

  writeFile(
    "index.html",
    DOCTYPE + renderToString(<IndexPage data={data} />)
  );

  for (let lang of data.langs) {
    writeFile(
      `${data.pagePrefix}${lang}.html`,
      DOCTYPE + renderToString(<DataPage data={data} lang={lang} />)
    );
  }
}

generateFiles();