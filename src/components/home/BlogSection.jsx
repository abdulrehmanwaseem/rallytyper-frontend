import React from "react";

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
            <div
              key={blog.id}
              className="bg-linear-to-b from-[#3D2820] to-[#1A0F0A] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-60 p-4  overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="text-gray-300 text-sm font-medium">
                    {blog.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-semibold mb-4 leading-tight line-clamp-3">
                  {blog.title}
                </h3>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-3 border-t border-gray-700/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center overflow-hidden">
                    <img
                      src={`https://i.pravatar.cc/150?u=${blog.author}`}
                      alt={blog.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between w-[85%]">
                    <div className="text-white/90 font-semibold text-sm">
                      {blog.author}
                    </div>
                    <div className="text-gray-400 text-xs mt-0.5">
                      {blog.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
