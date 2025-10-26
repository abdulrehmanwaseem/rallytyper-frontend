import React from "react";
import BlogCard from "@/components/home/BlogCard";
import { Button } from "@/components/ui/button";

const Blogs = () => {
  // Featured blog (large card at top)
  const featuredBlog = {
    id: 0,
    title: "The Evolution of Typing Skills: From Typewriters to Typing Games",
    author: "Elizabeth Slavin",
    date: "October 14, 2025",
    category: "Technology",
    image: "/images/blog.png",
  };

  // Latest posts (smaller cards in grid)
  const latestPosts = [
    {
      id: 1,
      title:
        "Rally Typer vs Other Typing Games: What are the major differences?",
      author: "Tracey Wilson",
      date: "October 14, 2025",
      category: "Rally Typer",
      image: "/images/blog.png",
    },
    {
      id: 2,
      title:
        "Rally Typer vs Other Typing Games: What are the major differences?",
      author: "Jason Francisco",
      date: "October 14, 2025",
      category: "Rally Typer",
      image: "/images/blog.png",
    },
    {
      id: 3,
      title:
        "Rally Typer vs Other Typing Games: What are the major differences?",
      author: "Elizabeth Slavin",
      date: "October 14, 2025",
      category: "Rally Typer",
      image: "/images/blog.png",
    },
    {
      id: 4,
      title:
        "Rally Typer vs Other Typing Games: What are the major differences?",
      author: "Ernie Smith",
      date: "October 14, 2025",
      category: "Rally Typer",
      image: "/images/blog.png",
    },
    {
      id: 5,
      title:
        "Rally Typer vs Other Typing Games: What are the major differences?",
      author: "Eric Smith",
      date: "October 14, 2025",
      category: "Rally Typer",
      image: "/images/blog.png",
    },
    {
      id: 6,
      title:
        "Rally Typer vs Other Typing Games: What are the major differences?",
      author: "Tracey Wilson",
      date: "October 14, 2025",
      category: "Rally Typer",
      image: "/images/blog.png",
    },
    {
      id: 7,
      title:
        "Rally Typer vs Other Typing Games: What are the major differences?",
      author: "Jason Francisco",
      date: "October 14, 2025",
      category: "Rally Typer",
      image: "/images/blog.png",
    },
    {
      id: 8,
      title:
        "Rally Typer vs Other Typing Games: What are the major differences?",
      author: "Elizabeth Slavin",
      date: "October 14, 2025",
      category: "Rally Typer",
      image: "/images/blog.png",
    },
    {
      id: 9,
      title:
        "Rally Typer vs Other Typing Games: What are the major differences?",
      author: "Ernie Smith",
      date: "October 14, 2025",
      category: "Rally Typer",
      image: "/images/blog.png",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-24 px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Page Title */}
        <h1
          className="text-white text-3xl md:text-4xl font-mediium mb-12"
          style={{ fontFamily: "ADLaM Display, sans-serif" }}
        >
          Our Blogs
        </h1>

        {/* Featured Blog (Large Card) */}
        <div
          className="mb-16"
          style={{ fontFamily: "'Work Sans', sans-serif" }}
        >
          <div className="relative bg-brand-dark-5 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group">
            {/* Featured Image */}
            <div className="relative h-120 overflow-hidden">
              <img
                src={featuredBlog.image}
                alt={featuredBlog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                {/* Category Badge */}
                <span className="inline-block bg-brand text-white px-4 py-1.5 rounded-md text-sm font-bold uppercase mb-4">
                  {featuredBlog.category}
                </span>

                {/* Title */}
                <h2 className="text-white text-3xl md:text-4xl max-w-2xl font-semibold mb-0 leading-tight">
                  {featuredBlog.title}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Posts Section */}
        <div className="mb-8">
          <h2
            className="text-white text-2xl md:text-3xl font-medium mb-8"
            style={{ fontFamily: "ADLaM Display, sans-serif" }}
          >
            Latest Post
          </h2>

          {/* Grid of Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {latestPosts.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {/* View All Post Button */}
          <div className="flex justify-center">
            <Button
              size="xl"
              variant="outline"
              className="bg-transparent text-gray-500 border-brand-dark-2"
            >
              View All Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
