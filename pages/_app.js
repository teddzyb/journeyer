import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { MantineProvider } from "@mantine/core";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import clientConfig from "../convex/_generated/clientConfig";

const convex = new ConvexReactClient(clientConfig);
config.autoAddCss = false;

function Journeyer({ Component, pageProps }) {
  return (
    <ConvexProvider client={convex}>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </ConvexProvider>
  );
}

export default Journeyer;
