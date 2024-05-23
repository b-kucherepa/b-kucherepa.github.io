import IconLink from "./IconLink.js";

function Themes(props: { data: any; lang: string; iconHeight: number }): JSX.Element {
  const SEL_CLASS: string = "theme-icon";
  const UNSEL_CLASS: string = "theme-icon highlightable";

  return (
    <label className="nav-item jsOnly">
      {props.data.label[props.lang] + " "}
      <div className="menu-element">
        {props.data.icons.map((icon: any, index: number) => (
          <IconLink
            key={`${icon.lang}-icon-${index}`}
            id={icon.id}
            class={icon.selected ? SEL_CLASS : UNSEL_CLASS}
            src={props.data.iconDir + icon.file}
            height={props.iconHeight}
            title={icon.title[props.lang]}
            alt={icon.alt[props.lang]}
          />
        ))}
      </div>
    </label>
  );
}

export default Themes;
