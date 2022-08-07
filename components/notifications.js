import Image from 'next/image'
import * as Tabs from '@radix-ui/react-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faUserMinus } from '@fortawesome/free-solid-svg-icons'

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
            <div className="flex justify-center items-center h-24">
              Nothing here yet...
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