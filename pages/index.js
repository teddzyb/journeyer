// APIs
import Head from "next/head";
import Particles from "react-particles";
import { loadFirePreset } from "tsparticles-preset-fire";

// Assets
import warp from "../public/assets/warp.json";
import { Icon } from "@iconify/react";
import playFilled from "@iconify/icons-line-md/play-filled";
import googleIcon from "@iconify/icons-simple-icons/google";
import twitterIcon from "@iconify/icons-simple-icons/twitter";
import discordIcon from "@iconify/icons-simple-icons/discord";

// Styles
const { loginButton } = {
  loginButton: "flex justify-center items-center rounded-full border border-metal w-14 h-14",
};

const Home = () => {
  const customInit = async (engine) => {
    await loadFirePreset(engine);
  };

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
      <Particles options={warp} init={customInit} />
      <main className="title-screen gap-28 h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center gap-5 tracking-widest font-bold text-center drop-shadow-md select-none">
          <span className="text-7xl">JOURNEYER</span>
          <span className="text-4xl">OF THE REALMS</span>
        </div>
        <div className="flex flex-col items-center justify-between h-[9.5rem] text-metal">
          {/* TODO: Add ripple effect to buttons */}
          <button className="peer flex justify-center items-center rounded-full border border-metal w-16 h-16 transition-opacity ease-in-out duration-700 focus:opacity-50 outline-none">
            <Icon icon={playFilled} className="w-7 h-7" />
          </button>
          <div className="flex gap-7 opacity-0 invisible transition-all ease-in-out duration-700 peer-focus:opacity-100 focus-within:opacity-100 peer-focus:visible focus-within:visible">
            <button className={`${loginButton} -mt-10`}>
              <Icon icon={googleIcon} />
            </button>
            <button className={`${loginButton}`}>
              <Icon icon={twitterIcon} />
            </button>
            <button className={`${loginButton} -mt-10`}>
              <Icon icon={discordIcon} />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
