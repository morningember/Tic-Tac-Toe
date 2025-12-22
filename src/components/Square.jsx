import React, { useState } from "react";
import xIcon from "../assets/icon-x.svg";
import oIcon from "../assets/icon-o.svg";
import xIconOutline from "../assets/icon-x-outline.svg";
import oIconOutline from "../assets/icon-o-outline.svg";

const Square = ({ value, onsquareClick, hover, player }) => {
  // const [xIsNext, setXIsNext] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState("O");

  return (
    <div className="">
      <div
        className={`bg-(--semi-dark-navy) flex justify-center items-center h-24 w-24 group rounded-[15px] shadow-[1px_10px_4px_#10212a]`}
        onClick={() => {
          onsquareClick();
        }}
      >
        {value === "X" && <img src={xIcon} />}
        {value === "O" && <img src={oIcon} />}

        {value === null && hover(player)}
      </div>
    </div>
  );
};

export default Square;
