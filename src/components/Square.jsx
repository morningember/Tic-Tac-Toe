import xIcon from "../assets/icon-x.svg";
import oIcon from "../assets/icon-o.svg";

const Square = ({ value, onsquareClick, hover, player1 }) => {
  // const [xIsNext, setXIsNext] = useState(true);

  return (
    <div className="">
      <div
        className={`bg-(--semi-dark-navy) flex justify-center items-center h-24 w-24 md:w-35 md:h-35 group rounded-[15px] shadow-[1px_10px_4px_#10212a]`}
        onClick={() => {
          onsquareClick();
        }}
      >
        {value === "X" && <img src={xIcon} />}
        {value === "O" && <img src={oIcon} />}

        {value === null && hover(player1)}
      </div>
    </div>
  );
};

export default Square;
