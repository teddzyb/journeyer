import Image from 'next/future/image'
import { motion } from 'framer-motion'

export default function LobbyPlayer(props) {
  return (
    <motion.div
      key={props.player.key}
      drag="y"
      dragSnapToOrigin
      dragElastic={1}
      onDragStart={() => props.setDragging(true)}
      onDragEnd={(event, info) => {
        props.setDragging(false)
        if (props.type === "spectator" && props.playerCount >= 2)
          return
        props.overlap(event, info, props.listRef) &&
          props.handleLobby.setItemProp(props.player.key, "role", (props.type === "player" ? "spectator" : "player"))
      }}
      className="flex items-center gap-4 rounded-md p-2 hover:bg-translucent/10 hover:shadow-md">
      <div className="flex rounded-md outline outline-2 outline-translucent shadow-sm w-fit">
        <Image
          src={props.player.avatar}
          height={48}
          width={48}
          className="rounded-md"
          alt=""
          draggable="false"
        />
      </div>
      <div className="flex flex-col pt-[2px] gap-[2px]">
        <div>{props.player.username}</div>
        <div className="text-sm">LEVEL {props.player.level}</div>
      </div>
    </motion.div>
  )
}