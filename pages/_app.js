import '../styles/globals.css'
import {io, SocketContext} from '../context/socketContext'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <SocketContext.Provider value={io}>
        <Component {...pageProps}/>
      </SocketContext.Provider>
    </>
  )
}

export default MyApp
