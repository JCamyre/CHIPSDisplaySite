import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Component {...pageProps} key={router.route} />
    </div>
  );
}

export default MyApp;
