import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Head>
                <title>Weather App</title>
                <meta
                    name='description'
                    content='Author: Andrey Dovban, веб приложение для получения текущей погоды'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
                <meta property='og:locale' content='ru_RU' />
                <meta property='og:type' content='article' />
            </Head>
            <Component {...pageProps} />
        </RecoilRoot>
    );
}
