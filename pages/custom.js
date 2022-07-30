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
import { faAngleDown, faRightToBracket, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

let lobby = [
  { username: "PLAYER-0001", level: 25, avatar: "/assets/avatar.jpg", role: "player" },
  { username: "PLAYER-0002", level: 23, avatar: "/assets/avatar.jpg", role: "player" },
  { username: "PLAYER-0003", level: 15, avatar: "/assets/avatar.jpg", role: "spectator" },
  { username: "PLAYER-0004", level: 16, avatar: "/assets/avatar.jpg", role: "spectator" },
  { username: "PLAYER-0005", level: 20, avatar: "/assets/avatar.jpg", role: "spectator" },
]

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
          <div className="border-b border-translucent p-4 scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setCurrentMode(0)}
                className={classNames(
                  "text-sm rounded-lg p-2 pt-3",
                  currentMode === 0 ? "text-black font-semibold bg-teal-500" : "text-teal-50 bg-translucent"
                )}
              >
                CLASSIC
              </button>
              <button
                onClick={() => setCurrentMode(1)}
                className={classNames(
                  "text-sm rounded-lg p-2 pt-3",
                  currentMode === 1 ? "text-black font-semibold bg-teal-500" : "text-teal-50 bg-translucent"
                )}
              >
                BLITZ
              </button>
              <button
                onClick={() => setCurrentMode(2)}
                className={classNames(
                  "text-sm rounded-lg p-2 pt-3 col-span-2",
                  currentMode === 2 ? "text-black font-semibold bg-teal-500" : "text-teal-50 bg-translucent"
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
        <div className="flex flex-col rounded-xl shadow-md bg-translucent overflow-hidden w-72 m-10 ml-0">
          <div className="text-center select-none bg-translucent w-full pb-2 pt-3">ROOM 00001</div>
          <div className="border-b border-translucent p-4">
            <div className="grid grid-cols-4 gap-y-2 items-center">
              <label htmlFor="joinCode" className="text-sm whitespace-nowrap mr-3 pt-1">JOIN</label>
              <div className="flex col-span-3">
                <input
                  type="text"
                  id="joinCode"
                  name="joinCode"
                  placeholder="Enter room code"
                  className="text-sm border-none shadow-sm rounded-l-sm bg-translucent placeholder-white/50 w-full h-8 pb-[6px]
                  focus:border-transparent focus:ring-white/[.15]"
                />
                <button className="flex justify-center items-center rounded-r-sm bg-teal-500 h-8 aspect-square">
                  <FontAwesomeIcon
                    icon={faRightToBracket}
                    style={{ color: "rgb(0,0,0,.6)" }}
                    draggable="false"
                  />
                </button>
              </div>
              <label htmlFor="inviteUser" className="text-sm whitespace-nowrap mr-3 pt-1">INVITE</label>
              <div className="flex col-span-3">
                <input
                  type="text"
                  id="inviteUser"
                  name="inviteUser"
                  placeholder="Enter username"
                  className="text-sm border-none shadow-sm rounded-l-sm bg-translucent placeholder-white/50 w-full h-8 pb-[6px]
                  focus:border-transparent focus:ring-white/[.15]"
                />
                <button className="flex justify-center items-center rounded-r-sm bg-teal-500 h-8 aspect-square">
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    style={{ color: "rgb(0,0,0,.6)" }}
                    draggable="false"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent">
            <div className="text-sm pb-1">PLAYERS (2/2)</div>
            {
              lobby.filter(player => player.role === "player").map((player, index) =>
                <div key={index} className="flex items-center gap-4 rounded-md p-2 hover:bg-translucent/10">
                  <div className="flex rounded-md outline outline-2 outline-translucent shadow-sm w-fit">
                    <Image
                      src={player.avatar}
                      height={48}
                      width={48}
                      className="rounded-md"
                      alt=""
                      draggable="false"
                    />
                  </div>
                  <div className="flex flex-col pt-[2px] gap-[2px]">
                    <div>{player.username}</div>
                    <div className="text-sm">LEVEL 28</div>
                  </div>
                </div>
              )}
            <div className="text-sm pb-1 pt-4">SPECTATORS (3)</div>
            {
              lobby.filter(player => player.role === "spectator").map((player, index) =>
                <div key={index} className="flex items-center gap-4 rounded-md p-2 hover:bg-translucent/10">
                  <div className="flex rounded-md outline outline-2 outline-translucent shadow-sm w-fit">
                    <Image
                      src={player.avatar}
                      height={48}
                      width={48}
                      className="rounded-md"
                      alt=""
                      draggable="false"
                    />
                  </div>
                  <div className="flex flex-col pt-[2px] gap-[2px]">
                    <div>{player.username}</div>
                    <div className="text-sm">LEVEL 28</div>
                  </div>
                </div>
              )}
          </div>
          {/* TODO: Chat feature */}
          {/* <div className="text-sm border-t border-translucent drop-shadow-md max-h-80 h-60 p-4">
            CHAT
          </div> */}
        </div>
      </main>
    </div>
  )
}
