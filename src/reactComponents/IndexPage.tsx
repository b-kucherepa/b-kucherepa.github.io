import { processLink } from "../dev/utils.js";
import Head from "./Head.js";
import IconLink from "./IconLink.js";

export default function IndexPage(props: {
  indexData: any;
  mainData: any;
  metaData: any;
  navData: any;
}): JSX.Element {
  const DEFAULT_LANG = props.metaData.langs[0];

  function buildPageTitle(): string {
    let title: string = props.metaData.langSelect[DEFAULT_LANG];
    for (let i = 1; i < props.metaData.langs.length; i++) {
      title += ` / ${props.indexData.langSelect[
        props.metaData.langs[i]
      ].toLowerCase()}`;
    }
    return title;
  }

  function buildPageLocalization(): string {
    return props.metaData.langs.join(" ");
  }

  return (
    <html lang={buildPageLocalization()}>
      <Head data={props.indexData.head}>
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
              {props.navData.languages.icons.map((icon: any, index: number) => (
                <IconLink
                  key={`${icon.lang}-icon-${index}`}
                  id={`${icon.lang}-icon`}
                  class="no-script-lang-icon highlightable"
                  src={props.navData.languages.iconDir + icon.file}
                  title={icon.title.unsel}
                  alt={icon.alt[icon.lang]}
                  href={processLink(
                    "MAIN_PAGE",
                    props.metaData.pagePrefixes,
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
