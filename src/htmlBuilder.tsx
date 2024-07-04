import { renderToString } from "react-dom/server";
import { readFile, writeFile } from "fs/promises";
import DataPage from "./reactComponents/DataPage.js";
import IndexPage from "./reactComponents/IndexPage.js";

const DOCTYPE = "<!DOCTYPE html>";
const dataFolder = "src/data/";

async function generateFiles(): Promise<void> {
  const metaData = await readFile(dataFolder + "metaData.json")
    .then((buffer) => buffer.toString())
    .then((json) => JSON.parse(json));

  const navData = await readFile(dataFolder + "navData.json")
    .then((buffer) => buffer.toString())
    .then((json) => JSON.parse(json));

  const indexData = await readFile(dataFolder + "indexData.json")
    .then((buffer) => buffer.toString())
    .then((json) => JSON.parse(json));

  const mainData = await readFile(dataFolder + "mainData.json")
    .then((buffer) => buffer.toString())
    .then((json) => JSON.parse(json));

  writeFile(
    `${mainData.pagePrefix}.html`,
    DOCTYPE +
      renderToString(
        <IndexPage
          indexData={indexData}
          mainData={mainData}
          metaData={metaData}
          navData={navData}
        />
      )
  );

  for (let lang of metaData.langs) {
    writeFile(
      `${mainData.pagePrefix}${lang}.html`,
      DOCTYPE +
        renderToString(
          <DataPage
            mainData={mainData}
            metaData={metaData}
            navData={navData}
            lang={lang}
          />
        )
    );
  }
}

generateFiles();
