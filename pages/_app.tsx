import Head from "next/head";
import { AppWrapper, theme } from "bushido-strap";
import "./styles.css";
import "bushido-strap/css/main.css";

interface AppProps {
  Component: React.FC;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper bg={theme.gray9} className="app">
      <Head>
        <title>TypeScript/Next/GraphQL</title>
      </Head>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
