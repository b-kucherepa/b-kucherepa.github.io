import { processLink, getLinkIconClass } from "../dev/utils.js";
import { useContext } from "react";
import { PageContext } from "./PageContext.js";

export default function Copyright(): JSX.Element {
  const data = useContext(PageContext);

  return (
    <>
      <hr />
      <div id="copyright">{`${
        data.meta.copyright[data.lang] ??
        data.meta.copyright[data.meta.langs[0]]
      } (c)`}</div>
      <div id="social-links">
        {data.meta.socialLinks.map((link: any) => {
          const processedLink = processLink(
            link.url,
            data.meta.pagePrefixes,
            data.lang
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
