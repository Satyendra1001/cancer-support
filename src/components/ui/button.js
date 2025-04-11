import React from "react";
import clsx from "clsx";

export const Button = ({ className, children, ...props }) => (
  <button
    className={clsx(
      "inline-flex items-center justify-center px-5 py-2.5 font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-lg transition-all duration-200 shadow",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

