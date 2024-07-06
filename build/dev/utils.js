var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { readFile } from "fs/promises";
export const DATA_FOLDER = "src/data/";
export function processLink(rawLink, pagePrefixes, lang) {
    switch (rawLink) {
        case "INDEX_PAGE":
            return `${pagePrefixes.index}.html`;
        case "MAIN_PAGE":
            return `${pagePrefixes.main}-${lang}.html`;
        case "FCC_SOLUTIONS_PAGE":
            return `${pagePrefixes.fccSolutions}-${lang}.html`;
        default:
            return rawLink;
    }
}
export function loadJson(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield readFile(filePath)
            .then((buffer) => buffer.toString())
            .then((json) => JSON.parse(json));
    });
}
