import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const companyLinks = [
    { name: "Story", path: "/story" },
    { name: "Download", path: "/download" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  const socialMedia = [
    { name: "Twitter", icon: "𝕏", url: "#", color: "hover:text-white" },
    { name: "Instagram", icon: "📷", url: "#", color: "hover:text-pink-500" },
    { name: "Facebook", icon: "f", url: "#", color: "hover:text-blue-500" },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#2B231B] to-[#1A130B] border-t border-[#48443E]">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/images/logo.svg"
                alt="RallyTyper Logo"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Get ready for a high-speed challenge where your typing skills
              determine your success! All while having fun. Best of all, it's a
              free typing game online that helps you improve with every race!
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#F25A06] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Follow us on:</h3>
            <div className="flex gap-4 mb-6">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-lg bg-[#1A130B] flex items-center justify-center text-white text-xl transition-all duration-300 hover:bg-[#F25A06] ${social.color} hover:scale-110`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Follow Us on X @Rallytyper and Instagram @Rallytyper
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#48443E] mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">Copyright 2025, Rally Typer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
