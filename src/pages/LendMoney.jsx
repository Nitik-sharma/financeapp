import React, { useState } from "react";

const LendMoney = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    interestRate: "",
    duration: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Lending offer submitted successfully!");
    setFormData({
      name: "",
      email: "",
      amount: "",
      interestRate: "",
      duration: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-20 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Lend Money</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Lending Amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="text"
          name="interestRate"
          placeholder="Interest Rate (%)"
          value={formData.interestRate}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration (Months)"
          value={formData.duration}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Submit Offer
        </button>
      </form>
    </div>
  );
};

export default LendMoney;
