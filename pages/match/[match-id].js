// APIs
import Head from 'next/head'
import { useState } from 'react'

// Components
import Card from '../../components/card'

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faFlag, faVolumeHigh, faVolumeXmark, faQuestionCircle, faUserPlus, faCommentDots }
  from '@fortawesome/free-solid-svg-icons'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Match() {

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
          <button className="flex">
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
          </button>
          <button className="flex">
            <FontAwesomeIcon
              icon={faFlag}
              className="text-xl -rotate-12 bg-translucent/10 hover:bg-translucent aspect-square rounded-full p-2.5 shadow-sm"
              draggable="false"
            />
          </button>
        </div>
        <div className="bg-translucent rounded-2xl shadow-md h-full w-full">

        </div>
      </main>
    </div>
  )
}
