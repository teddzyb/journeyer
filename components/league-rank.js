import Image from 'next/image'
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
  "Gold": goldCoin,
  "Silver": silverCoin,
}

export default function LeagueRank(props) {
  return (
    <div className="flex items-center justify-between border-t last:border-b border-translucent mx-16 px-6">
      <div className="flex flex-col gap-1 text-lg">
        RANK {props.rank + 1}
        <div className="flex gap-3">
          <div className="bg-teal-400 rounded-full w-3 h-3" />
          <div className="bg-teal-400 rounded-full w-3 h-3" />
          <div className="border-2 border-teal-400 rounded-full w-3 h-3" />
          <div className="border-2 border-teal-400 rounded-full w-3 h-3" />
        </div>
      </div>
      <div className="flex gap-4">
        <div>reward</div>
        <div>reward</div>
        <div>reward</div>
      </div>
    </div>
  )
}