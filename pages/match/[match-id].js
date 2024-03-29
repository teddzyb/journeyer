// APIs
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

// Components
import { Transition } from "@headlessui/react";
import * as Popover from "@radix-ui/react-popover";
import Card from "../../components/card/card";
import ArenaPlayer from "../../components/arena/arena-player";

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAngleRight,
  faGear,
  faFlag,
  faVolumeHigh,
  faVolumeXmark,
  faQuestionCircle,
  faUserPlus,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import cool from "../../public/assets/emoji/cool.svg";
import laughing from "../../public/assets/emoji/laughing.svg";
import crying from "../../public/assets/emoji/crying.svg";
import shocked from "../../public/assets/emoji/shocked.svg";
import angry from "../../public/assets/emoji/angry.svg";

const reactions = [cool, laughing, crying, shocked, angry];

const Match = () => {
  const [activityLog, setActivityLog] = useState(false);
  const toggleActivityLog = () => setActivityLog(!activityLog);

  const [volume, setVolume] = useState(false);
  const toggleVolume = () => setVolume(!volume);

  let currentVolume = volume ? faVolumeXmark : faVolumeHigh;

  const [handLayout, setHandLayout] = useState(1);

  const CardSlot = (
    <div className="outline outline-teal-500 rounded-md">
      <Card placeholder size="md" className="invisible">
        {" "}
      </Card>
    </div>
  );

  return (
    <div>
      <Head>
        <title>Journeyer</title>
        <meta
          name="description"
          content="Journeyer of the Realms is a tabletop card-collecting strategy game developed by Paper Kiwi."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-row justify-center px-20 py-12">
        <div className="flex flex-col items-center gap-3 absolute right-5 top-5">
          <button className="flex">
            <FontAwesomeIcon
              icon={faGear}
              className="text-2xl bg-translucent/10 hover:bg-translucent aspect-square rounded-full p-2 shadow"
              draggable="false"
            />
          </button>
          {/* <button className="flex">
            <FontAwesomeIcon
              icon={currentVolume}
              onClick={toggleVolume}
              className="text-2xl bg-translucent/10 hover:bg-translucent aspect-square rounded-full p-2 shadow"
              draggable="false"
            />
          </button>
          <button className="flex">
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className="text-2xl bg-translucent/10 hover:bg-translucent aspect-square rounded-full p-2 shadow"
              draggable="false"
            />
          </button> */}
          <button className="flex">
            <FontAwesomeIcon
              icon={faFlag}
              className="text-xl -rotate-12 bg-translucent/10 hover:bg-translucent aspect-square rounded-full p-2.5 shadow"
              draggable="false"
            />
          </button>
        </div>
        <Transition
          show={!activityLog}
          enter="transition-translate duration-200"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition-translate duration-200"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="flex flex-col place-self-center absolute left-0 rounded-r-lg shadow-md overflow-hidden w-8"
        >
          <button onClick={toggleActivityLog} className="flex">
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-2xl bg-translucent hover:bg-translucent/20 w-full py-10 transition"
              draggable="false"
            />
          </button>
        </Transition>
        <Transition
          show={activityLog}
          enter="transition-translate duration-200"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition-translate duration-200"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="flex flex-col place-self-center absolute left-0 bg-translucent rounded-r-md shadow-md overflow-hidden w-16 max-h-[530px]"
        >
          <div className="flex flex-col items-center gap-4 p-3 scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
            <div className="bg-translucent/10 rounded-sm outline outline-2 outline-blue-300 w-full">
              <div className="aspect-square" />
            </div>
            <div className="bg-translucent/10 rounded-sm outline outline-2 outline-red-300 w-full">
              <div className="aspect-square" />
            </div>
            <div className="bg-translucent/10 rounded-sm outline outline-2 outline-blue-300 w-full">
              <div className="aspect-square" />
            </div>
            <div className="bg-translucent/10 rounded-sm outline outline-2 outline-red-300 w-full">
              <div className="aspect-square" />
            </div>
          </div>
          <button onClick={toggleActivityLog} className="flex w-full">
            <FontAwesomeIcon
              icon={faAnglesLeft}
              className="text-xl bg-translucent/10 hover:bg-translucent w-full py-3"
              draggable="false"
            />
          </button>
        </Transition>

        <div className="relative flex justify-center items-center bg-translucent rounded-2xl shadow-md h-full w-full">
          <ArenaPlayer opponent>
            <button className="flex text-teal-900 hover:scale-110 transition-transform ease-in-out p-5">
              <FontAwesomeIcon icon={faUserPlus} className="text-xl" draggable="false" />
            </button>
          </ArenaPlayer>
          <ArenaPlayer>
            <Popover.Root>
              <Popover.Trigger className="flex text-teal-900 hover:scale-110 transition-transform ease-in-out p-5">
                <FontAwesomeIcon icon={faCommentDots} className="text-2xl" draggable="false" />
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content
                  side="left"
                  className="flex flex-col gap-2 rounded-lg bg-[#0c4441] shadow-md select-none p-3 mb-5"
                >
                  {reactions.map((reaction, index) => (
                    <button
                      key={index}
                      className="flex hover:scale-110 transition-transform ease-in-out"
                    >
                      <Image src={reaction} width={40} height={40} alt="" draggable="false" />
                    </button>
                  ))}
                  <Popover.Arrow className="fill-[#0c4441]" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </ArenaPlayer>

          <div className="absolute top-8 text-lg text-center bg-translucent shadow rounded-full w-32 py-1 pt-2">
            1:30
          </div>

          <div className="grid grid-flow-col columns-6 w-full h-full mx-20 py-28">
            <div className="grid grid-flow-row justify-start items-end pt-10 -mb-10">
              {CardSlot} {CardSlot}
            </div>
            <div className="grid grid-flow-row justify-center items-center">
              {CardSlot} {CardSlot}
            </div>
            <div className="grid grid-flow-row justify-center items-center">
              {CardSlot} {CardSlot}
            </div>
            <div className="grid grid-flow-row justify-center items-center">
              {CardSlot} {CardSlot}
            </div>
            <div className="grid grid-flow-row justify-center items-center">
              {CardSlot} {CardSlot}
            </div>
            <div className="grid grid-flow-row justify-end items-start pb-10 -mt-10">
              {CardSlot} {CardSlot}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 flex items-center">
          <div
            className={`flex ml-32 transition-all ease-linear 
              ${
                {
                  0: "-mb-24",
                  1: "-mb-10",
                  2: "mb-5",
                }[handLayout]
              }`}
          >
            {Array.from(Array(8).keys()).map((item) => (
              <Card
                key={item}
                size="md"
                hover
                className={`transition-all ease-in-out 
                  ${
                    {
                      0: "-ml-32 hover:mr-28 hover:-mt-24 last:hover:mr-0",
                      1: "-ml-32 hover:mr-28 hover:-mt-10 last:hover:mr-0",
                      2: "-ml-20 hover:mr-20 hover:scale-110 last:hover:mr-0",
                    }[handLayout]
                  }`}
              />
            ))}
          </div>
          <div className="absolute -right-14 flex flex-col gap-1">
            <button
              onClick={handLayout < 2 ? () => setHandLayout(handLayout + 1) : null}
              className="flex bg-translucent rounded-full shadow p-2"
            >
              <FontAwesomeIcon
                icon={faAngleRight}
                className="-rotate-90 aspect-square"
                draggable="false"
              />
            </button>
            <button
              onClick={handLayout > 0 ? () => setHandLayout(handLayout - 1) : null}
              className="flex bg-translucent rounded-full shadow p-2"
            >
              <FontAwesomeIcon
                icon={faAngleRight}
                className="rotate-90 aspect-square"
                draggable="false"
              />
            </button>
          </div>
        </div>

        {/* A commit a day keeps the anxiety away */}
      </main>
    </div>
  );
};

export default Match;
