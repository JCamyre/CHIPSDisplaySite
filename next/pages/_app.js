import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
    {/* <meta content='True' name='HandheldFriendly' /><meta content='width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;' name='viewport' /> */}
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
