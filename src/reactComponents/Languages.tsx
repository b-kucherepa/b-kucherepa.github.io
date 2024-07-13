import { processLink } from "../dev/utils.js";
import { useContext } from "react";
import { PageContext } from "./PageContext.js";

import IconLink from "./IconLink.js";

export default function Languages(props: { iconHeight: number }): JSX.Element {
  const data = useContext(PageContext);

  const SEL_CLASS: string = "lang-icon str-outlined";
  const UNSEL_CLASS: string = "lang-icon highlightable";

  return (
    <label className="nav-item">
      {data.nav.languages.label[data.lang] ??
        data.nav.languages.label[data.meta.langs[0]]}
      <div className="menu-element">
        {data.nav.languages.icons.map((icon: any, index: number) => {
          const isSet: boolean = icon.lang === data.lang;
          return (
            <IconLink
              key={`${icon.lang}-icon-${index}`}
              id={`${icon.lang}-icon`}
              class={isSet ? SEL_CLASS : UNSEL_CLASS}
              src={data.nav.languages.iconDir + icon.file}
              height={props.iconHeight}
              title={isSet ? icon.title.sel : icon.title.unsel}
              alt={icon.alt[data.lang] ?? icon.alt[data.meta.langs[0]]}
              href={
                isSet
                  ? ""
                  : processLink("MAIN_PAGE", data.meta.pagePrefixes, icon.lang)
              }
            />
          );
        })}
      </div>
    </label>
  );
}
