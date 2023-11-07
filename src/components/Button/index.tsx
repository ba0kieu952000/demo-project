import clsx from "clsx";
import React from "react";

type Props = {
  type?: "primary";
  children: React.ReactNode;
  onAction?: () => void;
};

const Button: React.FC<Props> = ({ children, type = "primary", onAction }) => {
  return (
    <button className={clsx(type)} onClick={onAction}>
      {children}
    </button>
  );
};

export default Button;
