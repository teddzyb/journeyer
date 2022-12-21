// APIs
import Head from "next/head";
import Particles from "react-particles";
import { loadFirePreset } from "tsparticles-preset-fire";

// Assets
import warp from "../public/assets/warp.json";

const Home = () => {
  const customInit = async (engine) => {
    await loadFirePreset(engine);
  };

  const options = warp;

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
      <Particles options={options} init={customInit} />
      <main className="h-screen flex flex-col justify-center">
        <div className="flex flex-col justify-center gap-5 tracking-widest font-bold text-center drop-shadow-md select-none">
          <span className="text-7xl">JOURNEYER</span>
          <span className="text-4xl">OF THE REALMS</span>
        </div>
      </main>
    </>
  );
};

export default Home;
