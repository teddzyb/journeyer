// APIs
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Components
import TopMenuBar from '../components/top-menu-bar'
import Card from '../components/card'

// Assets
import goldCoin from '../public/assets/currency/coin-gold.svg'
import silverCoin from '../public/assets/currency/coin-silver.svg'

export default function Menu() {

  let menuItems = [
    { name: "Campaign", href: "" },
    { name: "Ranked", href: "" },
    { name: "Custom", href: "" },
    { name: "Practice", href: "" },
    { name: "Shop", href: "shop" },
    { name: "Sign Out", href: "/" },
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
      <nav className="sticky top-0 z-50">
        <TopMenuBar />
      </nav>
      <main className="h-screen flex flex-row justify-center pb-20">
        <div className="w-2/5 m-10 overflow-y-auto">
          <div className="grid gap-10 m-12">
            {menuItems.map((item, index) =>
              <Link key={index} href={item.href}>
                <a
                  className="text-2xl drop-shadow-lg select-none w-fit 
                hover:text-teal-200 hover:scale-105 transition ease-in-out duration-150">
                  {item.name.toUpperCase()}
                </a>
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-col rounded-2xl bg-translucent shadow-md w-3/5 m-10 overflow-y-auto">
          <div className="bg-translucent text-xl text-center select-none p-3 pt-4">CUSTOMIZE LOADOUT</div>
          <div className="flex flex-col grow">
            <div className="grid grid-flow-col h-full overflow-y-auto px-10">
              {customizations.map((item, index) =>
                <div key={index} className="flex justify-center items-center">
                  <div className="flex justify-center items-center bg-translucent rounded-md w-36 h-44"></div>
                  <Card key={item} size="sm" className="absolute hover:scale-105 transition ease-in-out duration-150">
                    {item.name}
                  </Card>
                </div>
              )}
            </div>
            <div className="grid grid-flow-col justify-center gap-12 h-full overflow-y-auto mb-5">
              <div className="flex justify-center items-center text-black pl-32">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item =>
                  <Card key={item} size="md" className="-ml-32 hover:bg-amber-100 hover:mr-20 last:hover:mr-0" />
                )}
              </div>
              <div className="flex flex-col justify-center items-center w-fit">
                <div className="flex drop-shadow-md rounded-full w-[70px]">
                  <Image
                    priority
                    src={goldCoin}
                    height={70}
                    width={70}
                    alt="Gold"
                    draggable="false"
                  />
                </div>
                <div className="flex drop-shadow-md rounded-full w-[70px] -mt-5">
                  <Image
                    priority
                    src={silverCoin}
                    height={70}
                    width={70}
                    alt="Gold"
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
    </div >
  )
}
