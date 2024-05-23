import Segment from "./Segment.js";

function Section(props: { data: any; lang: string }): JSX.Element {
  return (
    <section key={props.data.id} id={props.data.id}>
      <h1>{props.data.header[props.lang]}</h1>
      {props.data.segments.map((segment: any, index: number) => (
        <Segment key={`segment-${index}`} data={segment} lang={props.lang} />
      ))}
    </section>
  );
}

export default Section;
