// Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-orange-600 mb-8 text-center">
          Get in Touch
        </h2>

        <p className="text-gray-700 text-center mb-10">
          Have questions or feedback? Reach out to us and we'll get back to you
          as soon as possible.
        </p>

        <form className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
