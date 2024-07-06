import { useContext, ReactElement } from "react";
import { GlobalContext } from "./GlobalContext.js";

import Element from "./Element.js";

export default function Segment(props: { data: any }): JSX.Element {
  const globals = useContext(GlobalContext);

  function defineStyleClasses(type: string): {
    element: string;
    header: string;
    text: string;
  } {
    switch (type) {
      case "text":
        return { element: "indent", header: "", text: "" };
      case "snippetGrid":
        return { element: "grid-item", header: "", text: "no-indent" };
      case "articleGrid":
        return { element: "grid-item", header: "", text: "indent" };
      case "resourceGrid":
        return { element: "grid-item", header: "author", text: "no-indent" };
      default:
        throw `No such segment type: ${type}`;
    }
  }

  const children: ReactElement[] = props.data.elements.map(
    (element: any, index: number) => {
      const classes = defineStyleClasses(props.data.type);
      return (
        <Element
          key={`element-${index}`}
          data={element}
          elementClass={classes.element}
          headerClass={classes.header}
          textClass={classes.text}
        />
      );
    }
  );

  switch (props.data.type) {
    case "text":
      return <div>{children}</div>;
    case "snippetGrid":
    case "articleGrid":
    case "resourceGrid":
      return (
        <>
          <h2>
            {props.data.header[globals.lang] ??
              props.data.header[globals.defaultLang]}
          </h2>
          <div className="grid-container">{children}</div>
        </>
      );
    default:
      throw `No such segment type: ${props.data.type}`;
  }
}
