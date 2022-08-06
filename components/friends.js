import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Friends(props) {
  return (
    <div className="rounded-lg bg-teal-900 border border-translucent shadow-md h-96">
      <div className="flex justify-between items-center border-b border-translucent px-4 py-3">
        <div className="text-lg pt-1 pl-1">FRIENDS</div>
        <button className="flex" onClick={() => props.setFriends(false)}>
          <FontAwesomeIcon
            icon={faXmark}
            className="text-sm bg-translucent/10 aspect-square rounded-full p-[6px] drop-shadow-md"
            draggable="false"
          />
        </button>
      </div>
    </div>
  )
}