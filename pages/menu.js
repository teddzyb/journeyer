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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Menu() {

  const menuItems = [
    { name: "Campaign", href: "campaign" },
    { name: "Ranked", href: "ranked" },
    { name: "Custom", href: "custom" },
    { name: "Practice", href: "practice" },
    { name: "Shop", href: "shop" },
    { name: "Sign Out", href: "/" },
  ]

  const customizations = [
    { name: "Deck" },
    { name: "Sleeve" },
    { name: "Coins" },
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
        <div className="w-2/5 m-10 mr-5">
          <div className="grid w-fit m-12 mt-10">
            {menuItems.map((item, index) =>
              <Link key={index} href={item.href}>
                <a
                  className={classNames(
                    "drop-shadow-md select-none py-5 pr-5",
                    "hover:text-teal-300 hover:scale-105 transition ease-in-out duration-150",
                    index === 0 ? "text-[1.70rem]" : "text-2xl",
                  )}
                  draggable="false"
                >
                  {item.name.toUpperCase()}
                </a>
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-col rounded-2xl bg-translucent shadow-md w-3/5 m-10 ml-5 overflow-hidden">
          <div className="bg-translucent text-xl text-center select-none p-3 pt-4">CUSTOMIZE LOADOUT</div>
          <div className="flex flex-col grow">
            <div className="grid grid-flow-col h-full px-10">
              {customizations.map((item, index) =>
                <div key={index} className="flex justify-center items-center">
                  <div className="flex justify-center items-center bg-translucent rounded-md w-36 h-44"></div>
                  {item.name === "Coins" ?
                    (
                      <Link href="/inventory">
                        <a className="absolute select-none hover:scale-105 transition ease-in-out duration-150" draggable="false">
                          <div className="flex drop-shadow-md rounded-full w-[70px] -translate-x-3">
                            <Image
                              src={goldCoin}
                              height={70}
                              width={70}
                              alt="Gold"
                              draggable="false"
                            />
                          </div>
                          <div className="flex drop-shadow-md rounded-full w-[70px] -mt-6 translate-x-3">
                            <Image
                              src={silverCoin}
                              height={70}
                              width={70}
                              alt="Silver"
                              draggable="false"
                            />
                          </div>
                        </a>
                      </Link>
                    ) : (
                      <Link href="/inventory">
                        <a className="absolute hover:scale-105 transition ease-in-out duration-150" draggable="false">
                          <Card size="sm">
                            {item.name}
                          </Card>
                        </a>
                      </Link>
                    )}
                </div>
              )}
            </div>
            <div className="grid grid-flow-col justify-center gap-12 h-full mb-5">
              <div className="flex justify-center items-center text-black pl-32">
                {Array.from(Array(12).keys()).map(item =>
                  <Card key={item} size="md" hover className="-ml-32 hover:mr-20 last:hover:mr-0 transition-all ease-in-out" />
                )}
              </div>
              <div className="flex flex-col justify-center items-center select-none w-fit">
                <div className="flex drop-shadow-md rounded-full w-[70px]">
                  <Image
                    src={goldCoin}
                    height={70}
                    width={70}
                    alt="Gold"
                    draggable="false"
                  />
                </div>
                <div className="flex drop-shadow-md rounded-full w-[70px] -mt-5">
                  <Image
                    src={silverCoin}
                    height={70}
                    width={70}
                    alt="Silver"
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
