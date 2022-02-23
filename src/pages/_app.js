import Theme from '../styles/theme';
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
      <Head>
        <title>Van Pham's Portfolio</title>
        <meta name="description" content="Meta description for the portfolio" />
      </Head>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 