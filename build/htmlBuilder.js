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
import { readFile, writeFile } from "fs/promises";
import DataPage from "./reactComponents/DataPage.js";
import IndexPage from "./reactComponents/IndexPage.js";
const DOCTYPE = "<!DOCTYPE html>";
const dataFolder = "src/data/";
function generateFiles() {
    return __awaiter(this, void 0, void 0, function* () {
        const metaData = yield readFile(dataFolder + "metaData.json")
            .then((buffer) => buffer.toString())
            .then((json) => JSON.parse(json));
        const navData = yield readFile(dataFolder + "navData.json")
            .then((buffer) => buffer.toString())
            .then((json) => JSON.parse(json));
        const indexData = yield readFile(dataFolder + "indexData.json")
            .then((buffer) => buffer.toString())
            .then((json) => JSON.parse(json));
        const mainData = yield readFile(dataFolder + "mainData.json")
            .then((buffer) => buffer.toString())
            .then((json) => JSON.parse(json));
        writeFile(`${mainData.pagePrefix}.html`, DOCTYPE +
            renderToString(_jsx(IndexPage, { indexData: indexData, mainData: mainData, metaData: metaData, navData: navData })));
        for (let lang of metaData.langs) {
            writeFile(`${mainData.pagePrefix}${lang}.html`, DOCTYPE +
                renderToString(_jsx(DataPage, { mainData: mainData, metaData: metaData, navData: navData, lang: lang })));
        }
    });
}
generateFiles();
