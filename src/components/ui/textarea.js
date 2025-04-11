import React from "react";
import clsx from "clsx";

export const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={clsx(
      "w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

