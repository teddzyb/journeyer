// APIs
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

// Components
import { Tab } from '@headlessui/react'
import TopMenuBar from '../components/top-menu-bar'
import Card from '../components/card'
import ShopItemPreview from '../components/shop-item-preview'
import DeckPreview from '../components/deck-preview'

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Shop() {

  const [selectedItem, setSelectedItem] = useState(0)
  const [selectedCard, setSelectedCard] = useState(null)
  const cardSelected = (selectedCard != null ? true : false)

  return (
    <div>
      <Head>
        <title>Journeyer</title>
        <meta name="description" content="Journeyer of the Realms is a tabletop card-collecting strategy game developed by Paper Kiwi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="sticky top-0">
        <TopMenuBar />
      </nav>
      <main className="h-screen flex flex-row justify-center pb-20">
        <div className="flex flex-col rounded-2xl bg-translucent shadow-md w-2/5 m-10 mr-5 overflow-y-clip">
          <div className="flex flex-row bg-translucent text-xl text-center select-none">
            <Link href="/menu">
              <a className="flex flex-col justify-center items-center w-fit">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="absolute text-white text-2xl ml-9 px-6 hover:text-teal-200"
                  draggable="false"
                />
              </a>
            </Link>
            <div className="grow pb-3 pt-4">INVENTORY</div>
          </div>
          <div className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent">
            <div className="grid grid-cols-3 px-4 py-2">
              {Array.from(Array(12).keys()).map(item =>
                <div key={item} className="flex flex-col items-center py-6">
                  <button
                    onClick={() => {
                      setSelectedItem(item)
                      setSelectedCard(null)
                    }}
                    className="flex flex-col justify-center items-center gap-3 hover:scale-105 transition ease-in-out duration-150">
                    <div className="flex justify-center items-center bg-translucent rounded-md w-32 h-32">
                      {/* image */}
                    </div>
                    <div className="text-center text-sm select-none mx-4">STARTER DECK #{item}</div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-2xl bg-translucent shadow-md w-3/5 m-10 ml-5 overflow-y-hidden">
          <div className="bg-translucent text-xl text-center select-none p-3 pt-4">STARTER DECK #{selectedItem}</div>
          <ShopItemPreview
            show={!cardSelected}
            title={selectedItem}
            cards={{ owned: 30, total: 30 }}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec euismod, nisl eget consectetur sagittis, nisl nunc consectetur nisi,
              euismod aliquet nisi nisl euismod."
            button="Select Deck"
          >
            <DeckPreview cardSelected={cardSelected} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
          </ShopItemPreview>
        </div>
      </main>
    </div>
  )
}
