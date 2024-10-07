import "../styles/globals.css";
import Navbar from "../components/Navbar";
import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router';
import Video from "../components/Video";

// Make it so it always goes back to HomeScreen!

function MyApp({ Component, pageProps }) {
  const [inactive, setInactive] = useState(false);
  const timerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // Function to reset the inactivity timer
    const resetTimer = () => {
      setInactive(false);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        setInactive(true);
        if (router.pathname != "/")
          router.push("/")
      }, 2 * 60 * 1000);
    };

    // List of events to listen to for user interaction
    const events = ['mousemove', 'keydown', 'touchstart'];

    // Add event listeners to reset the timer
    events.forEach(event => {
      window.addEventListener(event, resetTimer);
    });

    // Set the initial timer
    resetTimer();

    // Cleanup event listeners on component unmount
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      events.forEach(event => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, []);


  return (
    <div style={{ height: "100vh", width: "100vw", display: "grid", gridTemplateRows: "1fr 1fr" }}>
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    </div>
  );
}

export default MyApp;
