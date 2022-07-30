// APIs
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// Components
import TopMenuBar from '../components/top-menu-bar'
import Card from '../components/card'

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Ranked() {

  const [currentMode, setCurrentMode] = useState(0)

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
        <div className="rounded-xl shadow-md bg-translucent overflow-hidden w-72 m-10 mr-0">
          <div className="text-center select-none bg-translucent w-full pb-2 pt-3">GAME OPTIONS</div>
          <div className="p-4 pt-3 scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent">
            <div className="grid grid-cols-2 gap-2 border-b border-translucent pb-4">
              <button
                onClick={() => setCurrentMode(0)}
                className={classNames(
                  "text-sm rounded-lg p-2 pt-3",
                  currentMode === 0 ? "text-black bg-teal-500" : "text-teal-50 bg-translucent"
                )}
              >
                CLASSIC
              </button>
              <button
                onClick={() => setCurrentMode(1)}
                className={classNames(
                  "text-sm rounded-lg p-2 pt-3",
                  currentMode === 1 ? "text-black bg-teal-500" : "text-teal-50 bg-translucent"
                )}
              >
                RUSH
              </button>
              <button
                onClick={() => setCurrentMode(2)}
                className={classNames(
                  "text-sm rounded-lg p-2 pt-3 col-span-2",
                  currentMode === 2 ? "text-black bg-teal-500" : "text-teal-50 bg-translucent"
                )}
              >
                CUSTOM
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col grow my-10">
          <div className="grow">

          </div>
          <div className="flex justify-center gap-8 w-full my-10">
            <Link href="/menu">
              <a draggable="false">
                <button className="btn-primary h-11 w-40">BACK</button>
              </a>
            </Link>
            <button className="btn-primary h-11 w-40">START</button>
          </div>
        </div>
        <div className="rounded-xl shadow-md bg-translucent overflow-hidden w-72 m-10 ml-0">
          <div className="text-center select-none bg-translucent w-full pb-2 pt-3">ROOM 00001</div>
          <div className="p-4 pt-3 scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent">

          </div>
        </div>
      </main>
    </div>
  )
}
