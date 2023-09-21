import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {

  componentDidMount() {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
  });
  //     document.addEventListener('touchstart', function(event){
  //     event.preventDefault();
  // }, {passive: false});
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&family=Poppins:wght@300;500&family=Roboto:wght@300,400,500,700&display=optional"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Kurale&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
            rel="stylesheet"
          />
          <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
