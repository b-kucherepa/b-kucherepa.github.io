import { useContext } from "react";
import { processLink } from "../dev/utils.js";
import Head from "./Head.js";
import IconLink from "./IconLink.js";
import { PageContext } from "./PageContext.js";

export default function IndexPage(): JSX.Element {
  const data = useContext(PageContext);

  function buildPageTitle(): string {
    let title: string = data.page.langSelect[data.meta.langs[0]];
    for (let i = 1; i < data.meta.langs.length; i++) {
      title += ` / ${data.page.langSelect[data.meta.langs[i]].toLowerCase()}`;
    }
    return title;
  }

  function buildPageLocalization(): string {
    return data.meta.langs.join(" ");
  }

  return (
    <html lang={buildPageLocalization()}>
      <Head>
        <link rel="stylesheet" href="styles/main.css" />
        <link rel="stylesheet" href="styles/langselect.css" />
        <script
          type="text/javascript"
          src="build/scripts/langselect.js"
        ></script>
      </Head>

      <body>
        <noscript>
          <section>
            <h1 lang={buildPageLocalization()}>{buildPageTitle()}</h1>
            <div id="lang-selection">
              {data.nav.languages.icons.map((icon: any, index: number) => (
                <IconLink
                  key={`${icon.lang}-icon-${index}`}
                  id={`${icon.lang}-icon`}
                  class="no-script-lang-icon highlightable"
                  src={data.nav.languages.iconDir + icon.file}
                  title={icon.title.unsel}
                  alt={icon.alt[icon.lang]}
                  href={processLink(
                    "MAIN_PAGE",
                    data.meta.pagePrefixes,
                    icon.lang
                  )}
                />
              ))}
            </div>
          </section>
        </noscript>
      </body>
    </html>
  );
}
