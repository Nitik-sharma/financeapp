const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
      <div className="max-w-lg mx-auto bg-gray-100 p-8 shadow-lg rounded-lg">
        <form>
          <label className="block mb-4">
            <span className="text-gray-700">Name</span>
            <input
              type="text"
              className="mt-2 block w-full p-2 border rounded-md"
              placeholder="Your Name"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              className="mt-2 block w-full p-2 border rounded-md"
              placeholder="Your Email"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Message</span>
            <textarea
              className="mt-2 block w-full p-2 border rounded-md"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;