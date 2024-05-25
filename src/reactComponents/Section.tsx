import { useContext } from "react";
import { GlobalContext } from "./DataPage.js";

import Segment from "./Segment.js";

function Section(props: { data: any }): JSX.Element {
  const globals = useContext(GlobalContext);

  return (
    <section key={props.data.id} id={props.data.id}>
      <h1>
        {props.data.header[globals.lang] ??
          props.data.header[globals.defaultLang]}
      </h1>
      {props.data.segments.map((segment: any, index: number) => (
        <Segment key={`segment-${index}`} data={segment} />
      ))}
    </section>
  );
}

export default Section;
