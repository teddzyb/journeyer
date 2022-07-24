import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkull, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import goldCoin from '../public/assets/currency/coin-gold.svg'
import silverCoin from '../public/assets/currency/coin-silver.svg'
import cardLayer1 from '../public/assets/icons/card-layer-1.svg'
import cardLayer2 from '../public/assets/icons/card-layer-2.svg'
import cardLayer3 from '../public/assets/icons/card-layer-3.svg'
import cardLayer4 from '../public/assets/icons/card-layer-4.svg'

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
          <div className="text-xl">
            STAGE 1
          </div>
          <div className="text-justify max-h-24 pr-6 -mr-2 scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor
            do amet sint. Velit officia consequat duis enim velit mollit.
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center gap-4 rounded-xl bg-translucent shadow-md py-6 px-8">
        <div className="text-xl">REWARDS</div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between rounded-xl bg-translucent py-4 px-6">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faCircle}
                className="text-lg text-teal-400 mr-4"
                draggable="false"
              />
              <div className="pt-1">Clear the stage</div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col justify-center items-center gap-1 bg-translucent rounded-full p-1">
                <Image
                  src={cardLayer2}
                  width={54}
                  height={54}
                  alt=""
                  draggable="false"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-1 -mb-1">
                <Image
                  src={silverCoin}
                  width={40}
                  height={40}
                  alt=""
                  draggable="false"
                />
                1,000
              </div>
            </div>
          </div>
          <div className="flex justify-between rounded-xl bg-translucent py-4 px-6">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faCircle}
                className="text-lg text-teal-400 mr-4"
                draggable="false"
              />
              <div className="pt-1">Destroy 10 enemy cards</div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col justify-center items-center gap-1 -mb-1">
                <Image
                  src={goldCoin}
                  width={40}
                  height={40}
                  alt=""
                  draggable="false"
                />
                2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}