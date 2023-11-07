"use client";

import React, { useContext } from "react";
import { ACTION_NAMES } from "../constants";
import { DataContext } from "@/contexts/DataContext";

type TDrag = {
  type: string;
  children: React.ReactNode;
};

const Drag: React.FC<TDrag> = ({ children, type }) => {
  const dataContext: any = useContext(DataContext);

  const { dispatchData } = dataContext;

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("TYPE_WIDGET", type);
    dispatchData({ typeAction: ACTION_NAMES.HOLDING });
  };

  const handleDragEnd = () => {
    dispatchData({ typeAction: ACTION_NAMES.REMOVE_HOLDING });
  };

  return (
    <div draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      {children}
    </div>
  );
};

export default Drag;
