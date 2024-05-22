function Segment(props: any) {
  return (
    <div key={props.id} className={props.class}>
      <h2>{props.header}</h2>
      {props.children}
    </div>
  );
}

export default Segment;
