"use client";

import clsx from "clsx";
import { useContext } from "react";
import Editor from "@/components/Editor";
import Widget from "@/components/WidgetLayout";

import Header from "@/components/Layout/Header";
import LeftSide from "@/components/Layout/LeftSide";
import { DataContext } from "@/contexts/DataContext";
import { ACTION_NAMES, WIDGET } from "@/components/constants";

const HomePage = () => {
  const context = useContext(DataContext);
  const { dataContext, dispatchData }: any = context;
  const { isHolding = false, itemSelected = null, items = [] } = dataContext;

  const isShowEditor = itemSelected !== null;

  const handleAddWidget = (e: React.DragEvent) => {
    const _type = e.dataTransfer.getData("TYPE_WIDGET");
    const _id = Date.now();

    const _newWidget =
      _type === WIDGET.BUTTON
        ? {
            id: _id,
            type: _type,
            content: "Click here to edit",
            actionContent: "Content alert here",
          }
        : {
            id: _id,
            type: _type,
            content: "Click here to text",
          };

    dispatchData?.({
      typeAction: ACTION_NAMES.ADD,
      itemSelector: _newWidget,
    });
  };

  const handleSelectWidget = (widget: TWidget) => {
    return dispatchData({
      typeAction: ACTION_NAMES.SELECTED,
      itemSelector: widget,
    });
  };

  const renderPlaceholder = () => {
    if (!isHolding) return null;

    return (
      <div className="absolute content-center w-[98%] h-[95%] flex justify-center items-center border-dashed border-2 rounded-2xl border-[var(--color-gray)] !opacity-100">
        Drop here
      </div>
    );
  };

  const renderEditor = () => {
    if (!isShowEditor) return null;

    return (
      <Editor
        data={itemSelected}
        onClose={() =>
          dispatchData({ typeAction: ACTION_NAMES.REMOVE_SELECTED })
        }
        onDelete={() => dispatchData({ typeAction: ACTION_NAMES.DELETE })}
        onUpdate={({ typeAction, itemSelector }: TActionReducer) =>
          dispatchData({ typeAction, itemSelector })
        }
      />
    );
  };

  const renderListWidget = () => {
    return items.map((item: TWidget) => {
      return (
        <Widget
          key={item.id}
          mode="EDIT"
          data={item}
          className={clsx("cursor-pointer", isHolding && "opacity-60")}
          onAction={() => handleSelectWidget(item)}
        />
      );
    });
  };

  return (
    <>
      <Header />

      <main className="flex flex-nowrap">
        <LeftSide />
        <section className="main-content">
          <div
            className={clsx(
              "flex items-center gap-5 flex-col relative p-4",
              isShowEditor ? "droppable-has-editor" : "droppable"
            )}
            onDrop={handleAddWidget}
            onDragOver={(e) => {
              e.preventDefault();
            }}
          >
            {renderListWidget()}

            {renderPlaceholder()}
          </div>

          {renderEditor()}
        </section>
      </main>
    </>
  );
};

export default HomePage;
