import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import BlocklyComponent from "./components/blockly/BlocklyEditor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlocklyComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
