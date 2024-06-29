import "../styles/globals.css";
import Navbar from "../components/Navbar";
import React, { useEffect, useState, useRef } from 'react'
// Just add the code here instead, wrapping the Navbar + Component

function MyApp({ Component, pageProps }) {
  const [inactive, setInactive] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    // Function to reset the inactivity timer
    const resetTimer = () => {
      setInactive(false);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        setInactive(true);
      }, 0.05 * 60 * 1000); // 3 minutes
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
    <div style={{ height: "100vh", width: "100vw" }}>
      {!inactive ? (
        <>
          <Navbar />
          <Component {...pageProps} />
        </>
      ) : (
        <div>
          <p>gg</p>
        </div>
      )}
    </div>
  );
}

export default MyApp;
