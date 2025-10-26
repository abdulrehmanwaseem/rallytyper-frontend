import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const blogData = {
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Tracey Wilson",
    date: "August 20, 2022",
    category: "Rally Typer",
    image: "/images/blog.png",
    content: [
      {
        type: "paragraph",
        text: "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.",
      },
      {
        type: "paragraph",
        text: "One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.",
      },
      {
        type: "heading",
        text: "Research Your Destination",
      },
      {
        type: "paragraph",
        text: "Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae.",
      },
      {
        type: "quote",
        text: "Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy.",
      },
      {
        type: "image",
        src: "/images/blog.png",
        alt: "Travel destination",
      },
      {
        type: "heading",
        text: "Plan Your Itinerary",
      },
      {
        type: "paragraph",
        text: "While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.",
      },
      {
        type: "paragraph",
        text: "Vitae sapien pellentesque habitant morbi tristique. Laculis vel facilisis volutpat est velit. Risu mollis et consequat venenatis velit id. Quis auctor elit sed vulputate mi sit amet. Bibendum enim facilisis gravida neque convallis a cras semper auctor.",
      },
      {
        type: "heading",
        text: "Pack Lightly and Smartly",
      },
      {
        type: "paragraph",
        text: "Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.",
      },
      {
        type: "heading",
        text: "Stay Safe and Healthy",
      },
      {
        type: "paragraph",
        text: "Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.",
      },
      {
        type: "heading",
        text: "Immerse Yourself in the Local Culture",
      },
      {
        type: "paragraph",
        text: "One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.",
      },
      {
        type: "heading",
        text: "Capture Memories",
      },
      {
        type: "paragraph",
        text: "Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the experiences at hand.",
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.",
      },
    ],
  };

  return (
    <div
      className="min-h-screen bg-black "
      style={{ fontFamily: "'Work Sans', sans-serif" }}
    >
      <div className="container mx-auto max-w-4xl px-6 py-16">
        {/* Category Badge */}
        <div className="flex justify-between items-center mb-6">
          <span className="inline-block bg-brand text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
            {blogData.category}
          </span>
          {/* Back Button */}
          <button
            onClick={() => navigate("/blogs")}
            className="flex items-center gap-2 text-white/70 hover:text-brand transition-colors duration-300 group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
            <span className="font-medium">Back to Blogs</span>
          </button>
        </div>

        {/* Title */}
        <h1 className="text-white text-4xl md:text-5xl font-semibold mb-8 leading-tight">
          {blogData.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-brand-dark-4">
          <div className="flex items-center gap-2 text-white/70">
            <User size={18} />
            <span className="font-medium">{blogData.author}</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <Calendar size={18} />
            <span>{blogData.date}</span>
          </div>
          <button className="ml-auto flex items-center gap-2 text-white/70 hover:text-brand transition-colors duration-300">
            <Share2 size={18} />
            <span className="font-medium">Share</span>
          </button>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden">
          <img
            src={blogData.image}
            alt={blogData.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Content */}
        <article className="prose prose-invert max-w-none mb-20">
          {blogData.content.map((block, index) => {
            switch (block.type) {
              case "heading":
                return (
                  <h2
                    key={index}
                    className="text-white text-2xl md:text-3xl font-bold mt-12 mb-6"
                  >
                    {block.text}
                  </h2>
                );
              case "paragraph":
                return (
                  <p
                    key={index}
                    className="text-white/80 text-base md:text-lg leading-relaxed mb-6"
                  >
                    {block.text}
                  </p>
                );
              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="my-8 pl-6 border-l-4 border-brand bg-brand-dark-5 p-6 rounded-r-lg"
                  >
                    <p className="text-white/90 text-lg md:text-xl italic font-medium leading-relaxed">
                      "{block.text}"
                    </p>
                  </blockquote>
                );
              case "image":
                return (
                  <div
                    key={index}
                    className="my-10 rounded-2xl overflow-hidden"
                  >
                    <img
                      src={block.src}
                      alt={block.alt}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                );
              default:
                return null;
            }
          })}
        </article>
      </div>
    </div>
  );
};

export default BlogDetails;
