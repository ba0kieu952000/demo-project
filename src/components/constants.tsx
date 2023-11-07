import Button from "./Button";

export enum WIDGET {
  BUTTON = "BUTTON",
  PARAGRAPH = "PARAGRAPH",
}

export enum ACTION_NAMES {
  ADD = "ADD",
  REMOVE = "REMOVE",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  HOLDING = "HOLDING",
  SELECTED = "SELECTED",
  REMOVE_HOLDING = "REMOVE_HOLDING",
  REMOVE_SELECTED = "REMOVE_SELECTED",
}

export const LEFT_SIDE_FEATURES = [
  {
    type: WIDGET.BUTTON,
    children: <Button>Button</Button>,
  },

  {
    type: WIDGET.PARAGRAPH,
    children: (
      <div className="border-dashed border-2 rounded-lg p-3">Paragraph</div>
    ),
  },
];
