import Segment from "./Segment.js";

function Section(props: any) {
  return (
    <section key={props.data.id} id={props.data.id}>
      <h1>{props.data.header[props.lang]}</h1>
      {props.data.segments.map((s: any) => (
        <Segment data={s} lang={props.lang} />
      ))}
    </section>
  );
}

export default Section;
