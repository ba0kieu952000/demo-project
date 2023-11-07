import React from "react";
import Icon from "../Icon";
import { ACTION_NAMES, WIDGET } from "../constants";

type TEditor = {
  data: TWidget;
  onClose: () => void;
  onDelete: () => void;
  onUpdate: ({ typeAction, itemSelector }: TActionReducer) => void;
};

const Editor: React.FC<TEditor> = ({ data, onUpdate, onClose, onDelete }) => {
  const isButton = data?.type === WIDGET.BUTTON;

  const handleChangeData = (
    { typeWidget, typeContent }: { typeWidget: string; typeContent: string },
    value: string
  ) => {
    let _itemSelector = { ...data, content: value };

    if (typeWidget === WIDGET.BUTTON && typeContent === "ALERT")
      _itemSelector = { ...data, actionContent: value };

    onUpdate({
      typeAction: ACTION_NAMES.UPDATE,
      itemSelector: _itemSelector,
    });
  };

  const renderEditor = () => {
    if (isButton)
      return (
        <div>
          <div className="flex justify-between w-[400px] pb-4">
            <label htmlFor="contentWidget">title:</label>
            <input
              type="text"
              name=""
              id="contentWidget"
              className="input"
              value={data.content}
              onChange={(e) => {
                handleChangeData(
                  {
                    typeWidget: WIDGET.BUTTON,
                    typeContent: "CONTENT",
                  },
                  e.target.value
                );
              }}
            />
          </div>

          <div className="flex justify-between w-[400px]">
            <label htmlFor="alertWidget">alert text:</label>
            <input
              type="text"
              name=""
              id="alertWidget"
              className="input"
              value={data?.actionContent}
              onChange={(e) => {
                handleChangeData(
                  {
                    typeWidget: WIDGET.BUTTON,
                    typeContent: "ALERT",
                  },
                  e.target.value
                );
              }}
            />
          </div>
        </div>
      );

    return (
      <div className="flex gap-3">
        <label htmlFor="contentWidget">Content text:</label>
        <textarea
          rows={5}
          cols={80}
          id="contentWidget"
          className="textarea"
          value={data?.content}
          onChange={(e) => {
            handleChangeData(
              {
                typeWidget: WIDGET.PARAGRAPH,
                typeContent: "CONTENT",
              },
              e.target.value
            );
          }}
        />
      </div>
    );
  };

  return (
    <div className="edit-item p-4 border-t-2 border-[var(--color-gray)]">
      <div className="flex justify-between pb-5">
        <div>Edit detail (Any changes will be automatically saved):</div>
        <div className="flex gap-3">
          <div onClick={onDelete}>
            <Icon.Delete />
          </div>
          <div onClick={onClose}>
            <Icon.Close />
          </div>
        </div>
      </div>

      {renderEditor()}
    </div>
  );
};

export default Editor;
