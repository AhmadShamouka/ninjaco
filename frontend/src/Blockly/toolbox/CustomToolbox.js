// Import Blockly library
import Blockly from "blockly";
Blockly.Blocks["move_up"] = {
  init: function () {
    this.appendDummyInput().appendField("Move Up");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(130);
    this.setTooltip("Move object up");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["move_down"] = {
  init: function () {
    this.appendDummyInput().appendField("Move Down");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(130);
    this.setTooltip("Move object down");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["move_left"] = {
  init: function () {
    this.appendDummyInput().appendField("Move Left");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(130);
    this.setTooltip("Move object left");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["move_right"] = {
  init: function () {
    this.appendDummyInput().appendField("Move Right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(130);
    this.setTooltip("Move object right");
    this.setHelpUrl("");
  },
};

export const Movement_toolboxXml = {
  contents: [
    {
      kind: "category",
      name: "Movement",
      colour: "green",
      contents: [
        { kind: "block", type: "move_up" },
        { kind: "block", type: "move_down" },
        { kind: "block", type: "move_left" },
        { kind: "block", type: "move_right" },
      ],
    },
  ],
};
// Define custom Blockly blocks for arrow keys
Blockly.Blocks["arrow_up"] = {
  init: function () {
    this.appendDummyInput().appendField("arrow up pressed");
    this.setOutput(true, "Boolean");
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["arrow_down"] = {
  init: function () {
    this.appendDummyInput().appendField("Arrow Down");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Move object down");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["arrow_left"] = {
  init: function () {
    this.appendDummyInput().appendField("Arrow Left");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Move object left");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["arrow_right"] = {
  init: function () {
    this.appendDummyInput().appendField("Arrow Right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Move object right");
    this.setHelpUrl("");
  },
};

export const arrowKeysToolboxXml = {
  contents: [
    {
      kind: "category",
      name: "Arrow Keys",
      colour: "#4C97FF",
      contents: [
        { kind: "block", type: "arrow_up" },
        { kind: "block", type: "arrow_down" },
        { kind: "block", type: "arrow_left" },
        { kind: "block", type: "arrow_right" },
      ],
    },
  ],
};
