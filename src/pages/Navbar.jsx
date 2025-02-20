import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  
    <nav className="bg-blue-600 text-white p-4 shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center max-w-screen-lg">
        <h1 className="text-xl font-bold">Geet Interprise</h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:underline hover:text-yellow-300 transition-colors">Home</Link></li>
          <li><Link to="/features" className="hover:underline hover:text-yellow-300 transition-colors">Features</Link></li>
          <li><Link to="/how-it-works" className="hover:underline hover:text-yellow-300 transition-colors">How It Works</Link></li>
          <li><Link to="/testimonials" className="hover:underline hover:text-yellow-300 transition-colors">Testimonials</Link></li>
          <li><Link to="/contact" className="hover:underline hover:text-yellow-300 transition-colors">Contact</Link></li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl ml-auto" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-600 text-white p-4 space-y-2 absolute top-16 left-0 w-screen shadow-md">
          <li><Link to="/" className="block p-2 hover:bg-blue-700" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/features" className="block p-2 hover:bg-blue-700" onClick={() => setIsOpen(false)}>Features</Link></li>
          <li><Link to="/how-it-works" className="block p-2 hover:bg-blue-700" onClick={() => setIsOpen(false)}>How It Works</Link></li>
          <li><Link to="/testimonials" className="block p-2 hover:bg-blue-700" onClick={() => setIsOpen(false)}>Testimonials</Link></li>
          <li><Link to="/contact" className="block p-2 hover:bg-blue-700" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
