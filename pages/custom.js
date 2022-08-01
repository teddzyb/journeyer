// APIs
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/future/image'
import { useState, useRef } from 'react'
import { useListState } from '@mantine/hooks';

// Components
import TopMenuBar from '../components/top-menu-bar'
import Card from '../components/card'
import LobbyPlayer from '../components/lobby-player'

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faPaperPlane, faUser }
  from '@fortawesome/free-solid-svg-icons'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const modes = ["classic", "blitz", "custom"]

const lobbyUsers = [
  { key: 0, username: "PLAYER-0001", level: 25, avatar: "/assets/avatar.jpg", role: "player" },
  { key: 1, username: "PLAYER-0002", level: 23, avatar: "/assets/avatar.jpg", role: "spectator" },
  // { key: 2, username: "PLAYER-0003", level: 15, avatar: "/assets/avatar.jpg", role: "spectator" },
  // { key: 3, username: "PLAYER-0004", level: 16, avatar: "/assets/avatar.jpg", role: "spectator" },
  // { key: 4, username: "PLAYER-0005", level: 20, avatar: "/assets/avatar.jpg", role: "spectator" },
]

export default function Ranked() {

  const playerListRef = useRef()
  const spectatorListRef = useRef()

  const [currentMode, setCurrentMode] = useState(0)
  const [dragging, setDragging] = useState(false)

  const [lobby, handleLobby] = useListState(lobbyUsers)

  function overlap(_event, info, ref) {
    let rect = ref.current.getBoundingClientRect()
    if (!(info.point.y < rect.top || info.point.y > rect.bottom))
      return true
  }

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
              {modes.map((mode, index) =>
                <button
                  key={index}
                  onClick={() => setCurrentMode(index)}
                  className={classNames(
                    "uppercase text-sm rounded-lg p-2 pt-3 last:col-span-2",
                    currentMode === index ? "text-[#0c4441] font-semibold bg-teal-500" : "text-teal-50 bg-translucent"
                  )}
                >
                  {mode}
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col grow m-10">
          <div className="grid grid-cols-3 items-center grow">
            <div className="flex justify-center text-6xl font-light select-none mb-10 order-2">VS</div>
            {
              lobby.filter(player => player.role === "player").map((player, index) =>
                <div key={player.key} className="flex flex-col items-end select-none last:items-start last:order-3">
                  <Card size="xl">Player&apos;s Deck</Card>
                  <div className={classNames(
                    "flex gap-4 pt-6",
                    index && "flex-row-reverse"
                  )}>
                    <div className={classNames(
                      "flex flex-col justify-center pt-[2px] gap-[2px]",
                      index ? "items-start" : "items-end"
                    )}>
                      <div>{player.username}</div>
                      <div className="text-sm">LEVEL {player.level}</div>
                    </div>
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
                  </div>
                </div>
              )
            }
            {
              Array.from(Array(2 - lobby.filter(player => player.role === "player").length).keys()).map(index =>
                <div key={index} className="flex flex-col items-end select-none last:items-start last:order-3">
                  <Card size="xl" className="bg-translucent/[.05] shadow-none outline-2 outline-black/50 outline-dashed"> </Card>
                  <div className={classNames(
                    "flex gap-4 pt-6",
                    (lobby.filter(player => player.role === "player").length === 1 || index) && "flex-row-reverse"
                  )}>
                    <div className={classNames(
                      "flex flex-col justify-center pt-[2px] gap-[2px]",
                      (lobby.filter(player => player.role === "player").length === 1 || index) ? "items-start" : "items-end"
                    )}>
                      <div>ADD A PLAYER</div>
                    </div>
                    <div className="flex rounded-md outline-dashed outline-2 outline-translucent/25 overflow-hidden w-fit">
                      <div className="flex justify-center items-center text-xl w-[48px] aspect-square bg-translucent/5">
                        <FontAwesomeIcon
                          icon={faUser}
                          style={{ color: "#0a3c39" }}
                          draggable="false"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
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
                  focus:border-transparent focus:ring-white/[.15] focus:ring-inset"
                />
                <button className="flex justify-center items-center rounded-r-sm bg-teal-500 h-8 aspect-square">
                  <FontAwesomeIcon
                    icon={faRightToBracket}
                    style={{ color: "#0c4441" }}
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
                  focus:border-transparent focus:ring-white/[.15] focus:ring-inset"
                />
                <button className="flex justify-center items-center rounded-r-sm bg-teal-500 h-8 aspect-square">
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    style={{ color: "#0c4441" }}
                    draggable="false"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="h-full p-4 scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent">
            <div className="text-sm select-none pb-1">PLAYERS ({lobby.filter(player => player.role === "player").length}/2)</div>
            <div ref={playerListRef} className={dragging && "rounded-md ring-2 ring-teal-500 transition ease-in-out duration-100"}>
              {
                lobby.filter(player => player.role === "player").map((player, index) =>
                  <LobbyPlayer
                    key={index}
                    type="player"
                    player={player}
                    setDragging={setDragging}
                    listRef={spectatorListRef}
                    overlap={overlap}
                    handleLobby={handleLobby}
                  />
                )
              }
              {
                Array.from(Array(2 - lobby.filter(player => player.role === "player").length).keys()).map(index =>
                  <LobbyPlayer key={index} type="placeholder">ADD A PLAYER</LobbyPlayer>
                )
              }
            </div>
            <div className="text-sm select-none pb-1 pt-4">SPECTATORS ({lobby.filter(player => player.role === "spectator").length})</div>
            <div ref={spectatorListRef} className={dragging && "rounded-md ring-2 ring-teal-500 transition ease-in-out duration-100"}>
              {
                lobby.filter(player => player.role === "spectator").map((player, index) =>
                  <LobbyPlayer
                    key={index}
                    type="spectator"
                    playerCount={lobby.filter(x => x.role === "player").length}
                    player={player}
                    setDragging={setDragging}
                    listRef={playerListRef}
                    overlap={overlap}
                    handleLobby={handleLobby}
                  />
                )
              }
              {
                lobby.filter(player => player.role === "spectator").length === 0 &&
                <LobbyPlayer type="placeholder">ADD A SPECTATOR</LobbyPlayer>
              }
            </div>
          </div>
          <div className="flex flex-col text-sm border-t border-translucent max-h-[260px] pb-4">
            <div className="flex flex-col gap-1 px-4 pt-4 pb-0 scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent">
              <div className="text-blue-300">PLAYER-0001 created Room#00001</div>
              <div><span className="text-teal-300">Sender:</span> Message</div>
              <div className="text-green-300">PLAYER-0001 joined the room</div>
              <div className="text-red-300">PLAYER-0001 left the room</div>
            </div>
            <div className="flex col-span-3 px-4 pt-4">
              <input
                type="text"
                id="inviteUser"
                name="inviteUser"
                placeholder="Send a message"
                className="text-sm border-none shadow-sm rounded-l-sm bg-translucent placeholder-white/50 w-full h-9 pb-[6px]
                  focus:border-transparent focus:ring-white/[.15] focus:ring-inset"
              />
              <button className="flex justify-center items-center text-sm text-[#0c4441] font-semibold rounded-r-sm bg-teal-500 pt-[2px] px-2">
                Send
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
