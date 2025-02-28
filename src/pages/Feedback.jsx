    import React, { useState } from "react";
    import { db, collection, addDoc } from "./firebase";

    const FeedbackForm = () => {
      const [username, setUsername] = useState("");
      const [feedback, setFeedback] = useState("");

      const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !feedback) {
          alert("Please fill out all fields.");
          return;
        }

        try {
          await addDoc(collection(db, "feedbacks"), {
            username,
            feedback,
            timestamp: new Date(),
          });

          // Reset form
          setUsername("");
          setFeedback("");
          alert("Thank you for your feedback!");
        } catch (error) {
          console.error("Error submitting feedback: ", error);
        }
      };

      return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
          <h2 className="text-2xl font-bold mb-4">Leave Your Feedback</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">
                Feedback
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      );
    };

    export default FeedbackForm;
