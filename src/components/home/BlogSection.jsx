import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Mastering the Art of Typing: 7 Proven Tips to Typing Game",
      author: "Abdul Rehman",
      date: "August 28, 2025",
      image: "/images/blog1.jpg",
    },
    {
      id: 2,
      title:
        "Speed vs. Accuracy: What Matters More When Improving Your Typing Skills",
      author: "Samantha Bloom",
      date: "October 8, 2025",
      image: "/images/blog2.jpg",
    },
    {
      id: 3,
      title: "Exploring the Competitive World of Speed and Judgment Tournament",
      author: "Belly Smith",
      date: "August 22, 2023",
      image: "/images/blog3.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#1A130B]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">
          Our Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#2B231B] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#F25A06]/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-[#48443E] to-[#302D29] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="bg-[#F25A06] text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                  Technology
                </div>

                <h3 className="text-white text-lg font-bold mb-4 leading-snug group-hover:text-[#F25A06] transition-colors">
                  {blog.title}
                </h3>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1A130B] flex items-center justify-center">
                    <span className="text-sm">👤</span>
                  </div>
                  <div className="text-sm">
                    <div className="text-white font-semibold">
                      {blog.author}
                    </div>
                    <div className="text-gray-400 text-xs">{blog.date}</div>
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
