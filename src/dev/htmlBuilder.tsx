import { renderToString } from "react-dom/server";
import { writeFile } from "fs/promises";
import { DATA_FOLDER, loadJson, processLink } from "./utils.js";

import MainPage from "../reactComponents/MainPage.js";
import IndexPage from "../reactComponents/IndexPage.js";
import FreeCodeCampSolutionsPage from "../reactComponents/FreeCodeCampSolutionsPage.js";
import { PageContext } from "../reactComponents/PageContext.js";

const DOCTYPE = "<!DOCTYPE html>";

async function generateFiles(): Promise<void> {
  console.log("Parsing data files...");
  const metaData = await loadJson(DATA_FOLDER + "metaData.json");
  const navData = await loadJson(DATA_FOLDER + "navData.json");
  const indexPageData = await loadJson(DATA_FOLDER + "indexPageData.json");
  const mainPageData = await loadJson(DATA_FOLDER + "mainPageData.json");
  const fccData = await loadJson(DATA_FOLDER + "fccSolutionsData.json");

  console.log("Building index page...");
  writeFile(
    processLink("INDEX_PAGE", metaData.pagePrefixes),
    DOCTYPE +
      renderToString(
        <PageContext.Provider
          value={{
            lang: metaData.langs[0],
            page: indexPageData,
            meta: metaData,
            nav: navData,
          }}
        >
          <IndexPage />
        </PageContext.Provider>
      )
  );

  for (let lang of metaData.langs) {
    console.log("Building " + lang + " main page...");

    writeFile(
      processLink("MAIN_PAGE", metaData.pagePrefixes, lang),
      DOCTYPE +
        renderToString(
          <PageContext.Provider
            value={{
              lang: lang,
              page: mainPageData,
              meta: metaData,
              nav: navData,
            }}
          >
            <MainPage />
          </PageContext.Provider>
        )
    );

    console.log("Building " + lang + " freeCodeCamp solutions page...");

    writeFile(
      processLink("FCC_SOLUTIONS_PAGE", metaData.pagePrefixes, lang),
      DOCTYPE +
        renderToString(
          <PageContext.Provider
            value={{
              lang: lang,
              page: fccData,
              meta: metaData,
            }}
          >
            <FreeCodeCampSolutionsPage />
          </PageContext.Provider>
        )
    );
  }
  console.log("Done!");
}

generateFiles();
