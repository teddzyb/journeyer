import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import * as Tooltip from "@radix-ui/react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faUserMinus, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const Friends = (props) => {
  return (
    <div className="rounded-lg select-none bg-teal-900 border border-translucent shadow-md overflow-hidden w-96">
      <Tabs.Root defaultValue="friends">
        <div className="sticky top-0 flex justify-between items-center border-b border-translucent px-4 py-3">
          <Tabs.List className="flex gap-4 text-lg pt-1 pl-1">
            <Tabs.Trigger
              value="friends"
              className="text-white/60 [&[data-state='active']]:text-teal-300 hover:text-white"
            >
              FRIENDS
            </Tabs.Trigger>
            <Tabs.Trigger
              value="add"
              className="text-white/60 [&[data-state='active']]:text-teal-300 hover:text-white"
            >
              ADD
            </Tabs.Trigger>
            <Tabs.Trigger
              value="requests"
              className="flex text-white/60 [&[data-state='active']]:text-teal-300 hover:text-white"
            >
              REQUESTS <div className="rounded-full bg-amber-400 p-1 ml-1.5 mt-1" />
            </Tabs.Trigger>
          </Tabs.List>
          {props.children}
        </div>

        {/* Friends Tab */}
        <Tabs.Content value="friends">
          <div className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent max-h-96 p-4">
            {/* <div className="flex justify-center items-center h-24">
              You have no friends... Go make some!
            </div> */}
            <div className="pl-1 mb-1">ONLINE</div>
            {Array.from(Array(2).keys()).map((item) => (
              <div
                key={item}
                className="group flex items-center gap-4 rounded-md p-2 hover:bg-translucent/10"
              >
                <div className="flex rounded-md outline outline-2 outline-translucent shadow-sm w-fit">
                  <Image
                    src="/assets/avatar.jpg"
                    height={48}
                    width={48}
                    className="rounded-md"
                    alt=""
                    draggable="false"
                  />
                </div>
                <div className="flex flex-col pt-[2px] gap-[2px]">
                  <div>PLAYER-0001</div>
                  <div className="text-sm">LEVEL 25</div>
                </div>
                <div className="ml-auto flex gap-2 invisible group-hover:visible mx-2">
                  <Tooltip.Provider delayDuration="750">
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <button className="flex">
                          <FontAwesomeIcon
                            icon={faPaperPlane}
                            className="text-md bg-translucent/10 hover:bg-translucent aspect-square rounded-full p-2.5 shadow-sm"
                            draggable="false"
                          />
                        </button>
                      </Tooltip.Trigger>
                      <Tooltip.Content
                        side="bottom"
                        className="bg-[#0e3c38] rounded-md py-1 pt-[6px] px-3"
                      >
                        Invite
                        <Tooltip.Arrow className="fill-[#0e3c38] mb-1" />
                      </Tooltip.Content>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                  <Tooltip.Provider delayDuration="750">
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <button className="flex">
                          <FontAwesomeIcon
                            icon={faUserMinus}
                            className="text-md bg-translucent/10 hover:bg-translucent aspect-square rounded-full p-2.5 shadow-sm"
                            draggable="false"
                          />
                        </button>
                      </Tooltip.Trigger>
                      <Tooltip.Content
                        side="bottom"
                        className="bg-[#0e3c38] rounded-md py-1 pt-[6px] px-3"
                      >
                        Remove Friend
                        <Tooltip.Arrow className="fill-[#0e3c38] mb-1" />
                      </Tooltip.Content>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                </div>
              </div>
            ))}
            <div className="pl-1 mb-1 mt-4">OFFLINE</div>
            {Array.from(Array(4).keys()).map((item) => (
              <div
                key={item}
                className="group flex items-center gap-4 rounded-md p-2 hover:bg-translucent/10"
              >
                <div className="flex rounded-md outline outline-2 opacity-60 outline-translucent shadow-sm w-fit">
                  <Image
                    src="/assets/avatar.jpg"
                    height={48}
                    width={48}
                    className="rounded-md"
                    alt=""
                    draggable="false"
                  />
                </div>
                <div className="flex flex-col opacity-60 pt-[2px] gap-[2px]">
                  <div>PLAYER-0001</div>
                  <div className="text-sm">LEVEL 25</div>
                </div>
                <div className="ml-auto flex gap-2 invisible group-hover:visible mx-2">
                  <Tooltip.Provider delayDuration="750">
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <button className="flex">
                          <FontAwesomeIcon
                            icon={faUserMinus}
                            className="text-md bg-translucent/10 hover:bg-translucent aspect-square rounded-full p-2.5 shadow-sm"
                            draggable="false"
                          />
                        </button>
                      </Tooltip.Trigger>
                      <Tooltip.Content
                        side="bottom"
                        className="bg-[#0e3c38] rounded-md py-1 pt-[6px] px-3"
                      >
                        Remove Friend
                        <Tooltip.Arrow className="fill-[#0e3c38] mb-1" />
                      </Tooltip.Content>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                </div>
              </div>
            ))}
          </div>
        </Tabs.Content>

        {/* Add Friend Tab */}
        <Tabs.Content value="add">
          <div className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent max-h-96 p-6">
            <div className="flex flex-col justify-center items-center gap-6">
              <input
                type="text"
                id="inviteUser"
                name="inviteUser"
                placeholder="Enter username"
                className="text-md text-center shadow-sm rounded-l-sm bg-translucent border-translucent placeholder-white/50 w-full
                  focus:border-transparent focus:ring-white/[.15] focus:ring-inset"
              />
              <button className="btn-primary w-36 h-10 pt-[3px]">ADD</button>
            </div>
          </div>
        </Tabs.Content>

        {/* Friend Requests Tab */}
        <Tabs.Content value="requests">
          {/* <div className="flex justify-center items-center h-24">
            No requests yet...
          </div> */}
          <div className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent max-h-96 p-4">
            <div className="pl-1 mb-1">TODAY</div>
            {Array.from(Array(2).keys()).map((item) => (
              <div
                key={item}
                className="group flex items-center gap-4 rounded-md p-2 hover:bg-translucent/10"
              >
                <div className="flex rounded-md outline outline-2 outline-translucent shadow-sm w-fit">
                  <Image
                    src="/assets/avatar.jpg"
                    height={48}
                    width={48}
                    className="rounded-md"
                    alt=""
                    draggable="false"
                  />
                </div>
                <div className="flex flex-col pt-[2px] gap-[2px]">
                  <div>PLAYER-0001</div>
                  <div className="text-sm">LEVEL 25</div>
                </div>
                <div className="ml-auto flex gap-2 invisible group-hover:visible mx-2">
                  <Tooltip.Provider delayDuration="1000">
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <button className="flex">
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="text-md bg-translucent/10 hover:bg-translucent aspect-square rounded-full p-2.5 shadow-sm"
                            draggable="false"
                          />
                        </button>
                      </Tooltip.Trigger>
                      <Tooltip.Content
                        side="bottom"
                        className="bg-[#0e3c38] rounded-md py-1 pt-[6px] px-3"
                      >
                        Accept
                        <Tooltip.Arrow className="fill-[#0e3c38] mb-1" />
                      </Tooltip.Content>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                  <Tooltip.Provider delayDuration="1000">
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <button className="flex">
                          <FontAwesomeIcon
                            icon={faXmark}
                            className="text-md bg-translucent/10 hover:bg-translucent aspect-square rounded-full p-2.5 shadow-sm"
                            draggable="false"
                          />
                        </button>
                      </Tooltip.Trigger>
                      <Tooltip.Content
                        side="bottom"
                        className="bg-[#0e3c38] rounded-md py-1 pt-[6px] px-3"
                      >
                        Decline
                        <Tooltip.Arrow className="fill-[#0e3c38] mb-1" />
                      </Tooltip.Content>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                </div>
              </div>
            ))}
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default Friends;
