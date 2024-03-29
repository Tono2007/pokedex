import Router from 'next/router';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import PageLayout from '@components/PageLayout';
import ErrorBoundary from '@components/ErrorBoundary';

import '@styles/globals.css';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 500,
  showSpinner: true,
});
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary FallbackComponent={<h2>Error ...</h2>}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ErrorBoundary>
  );
}

export default MyApp;
