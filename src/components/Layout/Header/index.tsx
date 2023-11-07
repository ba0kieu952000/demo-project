import Link from "next/link";
import React from "react";

type TFeature = {
  type: "BTN" | "LINK";
  title: string;
  redirect?: string;
};

const LIST_FEATURE: TFeature[] = [
  {
    type: "LINK",
    title: "View",
    redirect: "/view",
  },
];

const Header = () => {
  const renderItemFeature = (item: TFeature, idx: number) => {
    if (item.type === "LINK")
      return (
        <Link
          key={idx}
          href={item?.redirect ?? ""}
          className="text-[var(--color-gray)] hover:text-white"
        >
          {item.title}
        </Link>
      );

    return (
      <button key={idx} className="text-[var(--color-gray)] hover:text-white">
        {item.title}
      </button>
    );
  };

  return (
    <div className="h-[60px] border-[var(--color-gray)] border-b-2 flex justify-center items-center gap-5">
      {LIST_FEATURE.map(renderItemFeature)}
    </div>
  );
};

export default Header;
