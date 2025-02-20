import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ApplyLoan = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    amount: "",
    duration: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_7xe2g22";
    const templateId = "template_icxk279";
    const publicKey = "HbyfZ0Cxr16Hm-rct";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      amount: formData.amount,
      duration: formData.duration,
      reason: formData.reason,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        alert("Loan application submitted successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          amount: "",
          duration: "",
          reason: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to submit the loan application.");
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-20 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Apply for a Loan</h2>
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
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
          pattern="[0-9]{10}"
          maxLength="10"
        />
        <input
          type="number"
          name="amount"
          placeholder="Loan Amount"
          value={formData.amount}
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
        <textarea
          name="reason"
          placeholder="Reason for Loan"
          value={formData.reason}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyLoan;
