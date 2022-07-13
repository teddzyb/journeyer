import Head from 'next/head'

import { Tab } from '@headlessui/react'

import TopMenuBar from '../components/top-menu-bar'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Shop() {

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
        <div className="flex flex-col rounded-2xl bg-black/[.15] shadow-md w-2/5 m-10 overflow-y-clip">
          <div className="bg-black/[.15] text-xl text-center select-none p-3 pt-4">SHOP</div>
          <Tab.Group>
            <Tab.List as="div" className="flex justify-center items-center bg-black/10 border-t border-b border-black/[.15] p-2">
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
            <Tab.Panels as="div" className="overflow-y-auto">
              <Tab.Panel as="div" className="grid grid-cols-2">
                <div className="flex flex-col items-center border border-black/[.15] py-6">
                  <div className="bg-neutral-300 rounded-md drop-shadow-md w-48 h-64"></div>
                  <div className="z-10 bg-neutral-500 rounded-sm shadow-sm -mt-6 h-10 w-[14.5rem]"></div>
                </div>
                <div className="flex flex-col items-center border border-black/[.15] py-6">
                  <div className="bg-neutral-300 rounded-md drop-shadow-md w-48 h-64"></div>
                  <div className="z-10 bg-neutral-500 rounded-sm shadow-sm -mt-6 h-10 w-[14.5rem]"></div>
                </div>
                <div className="flex flex-col items-center border border-black/[.15] py-6">
                  <div className="bg-neutral-300 rounded-md drop-shadow-md w-48 h-64"></div>
                  <div className="z-10 bg-neutral-500 rounded-sm shadow-sm -mt-6 h-10 w-[14.5rem]"></div>
                </div>
                <div className="flex flex-col items-center border border-black/[.15] py-6">
                  <div className="bg-neutral-300 rounded-md drop-shadow-md w-48 h-64"></div>
                  <div className="z-10 bg-neutral-500 rounded-sm shadow-sm -mt-6 h-10 w-[14.5rem]"></div>
                </div>
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
        <div className="flex flex-col rounded-2xl bg-black/[.15] shadow-md w-3/5 m-10 overflow-y-auto">
          <div className="bg-black/[.15] text-xl text-center select-none p-3 pt-4">STARTER DECK #1</div>

        </div>
      </main>
    </div>
  )
}
