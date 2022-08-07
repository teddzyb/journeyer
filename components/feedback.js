import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faUserMinus } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function Feedback(props) {
  return (
    <div className="rounded-lg select-none bg-teal-900 border border-translucent shadow-md overflow-hidden w-96">
      <div className="sticky top-0 flex justify-between items-center border-b border-translucent px-4 py-3">
        <div className="flex gap-4 text-lg pt-1 pl-1">
          <button>FEEDBACK</button>
        </div>
        {props.children}
      </div>
      <div className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent max-h-96">
        <div className="flex justify-center items-center h-24">
          Provide some feedback!
        </div>
      </div>
    </div>
  )
}