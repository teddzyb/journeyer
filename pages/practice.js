// APIs
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Components
import TopMenuBar from '../components/top-menu-bar'

// Assets
import classicMode from '../public/assets/icons/mode-classic.svg'
import tutorialMode from '../public/assets/icons/mode-tutorial.svg'
import rushMode from '../public/assets/icons/mode-rush.svg'

export default function Practice() {
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
      <main className="h-screen flex flex-col justify-center items-center gap-28 pb-20">
        <div className="flex gap-24">
          <div className="flex flex-col items-center shadow-md rounded-xl bg-translucent w-60 h-80">
            <div className="flex justify-center h-full">
              <Image
                src={tutorialMode}
                width={72}
                height={72}
                alt=""
                className="drop-shadow-md"
                draggable="false"
              />
            </div>
            <div className="text-lg drop-shadow-md pb-5 -mt-2">TUTORIAL</div>
          </div>
          <div className="flex flex-col items-center shadow-md rounded-xl ring-4 ring-teal-400 bg-translucent w-60 h-80 scale-110">
            <div className="flex justify-center h-full">
              <Image
                src={classicMode}
                width={72}
                height={72}
                alt=""
                className="drop-shadow-md"
                draggable="false"
              />
            </div>
            <div className="text-lg drop-shadow-md pb-5 -mt-2">CLASSIC</div>
          </div>
          <div className="flex flex-col items-center shadow-md rounded-xl bg-translucent w-60 h-80">
            <div className="flex justify-center h-full">
              <Image
                src={rushMode}
                width={72}
                height={72}
                alt=""
                className="drop-shadow-md"
                draggable="false"
              />
            </div>
            <div className="text-lg drop-shadow-md pb-5 -mt-2">RUSH</div>
          </div>
        </div>
        <div>
          <Link href="/menu">
            <a>
              <button className="btn-primary h-11 w-40">BACK</button>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
