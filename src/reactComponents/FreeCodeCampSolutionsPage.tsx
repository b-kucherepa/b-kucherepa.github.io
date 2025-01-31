import { useContext } from "react";
import Copyright from "./Copyright.js";
import Head from "./Head.js";
import Section from "./Section.js";
import { PageContext } from "./PageContext.js";

export default function FreeCodeCampSolutionsPage(): JSX.Element {
  const data = useContext(PageContext);

  return (
    <html lang={data.lang}>
      <Head />
      <body>
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
