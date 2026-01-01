// import { useState } from "react";

import "./App.css";
import Board from "./components/Board";
import Newgame from "./components/Newgame";

function App() {
  // const [showBoard, setShowBoard] = useState(true);

  return (
    <div className="flex justify-center items-center ">
      <Newgame />
      {/* <Board /> */}
    </div>
  );
}

export default App;
