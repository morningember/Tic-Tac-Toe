import React, { useState } from "react";

import Logo from "../assets/logo.svg";
import Board from "./Board";

const Newgame = () => {
  const [mark, setMark] = useState("O");
  const [showBoard, setShowBoard] = useState(false);

  const player1 = mark;
  const player2 = mark === "X" ? "O" : "X";

  // VRS COMPUTER
  function vsComputer() {}
  // VRS PLAYER
  function vsPlayer() {
    setShowBoard(true);
  }
  let p1, p2;

  if (player1 === "X") {
    p1 = "X (P1)";
    p2 = "O (P2)";
  } else {
    p1 = "X (P2)";
    p2 = "O (P1)";
  }
  // console.log("PLAYER 1: " + player1, "player 2: " + player2);
  return (
    <div className="w-81.75 h-107.25 mb-50 flex flex-col justify-center items-center ">
      {/* LOGO */}
      <div className="mt-30 mb-10 ">
        <img src={Logo} alt="logo" />
      </div>
      {/* MARK CONTAINER */}
      <div className=" flex flex-col justify-center items-center bg-(--semi-dark-navy) shadow-[inset_0px_-8px_0px_#10212a] w-full rounded-[15px]">
        <p className="uppercase text-center text-(--silver) font-bold m-4">
          Pick player 1's mark
        </p>
        <div className=" flex justify-center items-center bg-(--dark-navy) w-69.75 h-18 rounded-[10px]">
          <div
            className={`rounded-[10px] w-33 h-13.5 ${
              mark === "X" ? "bg-(--silver)" : ""
            }`}
            onClick={() => {
              setMark("X");
            }}
          >
            <svg
              className={`${
                mark === "X" ? "fill-(--dark-navy)" : "fill-(--silver)"
              } scale-50 mx-auto -m-1`}
              width="64"
              height="64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <div
            className={`rounded-[10px] w-33 h-13.5 mx-auto ${
              mark === "O" ? "bg-(--silver)" : ""
            }`}
            onClick={() => {
              setMark("O");
            }}
          >
            <svg
              className={`${
                mark == "O" ? "fill-(--dark-navy)" : "fill-(--silver)"
              } scale-50 mx-auto -m-1`}
              width="64"
              height="64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" />
            </svg>
          </div>
        </div>
        <p className="uppercase text-(--silver) opacity-50 text-[14px] m-3">
          Remember: X goes first
        </p>
      </div>

      {/* BUTTONS */}
      <div className="buttons text-(--dark-navy) flex justify-center flex-col gap-4 w-full font-bold text-center mt-8 ">
        <div
          className=" bg-(--light-yellow) shadow-[inset_0px_-8px_0px_#cc8b13] h-14 rounded-[15px] px-2.5 py-3.5 cursor-pointer"
          onClick={vsComputer}
        >
          New Game (VS CPU)
        </div>
        <>
          {!showBoard && (
            <div
              className=" bg-(--light-blue) shadow-[inset_0px_-8px_0px_#118c87] h-14 rounded-[15px] px-2.5 py-3.5 cursor-pointer"
              onClick={vsPlayer}
            >
              New Game (VS PLAYER)
            </div>
          )}
          {showBoard && (
            <Board p1={p1} p2={p2} player1={player1} player2={player2} />
          )}
        </>
      </div>
    </div>
  );
};

export default Newgame;
