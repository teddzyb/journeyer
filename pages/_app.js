import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { MantineProvider } from "@mantine/core";
config.autoAddCss = false;

import { AuthUser } from "../context/auth";

function Journeyer({ Component, pageProps }) {
  return (
    <AuthUser>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </AuthUser>
  );
}

export default Journeyer;
