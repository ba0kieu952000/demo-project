"use client";

import Widget from "@/components/WidgetLayout";
import React, { useContext } from "react";
import { DataContext } from "@/contexts/DataContext";

type Props = {};

const ViewPage = (props: Props) => {
  const context = useContext(DataContext);
  const { dataContext }: any = context;
  const { items = [] } = dataContext;

  return (
    <section className="p-8 flex flex-col items-center gap-4">
      {items.map((item: TWidget) => {
        return (
          <Widget
            key={item.id}
            mode="VIEW"
            data={item}
            className=""
            onAction={() => {}}
          />
        );
      })}
    </section>
  );
};

export default ViewPage;
