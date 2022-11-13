import type { AppProps } from 'next/app';
import { FC } from 'react';
import { Layout } from '../components/Layout/Index';
import '../styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
