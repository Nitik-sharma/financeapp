import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Home = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbackList(storedFeedback);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+917065650077";
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold" title="Geet Enterprises">
          Geet Enterprises
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          Private Funding & PDC Based Business Loan
        </h2>
        <p className="mt-4 text-lg md:text-xl">
          Easily track loans, manage repayments, and stay financially organized.
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <Link to="/apply-loan">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition">
              Apply for Loan
            </button>
          </Link>

          <Link to="/feedback">
            <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition">
              Give Feedback
            </button>
          </Link>
        </div>
      </header>

      {/* Testimonials Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbackList.length > 0 ? (
            feedbackList.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transition hover:shadow-2xl transform hover:-translate-y-2"
              >
                <p className="italic text-center">"{item.feedback}"</p>
                <p className="mt-4 font-semibold">- {item.username}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-3">
              No feedback yet. Be the first to share your experience!
            </p>
          )}
        </div>
      </section>

      {/* Contact & Social Links */}
      <footer className="bg-gray-900 text-white py-8 text-center px-4">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.facebook.com/share/15XqJjpp3V/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={30} className="hover:text-blue-400" />
          </a>
          <a
            href="https://www.instagram.com/geet_finance?igsh=MWhraHI1aHlsY3lubw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} className="hover:text-pink-400" />
          </a>
          <a
            href="https://wa.me/message/N7N34R6SHS47G1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={30} className="hover:text-green-400" />
          </a>
        </div>
        <div className="mt-4 text-gray-400">
          <Link
            to={
              "https://www.google.com/maps/search/E-50+2nd+Floor+Multan+Nagar+Paschim+Vihar+New+Delhi-110056"
            }
          >
            <p>
              📍 Address: E-50 2nd Floor Multan Nagar Paschim Vihar New
              Delhi-110056
            </p>
          </Link>
          <p
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={handleCall}
          >
            📞 Phone: +91 7065650077
          </p>
          <a
            href="mailto:geetenterprises0078@gmail.com"
            className="text-blue-500 hover:underline"
          >
            ✉️ Email: geetenterprises0078@gmail.com
          </a>
        </div>
        <p className="text-sm mt-4">
          Copyright © 2025 | Powered by{" "}
          <Link to="/" className="text-blue-500">
            Geet Enterprises
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Home;
