import "../styles/globals.css";
import { Provider } from "next-auth/client";
import { NavBar } from "../components/NavBar";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Router from "next/router";
NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <NavBar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
