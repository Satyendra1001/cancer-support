import React from "react";
import clsx from "clsx";

export const Card = ({ className, children, ...props }) => (
  <div
    className={clsx("bg-white rounded-xl border border-gray-200", className)}
    {...props}
  >
    {children}
  </div>
);

export const CardContent = ({ className, children, ...props }) => (
  <div className={clsx("p-4", className)} {...props}>
    {children}
  </div>
);

