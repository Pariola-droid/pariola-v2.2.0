import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="/meta/favicon.ico" rel="shortcut icon" />
          <link href="/meta/site.webmanifest" rel="manifest" />
          <link
            href="/meta/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/meta/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/meta/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            color="#4a9885"
            href="/meta/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          <meta content="#000000" name="theme-color" />
          <meta content="#000000" name="msapplication-TileColor" />
          <meta content="/meta/browserconfig.xml" name="msapplication-config" />
          <meta name="yandex-verification" content="513eaa5344e9eec7" />
          <meta
            name="google-site-verification"
            content="d2dh6ucdTbrNyzWRMIIUXh6wV7kZ-d_rIuK2GJs4ymI"
          />
          <meta
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            name="robots"
          />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
