import { useState, useEffect } from "react";

const transcript = [
  {
    id: 1,
    text: "When the great realm of Aer shattered, its pieces scattered across the aether.",
    inTime: 500,
    outTime: 5000,
  },
  {
    id: 2,
    text: "After the dust settled, bridges formed between the realms, beckoning brave adventurers to explore the endless possibilities that lay beyond.",
    inTime: 6500,
    outTime: 8000,
  },
  {
    id: 3,
    text: "Armed with nothing but their decks of powerful cards, they faced fierce battles and foes to prove their strength and skill.",
    inTime: 15500,
    outTime: 7500,
  },
  {
    id: 4,
    text: "Now, a new journey awaits you. Will you rise to the challenge, taking your deck in hand and carving your own path to glory?",
    inTime: 24000,
    outTime: 7500,
  },
  { id: 5, text: "What is your name, journeyer?", inTime: 32500, outTime: 0 },
];

const Introduction = () => {
  const [classNames, setClassNames] = useState({});

  useEffect(() => {
    transcript.forEach(({ id, inTime, outTime }) => {
      setTimeout(() => {
        setClassNames((classNames) => ({
          ...classNames,
          [id]: "opacity-100",
        }));
        if (id !== transcript[transcript.length - 1].id)
          setTimeout(() => {
            setClassNames((classNames) => ({
              ...classNames,
              [id]: "",
            }));
          }, outTime);
      }, inTime);
    });
  }, []);

  return (
    <main className="title-screen flex flex-col items-center justify-center h-screen">
      {transcript.map(({ id, text }) => (
        <div
          key={id}
          className={`absolute w-7/12 text-center text-2xl transition-opacity duration-1000 ease-in-out opacity-0 ${classNames[id]}`}
        >
          {text}
        </div>
      ))}
      {/* <input className="translate-y-8 text-xl outline-none bg-transparent border-b-2 border-metal text-center" /> */}
      <button onClick={() => {}} className="absolute right-16 bottom-16 text-lg py-3 px-5">
        Skip
      </button>
      {/* <button
        onClick={() => { }}
        className="absolute right-16 bottom-16 text-lg py-3 px-5"
      >
        Proceed
      </button> */}
    </main>
  );
};

export default Introduction;
