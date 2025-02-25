import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-blue-600 text-white p-4 shadow-md fixed w-full top-0 z-10"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto flex justify-between items-center max-w-screen-lg">
        {/* Logo */}
        <Link to="/" className="flex items-center" title="Go to Home Page">
          <img
            src={logo}
            alt="Geet Enterprises Logo"
            className="h-18 w-auto"
            loading="lazy"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:underline hover:text-yellow-300 transition-colors"
              title="Home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className="hover:underline hover:text-yellow-300 transition-colors"
              title="Features"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/how-it-works"
              className="hover:underline hover:text-yellow-300 transition-colors"
              title="How It Works"
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              className="hover:underline hover:text-yellow-300 transition-colors"
              title="Testimonials"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:underline hover:text-yellow-300 transition-colors"
              title="Contact Us"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl mr-6 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-600 text-white p-4 space-y-2 absolute top-16 left-0 w-screen shadow-md">
          <li>
            <Link
              to="/"
              className="block p-2 hover:bg-blue-700"
              title="Home"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className="block p-2 hover:bg-blue-700"
              title="Features"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/how-it-works"
              className="block p-2 hover:bg-blue-700"
              title="How It Works"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              className="block p-2 hover:bg-blue-700"
              title="Testimonials"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block p-2 hover:bg-blue-700"
              title="Contact Us"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
