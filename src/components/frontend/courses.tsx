import React from 'react';
import Image from 'next/image';
import { GraduationCap, Briefcase, Check, ChevronRight } from 'lucide-react';

interface CourseBoxProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactElement;
  color: string;
  buttonText: string;
}

const CourseBox: React.FC<CourseBoxProps> = ({ title, description, features, icon, color, buttonText }) => (
  <div className={`bg-gray-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105`}>
    <div className="p-8">
      <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mb-6`}>
        {React.cloneElement(icon, { size: 32, className: 'text-white' })}
      </div>
      <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 mb-8">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className={`w-5 h-5 mr-3 ${color}`} />
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full ${color} text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition duration-300 flex items-center justify-center group`}>
        {buttonText}
        <ChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
      </button>
    </div>
  </div>
);

const CoursePage: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Elevate Your Career with Our <span className="text-blue-500">Advanced Courses</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Choose between our industry-recognized certifications or job-guaranteed programs to skyrocket your professional journey.
          </p>
        </div>

        {/* Course Boxes */}
        <div className="grid md:grid-cols-2 gap-12">
          <CourseBox
            title="Certification Courses"
            description="Gain expertise and credibility with our comprehensive certification programs."
            features={[
              "Globally recognized certifications",
              "Self-paced learning modules",
              "Industry expert-led instruction",
              "Hands-on projects and assessments",
            ]}
            icon={<GraduationCap />}
            color="bg-blue-600"
            buttonText="Explore Certifications"
          />
          <CourseBox
            title="Placement Guaranteed Courses"
            description="Secure your dream job with our intensive, outcome-driven programs."
            features={[
              "100% job placement guarantee",
              "Personalized career coaching",
              "Real-world capstone projects",
              "Extensive industry network access",
            ]}
            icon={<Briefcase />}
            color="bg-green-600"
            buttonText="Secure Your Career"
          />
        </div>

        {/* Additional Features Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Courses?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Flexible Learning", value: "24/7 Access" },
              { title: "Expert Instructors", value: "500+" },
              { title: "Career Support", value: "Lifetime" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center">
                <p className="text-2xl font-bold mb-2">{item.value}</p>
                <p className="text-gray-400">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl text-gray-400 mb-8">Join thousands of successful graduates who have taken their careers to new heights.</p>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-700 transition duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;