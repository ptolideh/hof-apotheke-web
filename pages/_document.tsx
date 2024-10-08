import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript
  // DocumentContext
} from 'next/document';
// import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  /*   static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  } */

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="The Next generation of a news feed"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,700;0,900;1,700;1,900&family=Poppins:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
            rel="stylesheet"
          />

          {/* {this.props.styles} */}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
