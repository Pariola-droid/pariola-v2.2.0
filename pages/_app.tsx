import { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import * as ga from '../lib/ga';

// basic styles import
import '../styles/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      ga.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Fragment>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </Fragment>
  );
}

export default MyApp;
