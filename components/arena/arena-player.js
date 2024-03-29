import Image from "next/future/image";
import Currencies from "./currencies";

const ArenaPlayer = (props) => {
  return (
    <div
      className={`${
        props.opponent ? "flex-col top-0 left-0" : "flex-col-reverse bottom-0 right-0"
      } absolute flex select-none`}
    >
      <div
        className={`${
          props.opponent
            ? "items-center bg-red-300 rounded-t-lg shadow-sm"
            : "flex-row-reverse items-center bg-blue-300 rounded-b-lg"
        } flex gap-3 text-black overflow-hidden w-80`}
      >
        <div className="flex w-fit">
          <Image src="/assets/avatar.jpg" height={64} width={64} alt="" draggable="false" />
        </div>
        <div className={`${!props.opponent && "text-end"} flex flex-col pt-[2px] gap-[2px]`}>
          <div>PLAYER-0001</div>
          <div className="text-sm">LEVEL 25</div>
        </div>
        <div className={`${props.opponent ? "ml-auto" : "mr-auto"}`}>{props.children}</div>
      </div>
      <div
        className={`${props.opponent ? "rounded-b-lg" : "rounded-t-lg"} bg-translucent p-[10px]`}
      >
        <Currencies opponent={props.opponent} gold="2" silver="3" />
      </div>
    </div>
  );
};

export default ArenaPlayer;
