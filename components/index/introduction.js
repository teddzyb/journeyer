import { useState, useEffect, useMemo } from "react";

const Introduction = () => {
  const [classNames, setClassNames] = useState({});
  const [final, setFinal] = useState(false);

  const transcript = useMemo(
    () => [
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
      {
        id: 5,
        text: "What is your name, journeyer?",
        inTime: 32500,
        outTime: 3000,
      },
    ],
    [],
  );

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

        if (id === transcript[transcript.length - 1].id)
          setTimeout(() => {
            setFinal(true);
          }, outTime);
      }, inTime);
    });
  }, [transcript]);

  return (
    <main className="title-screen flex flex-col items-center justify-center h-screen select-none">
      {transcript.map(({ id, text }) => (
        <div
          key={id}
          className={`absolute w-7/12 text-center text-2xl transition-opacity duration-1000 ease-in-out ${
            classNames[id] ? classNames[id] : "opacity-0"
          }`}
        >
          {text}
        </div>
      ))}
      <input
        className={`translate-y-8 text-xl outline-none bg-transparent border-b border-metal text-center ${
          final ? "opacity-100" : "opacity-0"
        }`}
      />
      {final ? (
        <button
          onClick={() => setFinal(false)}
          className="absolute right-16 bottom-16 text-lg px-4 py-1.5 border border-metal rounded-md"
        >
          Proceed
        </button>
      ) : (
        <button
          onClick={() => setFinal(true)}
          className="absolute right-16 bottom-16 text-lg px-4 py-1.5 border border-metal rounded-md"
        >
          Skip
        </button>
      )}
    </main>
  );
};

export default Introduction;
