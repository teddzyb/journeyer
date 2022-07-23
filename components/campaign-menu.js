import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkull } from '@fortawesome/free-solid-svg-icons'
import silverCoin from '../public/assets/currency/coin-silver.svg'

// scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent

export default function CampaignMenu(props) {
  return (
    <div className="flex flex-col grow gap-5 px-5 mt-4 py-2 scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent">
      <div className="flex items-start gap-6 rounded-xl bg-translucent shadow-md p-6">
        <FontAwesomeIcon
          icon={faSkull}
          className="text-5xl text-teal-400 p-2"
          draggable="false"
        />
        <div className="flex flex-col justify-center gap-1">
          <div className="text-lg">
            STAGE 1
          </div>
          <div className="text-justify max-h-24 pr-4 -mr-2 scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor
            do amet sint. Velit officia consequat duis enim velit mollit.
          </div>
        </div>
      </div>
      <div className="flex items-start rounded-xl bg-translucent shadow-md p-6">
        <div className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor
          do amet sint. Velit officia consequat duis enim velit mollit.
        </div>
      </div>
    </div>
  )
}