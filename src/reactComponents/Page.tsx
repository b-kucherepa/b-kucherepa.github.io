import Copyright from "./Copyright.js";
import Head from "./Head.js";
import NavBar from "./NavBar.js";
import Section from "./Section.js";

function Page(props: any) {
  const lang = props.lang;
  const data = props.data;
  return (
    <>
      <html lang={props.lang}>
        <Head
          title={data.head.title[lang]}
          description={data.head.description[lang]}
        />
        <body>
          <header>
            <NavBar
              data={data.nav}
              lang={lang}
              sections={data.sections}
              pagePrefix={data.pagePrefix}
            />
          </header>
          <main>
            {data.sections.map((s: any) => (
              <Section data={s} lang={lang} />
            ))}
          </main>
          <footer>
            <Copyright data={data.copyright} lang={lang} />
          </footer>
        </body>
      </html>
    </>
  );
}

export default Page;
