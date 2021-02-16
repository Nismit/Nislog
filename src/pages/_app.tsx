import  '../reboot.css';
import '../styles.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import SiteSVG from '../components/SiteSVG';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Head>
            <SiteSVG />
            <Component {...pageProps} />
        </>
    )
}


