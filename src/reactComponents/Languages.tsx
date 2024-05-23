import IconLink from "./IconLink.js";

function Languages(props: {
  data: any;
  lang: string;
  iconHeight: number;
  pagePrefix: string;
}): JSX.Element {
  const SEL_CLASS: string = "lang-icon str-outlined";
  const UNSEL_CLASS: string = "lang-icon highlightable";

  return (
    <label className="nav-item">
      {props.data.label[props.lang] + " "}
      <div className="menu-element">
        {props.data.icons.map((icon: any, index: number) => {
          const isSet: boolean = icon.lang === props.lang;
          return (
            <IconLink
              key={`${icon.lang}-icon-${index}`}
              id={`${icon.lang}-icon`}
              class={isSet ? SEL_CLASS : UNSEL_CLASS}
              src={props.data.iconDir + icon.file}
              height={props.iconHeight}
              title={isSet ? icon.title.sel : icon.title.unsel}
              alt={icon.alt[props.lang]}
              href={isSet ? "" : `${props.pagePrefix}${icon.lang}.html`}
            />
          );
        })}
      </div>
    </label>
  );
}

export default Languages;
