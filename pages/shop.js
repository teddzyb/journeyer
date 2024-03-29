// APIs
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

// Components
import { Tab } from "@headlessui/react";
import TopMenuBar from "../components/menubar/top-menu-bar";
import Card from "../components/card/card";
import ShopItemPreview from "../components/shop/shop-item-preview";
import DeckPreview from "../components/shop/deck-preview";
import SleevePreview from "../components/shop/sleeve-preview";
import CoinPreview from "../components/shop/coin-preview";

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import goldCoin from "../public/assets/currency/coin-gold.svg";
import silverCoin from "../public/assets/currency/coin-silver.svg";

const Shop = () => {
  const tabPanels = useRef(null);

  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const cardSelected = selectedCard != null ? true : false;

  const tabs = [
    { name: "Decks", disabled: false },
    { name: "Sleeves", disabled: false },
    { name: "Coins", disabled: false },
  ];

  return (
    <div>
      <Head>
        <title>Journeyer</title>
        <meta
          name="description"
          content="Journeyer of the Realms is a tabletop card-collecting strategy game developed by Paper Kiwi."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="sticky top-0">
        <TopMenuBar />
      </nav>
      <main className="h-screen flex flex-row justify-center pb-20">
        <div className="flex flex-col rounded-2xl bg-translucent shadow-md w-2/5 m-10 mr-5 overflow-hidden">
          <div className="flex flex-row bg-translucent text-xl text-center select-none">
            <Link href="/menu">
              <a className="flex flex-col justify-center items-center w-fit" draggable="false">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="absolute text-white text-2xl ml-[4.5rem] px-6 py-4 hover:text-teal-300"
                  draggable="false"
                />
              </a>
            </Link>
            <div className="grow pb-3 pt-4">SHOP</div>
          </div>
          <Tab.Group
            onChange={(index) => {
              setSelectedTab(index);
              setSelectedItem(0);
              setSelectedCard(null);
              tabPanels.current.scrollTop = 0;
            }}
          >
            <Tab.List
              as="div"
              className="flex justify-center items-center bg-translucent/10 border-t border-b border-translucent p-2"
            >
              {tabs.map((item, index) => (
                <Tab
                  as="button"
                  key={index}
                  disabled={item.disabled}
                  className={({ selected }) =>
                    `outline-none align-middle rounded-md select-none w-full mx-2 pb-1 pt-2 ${
                      selected
                        ? "bg-teal-600 shadow focus:outline-2 focus:outline-offset-0 focus:outline-teal-500"
                        : "hover:bg-teal-500/10"
                    }`
                  }
                >
                  {item.name.toUpperCase()}
                </Tab>
              ))}
            </Tab.List>

            {/* Decks Tab */}
            <Tab.Panels
              as="div"
              ref={tabPanels}
              className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent"
            >
              <Tab.Panel as="div" className="grid grid-cols-2">
                {Array.from(Array(8).keys()).map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setSelectedItem(item);
                      setSelectedCard(null);
                    }}
                    className="flex flex-col items-center border border-translucent py-6 hover:bg-translucent/5"
                  >
                    <Card
                      key={item}
                      size="md"
                      className={item === selectedItem && "ring-4 ring-teal-500"}
                    />
                    <div
                      className="flex justify-center items-center z-10 bg-teal-800 rounded-sm shadow-sm 
                      border border-translucent select-none -mt-9 h-10 w-[13.5rem] pt-1"
                    >
                      STARTER DECK #{item}
                    </div>
                  </button>
                ))}
              </Tab.Panel>

              {/* Sleeves Tab */}
              <Tab.Panel as="div" className="grid grid-cols-2">
                {Array.from(Array(8).keys()).map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setSelectedItem(item);
                    }}
                    className="flex flex-col items-center border border-translucent py-6 hover:bg-translucent/5"
                  >
                    <Card
                      key={item}
                      size="md"
                      className={item === selectedItem && "ring-4 ring-teal-500"}
                    >
                      {item}
                    </Card>
                    <div
                      className="flex justify-center items-center z-10 bg-teal-800 rounded-sm shadow-sm 
                      border border-translucent select-none -mt-9 h-10 w-[13.5rem] pt-1"
                    >
                      SLEEVE #{item}
                    </div>
                  </button>
                ))}
              </Tab.Panel>

              {/* Coins Tab */}
              <Tab.Panel as="div" className="grid grid-cols-2">
                {Array.from(Array(8).keys()).map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setSelectedItem(item);
                    }}
                    className="flex flex-col items-center border border-translucent py-6 hover:bg-translucent/5"
                  >
                    <div className="flex flex-col justify-center items-center gap-3">
                      <div
                        className={`flex justify-center items-center bg-translucent rounded-md w-40 h-40 ${
                          item === selectedItem && "ring-2 ring-teal-500"
                        }`}
                      >
                        <div className="select-none">
                          <div className="flex drop-shadow-md rounded-full w-[64px] -translate-x-3">
                            <Image
                              priority
                              src={goldCoin}
                              height={64}
                              width={64}
                              alt="Gold"
                              draggable="false"
                            />
                          </div>
                          <div className="flex drop-shadow-md rounded-full w-[64px] -mt-6 translate-x-3">
                            <Image
                              priority
                              src={silverCoin}
                              height={64}
                              width={64}
                              alt="Silver"
                              draggable="false"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-center select-none mx-4">COIN DESIGN #{item}</div>
                    </div>
                  </button>
                ))}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>

        <div className="flex flex-col rounded-2xl bg-translucent shadow-md w-3/5 m-10 ml-5 overflow-hidden">
          {
            {
              // Deck Preview
              0: (
                <>
                  <div className="bg-translucent text-xl text-center select-none p-3 pt-4">
                    DECK #{selectedItem}
                  </div>
                  <ShopItemPreview
                    show={!cardSelected}
                    title={"Deck #" + selectedItem}
                    silver={{ oldPrice: "13,000", price: "12,500" }}
                    gold={{ price: "118" }}
                    cards={{ owned: 7, total: 30 }}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec euismod, nisl eget consectetur sagittis, nisl nunc consectetur nisi,
                      euismod aliquet nisi nisl euismod."
                    button="Buy Deck"
                  >
                    <DeckPreview
                      cardSelected={cardSelected}
                      selectedCard={selectedCard}
                      setSelectedCard={setSelectedCard}
                    />
                  </ShopItemPreview>
                </>
              ),
              // Sleeve Preview
              1: (
                <>
                  <div className="bg-translucent text-xl text-center select-none p-3 pt-4">
                    SLEEVE #{selectedItem}
                  </div>
                  <ShopItemPreview
                    show
                    title={"Sleeve #" + selectedItem}
                    silver={{ price: "5,000" }}
                    gold={{ price: "20" }}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec euismod, nisl eget consectetur sagittis, nisl nunc consectetur nisi,
                      euismod aliquet nisi nisl euismod."
                    button="Buy Sleeve"
                  >
                    <SleevePreview selectedItem={selectedItem} />
                  </ShopItemPreview>
                </>
              ),
              // Coin Preview
              2: (
                <>
                  <div className="bg-translucent text-xl text-center select-none p-3 pt-4">
                    COIN #{selectedItem}
                  </div>
                  <ShopItemPreview
                    show
                    title={"Coin Design #" + selectedItem}
                    silver={{ price: "3,500" }}
                    gold={{ price: "15" }}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec euismod, nisl eget consectetur sagittis, nisl nunc consectetur nisi,
                      euismod aliquet nisi nisl euismod."
                    button="Buy Coin"
                  >
                    <CoinPreview selectedItem={selectedItem} />
                  </ShopItemPreview>
                </>
              ),
            }[selectedTab]
          }
        </div>
      </main>
    </div>
  );
};

export default Shop;
