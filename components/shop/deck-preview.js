// APIs
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// Components
import { Transition } from "@headlessui/react";
import Card from "../card/card";

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import bookmarkCheck from "../../public/assets/icons/bookmark-check.svg";
import goldCoin from "../../public/assets/currency/coin-gold.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DeckPreview = (props) => {
  const cardRef = useRef(null);

  useEffect(() => {
    cardRef.current = props.selectedCard;
  }, [props.selectedCard]);

  const [animating, setAnimating] = useState(false);

  return (
    <>
      <Transition
        show={props.cardSelected}
        beforeEnter={() => setAnimating(true)}
        afterEnter={() => setAnimating(false)}
        enter="transition-all duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        className="flex justify-center h-full scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent"
      >
        <div className={animating && "absolute"}>
          <div className="flex items-center flex-col mt-12 gap-16">
            <div className="grid grid-cols-5 gap-20 h-fit w-[45rem]">
              <Card size="2xl" className="col-span-2">
                {cardRef.current}
              </Card>
              <div className="col-span-3 h-[24rem] pr-6 -mr-4 scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent">
                <div className="text-md font-bold text-teal-300 select-none border-b-2 border-teal-500 mb-3">
                  DESCRIPTION
                </div>
                <div className="text-justify text-teal-50 leading-5 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
                  consectetur sagittis, nisl nunc consectetur nisi, euismod aliquet nisi nisl
                  euismod.
                </div>
                <div className="text-md font-bold text-teal-300 select-none border-b-2 border-teal-500 mb-3">
                  SKILLS
                </div>
                <div className="flex flex-col gap-4 mb-8">
                  <div className="grid grid-flow-col auto-cols-auto gap-3 text-justify text-teal-50 leading-5 text-sm">
                    <div className="w-11 h-11 bg-neutral-300 rounded-sm" />
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  </div>
                  <div className="grid grid-flow-col auto-cols-auto gap-3 text-justify text-teal-50 leading-5 text-sm">
                    <div className="w-11 h-11 bg-neutral-300 rounded-sm" />
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  </div>
                </div>
                <div className="flex gap-4 select-none border-t-2 border-teal-500 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="flex justify-center items-center pb-[2px]">
                      <Image
                        priority
                        src={goldCoin}
                        height={16}
                        width={16}
                        alt=""
                        draggable="false"
                      />
                    </div>
                    Coin Deck
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-emerald-500 text-lg pb-[3px]"
                      draggable="false"
                    />
                    Owned
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => props.setSelectedCard(null)} className="btn-primary h-11 w-36">
              Back
            </button>
          </div>
        </div>
      </Transition>
      <Transition
        show={!props.cardSelected}
        enter="transition-all duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        className={classNames(
          "grid grid-cols-4 grow gap-y-10 p-7 scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent",
          animating ? "hidden" : "h-0",
        )}
      >
        {Array.from(Array(30).keys()).map((item) => (
          <div key={item} className="flex flex-col items-center">
            <button
              className="flex flex-col hover:scale-105 active:scale-95 transition ease-in-out duration-150"
              value={item}
              onClick={() => props.setSelectedCard(item)}
            >
              {[2, 5].includes(item) && (
                <div className="flex self-end text-black cursor-auto w-fit -mb-7 pr-2">
                  <Image
                    src={bookmarkCheck}
                    height={28}
                    width={28}
                    alt=""
                    title="Owned"
                    draggable="false"
                  />
                </div>
              )}
              <Card key={item} size="sm" hover>
                {item}
              </Card>
            </button>
          </div>
        ))}
      </Transition>
    </>
  );
};

export default DeckPreview;
