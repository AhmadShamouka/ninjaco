import Blockly from "blockly";

export const builtinToolboxJSON = {
  contents: [
    {
      kind: "category",
      name: "Logic",
      colour: "#0047ab",
      contents: [
        { kind: "block", type: "controls_if" },
        { kind: "block", type: "logic_compare" },
      ],
    },
    {
      kind: "category",
      name: "Loops",
      colour: "green",
      contents: [
        { kind: "block", type: "controls_repeat_ext" },
        { kind: "block", type: "controls_whileUntil" },
      ],
    },
    {
      kind: "category",
      name: "Math",
      colour: "#324ab2 ",
      contents: [
        { kind: "block", type: "math_number" },
        { kind: "block", type: "math_arithmetic" },
      ],
    },
    {
      kind: "category",
      name: "Text",
      colour: "#8fbc8f ",
      contents: [
        { kind: "block", type: "text" },
        { kind: "block", type: "text_join" },
      ],
    },
    {
      kind: "category",
      name: "Looks",
      colour: "#8fbc8f",
      contents: [{ kind: "block", type: "text_print" }],
    },
    {
      kind: "category",
      name: "Lists",
      colour: "#0000ff",
      contents: [
        { kind: "block", type: "lists_create_with" },
        { kind: "block", type: "lists_repeat" },
      ],
    },
    {
      kind: "category",
      name: "Colour",
      colour: "#9A5E18",
      contents: [
        { kind: "block", type: "colour_picker" },
        { kind: "block", type: "colour_random" },
      ],
    },
    {
      kind: "category",
      name: "Variables",
      colour: "purple",
      custom: "VARIABLE",
    },
    {
      kind: "category",
      name: "Procedures",
      colour: "purple",
      custom: "PROCEDURE",
    },
  ],
};
