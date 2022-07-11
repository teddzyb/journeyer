import Head from 'next/head'

import TopMenuBar from '../components/top-menu-bar'

export default function Menu() {

  let menuItems = [
    { name: "Campaign", href: null },
    { name: "Ranked", href: null },
    { name: "Custom", href: null },
    { name: "Practice", href: null },
    { name: "Shop", href: null },
    { name: "Sign Out", href: null },
  ]

  let customizations = [
    { name: "Deck", href: null },
    { name: "Sleeve", href: null },
    { name: "Coins", href: null },
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
        <div className="w-2/5 m-10 overflow-y-auto">
          <div className="grid gap-10 m-12">
            {menuItems.map((item, index) =>
              <div
                key={index}
                className="text-2xl drop-shadow-lg cursor-default select-none w-fit 
                hover:text-teal-200 hover:scale-105 transition ease-in-out duration-150">
                {item.name.toUpperCase()}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col rounded-2xl bg-black/[.15] shadow-md w-3/5 m-10 overflow-y-auto">
          <div className="bg-black/[.15] text-xl text-center p-4">CUSTOMIZE LOADOUT</div>
          <div className="flex flex-col grow">
            <div className="grid grid-flow-col h-full mx-10">
              {customizations.map((item, index) =>
                <div key={index} className="flex justify-center items-center">
                  <div className="flex justify-center items-center text-neutral-300 bg-black/[.15] rounded-md w-36 h-40">
                    {item.name}
                  </div>
                </div>
              )}
            </div>
            <div className="grid grid-flow-col h-full overflow-y-auto">
              <div className="flex justify-center items-center text-black mb-5 pl-32">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item =>
                  <div
                    key={item}
                    className="bg-neutral-300 rounded-md card-shadow -ml-32 p-1 w-40 h-56 
                      hover:bg-slate-500 hover:mr-20">
                    {item}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
