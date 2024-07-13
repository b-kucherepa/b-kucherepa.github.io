import { useContext } from "react";
import { PageContext } from "./PageContext.js";
import Copyright from "./Copyright.js";
import Head from "./Head.js";
import NavBar from "./NavBar.js";
import Section from "./Section.js";

export default function MainPage(): JSX.Element {
  const data = useContext(PageContext);
  return (
    <html lang={data.lang}>
      <Head />
      <body>
        <header>
          <NavBar />
        </header>
        <main>
          {data.page.sections.map((section: any) => (
            <Section key={`section-${section.id}`} data={section} />
          ))}
        </main>
        <footer>
          <Copyright />
        </footer>
      </body>
    </html>
  );
}
