import Copyright from "./Copyright.js";
import Head from "./Head.js";
import IconLink from "./IconLink.js";
import Jumper from "./Jumper.js";
import Languages from "./Languages.js";
import Themes from "./Themes.js";

const parseThemeIcons = (
  icons: any[],
  iDir: string,
  iHeight: string,
  lang: string
): React.ReactNode[] =>
  icons.map((i) => (
    <IconLink
      key={i.id}
      id={i.id}
      class={i.class}
      src={iDir + i.file}
      height={iHeight}
      title={i.title[lang]}
      alt={i.alt[lang]}
    />
  ));

const parseJumperAnchors = (
  sections: any[],
  lang: string
): [value: string, text: string][] =>
  sections.map((s) => [s.id, s.title[lang]]);

const parseLanguageIcons = (
  icons: any[],
  iDir: string,
  iHeight: string,
  pageLang: string,
  pageFilePrefix: string
): React.ReactNode[] =>
  icons.map((i) => {
    const isSet: boolean = i.lang === pageLang;
    return (
      <IconLink
        key={`${i.lang}-icon`}
        id={`${i.lang}-icon`}
        class={isSet ? i.class.sel : i.class.unsel}
        src={iDir + i.file}
        height={iHeight}
        title={isSet ? i.title.sel : i.title.unsel}
        alt={i.alt[pageLang]}
        href={isSet ? null : `${pageFilePrefix}${i.lang}.html`}
      />
    );
  });

/*const parseSections = (sections: any[], lang: string): React.ReactNode[] => {
  enum sectionType {
    t, //text
    r, //resources
    g, //grid
  }
  return sections.map((s)=> {

  });
};

const parseSegments = (segment: any) => {
  enum segmentType {
    s, //section header
    h, //header
    p, //paragraph
    l, //link {text, url}
    q, //quote {text. author}
    a, //age (interactive)
  }
};*/

function Page(props: any) {
  const l = props.lang;
  const data = props.data;
  return (
    <>
      <html lang={props.lang}>
        <Head
          title={data.head.title[l]}
          description={data.head.description[l]}
        />
        <body>
          <header>
            <nav id="nav-bar">
              <Themes label={data.nav.themes.label[l]}>
                {parseThemeIcons(
                  data.nav.themes.icons,
                  data.links.themeIcons,
                  data.nav.iconHeight,
                  l
                )}
              </Themes>
              <Jumper
                label={data.nav.jumper.label[l]}
                selectTitle={data.nav.jumper.selectTitle[l]}
                anchors={parseJumperAnchors(data.sections, l)}
              />
              <Languages label={data.nav.languages.label[l]}>
                {parseLanguageIcons(
                  data.nav.languages.icons,
                  data.links.langIcons,
                  data.nav.iconHeight,
                  l,
                  data.pageFilePrefix
                )}
              </Languages>
            </nav>
          </header>
          <main></main>
          <footer>
            <Copyright author={data.copyright[l]} />
          </footer>
        </body>
      </html>
    </>
  );
}

export default Page;
