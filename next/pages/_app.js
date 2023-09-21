import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
<<<<<<< HEAD
    <div style={{ height: "100vh", width: "100vw" }}>      
=======
    <div style={{ height: "100vh", width: "100vw" }}>
>>>>>>> parent of 50fa2bf (Update poster.js to display .jpg, cutting down loading time of each poster in slideshow to 0.05s.)
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
