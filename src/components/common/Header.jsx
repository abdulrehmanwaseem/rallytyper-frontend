import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Playnow", path: "/#difficulty" },
    { name: "Blogs", path: "/blogs" },
    { name: "Post on X", path: "/post" },
  ];

  const isActive = (path) => location.pathname === path;

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  const handleNavClick = (e, path) => {
    if (path.includes("#")) {
      e.preventDefault();
      const hash = path.split("#")[1];

      // If we're already on the home page, just scroll
      if (location.pathname === "/") {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Navigate to home page with hash, then let useEffect handle scrolling
        navigate(`/${hash ? `#${hash}` : ""}`);
      }
    }
  };

  return (
    <header className="relative z-50">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/header-bg.svg')" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-brand-dark-3 via-brand-dark-3/90 to-transparent opacity-90" />

      <div className="mx-auto px-6 lg:px-14 py-6 relative z-10">
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
                    onClick={(e) => handleNavClick(e, link.path)}
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
            <Button
              variant={"brand"}
              onClick={(e) => handleNavClick(e, "/#difficulty")}
            >
              Play Now
            </Button>
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
