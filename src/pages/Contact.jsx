import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_7xe2g22"; // Replace with your actual service ID
    const templateId = "template_pxv64mm"; // Replace with your actual template ID
    const publicKey = "HbyfZ0Cxr16Hm-rct"; // Replace with your actual public key
    const ownerEmail = "nitiksharma445@gmail.com"; // Replace with the owner's email

    try {
      // Send email to the owner
      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
          to_email: ownerEmail, // Owner's email
        },
        publicKey
      );

      // Send confirmation email to the user
      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: formData.name,
          user_email: formData.email,
          message: `Thank you, ${formData.name}! We have received your message and will get back to you soon.`,
          to_email: formData.email, // User's email
        },
        publicKey
      );

      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Email Send Failed:", error);
      alert("Failed to send message. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
      <div className="max-w-lg mx-auto bg-gray-100 p-8 shadow-lg rounded-lg">
        <form onSubmit={sendEmail}>
          <label className="block mb-4">
            <span className="text-gray-700">Name</span>
            <input
              type="text"
              name="name"
              className="mt-2 block w-full p-2 border rounded-md"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              className="mt-2 block w-full p-2 border rounded-md"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Message</span>
            <textarea
              name="message"
              className="mt-2 block w-full p-2 border rounded-md"
              rows="4"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
