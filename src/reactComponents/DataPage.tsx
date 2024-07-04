import { createContext } from "react";
import Copyright from "./Copyright.js";
import Head from "./Head.js";
import NavBar from "./NavBar.js";
import Section from "./Section.js";

export const GlobalContext = createContext({
  lang: "en",
  defaultLang: "en",
  pagePrefix: "",
  navBarHeight: 0,
});

function DataPage(props: { mainData: any, metaData:any, navData: any, lang: string }): JSX.Element {
  return (
    <GlobalContext.Provider
      value={{
        lang: props.lang,
        defaultLang: props.metaData.langs[0],
        pagePrefix: props.metaData.pagePrefix,
        navBarHeight: props.navData.height,
      }}
    >
      <html lang={props.lang}>
        <Head data={props.mainData.head} />
        <body>
          <header>
            <NavBar data={props.navData} sections={props.mainData.sections} />
          </header>
          <main>
            {props.mainData.sections.map((section: any) => (
              <Section key={`section-${section.id}`} data={section} />
            ))}
          </main>
          <footer>
            <Copyright data={props.metaData.copyright} />
          </footer>
        </body>
      </html>
    </GlobalContext.Provider>
  );
}

export default DataPage;
