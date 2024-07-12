import { processLink, getLinkIconClass } from "../dev/utils.js";
import { useContext, ReactElement } from "react";
import { GlobalContext } from "./GlobalContext.js";

export default function Element(props: {
  data: any;
  elementClass?: string;
  headerClass?: string;
  textClass?: string;
}): JSX.Element {
  const globals = useContext(GlobalContext);

  function parseTextLines() {
    return props.data.text.map((line: any, index: number) => {
      const processedLink = processLink(
        line.link,
        globals.pagePrefixes,
        globals.lang
      );
      const innerHtml = {
        __html: line[globals.lang] ?? line[globals.defaultLang],
      };

      const a: ReactElement = line.link ? (
        <a href={processedLink} target="_blank">
          <i className={getLinkIconClass(processedLink)}></i>
        </a>
      ) : (
        <></>
      );

      return (
        <p key={`line-${index}`} className={props.textClass}>
          <span dangerouslySetInnerHTML={innerHtml}></span>
          {a}
        </p>
      );
    });
  }

  return (
    <div id={props.data.id} className={props.elementClass}>
      <h3 className={props.headerClass}>
        {props.data.header?.[globals.lang] ??
          props.data.header?.[globals.defaultLang]}
      </h3>
      {parseTextLines()}
    </div>
  );
}
