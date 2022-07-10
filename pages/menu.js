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
          <div className="grid grid-flow-row-dense gap-10 m-12">
            {menuItems.map((item, index) =>
              <div
                key={index}
                className="text-2xl drop-shadow-lg cursor-default select-none w-fit 
                hover:text-teal-200 hover:scale-105 transition ease-in-out duration-150">
                {item.name.toUpperCase()}
              </div>)}
          </div>
        </div>
        <div className="rounded-2xl bg-black/[.15] shadow-md w-3/5 m-10 overflow-y-auto">
        </div>
      </main>
    </div>
  )
}
