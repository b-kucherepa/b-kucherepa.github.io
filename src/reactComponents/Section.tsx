import { useContext } from "react";
import { GlobalContext } from "./GlobalContext.js";

import Segment from "./Segment.js";

export default function Section(props: { data: any }): JSX.Element {
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
