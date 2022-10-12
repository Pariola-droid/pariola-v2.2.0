import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Pariola - Creative Frontend Developer"
          />
          <meta
            name="keyword"
            content="Omopariola Kehinde Philip, pariola.dev, Pariola, Portfolio, Creative Frontend Developer"
          />

          <meta name="author" content="Pariola - Creative Frontend Developer" />
          <meta property="og:url" content="https://pariola.dev" />
          <meta property="og:url" content="https://pariola.dev" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Pariola - Creative Frontend Developer"
          />
          <meta
            property="og:description"
            content="Pariola - Creative Frontend Developer"
          />
          <meta
            property="og:image"
            content="https://ik.imagekit.io/9ghb9cknpe/meta-pariola_R_13RJ9w9.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1664615728373?ik-sdk-version=javascript-1.4.3&updatedAt=1664615728373"
          />
          <meta
            property="og:site_name"
            content="Pariola - Creative Frontend Developer"
          />

          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:site"
            content="Pariola - Creative Frontend Developer"
          />
          <meta
            name="twitter:title"
            content="Pariola - Creative Frontend Developer"
          />
          <meta
            name="twitter:description"
            content="Pariola - Creative Frontend Developer"
          />
          <meta name="twitter:creator" content="@ipariola" />
          <meta
            name="twitter:image"
            content="https://ik.imagekit.io/9ghb9cknpe/meta-pariola_R_13RJ9w9.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1664615728373"
          />

          <link rel="icon" type="image/x-icon" href="/favicon.svg" />

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
