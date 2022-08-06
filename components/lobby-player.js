import Image from 'next/future/image'
import { motion } from 'framer-motion'
import * as ContextMenu from '@radix-ui/react-context-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus, faCircleMinus, faCopy } from '@fortawesome/free-solid-svg-icons'

export default function LobbyPlayer(props) {
  return props.type !== "placeholder" ?
    (
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <motion.div
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
        </ContextMenu.Trigger>

        <ContextMenu.Portal>
          <ContextMenu.Content className="flex flex-col gap-1 bg-[#0c4441] rounded-md pt-[10px] pb-2 px-2">
            <ContextMenu.Item className="hover:outline-none hover:text-teal-300 px-1">
              <button className="flex items-center gap-2 text-start w-full">
                <FontAwesomeIcon
                  icon={faUserPlus}
                  draggable="false"
                  className="aspect-square pb-[2px]"
                />
                <div>Add Friend</div>
              </button>
            </ContextMenu.Item>
            {/* <ContextMenu.Item className="hover:outline-none hover:text-teal-300 px-1">
              <button className="flex items-center gap-2 text-start w-full">
                <FontAwesomeIcon
                  icon={faCopy}
                  draggable="false"
                  className="aspect-square pb-[2px]"
                />
                <div>Copy Username</div>
              </button>
            </ContextMenu.Item> */}
            <ContextMenu.Separator className="h-px bg-translucent" />
            <ContextMenu.Item className="text-red-300 hover:outline-none hover:text-red-400 px-1">
              <button className="flex items-center gap-2 text-start w-full">
                <FontAwesomeIcon
                  icon={faCircleMinus}
                  draggable="false"
                  className="aspect-square pb-[2px]"
                />
                <div>Remove</div>
              </button>
            </ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Portal>
      </ContextMenu.Root>
    ) : (
      <div className="flex items-center gap-4 rounded-md select-none p-2">
        <div className="flex rounded-md outline-dashed outline-2 outline-translucent/25 overflow-hidden w-fit">
          <div className="flex justify-center items-center text-xl w-[48px] aspect-square bg-translucent/5">
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "#0a3c39" }}
              draggable="false"
            />
          </div>
        </div>
        <div className="flex flex-col text-sm text-teal-50/80 pt-[2px] gap-[2px]">
          <div>{props.children}</div>
        </div>
      </div>
    )
}