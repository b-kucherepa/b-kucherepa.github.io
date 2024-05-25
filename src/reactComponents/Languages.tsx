import { useContext } from "react";
import { GlobalContext } from "./DataPage.js";

import IconLink from "./IconLink.js";

function Languages(props: { data: any; iconHeight: number }): JSX.Element {
  const globals = useContext(GlobalContext);

  const SEL_CLASS: string = "lang-icon str-outlined";
  const UNSEL_CLASS: string = "lang-icon highlightable";

  return (
    <label className="nav-item">
      {props.data.label[globals.lang] + " "}
      <div className="menu-element">
        {props.data.icons.map((icon: any, index: number) => {
          const isSet: boolean = icon.lang === globals.lang;
          return (
            <IconLink
              key={`${icon.lang}-icon-${index}`}
              id={`${icon.lang}-icon`}
              class={isSet ? SEL_CLASS : UNSEL_CLASS}
              src={props.data.iconDir + icon.file}
              height={props.iconHeight}
              title={isSet ? icon.title.sel : icon.title.unsel}
              alt={icon.alt[globals.lang] ?? icon.alt[globals.defaultLang]}
              href={isSet ? "" : `${globals.pagePrefix}${icon.lang}.html`}
            />
          );
        })}
      </div>
    </label>
  );
}

export default Languages;
