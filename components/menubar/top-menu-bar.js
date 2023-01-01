// APIs
import Image from "next/image";
import { useUserContext } from "../../context/userContext.js";
import { useQuery } from "../../convex/_generated/react.js";

// Components
import * as Tooltip from "@radix-ui/react-tooltip";
import * as Popover from "@radix-ui/react-popover";
import ExpBar from "./exp-bar";
import Friends from "./friends";
import Notifications from "./notifications";
import Feedback from "./feedback";

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshakeAngle, faBell, faGear, faXmark } from "@fortawesome/free-solid-svg-icons";
import goldCoin from "../../public/assets/currency/coin-gold.svg";
import silverCoin from "../../public/assets/currency/coin-silver.svg";

const TopMenuBar = () => {
  const user = useUserContext();
  const { username, inventory, status } = useQuery("user/getUser", user) || {};
  const { gold, silver } = inventory || {};

  const icons = [
    { id: 1, name: "Friends", src: faHandshakeAngle },
    { id: 2, name: "Notifications", src: faBell },
    { id: 3, name: "Settings", src: faGear },
  ];

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
    <>
      <div className="flex justify-between h-[5.5rem]">
        <div className="flex mx-3 mt-3 mb-1 gap-8">
          <div className="flex items-center overflow-clip p-1.5 w-80 gap-3 rounded-md bg-fogra-900 outline outline-2 outline-fogra-800">
            <div className="h-full aspect-square rounded-md">
              <Image
                src="/assets/avatar.jpg"
                layout="responsive"
                height={1080}
                width={1080}
                className="rounded-md"
                alt=""
                draggable="false"
              />
            </div>
            <div className="flex flex-col gap-2 pr-2 w-full font-medium whitespace-nowrap">
              {username ?? "Loading..."}
              <ExpBar status={status} />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center text-sm gap-2">
              <Image src={goldCoin} height={20} width={20} alt="Gold" draggable="false" />
              {gold ?? 0}
            </div>
            <div className="flex items-center text-sm gap-2">
              <Image src={silverCoin} height={20} width={20} alt="Silver" draggable="false" />
              {silver ?? 0}
            </div>
          </div>
        </div>
        <div className="h-full flex items-center gap-6 px-6">
          {icons.map(({ id, name, src }) => (
            <button
              key={id}
              aria-label={name}
              className="relative flex justify-center items-center w-10 h-10 rounded-full bg-fogra-900 border border-fogra-800 hover:bg-fogra-800 transition-colors ease-in-out"
            >
              <FontAwesomeIcon icon={src} draggable="false" className="text-metal text-lg" />
            </button>
          ))}
        </div>
      </div>
      {/* <div className="grid grid-cols-2 bg-translucent shadow-sm h-20 p-2">
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
            {user.id}
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
          {icons.map((icon, index) => (
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
                      Settings: <Feedback>{popoverClose}</Feedback>,
                    }[icon.name]
                  }
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default TopMenuBar;
