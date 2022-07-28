import Image from 'next/image'
import * as Tooltip from '@radix-ui/react-tooltip'
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

const coinType = {
  Gold: goldCoin,
  Silver: silverCoin,
}

export default function LeagueRank(props) {

  const rank = Object.keys(props.rank)

  return (
    <div className="flex items-center justify-between border-t last:border-b border-translucent mx-16 px-8">
      <div className="flex flex-col gap-1 text-lg">
        RANK {rank}
        <div className="flex gap-3">
          {Array.from(Array(props.rank[rank].progress).keys()).map(item =>
            <div key={item} className="bg-teal-400 rounded-full w-3 h-3" />
          )}
          {Array.from(Array(4 - props.rank[rank].progress).keys()).map(item =>
            <div key={item} className="border-2 border-teal-400 rounded-full w-3 h-3" />
          )}
        </div>
      </div>
      <div className="flex items-center gap-10">
        {
          props.rank[rank].rewards.silver &&
          <div
            className="flex flex-row justify-center items-center gap-2">
            <Image
              src={silverCoin}
              width={28}
              height={28}
              alt="Silver "
              draggable="false"
            />
            {props.rank[rank].rewards.silver}
          </div>
        }
        {
          props.rank[rank].rewards.gold &&
          <div
            className="flex flex-row justify-center items-center gap-2">
            <Image
              src={goldCoin}
              width={28}
              height={28}
              alt="Gold "
              draggable="false"
            />
            {props.rank[rank].rewards.gold}
          </div>
        }
        {
          props.rank[rank].rewards.cards &&
          <Tooltip.Provider delayDuration="25">
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <div
                  className="flex flex-col justify-center items-center gap-1 select-none bg-translucent rounded-full p-1">
                  <Image
                    src={cardType[props.rank[rank].rewards.cards]}
                    width={48}
                    height={48}
                    alt=""
                    draggable="false"
                  />
                </div>
              </Tooltip.Trigger>
              <Tooltip.Content side="bottom" className="bg-[#0c4441] rounded-md py-1 pt-[6px] px-3">
                {props.rank[rank].rewards.cards + " random " + (props.rank[rank].rewards.cards > 1 ? "cards" : "card")}
                <Tooltip.Arrow className="fill-[#0c4441] mb-1" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>

        }
      </div>
    </div>
  )
}