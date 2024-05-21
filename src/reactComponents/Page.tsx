import Head from "./Head.js";
import IconLink from "./IconLink.js";
import Jumper from "./Jumper.js";
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
): [value: string, text: string][] => sections.map((s) => [s.id, s.title[lang]]);

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
                selectTitle={data.nav.jumper.selectTitle}
                anchors={parseJumperAnchors(data.sections, l)}
              />
            </nav>
          </header>
          <main></main>
          <footer></footer>
        </body>
      </html>
    </>
  );
}

const displaySegments = (segment: any) => {};

/*
t - text
r - resources
g - grid
------
s - section header
h - header
p - paragraph
l - link {text, url}
q - quote {text. author}
a - age (interactive)
*/

export default Page;
