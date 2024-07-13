import { useContext } from "react";
import { PageContext } from "./PageContext.js";

import IconLink from "./IconLink.js";

export default function Themes(props: { iconHeight: number }): JSX.Element {
  const data = useContext(PageContext);

  const SEL_CLASS: string = "theme-icon";
  const UNSEL_CLASS: string = "theme-icon highlightable";

  return (
    <label className="nav-item jsOnly">
      {data.nav.themes.label[data.lang] ??
        data.nav.themes.label[data.meta.lang[0]]}
      <div className="menu-element">
        {data.nav.themes.icons.map((icon: any, index: number) => (
          <IconLink
            key={`${icon.lang}-icon-${index}`}
            id={icon.id}
            class={icon.selected ? SEL_CLASS : UNSEL_CLASS}
            src={data.nav.themes.iconDir + icon.file}
            height={props.iconHeight}
            title={icon.title[data.lang] ?? icon.title[data.meta.lang[0]]}
            alt={icon.alt[data.lang] ?? icon.alt[data.meta.lang[0]]}
          />
        ))}
      </div>
    </label>
  );
}
