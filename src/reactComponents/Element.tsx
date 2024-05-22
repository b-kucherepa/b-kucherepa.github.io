import { ReactElement } from "react";

function Element(props: {
  data: any;
  lang: string;
  elementClass?: string;
  headerClass?: string;
  textClass?: string;
}) {
  function getLinkIconClass(link: string): string {
    const domain = new URL(link).hostname;

    switch (domain) {
      case "github.com":
        return "fa fa-github";
      default:
        return "fa fa-link";
    }
  }

  function parseTextLines() {
    return props.data.text.map((l: any) => {
      const innerHtmlString = {
        __html: l[props.lang],
      };

      const a: ReactElement = l.link ? (
        <a href={l.link} target="_blank">
          <i className={getLinkIconClass(l.link)}></i>
        </a>
      ) : (
        <></>
      );

      return (
        <p className={props.textClass}>
          <span dangerouslySetInnerHTML={innerHtmlString}></span>
          {a}
        </p>
      );
    });
  }

  return (
    <div id={props.data.id} className={props.elementClass}>
      <h3 className={props.headerClass}>{props.data.header?.[props.lang]}</h3>
      {parseTextLines()}
    </div>
  );
}

export default Element;
