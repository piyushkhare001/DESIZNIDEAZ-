'use client'; // Add this line to mark this component as a Client Component

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, email, countryCode, phoneNumber, subject, message });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-black text-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-400" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            className="bg-gray-800 text-gray-400 p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-400" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="bg-gray-800 text-gray-400 p-2 rounded w-full"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-sm font-semibold mb-2 mr-2 text-gray-400" htmlFor="countryCode">
            Country Code
          </label>
          <select
            id="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            required
            className="bg-gray-800 text-gray-400 p-2 rounded w-full"
          >
            <option value="">Select Country Code</option>
            <option value="+1">+1 (USA)</option>
            <option value="+91">+91 (India)</option>
            <option value="+44">+44 (UK)</option>
            {/* Add more country codes as needed */}
          </select>
          <label className="block text-sm font-semibold mb-2 ml-4 text-gray-400" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Your Phone Number"
            required
            className="bg-gray-800 text-gray-400 p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-400" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            required
            className="bg-gray-800 text-gray-400 p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-400" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
            rows={4}
            className="bg-gray-800 text-gray-400 p-2 rounded w-full"
          />
        </div>
        <button type="submit" className="w-full bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
