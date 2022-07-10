import Image from 'next/image'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshakeAngle, faBell, faVolumeHigh, faVolumeXmark, faBug } from '@fortawesome/free-solid-svg-icons'
import goldCoin from '../public/assets/currency/coin-gold.svg'
import silverCoin from '../public/assets/currency/coin-silver.svg'

import ExpBar from '../components/exp-bar'
import Friends from '../components/friends'
import Notification from '../components/notification'
import BugReport from '../components/bug-report'

export default function TopMenuBar() {

  const [friends, setFriends] = useState(false)
  const toggleFriends = () => {
    setFriends(!friends)
    setNotifications(false)
    setBugReport(false)
  }

  const [notifications, setNotifications] = useState(false)
  const toggleNotifications = () => {
    setFriends(false)
    setNotifications(!notifications)
    setBugReport(false)
  }

  const [volume, setVolume] = useState(false)
  const toggleVolume = () => setVolume(!volume)

  const [bugReport, setBugReport] = useState(false)
  const toggleBugReport = () => {
    setFriends(false)
    setNotifications(false)
    setBugReport(!bugReport)
  }

  let iconsR = [
    { name: "Friends", src: faHandshakeAngle, state: toggleFriends },
    { name: "Notifications", src: faBell, state: toggleNotifications },
    { name: "Volume", src: faVolumeHigh, state: toggleVolume },
    { name: "Bug Report", src: faBug, state: toggleBugReport },
  ]

  iconsR[2].src = volume ? faVolumeXmark : faVolumeHigh

  return (
    <div className="grid grid-cols-2 bg-black/[.15] h-20 p-2">
      <div className="grid grid-flow-col auto-cols-max gap-3">
        <div className="flex justify-center items-center">
          <Image
            priority
            src="/assets/avatar.png"
            className="rounded-sm"
            height={60}
            width={60}
            alt="Avatar"
            draggable="false"
          />
        </div>
        <div className="flex flex-col justify-center gap-1 text-lg">
          PLAYER-0001
          <ExpBar />
        </div>
        <div className="flex flex-col justify-center gap-2 ml-10">
          <div className="flex items-center text-sm gap-2">
            <Image
              priority
              src={goldCoin}
              height={20}
              width={20}
              alt="Gold"
              draggable="false"
            />
            124
          </div>
          <div className="flex items-center text-sm gap-2">
            <Image
              priority
              src={silverCoin}
              height={20}
              width={20}
              alt="Silver"
              draggable="false"
            />
            13,200
          </div>
        </div>
      </div>
      <div className="grid grid-flow-col col-start-3 auto-cols-max">
        {iconsR.map((icon, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center text-teal-500 px-5 hover:text-teal-400"
              onClick={icon.state}>
              <FontAwesomeIcon
                alt={icon.name}
                icon={icon.src}
                style={{ fontSize: 24 }}
                draggable="false"
              />
            </div>
          )
        })}
      </div>
      <div className="fixed top-20 right-3 mt-2">
        {friends ?
          <div className="grid gap-2 w-96">
            <div className="rounded-lg bg-black/[.15] backdrop-blur-3xl w-fit px-4 py-3">
              Friends
            </div>
            <Friends />
          </div> : null}
        {notifications ?
          <div className="grid gap-2 w-96">
            <div className="rounded-lg bg-black/[.15] backdrop-blur-3xl w-fit px-4 py-3">
              Notifications
            </div>
            <Notification />
          </div> : null}
        {bugReport ?
          <div className="grid gap-2 w-96">
            <div className="rounded-lg bg-black/[.15] backdrop-blur-3xl w-fit px-4 py-3">
              Report a Bug
            </div>
            <BugReport />
          </div> : null}
      </div>
    </div>
  )
}