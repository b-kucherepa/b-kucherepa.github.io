function Paragraph(props: any) {
  return (
    <p key={props.id} id={props.id} className={props.class}>
      {props.text}
      {props.children}
    </p>
  );
}

export default Paragraph;
