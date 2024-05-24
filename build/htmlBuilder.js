import { jsx as _jsx } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { readFile, writeFile } from "fs/promises";
import DataPage from "./reactComponents/DataPage.js";
import IndexPage from "./reactComponents/IndexPage.js";
const DOCTYPE = "<!DOCTYPE html>";
function generateFiles(data) {
    writeFile("index.html", DOCTYPE + renderToString(_jsx(IndexPage, { data: data })));
    for (let lang of data.langs) {
        writeFile(`${data.pagePrefix}${lang}.html`, DOCTYPE + renderToString(_jsx(DataPage, { data: data, lang: lang })));
    }
}
readFile("src/data.json")
    .then((buffer) => buffer.toString())
    .then((json) => JSON.parse(json))
    .then((data) => generateFiles(data));
