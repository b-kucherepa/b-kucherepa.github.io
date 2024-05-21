function IconLink(props: any) {
  return (
    <img
      id={props.id}
      className={props.class}
      src={props.source}
      height={props.height}
      title={props.title}
      alt={props.alt}
    />
  )
}

export default IconLink;