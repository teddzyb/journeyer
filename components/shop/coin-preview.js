import Image from "next/image";
import goldCoin from "../../public/assets/currency/coin-gold.svg";
import silverCoin from "../../public/assets/currency/coin-silver.svg";

const CoinPreview = () => {
  return (
    <div className="grow scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent">
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-flow-col gap-10 select-none">
          <div className="flex flex-col items-center text-center gap-4 drop-shadow-md rounded-full w-[124px]">
            <Image
              priority
              src={silverCoin}
              height={124}
              width={124}
              alt="Silver"
              draggable="false"
            />
            SILVER COIN
          </div>
          <div className="flex flex-col items-center text-center gap-4 drop-shadow-md rounded-full w-[124px]">
            <Image priority src={goldCoin} height={124} width={124} alt="Gold" draggable="false" />
            GOLD COIN
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinPreview;
