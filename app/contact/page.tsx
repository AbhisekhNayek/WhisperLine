"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex items-center justify-center">
      <div className="container max-w-2xl p-6 sm:p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-white">Contact Us</h1>
        <p className="text-gray-400 text-center mb-6">
          We’d love to hear from you. Please fill out the form below to get in touch.
        </p>

        {successMessage && (
          <div className="mb-4 p-4 bg-black/80 rounded-lg text-white text-center">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="mt-1 block w-full rounded-lg bg-gray-900 border-gray-700 text-white py-2 px-4 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="mt-1 block w-full rounded-lg bg-gray-900 border-gray-700 text-white py-2 px-4 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={5}
              className="mt-1 block w-full rounded-lg bg-gray-900 border-gray-700 text-white py-2 px-4 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold shadow-lg transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
