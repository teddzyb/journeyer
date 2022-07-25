// APIs
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

// Components
import TopMenuBar from '../components/top-menu-bar'
import RankRow from '../components/rank-row'
import StreakBar from '../components/streak-bar'

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import streakFire from '../public/assets/icons/streak-fire.svg'
import rankFirst from '../public/assets/icons/rank-first.svg'
import rankSecond from '../public/assets/icons/rank-second.svg'
import rankThird from '../public/assets/icons/rank-third.svg'

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
        <div className="flex flex-col items-center bg-translucent rounded-2xl shadow-md overflow-hidden w-2/5 m-10 mr-5">
          <div className="text-center text-xl select-none bg-translucent w-full pb-3 pt-4">LEADERBOARD</div>
          <div className="grid grid-cols-9 select-none text-center bg-translucent/10 border-t border-b border-translucent w-full py-1 pt-2 px-10">
            <div className="col-span-2">RANK</div>
            <div className="col-span-5">PLAYER</div>
            <div className="col-span-2">ELO</div>
          </div>
          <div className="grow w-full scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent">
            <div className="grid grid-flow-row">
              {Array.from(Array(50).keys()).map(item =>
                <RankRow key={item} rank={item} />
              )}
            </div>
          </div>
          <div className="bg-translucent/10 border-t border-b border-translucent w-full">
            <RankRow rank={24} />
          </div>
          <div className="flex items-center justify-center gap-5 bg-translucent/10 select-none w-full p-4">
            <Image
              src={streakFire}
              width={40}
              height={40}
              alt=""
              draggable="false"
            />
            <StreakBar streak="2/3" />
            <div className="flex items-center gap-3">
              <div className="text-xl pt-1">+1</div>
              <div className="bg-teal-400 rounded-full w-3 h-3" />
            </div>
          </div>
        </div>
        <div className="flex bg-translucent rounded-2xl shadow-md w-3/5 m-10 ml-5">

        </div>
      </main>
    </div>
  )
}
