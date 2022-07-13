import Head from 'next/head'
import Image from 'next/image'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faVolumeHigh, faVolumeXmark, faBug } from '@fortawesome/free-solid-svg-icons'

import Notification from '../components/notification'
import BugReport from '../components/bug-report'

export default function Home() {

  // TODO: handle login
  // TODO: handle sign up

  const [notifications, setNotifications] = useState(false)
  const toggleNotifications = () => {
    setNotifications(!notifications)
    setBugReport(false)
  }

  const [volume, setVolume] = useState(false)
  const toggleVolume = () => setVolume(!volume)

  const [bugReport, setBugReport] = useState(false)
  const toggleBugReport = () => {
    setBugReport(!bugReport)
    setNotifications(false)
  }

  let iconsL = [
    { name: "Twitter", src: "/assets/icons/twitter.svg", link: "https://twitter.com/" },
    { name: "Discord", src: "/assets/icons/discord.svg", link: "https://discord.gg/" },
    { name: "Fandom", src: "/assets/icons/fandom.svg", link: "https://fandom.com/" },
  ]
  let iconsR = [
    { name: "Notifications", src: faBell, state: toggleNotifications },
    { name: "Volume", src: faVolumeHigh, state: toggleVolume },
    { name: "Bug Report", src: faBug, state: toggleBugReport },
  ]

  iconsR[1].src = volume ? faVolumeXmark : faVolumeHigh

  return (
    <div>
      <Head>
        <title>Journeyer</title>
        <meta name="description" content="Journeyer of the Realms is a tabletop card-collecting strategy game developed by Paper Kiwi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-col justify-center">
        <div className="flex justify-center mb-20">
          <p className="text-7xl font-bold text-center drop-shadow-md select-none">JOURNEYER<br />
            <span className="text-4xl">OF THE REALMS</span>
          </p>
        </div>
        <div className="grid grid-rows-2 gap-2 justify-center mb-20">
          <button
            className="btn-primary text-lg py-3 w-56"
            onClick={() => window.open(`/auth/login`, 'Login Auth', `location=no,width=520,height=600,left=${(screen.width - 520) / 2},top=${(screen.height - 600) / 4}`)}>
            Sign In
          </button>
          <button
            className="btn-primary text-lg py-3 w-56"
            onClick={() => window.open(`/auth/signup`, 'Signup Auth', `location=no,width=1200,height=700,left=${(screen.width - 1200) / 2},top=${(screen.height - 700) / 4}`)}>
            Create an Account
          </button>
        </div>
      </main>
      <footer className="fixed bottom-0 w-full">
        <div className="flex flex-row-reverse">
          {notifications ?
            <div className="grid gap-2 w-96 mx-4">
              <div className="rounded-lg bg-translucent border border-translucent shadow-md w-fit px-4 py-3">
                News
              </div>
              <Notification />
            </div> : null}
          {bugReport ?
            <div className="grid gap-2 w-96 mx-4">
              <div className="rounded-lg bg-translucent border border-translucent shadow-md w-fit px-4 py-3">
                Report a Bug
              </div>
              <BugReport />
            </div> : null}
        </div>
        <div className="grid grid-cols-2">
          <div className="grid grid-flow-col auto-cols-max">
            {iconsL.map((icon, index) =>
              <button key={index} className="flex flex-col justify-center px-6 py-5 cursor-pointer select-none
                  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                <Image
                  src={icon.src}
                  width={24}
                  height={24}
                  alt={icon.name}
                  draggable="false"
                />
              </button>
            )}
          </div>
          <div className="grid grid-flow-col col-start-3 auto-cols-max">
            {iconsR.map((icon, index) =>
              <button
                key={index}
                className="flex flex-col justify-center px-6 py-5 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
                onClick={icon.state}>
                <FontAwesomeIcon
                  alt={icon.name}
                  icon={icon.src}
                  className="text-teal-500"
                  style={{ fontSize: 24 }}
                  draggable="false"
                />
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  )
}
