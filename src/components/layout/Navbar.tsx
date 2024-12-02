import { Menu, ShoppingBag, User } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "@fontsource/poppins"; // Import the Poppins font

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
    `text-lg ${active ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`;

  const iconStyles = "h-5 w-5 text-gray-700 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 py-4 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-700">Seamline Ghana</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link key={path} to={path} className={linkStyles(isActive(path))}>
                {label}
              </Link>
            ))}
          </div>

          {/* Icons and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className={iconStyles} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingBag className={iconStyles} />
            </button>
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
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
