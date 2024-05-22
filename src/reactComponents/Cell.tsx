import { ReactElement } from "react";

function Cell(props: any) {
  let header: ReactElement = <></>;
  switch (props.type) {
    case "general":
      header = <h3>{props.data.header[props.lang]}</h3>;
      break;
    case "resource":
      header = (
        <>
          <cite>{props.data.header[props.lang]}</cite>
          <br />
        </>
      );
      break;
    default:
      throw `No such cell type: ${props.type}`;
  }

  function getLinkIconClass(link: string): string {
    const domain = new URL(link).hostname;

    switch (domain) {
      case "github.com":
        return "fa fa-github fa-fw";
      default:
        return "fa fa-link fa-fw";
    }
  }

  return (
    <div id={props.data.id} className="grid-item">
      {header}
      {props.data.text.map((t: any) => {
        const innerHtmlString = {
          __html: t[props.lang],
        };
        const a: ReactElement = t.link ? (
          <a href={t.link} target="_blank">
            <i className={getLinkIconClass(t.link)}></i>
          </a>
        ) : (
          <></>
        );
        return (
          <p>
            <span dangerouslySetInnerHTML={innerHtmlString}></span>
            {a}
          </p>
        );
      })}
    </div>
  );
}

export default Cell;
