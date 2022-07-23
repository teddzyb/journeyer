// APIs
import Head from 'next/head'
import Link from 'next/link'

// Components
import TopMenuBar from '../components/top-menu-bar'
import CampaignMenu from "../components/campaign-menu"

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function Campaign() {
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
        <div className="flex flex-col items-center w-[45%] m-10 mr-5">
          <div className="flex flex-col h-full">
            <div className="flex justify-between text-2xl drop-shadow-md whitespace-nowrap mx-16">
              <button
                disabled
                className="flex justify-start items-center hover:text-teal-300 w-full py-5 disabled:text-white/60">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  draggable="false"
                />
              </button>
              <div className="flex items-center select-none pt-1">REALM #1</div>
              <button
                // disabled
                className="flex justify-end items-center hover:text-teal-300 w-full py-5 disabled:text-white/60">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="rotate-180"
                  draggable="false"
                />
              </button>
            </div>
            <CampaignMenu />
            <div className="flex justify-center gap-8 my-8">
              <Link href="/menu">
                <a>
                  <button className="btn-primary h-11 w-40">BACK</button>
                </a>
              </Link>
              <button className="btn-primary h-11 w-40">START</button>
            </div>
          </div>
        </div>
        <div className="flex w-[55%] m-10 ml-5">
          <div className="flex justify-center items-center grow bg-translucent shadow-md text-white/90 rounded-xl">
            (Interactive Map)
          </div>
        </div>
      </main >
    </div >
  )
}
