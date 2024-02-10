import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import "./styles/App.css";
import "./styles/colors.css";
import Landing from "./pages/Landing/Landing";
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
