import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Friends(props) {
  return (
    <div className="rounded-lg bg-teal-900 border border-translucent shadow-md overflow-hidden">
      <div className="sticky top-0 flex justify-between items-center border-b border-translucent px-4 py-3">
        <div className="flex gap-4 text-lg pt-1 pl-1">
          <div className="text-teal-300 opacity-100">FRIENDS</div>
          <div className="opacity-60">ADD</div>
          <div className="opacity-60">REQUESTS</div>
        </div>
        <button className="flex" onClick={() => props.setFriends(false)}>
          <FontAwesomeIcon
            icon={faXmark}
            className="text-sm bg-translucent/10 aspect-square rounded-full p-[6px] drop-shadow-md"
            draggable="false"
          />
        </button>
      </div>
      <div className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent max-h-96">
        {/* <div className="flex justify-center items-center h-24">
          You have no friends... Go make some!
        </div> */}
        <div className="p-4">
          <div className="pl-1 mb-1">ONLINE</div>
          {Array.from(Array(2).keys()).map(item =>
            <div key={item} className="flex items-center gap-4 rounded-md select-none p-2 hover:bg-translucent/10">
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
            </div>
          )}
        </div>
        <div className="p-4 pt-2">
          <div className="pl-1 mb-1">OFFLINE</div>
          {Array.from(Array(4).keys()).map(item =>
            <div key={item} className="flex items-center gap-4 rounded-md select-none p-2 hover:bg-translucent/10">
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
            </div>
          )}
        </div>
      </div>
    </div>
  )
}