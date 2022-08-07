import Image from 'next/image'
import * as Tabs from '@radix-ui/react-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faUserMinus } from '@fortawesome/free-solid-svg-icons'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Friends(props) {
  return (
    <div className="rounded-lg select-none bg-teal-900 border border-translucent shadow-md overflow-hidden w-96">
      <Tabs.Root>
        <div className="sticky top-0 flex justify-between items-center border-b border-translucent px-4 py-3">
          <Tabs.List className="flex gap-4 text-lg pt-1 pl-1">
            <Tabs.Trigger
              value="friends"
              className="text-white/60 [&[data-state='active']]:text-teal-300"
            >
              FRIENDS
            </Tabs.Trigger>
            <Tabs.Trigger
              value="add"
              className="text-white/60 [&[data-state='active']]:text-teal-300"
            >
              ADD
            </Tabs.Trigger>
            <Tabs.Trigger
              value="requests"
              className="text-white/60 [&[data-state='active']]:text-teal-300"
            >
              REQUESTS
            </Tabs.Trigger>
          </Tabs.List>
          {props.children}
        </div>

        {/* Friends Tab */}
        <Tabs.Content value="friends">
          <div className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent max-h-96">
            {/* <div className="flex justify-center items-center h-24">
              You have no friends... Go make some!
            </div> */}
            <div className="p-4">
              <div className="pl-1 mb-1">ONLINE</div>
              {Array.from(Array(2).keys()).map(item =>
                <div key={item} className="group flex items-center gap-4 rounded-md p-2 hover:bg-translucent/10">
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
                    <button className="flex">
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="text-md bg-translucent/10 hover:bg-translucent aspect-square rounded-full p-2.5 shadow-sm"
                        draggable="false"
                      />
                    </button>
                    <button className="flex">
                      <FontAwesomeIcon
                        icon={faUserMinus}
                        className="text-md bg-translucent/10 hover:bg-translucent aspect-square rounded-full p-2.5 shadow-sm"
                        draggable="false"
                      />
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 pt-2">
              <div className="pl-1 mb-1">OFFLINE</div>
              {Array.from(Array(4).keys()).map(item =>
                <div key={item} className="group flex items-center gap-4 rounded-md p-2 hover:bg-translucent/10">
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
                    <button className="flex">
                      <FontAwesomeIcon
                        icon={faUserMinus}
                        className="text-md bg-translucent/10 hover:bg-translucent aspect-square rounded-full p-2.5 shadow-sm"
                        draggable="false"
                      />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Tabs.Content>

        {/* Add Friend Tab */}
        <Tabs.Content value="add">

        </Tabs.Content>

        {/* Friend Requests Tab */}
        <Tabs.Content value="requests">

        </Tabs.Content>
      </Tabs.Root >
    </div >
  )
}