const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition">
          <p className="italic">
            "This loan service was a lifesaver! Quick approval and easy
            process!"
          </p>
          <h3 className="mt-4 font-semibold">- John Doe</h3>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition">
          <p className="italic">
            "Transparent and reliable. Highly recommend their services!"
          </p>
          <h3 className="mt-4 font-semibold">- Sarah Smith</h3>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition">
          <p className="italic">
            "Flexible repayment options made my experience hassle-free."
          </p>
          <h3 className="mt-4 font-semibold">- David Johnson</h3>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;