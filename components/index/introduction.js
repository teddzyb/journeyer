// APIs
import { useState, useEffect, useMemo, useRef } from "react";
import Router from "next/router";
import { useMutation } from "../../convex/_generated/react";

// Assets
import { Icon } from "@iconify/react";
import loadingLoop from "@iconify/icons-line-md/loading-loop";

const Introduction = () => {
  const [classNames, setClassNames] = useState({});
  const [timers, setTimers] = useState([]);
  const [final, setFinal] = useState(false);
  const [proceed, setProceed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef(null);

  const storeUsername = useMutation("user/storeUsername");

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
        inTime: 31500,
        outTime: 0,
      },
    ],
    [],
  );

  useEffect(() => {
    transcript.forEach(({ id, inTime, outTime }) => {
      const timeoutId = setTimeout(() => {
        if (id !== transcript[transcript.length - 1].id) {
          setClassNames((classNames) => ({
            ...classNames,
            [id]: "opacity-100",
          }));

          setTimeout(() => {
            setClassNames((classNames) => ({
              ...classNames,
              [id]: "",
            }));
          }, outTime);
        } else {
          setFinal(true);
        }
      }, inTime);

      setTimers((timers) => [...timers, timeoutId]);
    });
  }, [final, transcript]);

  useEffect(() => {
    if (final) {
      timers.forEach((timer) => clearTimeout(timer));
      setClassNames({});

      setTimeout(() => {
        setClassNames((classNames) => ({
          ...classNames,
          [transcript.length]: "opacity-100",
        }));
      }, 1000);

      setTimeout(() => {
        setClassNames((classNames) => ({
          ...classNames,
          [transcript.length]: "opacity-100 -translate-y-10",
          [transcript.length + 1]: "opacity-100 translate-y-10",
        }));
      }, 3000);
    }
  }, [final, transcript, timers]);

  return (
    <main className="title-screen flex flex-col items-center justify-center h-screen select-none">
      {transcript.map(({ id, text }) => (
        <div
          key={id}
          className={`absolute w-7/12 text-center text-2xl transition-all duration-1000 ease-in-out ${
            classNames[id] ? classNames[id] : "opacity-0"
          }`}
        >
          {text}
        </div>
      ))}
      <input
        ref={inputRef}
        onChange={() => {
          if (inputRef.current) setProceed(inputRef.current.value.length > 0);
        }}
        disabled={!final}
        maxLength={20}
        className={`pb-1 text-xl outline-none bg-transparent border-b border-metal text-center transition-all duration-1000 ease-in-out ${
          classNames[transcript.length + 1] ? classNames[transcript.length + 1] : "opacity-0"
        }`}
      />
      {final ? (
        <button
          onClick={() => {
            if (inputRef.current?.value) {
              setIsLoading(true);
              storeUsername(inputRef.current.value).then(() => {
                Router.push("/match/tutorial");
              });
            }
          }}
          disabled={!proceed}
          className="flex justify-center items-center absolute right-16 bottom-16 px-5 py-2 border border-metal rounded-md disabled:opacity-60 enabled:opacity-100 transition-opacity ease-in-out"
        >
          <span
            className={`transition-opacity duration-500 ease-in-out ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
          >
            Proceed
          </span>
          <Icon
            icon={loadingLoop}
            className={`absolute w-6 h-6 transition-opacity duration-500 ease-in-out animate-spin ${
              isLoading ? "opacity-100" : "opacity-0"
            }`}
          />
        </button>
      ) : (
        <button
          onClick={() => setFinal(true)}
          className="absolute right-16 bottom-16 px-5 py-2 border border-metal rounded-md opacity-60 hover:opacity-100 transition-opacity ease-in-out"
        >
          Skip
        </button>
      )}
    </main>
  );
};

export default Introduction;
