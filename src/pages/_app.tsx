import AppLayout from '@/components/layout/AppLayout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <div className="w-screen">
        <Component {...pageProps} />
      </div>
    </AppLayout>
  );
}
