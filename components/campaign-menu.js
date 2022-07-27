import Image from 'next/image'
import * as Tooltip from '@radix-ui/react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkull, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import goldCoin from '../public/assets/currency/coin-gold.svg'
import silverCoin from '../public/assets/currency/coin-silver.svg'
import cardLayer1 from '../public/assets/icons/card-layer-1.svg'
import cardLayer2 from '../public/assets/icons/card-layer-2.svg'
import cardLayer3 from '../public/assets/icons/card-layer-3.svg'
import cardLayer4 from '../public/assets/icons/card-layer-4.svg'

const cardType = {
  1: cardLayer1,
  2: cardLayer2,
  3: cardLayer3,
  4: cardLayer4,
}

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
          <div className="text-xl uppercase select-none">
            {props.stage.name}
          </div>
          <div className="text-justify max-h-24 pr-6 -mr-2 scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent">
            {props.stage.description}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center gap-4 rounded-xl bg-translucent shadow-md py-6 px-8">
        <div className="text-xl select-none">OBJECTVES</div>
        <div className="flex flex-col gap-2 w-full">
          {props.stage.objectives.map((objective, index) =>
            <div key={index} className="flex justify-between rounded-xl bg-translucent py-4 px-6">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={objective.completed ? faCircleCheck : faCircle}
                  className="text-lg text-teal-400 mr-4"
                  draggable="false"
                />
                <div className="pt-1">{objective.name}</div>
              </div>
              <div className="flex items-center gap-4">
                {
                  objective.rewards.silver &&
                  <div
                    className="flex flex-col justify-center items-center gap-1 select-none -mb-1 px-1">
                    <Image
                      src={silverCoin}
                      width={28}
                      height={28}
                      alt=""
                      draggable="false"
                    />
                    {objective.rewards.silver}
                  </div>
                }
                {
                  objective.rewards.gold &&
                  <div
                    className="flex flex-col justify-center items-center gap-1 select-none -mb-1 px-1">
                    <Image
                      src={goldCoin}
                      width={28}
                      height={28}
                      alt=""
                      draggable="false"
                    />
                    {objective.rewards.gold}
                  </div>
                }
                {
                  objective.rewards.cards &&
                  <Tooltip.Provider delayDuration="25">
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <div
                          className="flex flex-col justify-center items-center gap-1 select-none bg-translucent rounded-full p-1">
                          <Image
                            src={cardType[objective.rewards.cards]}
                            width={48}
                            height={48}
                            alt=""
                            draggable="false"
                          />
                        </div>
                      </Tooltip.Trigger>
                      <Tooltip.Content side="right" className="text-sm bg-[#0a3a37] rounded-md py-1 pt-[6px] px-3">
                        {objective.rewards.cards + " random " + (objective.rewards.cards > 1 ? "cards" : "card")}
                        <Tooltip.Arrow className="fill-[#0a3a37] mb-1" />
                      </Tooltip.Content>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                }
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}