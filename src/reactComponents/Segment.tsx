import Element from "./Element.js";

function Segment(props: any) {
  const children: any[] = props.data.elements.map((e: any) => {
    const classes = { element: "", header: "", text: "" };
    switch (props.data.type) {
      case "text":
        classes.text = "indent";
        break;
      case "snippetGrid":
        classes.element = "grid-item";
        classes.text = "no-indent";
        break;
      case "articleGrid":
        classes.element = "grid-item";
        classes.text = "indent";
        break;
      case "resourceGrid":
        classes.element = "grid-item";
        classes.header = "author";
        classes.text = "no-indent";
        break;
      default:
        throw `No such segment type: ${props.data.type}`;
    }

    return (
      <Element
        data={e}
        lang={props.lang}
        elementClass={classes.element}
        headerClass={classes.header}
        textClass={classes.text}
      />
    );
  });

  switch (props.data.type) {
    case "text":
      return <div>{children}</div>;
    case "snippetGrid":
      return (
        <>
          <h2>{props.data.header[props.lang]}</h2>
          <div className="grid-container">{children}</div>
        </>
      );
    case "articleGrid":
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
