import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Friends(props) {
  return (
    <div className="rounded-lg bg-teal-900 border border-translucent shadow-md overflow-hidden">
      <div className="sticky top-0 flex justify-between items-center border-b border-translucent backdrop-blur-md px-4 py-3">
        <div className="text-lg pt-1 pl-1">FRIENDS</div>
        <button className="flex" onClick={() => props.setFriends(false)}>
          <FontAwesomeIcon
            icon={faXmark}
            className="text-sm bg-translucent/10 aspect-square rounded-full p-[6px] drop-shadow-md"
            draggable="false"
          />
        </button>
      </div>
      <div className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent max-h-96">
        <div className="flex justify-center items-center h-24">
          You have no friends... Go make some!
        </div>
      </div>
    </div>
  )
}