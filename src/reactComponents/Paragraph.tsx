function Paragraph(props: any) {
  const innerHTMLString = { __html: props.data.text[props.lang] };
  return (
    <p
      key={props.data.id}
      id={props.data.id}
      className={props.data.class}
      dangerouslySetInnerHTML={innerHTMLString}
    >
    </p>
  );
}

export default Paragraph;
