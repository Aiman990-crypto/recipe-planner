import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";

const BlogDetails = () => {
  const { id } = useParams();

  // Convert id safely
  const blogId = Number(id);

  // Find blog
  const blog = blogs.find((b) => b.id === blogId);

  // 🔥 Scroll to top when blog opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [blogId]);

  // 🛑 Prevent crash if blog doesn't exist
  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold mb-4">Blog not found</p>
        <Link
          to="/"
          className="text-orange-500 font-semibold hover:underline"
        >
          ← Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-orange-50 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="
              w-full h-72 object-cover
              transform transition duration-700
              hover:scale-105
            "
          />
        </div>

        {/* Content */}
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            {blog.title}
          </h1>

          <div
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Back Button */}
          <Link
            to="/"
            className="
              inline-block mt-10
              bg-gradient-to-r from-orange-400 via-amber-400 to-red-500
              text-white px-6 py-3 rounded-full font-semibold
              shadow-md hover:shadow-xl hover:scale-105
              transition duration-300
            "
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
