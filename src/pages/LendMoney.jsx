import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const LendMoney = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    amount: "",
    interestRate: "",
    duration: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_7xe2g22"; // Replace with your EmailJS Service ID
    const templateId = "template_icxk279"; // Replace with your EmailJS Template ID
    const publicKey = "HbyfZ0Cxr16Hm-rct"; // Replace with your EmailJS Public Key
    const ownerEmail = "owner@example.com"; // Replace with the website owner's email

    try {
      // Send email to website owner with lending details
      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: formData.name,
          user_email: formData.email,
          user_mobile: formData.mobile,
          lending_amount: formData.amount,
          interest_rate: formData.interestRate,
          duration: formData.duration,
          to_email: ownerEmail, // Owner's email
        },
        publicKey
      );

      // Send confirmation email to user
      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: formData.name,
          user_email: formData.email,
          user_mobile: formData.mobile,
          lending_amount: formData.amount,
          interest_rate: formData.interestRate,
          duration: formData.duration,
          to_email: formData.email, // User's email
          message: `Thank you, ${formData.name}! Your lending offer of ₹${formData.amount} at ${formData.interestRate}% for ${formData.duration} months has been received.`,
        },
        publicKey
      );

      alert("Lending offer submitted successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        amount: "",
        interestRate: "",
        duration: "",
      }); // Reset form
    } catch (error) {
      console.error("Email Send Failed:", error);
      alert("Failed to send email. Please check your credentials.");
    } finally {
      setLoading(false);
    }
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
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
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
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Offer"}
        </button>
      </form>
    </div>
  );
};

export default LendMoney;
