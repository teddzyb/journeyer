// APIs
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// Components
import TopMenuBar from '../components/top-menu-bar'
import RankRow from '../components/rank-row'
import StreakBar from '../components/streak-bar'
import LeagueRank from "../components/league-rank"

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import streakFire from '../public/assets/icons/streak-fire.svg'

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
        <div className="flex flex-col items-center bg-translucent rounded-2xl shadow-md w-3/5 m-10 ml-5">
          <div className="flex justify-between text-2xl drop-shadow-md whitespace-nowrap w-full px-36 my-6">
            <button
              // disabled={currentRealm === 0 ? true : false}
              // onClick={() => setCurrentRealm(currentRealm - 1)}
              className="flex justify-start items-center hover:text-teal-300 w-full py-5 disabled:text-white/60">
              <FontAwesomeIcon
                icon={faChevronLeft}
                draggable="false"
              />
            </button>
            <div className="flex items-center select-none uppercase pt-1">{/*realms[currentRealm].name*/}SILVER LEAGUE</div>
            <button
              // disabled={currentRealm === realms.length - 1 ? true : false}
              // onClick={() => setCurrentRealm(currentRealm + 1)}
              className="flex justify-end items-center hover:text-teal-300 w-full py-5 disabled:text-white/60">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="rotate-180"
                draggable="false"
              />
            </button>
          </div>
          <div className="grow w-full">
            <div className="grid grid-flow-row h-full">
              {Array.from(Array(4).keys()).map(item =>
                <LeagueRank key={item} rank={item} />
              )}
            </div>
          </div>
          <div className="flex justify-center gap-8 my-10">
            <Link href="/menu">
              <a>
                <button className="btn-primary h-11 w-40">BACK</button>
              </a>
            </Link>
            <button className="btn-primary h-11 w-40">START</button>
          </div>
        </div>
      </main>
    </div>
  )
}
