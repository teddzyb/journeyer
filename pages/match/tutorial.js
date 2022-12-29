// APIs
import Head from "next/head";

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faFlag } from "@fortawesome/free-solid-svg-icons";

// Components
import Card from "../../components/card/card";

const Tutorial = () => {
  const CardSlot = (
    <div className="outline outline-fogra-500 rounded-md">
      <Card placeholder size="md" className="invisible">
        {" "}
      </Card>
    </div>
  );

  const CardPile = (
    <div className="outline outline-fogra-500 rounded-md">
      <Card placeholder size="sm" className="invisible">
        {" "}
      </Card>
    </div>
  );

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
      <main className="h-screen flex flex-row justify-center py-12 px-24">
        {/* Options */}
        <div className="flex flex-col items-center gap-4 absolute right-6 top-6">
          <button className="relative flex justify-center items-center w-10 h-10 rounded-full bg-fogra-900 border border-fogra-800 hover:bg-fogra-800 transition-colors ease-in-out">
            <FontAwesomeIcon icon={faGear} className="text-metal text-lg" draggable="false" />
          </button>
          <button className="relative flex justify-center items-center w-10 h-10 rounded-full bg-fogra-900 border border-fogra-800 hover:bg-fogra-800 transition-colors ease-in-out">
            <FontAwesomeIcon icon={faFlag} className="text-metal text-lg" draggable="false" />
          </button>
        </div>

        {/* Board */}
        <div className="relative flex justify-center items-center bg-fogra-900 border border-fogra-800 rounded-lg shadow-md h-full w-full">
          <div className="grid grid-flow-row grid-cols-6 grid-rows-2 w-full h-full px-16">
            <div className="opponent-slot pr-8 -mb-16">{CardPile}</div>
            <div className="opponent-slot">{CardSlot}</div>
            <div className="opponent-slot">{CardSlot}</div>
            <div className="opponent-slot">{CardSlot}</div>
            <div className="opponent-slot">{CardSlot}</div>
            <div className="opponent-slot pl-8 mb-12">{CardPile}</div>
            <div className="player-slot pr-8 mt-12">{CardPile}</div>
            <div className="player-slot">{CardSlot}</div>
            <div className="player-slot">{CardSlot}</div>
            <div className="player-slot">{CardSlot}</div>
            <div className="player-slot">{CardSlot}</div>
            <div className="player-slot pl-8 -mt-16">{CardPile}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Tutorial;
