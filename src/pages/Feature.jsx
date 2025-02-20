import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "Instant Loan Approval",
      desc: "Get your loan approved within minutes with our AI-powered system.",
      icon: "✅",
    },
    {
      title: "Secure Transactions",
      desc: "Your transactions are encrypted and safe with industry-standard security.",
      icon: "🔒",
    },
    {
      title: "Flexible Repayments",
      desc: "Choose a repayment plan that suits your financial needs.",
      icon: "💳",
    },
    {
      title: "User-Friendly Dashboard",
      desc: "Manage loans easily with an intuitive and simple dashboard.",
      icon: "📊",
    },
    {
      title: "24/7 Customer Support",
      desc: "We are here to assist you anytime, anywhere.",
      icon: "☎️",
    },
    {
      title: "Low Interest Rates",
      desc: "Enjoy the lowest interest rates on the market.",
      icon: "💰",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Our Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-xl">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
