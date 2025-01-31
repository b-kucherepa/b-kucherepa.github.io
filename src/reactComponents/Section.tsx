import { useContext } from "react";
import { PageContext } from "./PageContext.js";

import Segment from "./Segment.js";

export default function Section(props: { data: any }): JSX.Element {
  const data = useContext(PageContext);

  return (
    <section key={props.data.id} id={props.data.id}>
      <h1>
        {props.data.header[data.lang] ?? props.data.header[data.meta.langs[0]]}
      </h1>
      {props.data.segments.map((segment: any, index: number) => (
        <Segment key={`segment-${index}`} data={segment} />
      ))}
    </section>
  );
}
