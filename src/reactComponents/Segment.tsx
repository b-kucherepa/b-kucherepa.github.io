import Cell from "./Cell.js";
import Paragraph from "./Paragraph.js";

function Segment(props: any) {
  const children: any[] = props.data.elements.map((e: any) => {
    switch (props.data.type) {
      case "text":
        return <Paragraph data={e} lang={props.lang} />;
      case "infoGrid":
        return <Cell data={e} lang={props.lang} type="general" />;
      case "resourceGrid":
        return <Cell data={e} lang={props.lang} type="resource" />;
      default:
        throw `No such segment type: ${props.data.type}`;
    }
  });

  switch (props.data.type) {
    case "text":
      return <div>{children}</div>;
    case "infoGrid":
      return (
        <>
          <h2>{props.data.header[props.lang]}</h2>
          <div className="grid-container">{children}</div>
        </>
      );
      case "resourceGrid":
        return (
          <>
            <h2>{props.data.header[props.lang]}</h2>
            <div className="grid-container">{children}</div>
          </>
        );
    default:
      throw `No such segment type: ${props.data.type}`;
  }
}

export default Segment;
