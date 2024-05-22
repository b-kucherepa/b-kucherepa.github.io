import { ReactElement, createElement } from "react";
import Copyright from "./Copyright.js";
import Head from "./Head.js";
import IconLink from "./IconLink.js";
import Jumper from "./Jumper.js";
import Languages from "./Languages.js";
import Paragraph from "./Paragraph.js";
import Section from "./Section.js";
import Themes from "./Themes.js";
import React from "react";
import Segment from "./Segment.js";

const parseThemeIcons = (
  icons: any[],
  iDir: string,
  iHeight: string,
  lang: string
): ReactElement[] =>
  icons.map((i) => (
    <IconLink
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
  sections.map((s) => [s.id, s.header[lang]]);

const parseLanguageIcons = (
  icons: any[],
  iDir: string,
  iHeight: string,
  pageLang: string,
  pageFilePrefix: string
): ReactElement[] =>
  icons.map((i) => {
    const isSet: boolean = i.lang === pageLang;
    return (
      <IconLink
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

const parseSections = (sections: any[], lang: string): ReactElement => {
  return (
    <>
      {sections.map((s) => {
        return (
          <Section id={s.id} header={s.header[lang]}>
            {parseSegment(s.segments, lang)}
          </Section>
        );
      })}
    </>
  );
};

const parseSegment = (segments: any[], lang: string): ReactElement[] =>
  segments.map((s) => {
    switch (s.type) {
      case "empty":
        return <>{parseElement(s.elements, lang)}</>;
      case "general":
        return <Segment header={s.header[lang]}>{parseElement(s.elements, lang)}</Segment>;
      default:
        throw "No such type!";
    }
  });

const parseElement = (elements: any[], lang: string): ReactElement[] =>
  elements.map((e) => {
    switch (e.type) {
      case "paragraph":
        return <Paragraph text={e.text[lang]}></Paragraph>;
      default:
        throw "No such type!";
    }
  });

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
          <main>{parseSections(data.sections,l)}</main>
          <footer>
            <Copyright author={data.copyright[l]} />
          </footer>
        </body>
      </html>
    </>
  );
}

export default Page;
