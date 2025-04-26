"use server";
import { Button } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";

export default function Invitation() {
  const [opened, setOpened] = useState(false);

  function handleClick() {
    if (!opened) {
      setOpened(true);
    }
  }

  return (
    <div
      className={
        "flex flex-col items-center justify-center rounded-2xl bg-[#ffe9c7] p-6 shadow-2xl " +
        (!opened ? " animate-float rounded-full" : "rounded-4xl")
      }
    >
      {!opened ? (
        <span onClick={handleClick} className="">
          <Image
            src="/floral-frame.svg"
            alt="Floral Frame"
            width={500}
            height={500}
          />
          <Image
            src="/cross.png"
            alt="Cross"
            width={100}
            height={100}
            className="absolute top-1/3 left-1/2 z-10 w-[20%] -translate-x-1/2 -translate-y-1/2 transform text-right text-2xl font-bold text-[#C79959] sm:text-4xl"
          />
          <h2
            className="absolute top-1/2 left-1/2 z-10 -translate-x-1/10 -translate-y-1/2 transform text-right text-3xl font-bold text-[#C79959] sm:text-5xl"
            style={{ fontFamily: "Brush Script, cursive" }}
          >
            Invitation
          </h2>
        </span>
      ) : (
        <span className="animate-fade-in flex flex-col items-center justify-center space-y-8 opacity-0 transition-opacity duration-500 ease-in-out">
          <Image
            src="/invitation.png"
            alt="Invitation"
            width={500}
            height={500}
            className="w-fit rounded-2xl"
          />
        </span>
      )}

      {opened && (
        <Button
          className="mt-4 text-black"
          onClick={() => {
            setOpened(false);
          }}
          color="yellow"
          outline
          pill
          size="xs"
        >
          Retour
        </Button>
      )}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            scale: 0.2
          }
          to {
            opacity: 1;
            scale: 1
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
