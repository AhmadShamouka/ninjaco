import { BlocklyWorkspace } from "react-blockly";
import { useState, useEffect } from "react";
import "./BlocklyEditor.css";

import { javascriptGenerator } from "blockly/javascript";
const BlocklyEditor = () => {
  const [xml, setXml] = useState("");
  const MY_TOOLBOX = {
    contents: [
      {
        kind: "category",
        name: "Logic",
        contents: [
          { kind: "block", type: "controls_if" },
          { kind: "block", type: "logic_compare" },
        ],
      },
      {
        kind: "category",
        name: "Loops",
        contents: [
          { kind: "block", type: "controls_repeat_ext" },
          { kind: "block", type: "controls_whileUntil" },
        ],
      },
      {
        kind: "category",
        name: "Math",
        contents: [
          { kind: "block", type: "math_number" },
          { kind: "block", type: "math_arithmetic" },
        ],
      },
      {
        kind: "category",
        name: "Text",
        contents: [
          { kind: "block", type: "text" },
          { kind: "block", type: "text_join" },
        ],
      },
      {
        kind: "category",
        name: "Lists",
        contents: [
          { kind: "block", type: "lists_create_with" },
          { kind: "block", type: "lists_repeat" },
        ],
      },
      {
        kind: "category",
        name: "Colour",
        contents: [
          { kind: "block", type: "colour_picker" },
          { kind: "block", type: "colour_random" },
        ],
      },
      {
        kind: "category",
        name: "Variables",
        custom: "VARIABLE",
      },
      {
        kind: "category",
        name: "Procedures",
        custom: "PROCEDURE",
      },
    ],
  };
  let workspace;
  const handleWorkspaceChange = (newWorkspace) => {
    workspace = newWorkspace;

    const code = javascriptGenerator.workspaceToCode(workspace);
    document.getElementById("code-display").innerText = code;
  };
  const handleSubmission = async () => {
    try {
      const code = javascriptGenerator.workspaceToCode(workspace);
      console.log(code);
      localStorage.setItem("workspace-state", code);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <BlocklyWorkspace
          workspaceDidChange={handleWorkspaceChange}
          className="toolbox-container"
          toolboxConfiguration={MY_TOOLBOX}
          initialXml={xml}
          onXmlChange={setXml}
        />
        <button onClick={handleSubmission}>Submit</button>
      </div>
      <div id="code-display" className="toolbox-containe"></div>
    </div>
  );
};
export default BlocklyEditor;
