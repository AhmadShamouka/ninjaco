import React, { useState, useEffect } from "react";
import { BlocklyWorkspace } from "react-blockly";
import { javascriptGenerator } from "blockly/javascript";
import { builtinToolboxXml } from "../toolbox/BuildinToolbox";
import {
  Movement_toolboxXml,
  arrowKeysToolboxXml,
} from "../toolbox/CustomToolbox";
import "./BlocklyEditor.css";

const BlocklyEditor = () => {
  const [xml, setXml] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const MY_TOOLBOX = {
    contents: [
      ...builtinToolboxXml.contents,
      ...Movement_toolboxXml.contents,
      ...arrowKeysToolboxXml.contents,
    ],
  };
  const handleWorkspaceChange = (newWorkspace) => {
    const code = javascriptGenerator.workspaceToCode(newWorkspace);
    document.getElementById("code-display").innerText = code;
  };

  useEffect(() => {
    const savedCode = localStorage.getItem("workspace-state");
    if (savedCode) {
      document.getElementById("code-display").innerText = savedCode;
    }
  }, []);

  const handleSubmission = async () => {
    try {
      const code = javascriptGenerator.workspaceToCode(workspace);

      localStorage.setItem("workspace-state", code);

      document.getElementById("code-display").innerText = code;
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageSrc(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageDisplay = () => {
    if (imageSrc) {
      const codeDisplay = document.getElementById("code-display");
      codeDisplay.innerHTML = `<img src="${imageSrc}" alt="Uploaded Image" />`;
    }
  };

  return (
    <div className="blockly-container flex center">
      <div className="container flex center">
        <BlocklyWorkspace
          workspaceDidChange={handleWorkspaceChange}
          className="toolbox-container"
          toolboxConfiguration={MY_TOOLBOX}
          initialXml={xml}
          onXmlChange={setXml}
        />
      </div>
      <div className="display-container flex column">
        <input type="file" onChange={handleImageUpload} />
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Uploaded"
            className="uploaded-image"
            onClick={handleImageDisplay}
          />
        )}
        <button onClick={handleSubmission}>Submit</button>
        <div id="code-display" className="display flex center"></div>
      </div>
    </div>
  );
};

export default BlocklyEditor;
