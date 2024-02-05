import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import BlocklyEditor from "./components/blockly/BlocklyEditor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlocklyEditor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
