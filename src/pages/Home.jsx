import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  const handleCall = () => {
    window.location.href = "tel:7065650077";
  };
  const handleMail = () => {
    window.Location.href =
      "https://mail.google.com/mail/u/0/#search/geetenterprises0078%40gmail.com?compose=new";
  }


     
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 ">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-30 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">Geet Enterprises</h1>

        <h1 className="text-4xl md:text-5xl font-bold">
          Private Funding & PDC Based Business Loan
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Easily track loans, manage repayments, and stay financially organized.
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <Link to={"/apply-loan"}>
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Apply for Loan
            </button>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Fast Loan Applications",
              desc: "Apply for a loan in just a few clicks.",
            },
            {
              title: "Track Your Repayments",
              desc: "Get automated reminders and stay updated.",
            },
            {
              title: "Secure & Transparent",
              desc: "All transactions are safe and well-documented.",
            },
            {
              title: "Easy Loan Management",
              desc: "Approve or reject loan requests easily.",
            },
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="font-semibold text-xl">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-200 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "For Borrowers",
              steps: "1️⃣ Sign Up & Apply\n2️⃣ Get Approved\n3️⃣ Repay Easily",
            },
            {
              title: "For Lenders",
              steps:
                "1️⃣ Register & Browse Requests\n2️⃣ Approve Loans\n3️⃣ Receive Repayments",
            },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="mt-2 whitespace-pre-line">{item.steps}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
        <div className="mt-6 flex flex-col md:flex-row gap-6 justify-center">
          {[
            {
              quote:
                "Managing my loans has never been this easy! Highly recommended.",
              rating: "⭐⭐⭐⭐⭐",
            },
            {
              quote:
                "I can now track all my repayments in one place. Amazing tool!",
              rating: "⭐⭐⭐⭐⭐",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg max-w-sm"
            >
              <p className="italic">"{testimonial.quote}"</p>
              <p className="mt-2 font-semibold">{testimonial.rating}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <footer className="bg-blue-600 text-white py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">Geet Enterprises</h1>
        <h2 className="text-3xl font-bold">Start Managing Your Loans Today!</h2>
      </footer>
      {/* Social & Contact Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center px-4">
        <div className="flex justify-center space-x-6 mb-4">
          {/* <a href="#" className="text-gray-400 hover:text-white">
            Facebook
          </a> */}
          <Link
            to={"https://www.facebook.com/share/15XqJjpp3V/"}
            className="text-gray-400 hover:text-cyan-400"
          >
            <FaFacebookF size={30} />
          </Link>

          <Link
            to={
              "https://www.instagram.com/geet_finance?igsh=MWhraHI1aHlsY3lubw=="
            }
            className="text-gray-400 hover:text-cyan-400"
          >
            <FaInstagram size={30} />
          </Link>
          <Link
            to={"https://wa.me/message/N7N34R6SHS47G1"}
            className="text-gray-400 hover:text-cyan-400"
          >
            <FaWhatsapp size={30} />
          </Link>
        </div>
        <div className="text-gray-400 mt-4">
          <Link
            to={
              "https://www.google.com/maps/search/E-50+2nd+Floor+Multan+Nagar+Paschim+Vihar+New+Delhi-110056/@28.6779492,77.1040466,17z/data=!3m1!4b1!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
            }
          >
            {" "}
            <p>
              📍 Address: E-50 2nd Floor Multan Nagar Paschim Vihar New
              Delhi-110056
            </p>
          </Link>

          <p
            onClick={handleCall}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            📞 Phone: 7065650077
          </p>

          <Link
            to={
              "https://mail.google.com/mail/u/0/#search/geetenterprises0078%40gmail.com?compose=new"
            }
          >
            {" "}
            <p>✉️ Email:geetenterprises0078@gmail.com</p>
          </Link>
        </div>
        <div className="bg-[#4A1A12] text-center py-4 text-white relative">
         
          <p className="text-sm">
            Copyright 2024 | Powered by{" "}
            <span className="text-blue-500">
              <Link to={""}> Geet Enterprises</Link>
            </span>{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
