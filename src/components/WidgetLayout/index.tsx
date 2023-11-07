import React from "react";
import Button from "../Button";
import { WIDGET } from "../constants";

type TWidgetLayout = {
  data: TWidget;
  mode: "EDIT" | "VIEW";
  className: string;
  onAction: () => void;
};

const Widget: React.FC<TWidgetLayout> = ({
  data,
  mode,
  className,
  onAction,
}) => {
  const isButton = data.type === WIDGET.BUTTON;

  const renderContent = () => {
    if (isButton)
      return (
        <Button
          onAction={() => {
            if (mode === "EDIT") return;

            return alert(data?.actionContent ?? "");
          }}
        >
          {data.content}
        </Button>
      );

    return data.content;
  };

  return (
    <div className={className} onClick={onAction}>
      {renderContent()}
    </div>
  );
};

export default Widget;
