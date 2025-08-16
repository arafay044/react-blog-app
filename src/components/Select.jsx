import React, { forwardRef, useId } from "react";

const Select = (
  {
    options,
    label,
    className = "",
    ...props
  },
  ref
) => {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-4 py-2 rounded-lg w-full border border-gray-300 dark:border-gray-600
          bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
          outline-none shadow-sm
          focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
          hover:border-indigo-400 dark:hover:border-indigo-400
          transition duration-200 ease-in-out
          ${className}`}
      >
        {options?.map((option, index) => (
          <option
            key={index}
            value={option.value || option}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default forwardRef(Select);
