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
function generateFiles() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield readFile("src/data.json")
            .then((buffer) => buffer.toString())
            .then((json) => JSON.parse(json));
        const freeCodeCampData = yield readFile("src/freeCodeCampData.json")
            .then((buffer) => buffer.toString())
            .then((json) => JSON.parse(json));
        writeFile("index.html", DOCTYPE + renderToString(_jsx(IndexPage, { data: data })));
        for (let lang of data.langs) {
            writeFile(`${data.pagePrefix}${lang}.html`, DOCTYPE + renderToString(_jsx(DataPage, { data: data, lang: lang })));
        }
    });
}
generateFiles();
