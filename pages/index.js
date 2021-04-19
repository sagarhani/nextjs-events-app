import Head from "next/head";
import { GlobalStyle } from "../styles/globalStyles";

export default function Home() {
  return (
    <div>
      <GlobalStyle />

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
