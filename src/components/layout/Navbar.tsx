import { Menu, ShoppingBag, User } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "@fontsource/poppins";

import Logo from "../../assets/logo.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/shop", label: "Shop" },
    { path: "/gallery", label: "Gallery" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const linkStyles = (active: boolean) =>
    `text-sm ${
      active
        ? "text-[#5177C9] font-semibold"
        : "text-[#3a3a3a] hover:text-[#5177C9]" // Dark gray with hover effect
    }`;

  const iconStyles = "h-5 w-5 text-[#4A4A4A] hover:text-[#5177C9]";

  return (
    <nav className="bg-[#F7F7F7] shadow-sm sticky top-0 z-50 py-1 font-poppins">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="w-200 h-200 md:h-12"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link key={path} to={path} className={linkStyles(isActive(path))}>
                {label}
              </Link>
            ))}
          </div>

          {/* Icons and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-[#e1ebff] rounded-full">
              <User className={iconStyles} />
            </button>
            <button className="p-2 hover:bg-[#e1ebff] rounded-full">
              <ShoppingBag className={iconStyles} />
            </button>
            <button
              className="md:hidden p-2 hover:bg-[#EAEAEA] rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <Menu className={iconStyles} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-3 py-2 rounded-md ${linkStyles(
                  isActive(path)
                )}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
