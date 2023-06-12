import '../styles/globals.css'
import "./../styles/Home.scss"
import {GlobalContext} from "./../context/Context"

function MyApp({ Component, pageProps }) {
  return (
  <GlobalContext>
    <Component {...pageProps} />
  </GlobalContext>
)}

export default MyApp
