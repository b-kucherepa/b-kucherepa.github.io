function Head(props: any) {
  return <head className="dark">
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{props.title}</title>
  <meta name="description" content={props.description}/>
  <link rel="stylesheet" type="text/css" href="styles/main.css"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

  <link rel="shortcut icon" type="image/icon type" href="icons/firebird-logo.svg" />
  <script type="module" src="scripts/main.js"></script>

  <noscript>
      <link rel="stylesheet" href="styles/noscript.css"/>
  </noscript>

  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com"/>
  <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200&display=swap" rel="stylesheet"/>

  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com"/>
  <link href="https://fonts.googleapis.com/css2?family=Jura&display=swap" rel="stylesheet"/>
</head>;
}

export default Head;