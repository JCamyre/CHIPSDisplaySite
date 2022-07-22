import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
