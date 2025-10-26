import React from "react";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "The Evolution of Typing Skills: From Typewriters to Typing Games",
      author: "Elizabeth Slavin",
      date: "August 20, 2022",
      category: "Technology",
      image: "/images/blog.png",
    },
    {
      id: 2,
      title:
        "Real-Life Applications of Typing Skills: Why Speed and Accuracy Matter",
      author: "Elizabeth Slavin",
      date: "August 20, 2022",
      category: "Technology",
      image: "/images/blog.png",
    },
    {
      id: 3,
      title:
        "Real-Life Applications of Typing Skills: Why Speed and Accuracy Matter",
      author: "Elizabeth Slavin",
      date: "August 20, 2022",
      category: "Technology",
      image: "/images/blog.png",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-white text-4xl md:text-6xl text-center font-medium mb-16"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          Our Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
