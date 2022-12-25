// APIs
import Head from "next/head";
import { useState } from "react";
import Particles from "react-particles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { useAuth0 } from "@auth0/auth0-react";
import { isDesktop } from "react-device-detect";

// Assets
import warp from "../../public/assets/configs/warp.json";
import { Icon } from "@iconify/react";
import playFilled from "@iconify/icons-line-md/play-filled";
import alertCircle from "@iconify/icons-line-md/alert-circle";
import loadingLoop from "@iconify/icons-line-md/loading-loop";

const Login = () => {
  const [isLoading, setIsloading] = useState(false);
  const { loginWithRedirect } = useAuth0();

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
      <main className="title-screen gap-24 md:gap-28 h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center gap-5 tracking-widest font-bold text-center drop-shadow-md select-none">
          <span className="text-5xl md:text-7xl">JOURNEYER</span>
          <span className="text-2xl md:text-4xl">OF THE REALMS</span>
        </div>
        <div className="flex flex-col items-center justify-between text-metal">
          {isDesktop ? (
            <button
              onClick={() => {
                setIsloading(true);
                loginWithRedirect();
              }}
              className="flex justify-center items-center rounded-full border border-metal w-16 h-16"
            >
              <Icon
                icon={playFilled}
                className={`absolute w-7 h-7 opacity-0 transition-opacity duration-200 ease-in-out ${
                  !isLoading && "opacity-100"
                }`}
              />
              <Icon
                icon={loadingLoop}
                className={`absolute w-6 h-6 opacity-0 transition-opacity duration-500 ease-in-out animate-spin ${
                  isLoading && "opacity-100"
                }`}
              />
            </button>
          ) : (
            <div className="flex flex-col items-center text-center w-52 gap-2">
              <Icon icon={alertCircle} className="w-6 h-6" />
              This game is only available on desktop.
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Login;