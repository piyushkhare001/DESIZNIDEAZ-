'use client'; // Use this to ensure the component renders as a client component

import React, { useState } from 'react';
import Footer from '@/components/frontend/footer'; // Adjust the path to your Footer component as needed

const CombinedContactSection: React.FC = () => {
  // Contact form state variables
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

  // Static contact details
  const contactDetails = [
    {
      heading: "Chat with us",
      description: "Our friendly team is here to help.",
      details: "info@gmail.com",
    },
    {
      heading: "Visit us",
      description: "Come and say hello at our office HQ.",
      details: "Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar, Patna-560016",
    },
    {
      heading: "Call us",
      description: "Mon - Fri From 8am to 5pm",
      details: "+123 456 7869",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      {/* Contact Section */}
      <div className="flex items-center justify-center py-10 flex-grow">
        <div className="max-w-6xl w-full bg-gray-900 rounded-lg shadow-lg p-8 flex flex-col lg:flex-row gap-10">
          {/* Contact Details Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            {contactDetails.map((item, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold">{item.heading}</h3>
                <p className="text-gray-400">{item.description}</p>
                <p className="text-white font-medium">{item.details}</p>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="w-full bg-gray-800 text-white p-2 rounded"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className="w-full bg-gray-800 text-white p-2 rounded"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="countryCode" className="block text-sm font-semibold mb-2">Country Code</label>
                  <select
                    id="countryCode"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    required
                    className="w-full bg-gray-800 text-white p-2 rounded"
                  >
                    <option value="">Select Country Code</option>
                    <option value="+1">+1 (USA)</option>
                    <option value="+91">+91 (India)</option>
                    <option value="+44">+44 (UK)</option>
                    {/* Add more country codes as needed */}
                  </select>
                </div>
                <div className="flex-1">
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Your Phone Number"
                    required
                    className="w-full bg-gray-800 text-white p-2 rounded"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                  required
                  className="w-full bg-gray-800 text-white p-2 rounded"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full bg-gray-800 text-white p-2 rounded"
                />
              </div>
              <button type="submit" className="w-full bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      <footer className="bg-gray-800 p-4">
        <Footer />
      </footer>
    </div>
  );
};

export default CombinedContactSection;
