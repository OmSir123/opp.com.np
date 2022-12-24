import "../styles/globals.css";
import Navbar from "./Navbar";

import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress  color='#EA580C' />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
