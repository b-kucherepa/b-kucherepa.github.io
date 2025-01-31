import { createContext } from "react";

const dataObject: { lang: string; page: any; meta: any; nav?: any } = {
  lang: "en",
  page: {},
  meta: {},
};

export const PageContext = createContext(dataObject);
