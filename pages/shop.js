// APIs
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

// Components
import { Tab } from '@headlessui/react'
import TopMenuBar from '../components/top-menu-bar'
import Card from '../components/card'

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Shop() {

  const [selectedItem, setSelectedItem] = useState(1)

  let tabs = [
    { name: "Decks" },
    { name: "Sleeves" },
    { name: "Coins" },
  ]

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
        <div className="flex flex-col rounded-2xl bg-translucent shadow-md w-2/5 m-10 overflow-y-clip">
          <div className="flex flex-row bg-translucent text-xl text-center select-none">
            <Link href="/menu">
              <a className="flex flex-col justify-center items-center w-fit">
                <FontAwesomeIcon
                  alt="Back"
                  icon={faArrowLeft}
                  className="absolute text-white text-2xl ml-9 px-6 mt-[1px]"
                  draggable="false"
                />
              </a>
            </Link>
            <div className="grow pb-3 pt-4">SHOP</div>
          </div>
          <Tab.Group>
            <Tab.List as="div" className="flex justify-center items-center bg-translucent/10 border-t border-b border-translucent p-2">
              {tabs.map((item, index) =>
                <Tab
                  as="button"
                  key={index}
                  className={({ selected }) =>
                    classNames(
                      "outline-none align-middle rounded-lg w-full mx-2 pb-1 pt-2",
                      selected ? "bg-teal-600 shadow focus:outline-2 focus:outline-offset-0 focus:outline-teal-500" : "hover:bg-teal-500/10"
                    )
                  }>
                  {item.name.toUpperCase()}
                </Tab>
              )}
            </Tab.List>
            <Tab.Panels as="div" className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent">
              <Tab.Panel as="div" className="grid grid-cols-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(item =>
                  <button
                    key={item}
                    onClick={() => setSelectedItem(item)}
                    className="flex flex-col items-center border border-translucent py-6 hover:bg-translucent/10">
                    <Card key={item} size="lg" className={item === selectedItem && "ring-4 ring-teal-500"} />
                    <div className="flex justify-center items-center z-10 bg-teal-800 rounded-sm shadow-sm 
                    border border-translucent -mt-9 h-10 w-[14.5rem] pt-1">
                      STARTER DECK #{item}
                    </div>
                  </button>
                )}
              </Tab.Panel>
              <Tab.Panel>
                Content 2
              </Tab.Panel>
              <Tab.Panel>
                Content 3
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="flex flex-col rounded-2xl bg-translucent shadow-md w-3/5 m-10 overflow-y-auto">
          <div className="bg-translucent text-xl text-center select-none p-3 pt-4">STARTER DECK #{selectedItem}</div>

        </div>
      </main >
    </div >
  )
}
