import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
