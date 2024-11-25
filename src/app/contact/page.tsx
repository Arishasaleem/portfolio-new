"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from "react-icons/fi";
import { Meteors } from "@/components/ui/meteors";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // TODO: Add logic to submit the form data to an API or email service
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-12">
      <Meteors number={25} />
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 p-6 m-12">Contact Us</h1>
        <p className="text-lg text-gray-400 mb-12">
          We would love to hear from you. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FiMail className="text-teal-500 mr-4" />
              <span>arishasaleem03@email.com</span>
            </div>
            <div className="flex items-center mb-4">
              <FiPhone className="text-teal-500 mr-4" />
              <span>+92 (30) 301-78575</span>
            </div>
            <div className="flex items-center mb-8">
              <FiMapPin className="text-teal-500 mr-4" />
              <span>Naval Colony, Karachi, Pakistan</span>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-4">
              <Link
                href="https://www.linkedin.com/in/arisha-saleem-7a81742b7"
                target="_blank"
                className="text-teal-500 hover:text-teal-400"
              >
                <FiLinkedin size={24} />
              </Link>
              <Link
                href="https://github.com/Arishasaleem"
                target="_blank"
                className="text-teal-500 hover:text-teal-400"
              >
                <FiGithub size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
