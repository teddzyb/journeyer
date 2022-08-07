import Image from 'next/image'
import * as Tabs from '@radix-ui/react-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Notifications(props) {
  return (
    <div className="rounded-lg select-none bg-teal-900 border border-translucent shadow-md overflow-hidden w-96">
      <Tabs.Root>
        <div className="sticky top-0 flex justify-between items-center border-b border-translucent px-4 py-3">
          <div className="flex gap-4 text-lg pt-1 pl-1">
            <Tabs.List className="flex gap-4 text-lg pt-1 pl-1">
              <Tabs.Trigger value="notifications" className="text-white/60 [&[data-state='active']]:text-teal-300 hover:text-white">
                NOTIFICATIONS
              </Tabs.Trigger>
              <Tabs.Trigger value="news" className="text-white/60 [&[data-state='active']]:text-teal-300 hover:text-white">
                NEWS
              </Tabs.Trigger>
            </Tabs.List>
          </div>
          {props.children}
        </div>

        {/* Notifications Tab */}
        <Tabs.Content value="notifications">
          <div className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent max-h-96">
            {/* <div className="flex justify-center items-center h-24">
              Nothing here yet...
            </div> */}
            <div className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent max-h-96 p-4">
              <div className="flex flex-col gap-3">
                <div className="group flex flex-col gap-1 text-start rounded-lg bg-translucent cursor-pointer p-3">
                  <div className="flex justify-between w-full">
                    <div className="text-sm text-teal-300">10:31 PM</div>
                    <button className="flex invisible group-hover:visible h-fit">
                      <FontAwesomeIcon
                        icon={faXmark}
                        className="text-sm aspect-square"
                        draggable="false"
                      />
                    </button>
                  </div>
                  <div>
                    PLAYER-0001 sent you a friend request!
                  </div>
                </div>
                <div className="group flex flex-col gap-1 text-start rounded-lg bg-translucent cursor-pointer p-3">
                  <div className="flex justify-between w-full">
                    <div className="text-sm text-teal-300">12:21 AM</div>
                    <button className="flex invisible group-hover:visible h-fit">
                      <FontAwesomeIcon
                        icon={faXmark}
                        className="text-sm aspect-square"
                        draggable="false"
                      />
                    </button>
                  </div>
                  <div>
                    You have unclaimed rewards! Click here to claim them.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tabs.Content>

        {/* News Tab */}
        <Tabs.Content value="news">
          <div className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent max-h-96">
            <div className="flex justify-center items-center h-24">
              Nothing here yet...
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}