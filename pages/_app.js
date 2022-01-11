import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`} strategy='afterInteractive' />
      <Script id="google-analytics-script" strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
