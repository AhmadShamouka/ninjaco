import React, { useState, useEffect, useRef } from "react";
import { BlocklyWorkspace } from "react-blockly";
import { javascriptGenerator } from "blockly/javascript";
import { builtinToolboxJSON } from "../toolbox/BuildinToolbox";

import "./BlocklyEditor.css";
import Navbar from "../../components/navbar/Navbar";

const BlocklyEditor = () => {
  const [json, setJson] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const workspaceRef = useRef(null); // Create a reference to the Blockly workspace

  const MY_TOOLBOX = {
    contents: [...builtinToolboxJSON.contents],
  };

  const handleSubmission = async () => {
    try {
      const code = javascriptGenerator.workspaceToCode(workspaceRef.current); // Use workspaceRef to access the Blockly workspace
      localStorage.setItem("workspace-state", code);
      console.log(code);
      let result = eval(code);

      if (imageSrc != null) {
        const imageContainer = document.getElementById("code-display");
        if (imageContainer) {
          imageContainer.style.backgroundColor = result;
        }
      } else {
        document.getElementById("code-display").innerText = result;
      }
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

  const handleRemoveImage = () => {
    setImageSrc(null);
    const codeDisplay = document.getElementById("code-display");
    codeDisplay.innerHTML = "";
    codeDisplay.style.backgroundColor = "";
  };
  return (
    <div>
      <Navbar />
      <div className="blockly-container flex center">
        <div className="container flex center">
          <BlocklyWorkspace
            className="toolbox-container"
            toolboxConfiguration={MY_TOOLBOX}
            initialXml={json}
            onXmlChange={setJson}
          />
        </div>
        <div className="display-container flex column">
          <input type="file" onChange={handleImageUpload} />
          {imageSrc && (
            <>
              <img
                src={imageSrc}
                className="uploaded-image"
                onClick={handleImageDisplay}
              />
              <button onClick={handleRemoveImage}>Remove Image</button>
            </>
          )}
          <button onClick={handleSubmission}>Submit</button>
          <div id="code-display" className="display flex center"></div>
        </div>
      </div>
    </div>
  );
};

export default BlocklyEditor;
