export const builtinToolboxXml = {
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
