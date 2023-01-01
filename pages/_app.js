import "../styles/globals.css";
import Navbar from "./Navbar";
import NextNProgress from "nextjs-progressbar";
import auth from "./api/auth";

function MyApp({ Component, pageProps }) {
  let isLoggedIn = auth.currentUser ? true : false;
  return (
    <>
      <NextNProgress color='#EA580C' />
      <Navbar isLoggedIn={isLoggedIn} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
