import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbackList(storedFeedback);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">
        What Our Users Say
      </h2>

      {feedbackList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbackList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transition hover:shadow-2xl transform hover:-translate-y-2"
            >
              <p className="italic text-center">"{item.feedback}"</p>
              <p className="mt-4 text-gray-700 font-semibold">
                - {item.username}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center text-lg">
          No feedback yet. Be the first to share your experience!
        </p>
      )}
    </div>
  );
};

export default Testimonials;
