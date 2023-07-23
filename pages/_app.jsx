import React from 'react';
import '@/assets/base.css';
import { Layout } from '@/components/Layout';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
          <Toaster />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
export default MyApp;
