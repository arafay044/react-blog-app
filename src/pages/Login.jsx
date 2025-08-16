import React from "react";
import { Login as LoginComponent } from "../components";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 p-8 rounded-2xl shadow-2xl border border-gray-700"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-6 text-center">
          Welcome Back
        </h1>
        <LoginComponent />
      </motion.div>
    </div>
  );
};

export default Login;
