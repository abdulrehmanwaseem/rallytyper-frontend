import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Playnow", path: "/play" },
    { name: "Blogs", path: "/blogs" },
    { name: "Post on X", path: "/post" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className="relative z-50 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/header-bg.svg')" }}
    >
      <div className="container mx-auto px-6 lg:px-12 py-5">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/logo.svg"
              alt="RallyTyper Logo"
              className="h-12 w-auto"
            />
          </Link>

          <div className="flex items-center gap-20">
            <ul className="hidden md:flex items-center gap-10 lg:gap-20">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`font-semibold text-lg transition-colors duration-200 ${
                      isActive(link.path)
                        ? "text-brand"
                        : "text-white hover:text-brand"
                    }`}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button variant={"brand"}>Play Now</Button>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <Menu />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
