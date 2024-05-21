import { ReactNode } from "react";

function IconLink(props: any) {
  const image: ReactNode = (
    <img
      id={props.id}
      className={props.class}
      src={props.source}
      height={props.height}
      title={props.title}
      alt={props.alt}
    />
  );
  return props.href ? (<a href={props.href}>{image}</a>) : (<>{image}</>);
}

export default IconLink;
