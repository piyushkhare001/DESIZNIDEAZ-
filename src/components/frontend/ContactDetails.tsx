import React from "react";

// Define the shape of each contact detail item
type ContactDetail = {
  heading: string;
  description: string;
  details: string;
};

// Define the contact details array without icons
const contactDetails: ContactDetail[] = [
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

// Define the functional component without icons
const ContactDetails: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 rounded-xl bg-gray-900 p-6 lg:p-8 text-white">
      {contactDetails.map((ele, i) => (
        <div
          className="flex flex-col gap-4 p-6 rounded-md bg-gray-800 shadow-md text-sm" // Added background, padding, and spacing
          key={i}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{ele.heading}</h1> {/* Larger font for headings */}
            <p className="text-base text-gray-300">{ele.description}</p> {/* Slightly muted description text */}
          </div>
          <p className="text-lg font-medium">{ele.details}</p> {/* Bold details text */}
        </div>
      ))}
    </div>
  );
};

export default ContactDetails;
