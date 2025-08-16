import React from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) => {
  // Variants for color schemes
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400",
    outline:
      "border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 focus:ring-blue-400",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-400",
  };

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`
        px-5 py-2.5 rounded-full font-medium shadow-md
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${variants[variant]} ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
