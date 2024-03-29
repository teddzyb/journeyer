// APIs
import Image from "next/image";
import { useState } from "react";

// Components
import * as Tooltip from "@radix-ui/react-tooltip";
import * as Popover from "@radix-ui/react-popover";
import ExpBar from "./exp-bar";
import Friends from "./friends";
import Notifications from "./notifications";
import Feedback from "./feedback";

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshakeAngle,
  faBell,
  faVolumeHigh,
  faVolumeXmark,
  faQuestionCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import goldCoin from "../../public/assets/currency/coin-gold.svg";
import silverCoin from "../../public/assets/currency/coin-silver.svg";

const TopMenuBar = () => {
  const [volume, setVolume] = useState(false);
  const toggleVolume = () => setVolume(!volume);

  const iconsR = [
    { name: "Friends", src: faHandshakeAngle },
    { name: "Notifications", src: faBell },
    { name: "Volume", src: faVolumeHigh, toggle: toggleVolume },
    { name: "Feedback", src: faQuestionCircle },
  ];

  iconsR[2].src = volume ? faVolumeXmark : faVolumeHigh;

  const popoverClose = (
    <Popover.Close className="flex">
      <FontAwesomeIcon
        icon={faXmark}
        className="text-sm bg-translucent/10 hover:bg-translucent aspect-square rounded-full p-[6px] drop-shadow-md"
        draggable="false"
      />
    </Popover.Close>
  );

  return (
    <div className="grid grid-cols-2 bg-translucent shadow-sm h-20 p-2">
      <div className="grid grid-flow-col auto-cols-max items-center gap-3">
        <div className="flex justify-center items-center rounded-md outline outline-2 outline-translucent shadow-sm h-14 w-14 mx-1">
          <Image
            src="/assets/avatar.jpg"
            height={56}
            width={56}
            quality={100}
            className="rounded-md"
            alt="Avatar"
            draggable="false"
          />
        </div>
        <div className="flex flex-col justify-center gap-1 text-lg">
          PLAYER-0001
          <ExpBar />
        </div>
        <div className="flex flex-col justify-center gap-2 ml-10">
          <div className="flex items-center text-sm gap-2">
            <Image src={goldCoin} height={20} width={20} alt="Gold " draggable="false" />
            124
          </div>
          <div className="flex items-center text-sm gap-2">
            <Image src={silverCoin} height={20} width={20} alt="Silver " draggable="false" />
            13,200
          </div>
        </div>
      </div>
      <div className="grid grid-flow-col col-start-3 auto-cols-max">
        {iconsR.map((icon, index) => (
          <Popover.Root key={index}>
            <Tooltip.Provider delayDuration="25">
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Popover.Trigger asChild>
                    <button
                      className="relative flex items-center text-teal-500 px-7 hover:text-teal-400"
                      onClick={icon.toggle}
                      aria-label={icon.name}
                    >
                      <FontAwesomeIcon icon={icon.src} style={{ fontSize: 24 }} draggable="false" />
                      {(icon.name === "Notifications" || icon.name === "Friends") && (
                        <div className="absolute right-5 top-5 rounded-full bg-amber-400 p-1" />
                      )}
                    </button>
                  </Popover.Trigger>
                </Tooltip.Trigger>
                <Tooltip.Content
                  sideOffset="-0.5"
                  className="z-50 bg-[#0c4441] rounded-md py-1 pt-[6px] px-3"
                >
                  {icon.name}
                  <Tooltip.Arrow className="fill-[#0c4441]" />
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
            <Popover.Portal>
              <Popover.Content sideOffset="1">
                {
                  {
                    Friends: <Friends>{popoverClose}</Friends>,
                    Notifications: <Notifications>{popoverClose}</Notifications>,
                    Feedback: <Feedback>{popoverClose}</Feedback>,
                  }[icon.name]
                }
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        ))}
      </div>
    </div>
  );
};

export default TopMenuBar;
