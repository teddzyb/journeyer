// APIs
import Image from "next/image";

// Assets
import goldCoin from "../../public/assets/currency/coin-gold.svg";
import silverCoin from "../../public/assets/currency/coin-silver.svg";

const ArenaPlayer = ({ children, opponent, username, level }) => {
  return (
    <div
      className={`${
        opponent ? "flex-col top-2.5 left-2.5" : "flex-col-reverse bottom-2.5 right-2.5"
      } z-10 absolute flex`}
    >
      <div
        className={`drop-shadow-xl flex items-center overflow-clip p-2 h-20 w-[21rem] gap-3 rounded-md bg-fogra-900 outline outline-2 outline-fogra-800 ${
          !opponent && "flex-row-reverse"
        }`}
      >
        <div className="h-full aspect-square rounded-md">
          <Image
            src="/assets/avatar.jpg"
            layout="responsive"
            height={1080}
            width={1080}
            className="rounded-md"
            alt=""
            draggable="false"
          />
        </div>
        <div
          className={`flex w-full gap-2 whitespace-nowrap flex-col ${
            !opponent ? "items-end" : "items-start"
          }`}
        >
          <div className="flex items-center gap-2 font-medium">
            {username ?? "Loading..."}
            <div className="px-1.5 h-fit text-xs text-fogra bg-malachite rounded-full">{level}</div>
          </div>
          <div className={`flex items-center gap-2 ${!opponent && "flex-row-reverse"}`}>
            <div className={`flex items-center text-sm gap-2 ${!opponent && "flex-row-reverse"}`}>
              <Image src={goldCoin} height={18} width={18} alt="Gold" draggable="false" />0
            </div>
            <div className={`flex items-center text-sm gap-2 ${!opponent && "flex-row-reverse"}`}>
              <Image src={silverCoin} height={18} width={18} alt="Silver" draggable="false" />0
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ArenaPlayer;
