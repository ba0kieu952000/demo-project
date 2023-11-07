"use client";

import React from "react";
import Drag from "@/components/Drag";
import { LEFT_SIDE_FEATURES } from "@/components/constants";

type Props = {};

const LeftSide = (props: Props) => {
  return (
    <section className="left-side w-[320px] border-r-2 border-[var(--color-gray)] p-4 flex flex-col items-center gap-5">
      {LEFT_SIDE_FEATURES.map((feature) => {
        return (
          <Drag key={feature.type} type={feature.type}>
            {feature.children}
          </Drag>
        );
      })}
    </section>
  );
};

export default LeftSide;
