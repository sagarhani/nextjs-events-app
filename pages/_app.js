import Head from "next/head";
import { Provider } from "next-auth/client";
import { NavBar } from "../components/NavBar";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Router from "next/router";
import { GlobalStyle } from "../styles/globalStyles";
NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next Events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider session={pageProps.session}>
        <GlobalStyle />
        <NavBar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
