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
      throw "No such cell type!";
  }

  let a: ReactElement = <></>;
  if (props.data.link) {
    const domain = new URL(props.data.link.url).hostname;

    switch (domain) {
      case "github.com":
        a = (
          <a href={props.data.link.url} target="_blank">
            <i className="fa fa-github"></i>Репозиторий GitHub
          </a>
        );
        break;
      default:
        a = (
          <a href={props.data.link.url} target="_blank">
            <i className="fa fa-link"></i>Ссылка
          </a>
        );
        break;
    }
  }

  return (
    <div id={props.data.id} className="grid-item">
      {header}
      {props.data.text.map((t: any) => {
        const innerHTMLString = { __html: t[props.lang] };
        return <p dangerouslySetInnerHTML={innerHTMLString}></p>;
      })}
      {a}
    </div>
  );
}

export default Cell;
