// APIs
import Image from "next/image";

// Components
import { Disclosure, Transition } from "@headlessui/react";

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faCheck } from "@fortawesome/free-solid-svg-icons";
import goldCoin from "../../public/assets/currency/coin-gold.svg";
import silverCoin from "../../public/assets/currency/coin-silver.svg";
import cardLayer from "../../public/assets/icons/card-layer.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ShopItemPreview = (props) => {
  return (
    <>
      {props.children}
      <Transition
        show={props.show}
        enter="transition-all duration-500"
        enterFrom="translate-y-full opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition-all duration-500"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-full opacity-0"
        className="bg-translucent"
      >
        <Disclosure defaultOpen>
          {({ open }) => (
            <>
              <div className="flex justify-between w-full">
                <div className="flex flex-col items-start gap-1 text-lg mx-7 my-4 pb-1">
                  {props.title}
                  <div className="flex gap-4 text-sm">
                    {props.silver && (
                      <div className="flex gap-1">
                        <Image
                          priority
                          src={silverCoin}
                          height={20}
                          width={20}
                          alt="Silver "
                          draggable="false"
                        />
                        {props.silver.oldPrice && (
                          <span className="line-through text-white/70">
                            {props.silver.oldPrice}
                          </span>
                        )}{" "}
                        {props.silver.price}
                      </div>
                    )}
                    {props.gold && (
                      <div className="flex gap-1">
                        <Image
                          priority
                          src={goldCoin}
                          height={20}
                          width={20}
                          alt="Gold "
                          draggable="false"
                        />
                        {props.gold.oldPrice && (
                          <span className="line-through text-white/70">{props.gold.oldPrice}</span>
                        )}{" "}
                        {props.gold.price}
                      </div>
                    )}
                    {props.cards && (
                      <div className="flex gap-1">
                        <Image
                          priority
                          src={cardLayer}
                          height={20}
                          width={20}
                          alt="Cards "
                          className="scale-90"
                          draggable="false"
                        />
                        {props.cards.owned}/{props.cards.total}
                      </div>
                    )}
                    {props.owned && (
                      <div className="flex gap-1">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-emerald-500 text-lg pb-[3px]"
                          draggable="false"
                        />
                        Owned
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center gap-5">
                    <button className="btn-primary h-11 w-44">{props.button}</button>
                  </div>
                  <Disclosure.Button className="flex p-5 px-8" aria-label="Toggle Description">
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      className={classNames(
                        "text-2xl transform duration-300",
                        open ? "scale-[-1]" : "scale-[1]",
                      )}
                      draggable="false"
                    />
                  </Disclosure.Button>
                </div>
              </div>
              <Transition
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="max-h-28 pr-7 mx-7 mb-5 -mt-1 scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent">
                  {props.description}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </Transition>
    </>
  );
};

export default ShopItemPreview;
