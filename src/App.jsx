// import { useState } from "react";

import "./App.css";
import Board from "./components/Board";
import Newgame from "./components/Newgame";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center ">
      <Newgame />
      {/* <Board /> */}
    </div>
  );
}

export default App;
