import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { motion } from "framer-motion";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-16 px-4 sm:px-6 lg:px-8 text-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 rounded-2xl shadow-xl p-10 border border-gray-700"
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-indigo-400">
              Login to read posts
            </h1>
            <p className="text-gray-400 mt-3 text-base">
              Please sign in to access the latest articles and posts.
            </p>
          </motion.div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <Container>
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {posts.map((post) => (
            <motion.div
              key={post.$id}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <PostCard {...post} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}

export default Home;
