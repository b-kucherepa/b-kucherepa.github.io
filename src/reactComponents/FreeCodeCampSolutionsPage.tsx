import { GlobalContext } from "./GlobalContext.js";
import Copyright from "./Copyright.js";
import Head from "./Head.js";
import Section from "./Section.js";

export default function FreeCodeCampSolutionsPage(props: {
  metaData: any;
  fccData: any;
  lang: string;
}): JSX.Element {
  return (
    <GlobalContext.Provider
      value={{
        lang: props.lang,
        defaultLang: props.metaData.langs[0],
        navBarHeight: 0,
        pagePrefixes: props.metaData.pagePrefixes,
      }}
    >
      <html lang={props.lang}>
        <Head data={props.fccData.head} />
        <body>
          <main>
            {props.fccData.sections.map((section: any) => (
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
