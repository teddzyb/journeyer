// APIs
import Image from 'next/image'
import { useState } from 'react'

// Components
import { Transition } from '@headlessui/react'
import * as Tooltip from '@radix-ui/react-tooltip'
import ExpBar from '../components/exp-bar'
import Friends from '../components/friends'
import Notification from './notifications'
import Feedback from './feedback'

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshakeAngle, faBell, faVolumeHigh, faVolumeXmark, faFeather }
  from '@fortawesome/free-solid-svg-icons'
import goldCoin from '../public/assets/currency/coin-gold.svg'
import silverCoin from '../public/assets/currency/coin-silver.svg'

export default function TopMenuBar() {

  const [friends, setFriends] = useState(false)
  const toggleFriends = () => {
    setFriends(!friends)
    setNotifications(false)
    setFeedback(false)
  }

  const [notifications, setNotifications] = useState(false)
  const toggleNotifications = () => {
    setFriends(false)
    setNotifications(!notifications)
    setFeedback(false)
  }

  const [volume, setVolume] = useState(false)
  const toggleVolume = () => setVolume(!volume)

  const [feedback, setFeedback] = useState(false)
  const toggleFeedback = () => {
    setFriends(false)
    setNotifications(false)
    setFeedback(!feedback)
  }

  const iconsR = [
    { name: "Friends", src: faHandshakeAngle, state: toggleFriends },
    { name: "Notifications", src: faBell, state: toggleNotifications },
    { name: "Volume", src: faVolumeHigh, state: toggleVolume },
    { name: "Feedback", src: faFeather, state: toggleFeedback },
  ]

  iconsR[2].src = volume ? faVolumeXmark : faVolumeHigh

  return (
    <div className="grid grid-cols-2 bg-translucent shadow-sm h-20 p-2">
      <div className="grid grid-flow-col auto-cols-max items-center gap-3">
        <div className="flex justify-center items-center rounded-md outline outline-2 outline-translucent shadow-sm h-14 w-14 mx-1">
          <Image
            priority
            src="/assets/avatar.jpg"
            height={56}
            width={56}
            quality={100}
            className="rounded-md"
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
              alt="Gold "
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
              alt="Silver "
              draggable="false"
            />
            13,200
          </div>
        </div>
      </div>
      <div className="grid grid-flow-col col-start-3 auto-cols-max">
        {iconsR.map((icon, index) =>
          <Tooltip.Provider key={index} delayDuration="25">
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  className="flex flex-col justify-center text-teal-500 px-7 hover:text-teal-400"
                  onClick={icon.state}
                  aria-label={icon.name}>
                  <FontAwesomeIcon
                    icon={icon.src}
                    style={{ fontSize: 24 }}
                    draggable="false"
                  />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content sideOffset="-0.5" className="z-50 bg-[#0c4441] rounded-md py-1 pt-[6px] px-3">
                {icon.name}
                <Tooltip.Arrow className="fill-[#0c4441]" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        )}
      </div>
      <Transition
        show={friends}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed top-20 right-3 mt-2"
      >
        <div className="grid gap-2 w-96">
          <div className="rounded-lg bg-teal-900 border border-translucent shadow-md w-fit px-4 py-2 pt-3">
            Friends
          </div>
          <Friends />
        </div>
      </Transition>
      <Transition
        show={notifications}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed top-20 right-3 mt-2"
      >
        <div className="grid gap-2 w-96">
          <div className="rounded-lg bg-teal-900 border border-translucent shadow-md w-fit px-4 py-2 pt-3">
            Notifications
          </div>
          <Notification />
        </div>
      </Transition>
      <Transition
        show={feedback}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed top-20 right-3 mt-2"
      >
        <div className="grid gap-2 w-96">
          <div className="rounded-lg bg-teal-900 border border-translucent shadow-md w-fit px-4 py-2 pt-3">
            Feedback
          </div>
          <Feedback />
        </div>
      </Transition>
    </div>
  )
}