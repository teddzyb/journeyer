// APIs
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

// Components
import { Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiamond, faCheck } from '@fortawesome/free-solid-svg-icons'
import goldCoin from '../public/assets/currency/coin-gold.svg'
import Card from './card'

// Assets
import bookmarkCheck from '../public/assets/icons/bookmark-check.svg'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function DeckPreview(props) {

  const cardRef = useRef(null)

  useEffect(() => {
    cardRef.current = props.selectedCard
  }, [props.selectedCard])

  const [animating, setAnimating] = useState(false)

  const rarity = {
    common: { name: "Common", color: "text-cyan-500" },
    uncommon: { name: "Uncommon", color: "text-green-500" },
    rare: { name: "Rare", color: "text-purple-500" },
  }

  return (
    <>
      <Transition
        show={props.cardSelected}
        beforeEnter={() => setAnimating(true)}
        afterEnter={() => setAnimating(false)}
        enter="transition-all duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        className="flex justify-center h-full scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent"
      >
        <div className={animating && "absolute"}>
          <div className="flex items-center flex-col mt-12 gap-20">
            <div className="grid grid-cols-5 gap-20 h-fit w-[45rem]">
              <Card size="2xl" className="col-span-2">{cardRef.current}</Card>
              <div className="col-span-3 h-[24rem] pr-6 -mr-4 scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent">
                <div className="text-md font-bold text-teal-50 select-none border-b-2 border-translucent mb-3">LORE</div>
                <div className="text-justify text-teal-50 leading-5 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec euismod, nisl eget consectetur sagittis, nisl nunc
                  consectetur nisi, euismod aliquet nisi nisl euismod.
                </div>
                <div className="text-md font-bold text-teal-50 select-none border-b-2 border-translucent mb-3">SKILLS</div>
                <div className="text-teal-50">
                  Skill 1...
                </div>
                <div className="text-teal-50">
                  Skill 2...
                </div>
                <div className="flex gap-4 select-none border-t-2 border-translucent pt-2 mt-6">
                  <div className="flex items-center">
                    <div className="flex justify-center items-center pb-[2px] mr-[6px]">
                      <Image
                        priority
                        src={goldCoin}
                        height={16}
                        width={16}
                        alt=""
                        draggable="false"
                      />
                    </div>
                    Coin Deck
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faDiamond}
                      className={classNames(
                        "pb-[2px] mr-[6px]",
                        rarity.common.color
                      )}
                      draggable="false"
                    />
                    {rarity.common.name}
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-emerald-500 text-lg pb-[3px] mr-[6px]"
                      draggable="false"
                    />
                    Owned
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => props.setSelectedCard(null)} className="btn-primary h-11 w-36 pt-1">Back</button>
          </div>
        </div>
      </Transition>
      <Transition
        show={!props.cardSelected}
        enter="transition-all duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        className={classNames(
          "grid grid-cols-4 grow gap-y-10 p-7 scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent",
          animating ? "hidden" : "h-0"
        )}
      >
        {Array.from(Array(30).keys()).map(item =>
          <div key={item} className="flex flex-col items-center">
            <button
              className="flex flex-col hover:scale-105 active:scale-95 transition ease-in-out duration-150"
              value={item}
              onClick={() => props.setSelectedCard(item)}
            >
              {(item === 2 || item === 5) &&
                <div className="z-10 flex self-end text-black cursor-auto w-fit -mb-7 pr-2">
                  <Image
                    src={bookmarkCheck}
                    height={28}
                    width={28}
                    alt=""
                    title="Owned"
                    draggable="false"
                  />
                </div>
              }
              <Card key={item} size="sm" hover>
                {item}
              </Card>
            </button>
          </div>
        )}
      </Transition>
    </>
  )
}