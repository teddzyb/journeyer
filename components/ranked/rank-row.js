import Image from 'next/image'
import rankFirst from '../../public/assets/icons/rank-first.svg'
import rankSecond from '../../public/assets/icons/rank-second.svg'
import rankThird from '../../public/assets/icons/rank-third.svg'

export default function RankRow(props) {
  return (
    <div className="grid grid-cols-9 border-b last:border-none border-translucent h-20 px-10">
      <div className="col-span-2 flex justify-center items-center select-none text-2xl">
        {
          [0, 1, 2].includes(props.rank) ?
            <Image
              src={{ 0: rankFirst, 1: rankSecond, 2: rankThird }[props.rank]}
              width={54}
              height={54}
              alt="1"
              draggable="false"
            /> :
            <div className="flex justify-center items-center w-[54px] h-[54px]">{props.rank + 1}</div>
        }
      </div>
      <div className="col-span-5 flex items-center gap-4 pl-2">
        <div className="flex select-none rounded-md outline outline-2 outline-translucent shadow-sm">
          <Image
            src="/assets/avatar.jpg"
            height={50}
            width={50}
            className="rounded-md"
            alt=""
            draggable="false"
          />
        </div>
        <div className="flex flex-col pt-1 gap-1">
          <div>PLAYER-0001</div>
          <div className="text-sm">LEVEL 28</div>
        </div>
      </div>
      <div className="col-span-2 flex justify-center items-center">
        10,000
      </div>
    </div>
  )
}