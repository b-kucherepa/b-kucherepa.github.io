var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { writeFile } from "fs/promises";
import { DATA_FOLDER, loadJson, processLink } from "./utils.js";
import MainPage from "../reactComponents/MainPage.js";
import IndexPage from "../reactComponents/IndexPage.js";
import FreeCodeCampSolutionsPage from "../reactComponents/FreeCodeCampSolutionsPage.js";
const DOCTYPE = "<!DOCTYPE html>";
function generateFiles() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Parsing data files...");
        const metaData = yield loadJson(DATA_FOLDER + "metaData.json");
        const navData = yield loadJson(DATA_FOLDER + "navData.json");
        const indexData = yield loadJson(DATA_FOLDER + "indexPageData.json");
        const mainData = yield loadJson(DATA_FOLDER + "mainPageData.json");
        const fccData = yield loadJson(DATA_FOLDER + "fccSolutionsData.json");
        console.log("Building index page...");
        writeFile(processLink("INDEX_PAGE", metaData.pagePrefixes), DOCTYPE +
            renderToString(_jsx(IndexPage, { indexData: indexData, mainData: mainData, metaData: metaData, navData: navData })));
        for (let lang of metaData.langs) {
            console.log("Building " + lang + " main page...");
            writeFile(processLink("MAIN_PAGE", metaData.pagePrefixes, lang), DOCTYPE +
                renderToString(_jsx(MainPage, { mainData: mainData, metaData: metaData, navData: navData, lang: lang })));
            console.log("Building " + lang + " freeCodeCamp solutions page...");
            writeFile(processLink("FCC_SOLUTIONS_PAGE", metaData.pagePrefixes, lang), DOCTYPE +
                renderToString(_jsx(FreeCodeCampSolutionsPage, { fccData: fccData, metaData: metaData, lang: lang })));
        }
        console.log("Done!");
    });
}
generateFiles();
