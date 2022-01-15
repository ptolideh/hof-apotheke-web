import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { AppProviders } from '../context/AppProviders';
import { getEntries } from '../store';
import { Footer } from '../components/navigation/Footer';
import { Header } from '../components/navigation/Header';

function MyApp({ Component, pageProps }: AppProps) {
  const [navData, setNavData] = useState({ header: null, footer: null });

  useEffect(() => {
    async function fetchNavData() {
      try {
        console.log('Fetching nav data');
        const res = await fetch('/api/navigation');
        const { data } = await res.json();
        setNavData(data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchNavData();
  }, []);

  return (
    <AppProviders>
      {navData.header && <Header id="myHeader" data={navData.header} />}
      <Component {...pageProps} />
      {navData.footer && <Footer data={navData.footer} />}
    </AppProviders>
  );
}

export default MyApp;
