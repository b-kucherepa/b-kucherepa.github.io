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

function DataPage(props: { data: any; lang: string }): JSX.Element {
  return (
    <GlobalContext.Provider
      value={{
        lang: props.lang,
        defaultLang: props.data.langs[0],
        pagePrefix: props.data.pagePrefix,
        navBarHeight: props.data.nav.height,
      }}
    >
      <html lang={props.lang}>
        <Head data={props.data.head} />
        <body>
          <header>
            <NavBar data={props.data.nav} sections={props.data.sections} />
          </header>
          <main>
            {props.data.sections.map((section: any) => (
              <Section key={`section-${section.id}`} data={section} />
            ))}
          </main>
          <footer>
            <Copyright data={props.data.copyright} />
          </footer>
        </body>
      </html>
    </GlobalContext.Provider>
  );
}

export default DataPage;
