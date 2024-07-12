import { processLink, getLinkIconClass } from "../dev/utils.js";
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext.js";

export default function Copyright(props: {
  data: any;
  links: any[];
}): JSX.Element {
  const globals = useContext(GlobalContext);

  return (
    <>
      <hr />
      <div id="copyright">{`${
        props.data[globals.lang] ?? props.data[globals.defaultLang]
      } (c)`}</div>
      <div id="social-links">
        {props.links.map((link: any) => {
          const processedLink = processLink(
            link.url,
            globals.pagePrefixes,
            globals.lang
          );

          return (
            <a
              key={link.name}
              title={link.name}
              href={link.url}
              target="_blank"
            >
              <i className={getLinkIconClass(processedLink)}></i>
            </a>
          );
        })}
      </div>
    </>
  );
}
