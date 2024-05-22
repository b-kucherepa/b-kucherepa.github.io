import IconLink from "./IconLink.js";

function Themes(props: { data: any; lang: string; iconHeight: number }) {
  const SEL_CLASS: string = "theme-icon";
  const UNSEL_CLASS: string = "theme-icon highlightable";

  return (
    <label className="nav-item jsOnly">
      {props.data.label[props.lang] + " "}
      <div className="menu-element">
        {props.data.icons.map((i: any) => (
          <IconLink
            id={i.id}
            class={i.selected ? SEL_CLASS : UNSEL_CLASS}
            src={props.data.iconDir + i.file}
            height={props.iconHeight}
            title={i.title[props.lang]}
            alt={i.alt[props.lang]}
          />
        ))}
      </div>
    </label>
  );
}

export default Themes;
