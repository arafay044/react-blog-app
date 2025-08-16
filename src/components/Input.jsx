import React, { forwardRef, useId } from "react";
import { motion } from "framer-motion";

const Input = forwardRef(
  (
    {
      label,
      type = "text",
      className = "",
      error = "",
      helperText = "",
      ...props
    },
    ref
  ) => {
    const id = useId();

    return (
      <div className="w-full flex flex-col gap-1">
        {label && (
          <label
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor={id}
          >
            {label}
          </label>
        )}

        <motion.input
          type={type}
          id={id}
          ref={ref}
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className={`
            px-3 py-2 rounded-lg shadow-sm border w-full
            bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
            outline-none transition duration-200
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300"}
            ${className}
          `}
          {...props}
        />

        {error ? (
          <span className="text-sm text-red-500">{error}</span>
        ) : helperText ? (
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {helperText}
          </span>
        ) : null}
      </div>
    );
  }
);

export default Input;
