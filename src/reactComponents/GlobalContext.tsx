import { createContext } from "react";

export const GlobalContext = createContext({
  lang: "en",
  defaultLang: "en",
  navBarHeight: 0,
  pagePrefixes: {},
});
