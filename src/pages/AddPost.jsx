import React from "react";
import { Container, PostForm } from "../components";
import { motion } from "framer-motion";

const AddPost = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 rounded-2xl shadow-2xl p-6 sm:p-10 border border-gray-700"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-6 text-center">
            Create a New Post
          </h1>
          <PostForm />
        </motion.div>
      </Container>
    </div>
  );
};

export default AddPost;
