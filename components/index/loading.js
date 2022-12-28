// APIs
import Head from "next/head";

// Assets
import { Icon } from "@iconify/react";
import loadingLoop from "@iconify/icons-line-md/loading-loop";

const Loading = () => {
  return (
    <>
      <Head>
        <title>Journeyer</title>
        <meta
          name="description"
          content="Journeyer of the Realms is a tabletop card-collecting strategy game developed by Paper Kiwi."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center h-screen">
        <Icon icon={loadingLoop} className="w-10 h-10 animate-spin rounded-full" />
      </main>
    </>
  );
};

export default Loading;
