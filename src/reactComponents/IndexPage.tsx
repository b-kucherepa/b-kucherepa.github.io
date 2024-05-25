import IconLink from "./IconLink.js";

function IndexPage(props: { data: any }): JSX.Element {
  const DEFAULT_LANG = props.data.langs[0];

  function buildPageTitle(): string {
    let title: string = props.data.langSelect[DEFAULT_LANG];
    for (let i = 1; i < props.data.langs.length; i++) {
      title += ` / ${props.data.langSelect[props.data.langs[i]].toLowerCase()}`;
    }
    return title;
  }

  function buildPageLocalization(): string {
    return props.data.langs.join(" ");
  }

  return (
    <html lang={buildPageLocalization()}>
      <head className="dark">
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.data.langSelect[DEFAULT_LANG]}</title>
        <meta
          name={props.data.head.title[DEFAULT_LANG]}
          content={props.data.head.description[DEFAULT_LANG]}
        />
        <link
          rel="shortcut icon"
          type="image/icon type"
          href="icons/firebird-logo.svg"
        />
        <link rel="stylesheet" href="styles/main.css" />
        <link rel="stylesheet" href="styles/langselect.css" />
        <script
          type="text/javascript"
          src="build/scripts/langselect.js"
        ></script>
        <noscript>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="styles/noscript.css" />
        </noscript>
      </head>

      <body>
        <noscript>
          <section>
            <h1 lang={buildPageLocalization()}>{buildPageTitle()}</h1>
            <div id="lang-selection">
              {props.data.nav.languages.icons.map(
                (icon: any, index: number) => (
                  <IconLink
                    key={`${icon.lang}-icon-${index}`}
                    id={`${icon.lang}-icon`}
                    class="no-script-lang-icon highlightable"
                    src={props.data.nav.languages.iconDir + icon.file}
                    title={icon.title.unsel}
                    alt={icon.alt[icon.lang]}
                    href={`${props.data.pagePrefix}${icon.lang}.html`}
                  />
                )
              )}
            </div>
          </section>
        </noscript>
      </body>
    </html>
  );
}

export default IndexPage;
