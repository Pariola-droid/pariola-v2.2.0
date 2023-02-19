import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

// component imports

import { useRouter } from 'next/router';

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
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
