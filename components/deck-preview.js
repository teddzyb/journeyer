// APIs
import Image from 'next/image'

// Components
import { Transition } from '@headlessui/react'
import Card from './card'

// Assets
import bookmarkCheck from '../public/assets/icons/bookmark-check.svg'

export default function DeckPreview(props) {
  return (
    <>
      <Transition
        show={props.cardSelected}
        enter="transition-all duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        className="flex justify-center h-full"
      >
        <div className="flex flex-col items-center gap-10 pt-12">
          <Card size="2xl">{props.selectedCard}</Card>
          <button onClick={() => props.setSelectedCard(null)} className="btn-primary h-11 w-36 pt-1">Back</button>
        </div>
      </Transition>
      <Transition
        show={!props.cardSelected}
        enter="transition-all duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        className="grid grid-cols-4 grow gap-y-10 h-full p-7 scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent"
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