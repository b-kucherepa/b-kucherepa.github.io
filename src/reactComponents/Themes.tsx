import { useContext } from "react";
import { GlobalContext } from "./DataPage.js";

import IconLink from "./IconLink.js";

function Themes(props: { data: any; iconHeight: number }): JSX.Element {
  const globals = useContext(GlobalContext);

  const SEL_CLASS: string = "theme-icon";
  const UNSEL_CLASS: string = "theme-icon highlightable";

  return (
    <label className="nav-item jsOnly">
      {props.data.label[globals.lang] ??
        props.data.label[globals.defaultLang] + " "}
      <div className="menu-element">
        {props.data.icons.map((icon: any, index: number) => (
          <IconLink
            key={`${icon.lang}-icon-${index}`}
            id={icon.id}
            class={icon.selected ? SEL_CLASS : UNSEL_CLASS}
            src={props.data.iconDir + icon.file}
            height={props.iconHeight}
            title={icon.title[globals.lang] ?? icon.title[globals.defaultLang]}
            alt={icon.alt[globals.lang] ?? icon.alt[globals.defaultLang]}
          />
        ))}
      </div>
    </label>
  );
}

export default Themes;
