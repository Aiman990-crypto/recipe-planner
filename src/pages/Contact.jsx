import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // later you can send data to backend / email service here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600">
            Have a question, suggestion, or just want to say hello?
            We'd love to hear from you.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-orange-600">
              Contact Information
            </h2>

            <p className="text-gray-600 mb-4">
              We aim to respond within 24 hours.
            </p>

            <div className="space-y-3 text-gray-700">
              <p>📍 Pakistan</p>
              <p>📧 support@recipeplanner.com</p>
              <p>📱 +92 234 567 8910</p>
            </div>
          </div>

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500
                text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                Send Message
              </button>

            </form>
          ) : (
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-3">
                Message Sent!
              </h3>
              <p className="text-gray-600">
                Thank you for contacting us. We'll reply soon.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Contact;
