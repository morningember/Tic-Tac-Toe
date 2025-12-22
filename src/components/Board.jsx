import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import Square from "./Square";
import xIcon from "../assets/icon-x.svg";
import xIconOutline from "../assets/icon-x-outline.svg";
import oIconOutline from "../assets/icon-o-outline.svg";
import oIcon from "../assets/icon-o.svg";
import Newgame from "./Newgame";

const Board = ({ p1, p2, player1 }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [player, setPlayer] = useState("X");
  //   const [player2, setPlayer2] = useState("O");
  // RESTART
  function restart() {
    setSquares(() => Array(9).fill(null));

    // const nextSquares = squares.slice();
    // nextSquares;
    setXIsNext(true);
  }
  // QUIT
  function quitRound() {
    // setSquares(() => Array(9).fill(null));
    setXIsNext(true);
    console.log("new game");
  }

  function calculateWinner(squares) {
    const winCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winCombo.length; i++) {
      const [a, b, c] = winCombo[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  function isDraw(squares) {
    const draw = squares.every((square) => square !== null);
    if (draw) {
      return "Round Tied";
    }
  }
  const winner = calculateWinner(squares);
  const draw = isDraw(squares);
  let status;

  status = xIsNext ? (
    <img src={xIcon} className="w-4 h-4" />
  ) : (
    <img src={oIcon} className="w-4 h-4" />
  );

  function getWinnerMessage(player1, winner) {
    if (!winner) return null;

    return winner === player1 ? "Player 1 wins" : "Player 2 Wins";
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
      setPlayer("O");
    } else {
      nextSquares[i] = "O";
      setPlayer("X");
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    setHoverState(player);
  }

  function setHoverState(player) {
    return (
      <img
        src={player === "X" ? xIconOutline : oIconOutline}
        className="opacity-0 hover:opacity-100"
      />
    );
  }
  return (
    <div className="w-82 h-129.5 mt-6 mx-auto items-center">
      <div className="">
        <div className="flex flex-row justify-between items-center w-82 h-10">
          <div className="w-18 h-10">
            <img src={Logo} alt="" />
          </div>

          <div className="flex items-center justify-center gap-3 p-2.5 bg-(--semi-dark-navy) shadow-[inset_0px_-4px_0px_#10212a] w-24 rounded-[5px]">
            {status}
            <span className="text-(--silver) text-[14px] font-bold">Turn</span>
          </div>
          <div className="bg-(--silver) w-10 h-10 flex justify-center items-center shadow-[inset_0px_-4px_0px_#10212a] rounded-[5px]">
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              className=" scale-80"
              onClick={() => {
                restart();
              }}
            >
              <path
                d="M19.524 0h-1.88a.476.476 0 0 0-.476.499l.159 3.284A9.81 9.81 0 0 0 9.835.317C4.415.317-.004 4.743 0 10.167.004 15.597 4.406 20 9.835 20a9.796 9.796 0 0 0 6.59-2.536.476.476 0 0 0 .019-.692l-1.348-1.349a.476.476 0 0 0-.65-.022 6.976 6.976 0 0 1-9.85-.63 6.987 6.987 0 0 1 .63-9.857 6.976 6.976 0 0 1 10.403 1.348l-4.027-.193a.476.476 0 0 0-.498.476v1.881c0 .263.213.476.476.476h7.944A.476.476 0 0 0 20 8.426V.476A.476.476 0 0 0 19.524 0Z"
                fill="#1F3641"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 w-82 h-82 mt-6 ">
        <Square
          value={squares[0]}
          status={xIsNext}
          hover={setHoverState}
          player={player}
          onsquareClick={() => handleClick(0)}
        />
        <Square
          value={squares[1]}
          status={xIsNext}
          hover={setHoverState}
          player={player}
          onsquareClick={() => handleClick(1)}
        />
        <Square
          value={squares[2]}
          status={xIsNext}
          hover={setHoverState}
          player={player}
          onsquareClick={() => handleClick(2)}
        />
        <Square
          value={squares[3]}
          status={xIsNext}
          hover={setHoverState}
          player={player}
          onsquareClick={() => handleClick(3)}
        />
        <Square
          value={squares[4]}
          status={xIsNext}
          hover={setHoverState}
          player={player}
          onsquareClick={() => handleClick(4)}
        />
        <Square
          value={squares[5]}
          status={xIsNext}
          hover={setHoverState}
          player={player}
          onsquareClick={() => handleClick(5)}
        />
        <Square
          value={squares[6]}
          status={xIsNext}
          hover={setHoverState}
          player={player}
          onsquareClick={() => handleClick(6)}
        />
        <Square
          value={squares[7]}
          status={xIsNext}
          hover={setHoverState}
          player={player}
          onsquareClick={() => handleClick(7)}
        />
        <Square
          value={squares[8]}
          status={xIsNext}
          hover={setHoverState}
          player={player}
          onsquareClick={() => handleClick(8)}
        />
      </div>
      <div className="flex items-center justify-center gap-5 w-82 mt-5 text-(--dark-navy) ">
        <div className="bg-(--light-blue) flex flex-col  justify-center items-center h-16 w-24 uppercase rounded-[15px] shadow-[1px_10px_4px_#10212a]">
          {p1}
          <span className="font-black text-[20px]">0</span>
        </div>
        <div className="bg-(--silver) flex flex-col justify-center items-center h-16 w-24 uppercase rounded-[15px] shadow-[1px_10px_4px_#10212a]">
          Ties
          <span className="font-black text-[20px]">0</span>
        </div>
        <div className="bg-(--light-yellow) flex flex-col justify-center items-center h-16 w-24 uppercase rounded-[15px] shadow-[1px_10px_4px_#10212a]">
          {p2}
          <span className="font-black text-[20px]">0</span>
        </div>
      </div>

      {winner && (
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] w-full h-full">
          <div className="absolute bg-(--semi-dark-navy) w-full h-57 top-[26%] left-0 right-0 bottom-0 ">
            <div className="flex flex-col justify-center items-center text-(--silver) w-70 h-35 mx-auto mt-10">
              <p className="uppercase text-[14px] mb-5">
                {getWinnerMessage(player1, winner)}
              </p>
              <div className="flex gap-2">
                {winner === "X" && (
                  <>
                    <img src={xIcon} alt="" className="h-7.5 w-7.5" />
                    <span className="text-2xl text-(--light-blue) font-bold uppercase">
                      Takes this round
                    </span>
                  </>
                )}
                {winner === "O" && (
                  <>
                    <img src={oIcon} alt="" className="h-7.5 w-7.5" />
                    <span className="text-2xl text-(--light-yellow) font-bold uppercase">
                      Takes this round
                    </span>
                  </>
                )}
              </div>
              <div className="flex justify-center items-center gap-4 w-59.5  text-(--dark-navy) mt-6">
                <div
                  className="w-19 h-13 bg-(--silver) uppercase rounded-[10px] cursor-pointer flex justify-center items-center shadow-[1px_10px_4px_#10212a] "
                  onClick={() => {
                    quitRound();
                  }}
                >
                  Quit
                </div>
                <div className="w-36.5 h-13 bg-(--light-yellow) uppercase rounded-[10px] cursor-pointer flex justify-center items-center shadow-[1px_10px_4px_#10212a]">
                  next round
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {draw && (
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] w-full h-full">
          <div className="absolute bg-(--semi-dark-navy) w-full h-57 top-[26%] left-0 right-0 bottom-0 ">
            <div className="flex flex-col justify-center items-center text-(--silver) w-70 h-35 mx-auto mt-10">
              <>
                <h1 className="text-2xl text-(--silver) font-bold uppercase">
                  {isDraw(squares)}
                </h1>
              </>
              <div className="flex justify-center items-center gap-4 w-59.5  text-(--dark-navy) mt-6">
                <div
                  className="w-19 h-13 bg-(--silver) uppercase rounded-[10px] cursor-pointer flex justify-center items-center shadow-[1px_10px_4px_#10212a] "
                  onClick={() => {
                    quitRound();
                  }}
                >
                  Quit
                </div>
                <div className="w-36.5 h-13 bg-(--light-yellow) uppercase rounded-[10px] cursor-pointer flex justify-center items-center shadow-[1px_10px_4px_#10212a]">
                  next round
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;
