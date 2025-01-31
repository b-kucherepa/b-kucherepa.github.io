import { ReactElement, useContext } from "react";
import { PageContext } from "./PageContext.js";

export default function Head(props: { children?: ReactElement[] }) {
  const data = useContext(PageContext);

  return (
    <head className="dark">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
        {data.page.head.title[data.lang] ??
          data.page.head.title[data.meta.lang[0]]}
      </title>
      <meta
        name="description"
        content={
          data.page.head.description[data.lang] ??
          data.page.head.description[data.meta.lang[0]]
        }
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />

      <link
        rel="shortcut icon"
        type="image/icon type"
        href="icons/firebird-logo.svg"
      />

      <link rel="stylesheet" type="text/css" href="styles/main.css" />

      <script type="module" src="build/scripts/main.js"></script>

      <noscript>
        <link rel="stylesheet" href="styles/noscript.css" />
      </noscript>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200&display=swap"
        rel="stylesheet"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jura&display=swap"
        rel="stylesheet"
      />
      {props.children}
    </head>
  );
}
