// APIs
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithAuth0 } from "convex/react-auth0";
import { MantineProvider } from "@mantine/core";
import { config } from "@fortawesome/fontawesome-svg-core";
import convexConfig from "../convex.json";
import clientConfig from "../convex/_generated/clientConfig";

// Components
import Loading from "../components/auth/loading.js";
import Login from "../components/auth/login.js";

// Styles
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

const convex = new ConvexReactClient(clientConfig);
const authInfo = convexConfig.authInfo[0];

config.autoAddCss = false;

const Journeyer = ({ Component, pageProps }) => {
  return (
    <ConvexProviderWithAuth0
      client={convex}
      authInfo={authInfo}
      loading={<Loading />}
      loggedOut={<Login />}
    >
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </ConvexProviderWithAuth0>
  );
};

export default Journeyer;
