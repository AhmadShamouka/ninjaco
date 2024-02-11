import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import "./styles/App.css";
import "./styles/colors.css";
import Landing from "./pages/Landing/Landing";
import BlocklyEditor from "./Blockly/blocklyComponent/BlocklyEditor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/editor" element={<BlocklyEditor />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
