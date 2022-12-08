import Image from 'next/future/image'
import goldCoin from '../../public/assets/currency/coin-gold.svg'
import silverCoin from '../../public/assets/currency/coin-silver.svg'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}


export default function Currencies(props) {
  return (
    <div className={classNames(
      !props.opponent && "flex-row-reverse",
      "flex items-center pl-2",
    )}>
      {
        props.gold && Array.from(Array(parseInt(props.gold)).keys()).map(item =>
          <div key={item} className="flex drop-shadow-md rounded-full -ml-2">
            <Image
              src={goldCoin}
              height={26}
              width={26}
              alt=""
              draggable="false"
            />
          </div>
        )
      }
      {
        props.silver && Array.from(Array(parseInt(props.silver)).keys()).map(item =>
          <div key={item} className="flex drop-shadow-md rounded-full -ml-2">
            <Image
              src={silverCoin}
              height={26}
              width={26}
              alt=""
              draggable="false"
            />
          </div>
        )
      }
    </div>
  )
}