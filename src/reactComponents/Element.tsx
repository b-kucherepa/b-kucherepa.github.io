import { processLink, getLinkIconClass } from "../dev/utils.js";
import { useContext, ReactElement } from "react";
import { PageContext } from "./PageContext.js";

export default function Element(props: {
  data: any;
  elementClass?: string;
  headerClass?: string;
  textClass?: string;
}): JSX.Element {
  const data = useContext(PageContext);

  function parseTextLines() {
    return props.data.text.map((line: any, index: number) => {
      const processedLink = processLink(
        line.link,
        data.meta.pagePrefixes,
        data.lang
      );
      const innerHtml = {
        __html: line[data.lang] ?? line[data.meta.langs[0]],
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
        {props.data.header?.[data.lang] ??
          props.data.header?.[data.meta.langs[0]]}
      </h3>
      {parseTextLines()}
    </div>
  );
}
