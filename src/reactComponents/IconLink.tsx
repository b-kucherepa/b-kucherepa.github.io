import { ReactElement } from "react";

export default function IconLink(props: {
  id?: string;
  class?: string;
  src: string;
  height?: number;
  title: string;
  alt: string;
  href?: string;
}): JSX.Element {
  const image: ReactElement = (
    <img
      id={props.id}
      className={props.class}
      src={props.src}
      height={props.height}
      title={props.title}
      alt={props.alt}
    />
  );
  return props.href ? <a href={props.href}>{image}</a> : <>{image}</>;
}
