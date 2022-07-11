import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import { AuthUser } from '../context/user'

function Journeyer({ Component, pageProps }) {
  return (
    <AuthUser>
      <Component {...pageProps} />
    </AuthUser>
  )
}

export default Journeyer
