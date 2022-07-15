import '../styles/globals.css'
import * as React from 'react'
import {items} from '../comps/fcw-section/create-web-sect'

export const zyroContext = React.createContext()

function MyApp({ Component, pageProps }) {
  
  const [image,setImage] = React.useState('step-1.webp')

  const zyroProps = {
    image,setImage
  }
  return (
  <zyroContext.Provider value = {zyroProps}>
    <Component {...pageProps} />
  </zyroContext.Provider>
  )
}

export default MyApp
