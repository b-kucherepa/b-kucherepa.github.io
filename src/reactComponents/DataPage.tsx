import Copyright from "./Copyright.js";
import Head from "./Head.js";
import NavBar from "./NavBar.js";
import Section from "./Section.js";

function DataPage(props: { data: any; lang: string }): JSX.Element {
  return (
    <>
      <html lang={props.lang}>
        <Head data={props.data.head} lang={props.lang} />
        <body>
          <header>
            <NavBar
              data={props.data.nav}
              lang={props.lang}
              sections={props.data.sections}
              pagePrefix={props.data.pagePrefix}
            />
          </header>
          <main>
            {props.data.sections.map((section: any) => (
              <Section
                key={`section-${section.id}`}
                data={section}
                lang={props.lang}
              />
            ))}
          </main>
          <footer>
            <Copyright data={props.data.copyright} lang={props.lang} />
          </footer>
        </body>
      </html>
    </>
  );
}

export default DataPage;
