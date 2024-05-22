import IconLink from "./IconLink.js";

function Languages (props: {
  data: any;
  lang: string;
  iconHeight: number;
  pagePrefix: string;
}) {
  const SEL_CLASS: string = "lang-icon str-outlined";
  const UNSEL_CLASS: string = "lang-icon highlightable";

  return (
    <label className="nav-item">
      {props.data.label[props.lang]+" "}
      <div className="menu-element">
        {props.data.icons.map((i: any) => {
          const isSet: boolean = i.lang === props.lang;
          return (
            <IconLink
              id={`${i.lang}-icon`}
              class={isSet ? SEL_CLASS : UNSEL_CLASS}
              src={props.data.iconDir + i.file}
              height={props.iconHeight}
              title={isSet ? i.title.sel : i.title.unsel}
              alt={i.alt[props.lang]}
              href={isSet ? "" : `${props.pagePrefix}${i.lang}.html`}
            />
          );
        })}
      </div>
    </label>
  );
};

export default Languages;
