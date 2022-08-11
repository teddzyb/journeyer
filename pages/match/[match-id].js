// APIs
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

// Components
import { Transition } from '@headlessui/react'
import Card from '../../components/card'

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faAngleRight, faGear, faFlag, faVolumeHigh, faVolumeXmark, faQuestionCircle, faUserPlus, faCommentDots }
  from '@fortawesome/free-solid-svg-icons'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Match() {

  const [activityLog, setActivityLog] = useState(false)
  const toggleActivityLog = () => setActivityLog(!activityLog)

  const [volume, setVolume] = useState(false)
  const toggleVolume = () => setVolume(!volume)

  let currentVolume = volume ? faVolumeXmark : faVolumeHigh

  return (
    <div>
      <Head>
        <title>Journeyer</title>
        <meta name="description" content="Journeyer of the Realms is a tabletop card-collecting strategy game developed by Paper Kiwi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-row justify-center px-20 py-12">
        <div className="flex flex-col items-center gap-3 absolute right-5 top-5">
          <button className="flex">
            <FontAwesomeIcon
              icon={faGear}
              className="text-2xl bg-translucent/10 hover:bg-translucent aspect-square rounded-full p-2 shadow-sm"
              draggable="false"
            />
          </button>
          {/* <button className="flex">
            <FontAwesomeIcon
              icon={currentVolume}
              onClick={toggleVolume}
              className="text-2xl bg-translucent/10 hover:bg-translucent aspect-square rounded-full p-2 shadow-sm"
              draggable="false"
            />
          </button>
          <button className="flex">
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className="text-2xl bg-translucent/10 hover:bg-translucent aspect-square rounded-full p-2 shadow-sm"
              draggable="false"
            />
          </button> */}
          <button className="flex">
            <FontAwesomeIcon
              icon={faFlag}
              className="text-xl -rotate-12 bg-translucent/10 hover:bg-translucent aspect-square rounded-full p-2.5 shadow-sm"
              draggable="false"
            />
          </button>
        </div>
        <Transition
          show={!activityLog}
          enter="transition-translate duration-200"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition-translate duration-200"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="flex flex-col place-self-center absolute left-0 rounded-r-lg shadow-md overflow-hidden w-8"
        >
          <button onClick={toggleActivityLog} className="flex">
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-2xl bg-translucent hover:bg-translucent/20 w-full py-10 transition"
              draggable="false"
            />
          </button>
        </Transition>
        <Transition
          show={activityLog}
          enter="transition-translate duration-200"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition-translate duration-200"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="flex flex-col place-self-center absolute left-0 bg-translucent rounded-r-md shadow-md overflow-hidden w-16 max-h-[530px]"
        >
          <div className="flex flex-col items-center gap-4 p-3 scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
            <div className="bg-translucent/10 rounded-sm outline outline-2 outline-blue-300 w-full">
              <div className="aspect-square" />
            </div>
            <div className="bg-translucent/10 rounded-sm outline outline-2 outline-red-300 w-full">
              <div className="aspect-square" />
            </div>
            <div className="bg-translucent/10 rounded-sm outline outline-2 outline-blue-300 w-full">
              <div className="aspect-square" />
            </div>
            <div className="bg-translucent/10 rounded-sm outline outline-2 outline-red-300 w-full">
              <div className="aspect-square" />
            </div>
          </div>
          <button onClick={toggleActivityLog} className="flex w-full">
            <FontAwesomeIcon
              icon={faAnglesLeft}
              className="text-xl bg-translucent/10 hover:bg-translucent w-full py-3"
              draggable="false"
            />
          </button>
        </Transition>
        <div className="relative bg-translucent rounded-2xl shadow-md h-full w-full">

          <div className="absolute top-0 left-0">
            <div className="flex items-center gap-3 text-black bg-red-300 rounded-t-md overflow-hidden w-80">
              <div className="flex w-fit">
                <Image
                  src="/assets/avatar.jpg"
                  height={64}
                  width={64}
                  alt=""
                  draggable="false"
                />
              </div>
              <div className="flex flex-col pt-[2px] gap-[2px]">
                <div>PLAYER-0001</div>
                <div className="text-sm">LEVEL 25</div>
              </div>
            </div>
            <div className="bg-translucent rounded-b-md p-2">
              test
            </div>
          </div>

          <div className="absolute bottom-0 right-0">
            <div className="text-end bg-translucent rounded-t-md p-2">
              test
            </div>
            <div className="flex flex-row-reverse items-center gap-3 text-black bg-blue-300 rounded-b-md overflow-hidden w-80">
              <div className="flex w-fit">
                <Image
                  src="/assets/avatar.jpg"
                  height={64}
                  width={64}
                  alt=""
                  draggable="false"
                />
              </div>
              <div className="flex flex-col text-end pt-[2px] gap-[2px]">
                <div>PLAYER-0001</div>
                <div className="text-sm">LEVEL 25</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
