// import { useState } from "react";

import "./App.css";
import Newgame from "./components/Newgame";

function App() {
  // const [showBoard, setShowBoard] = useState(true);

  return (
    <div className="flex justify-center items-center mx-auto overflow-hidden">
      <Newgame />
    </div>
  );
}

export default App;
