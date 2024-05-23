import { ReactElement } from "react";

function Element(props: {
  key: string;
  data: any;
  lang: string;
  elementClass?: string;
  headerClass?: string;
  textClass?: string;
}): JSX.Element {
  function getLinkIconClass(link: string): string {
    const domain: string = new URL(link).hostname;

    switch (domain) {
      case "github.com":
        return "fa fa-github";
      default:
        return "fa fa-link";
    }
  }

  function parseTextLines() {
    return props.data.text.map((line: any, index: number) => {
      const innerHtml = { __html: line[props.lang] };

      const a: ReactElement = line.link ? (
        <a href={line.link} target="_blank">
          <i className={getLinkIconClass(line.link)}></i>
        </a>
      ) : (
        <></>
      );

      return (
        <p key={`line-${index}`} className={props.textClass}>
          <span dangerouslySetInnerHTML={innerHtml}></span>
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
