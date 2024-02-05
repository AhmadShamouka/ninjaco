import { BlocklyWorkspace } from "react-blockly";
import "./BlockyEditor.css";
function BlocklyEditor() {
  const [xml, setXml] = useState();

  return (
    <BlocklyWorkspace
      className="workplace"
      toolboxConfiguration={MY_TOOLBOX}
      initialXml={xml}
      onXmlChange={setXml}
    />
  );
}
export default BlocklyEditor;
