function Section(props: any) {
  return (
    <section key={props.id} id={props.id}>
      <h1>{props.header}</h1>
      {props.children}
    </section>
  );
}

export default Section;
