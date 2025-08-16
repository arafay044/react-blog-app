import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((data) => {
        if (data) setPost(data);
        else navigate("/");
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    if (!post) return;

    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        if (post.featuredImage) appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  if (!post) return null;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden"
        >
          <div className="w-full relative">
            <img
              src={
                post.featuredImage
                  ? appwriteService.getFileDownload(post.featuredImage)
                  : "/placeholder.png"
              }
              alt={post.title}
              className="w-full h-72 object-cover rounded-t-2xl"
            />

            {isAuthor && (
              <div className="absolute right-4 top-4 flex space-x-3">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button bgColor="bg-green-600 hover:bg-green-700 transition-colors">
                    Edit
                  </Button>
                </Link>
                <Button
                  bgColor="bg-red-600 hover:bg-red-700 transition-colors"
                  onClick={deletePost}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>

          <div className="p-6 sm:p-8">
            <h1 className="text-3xl font-bold text-indigo-400 mb-4">
              {post.title}
            </h1>
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
              {parse(post.content)}
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
