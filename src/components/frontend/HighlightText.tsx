import React from "react";

const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-black"> {/* Set the background to black */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-gray-400"> {/* Text color set to gray-400 */}
        <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%] text-gray-400"> {/* Header text color set to gray-400 */}
          Empowering the next generation through innovative digital learning, paving the way for a brighter and smarter future
          <p className="mx-auto mt-8 text-center text-base font-medium lg:w-[95%] text-gray-400"> {/* Paragraph text color set to gray-400 */}
            DESIZNIDEAZ stands at the forefront of revolutionizing online education, driven by a passion for transforming the future of learning. By offering state-of-the-art courses and harnessing the power of emerging technologies, we strive to create impactful educational experiences and cultivate a dynamic community of lifelong learners.
          </p>
        </header>
        <div className="sm:h-[70px] lg:h-[150px]"></div>
        
        {/* Image Container */}
        <div className="absolute bottom-0 left-[50%] w-[100%] translate-x-[-50%] translate-y-[30%] grid grid-cols-3 gap-3 lg:gap-5">
          {/* First Image with hover effect */}
          <div className="relative transition-transform duration-300 hover:scale-105">
            <img
              src="https://plus.unsplash.com/premium_photo-1681505363643-620ad0256ae4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbXB1dGVyJTIwYW5kJTIwc3R1ZGVudHN8ZW58MHx8MHx8fDA%3D"
              alt="Students and Learning"
              className="rounded-lg object-cover border-2 border-gray-700 shadow-lg"
            />
          </div>
          
          {/* Second Image with hover effect */}
          <div className="relative transition-transform duration-300 hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Innovative Learning"
              className="rounded-lg object-cover border-2 border-gray-700 shadow-lg"
            />
          </div>
          
          {/* Third Image with hover effect */}
          <div className="relative transition-transform duration-300 hover:scale-105">
            <img
              src="https://plus.unsplash.com/premium_photo-1692241076210-9e696db67fce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
              alt="Learning Environment"
              className="rounded-lg object-cover border-2 border-gray-700 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
