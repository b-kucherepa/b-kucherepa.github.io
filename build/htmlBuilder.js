import { jsx as _jsx } from "react/jsx-runtime";
import { renderToString } from 'react-dom/server';
import { readFile, writeFile } from 'fs/promises';
import Page from './reactComponents/Page.js';
const DOCTYPE = "<!DOCTYPE html>";
const generateFiles = (data) => {
    for (let lang of data.langs) {
        writeFile(`GENERATED${lang}.html`, DOCTYPE + renderToString(_jsx(Page, { data: data, lang: lang })));
    }
};
readFile("src/data.json")
    .then((json) => JSON.parse(json.toString()))
    .then((data) => generateFiles(data));