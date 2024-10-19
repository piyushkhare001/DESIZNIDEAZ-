import React from "react";

interface LearningGridItem {
  order: number;
  heading: string;
  highliteText?: string; // Optional field for highlighted text
  description: string;
  BtnText?: string; // Optional button text
  BtnLink?: string; // Optional button link
}

const LearningGridArray: LearningGridItem[] = [
  {
    order: -1,
    heading: "Innovative Learning Solutions for",
    highliteText: "Anyone, Anywhere",
    description:
      "DESIZNIDEAZ collaborates with over 300 esteemed universities and leading companies to offer flexible, affordable, and job-relevant online learning. Our mission is to empower individuals and organizations worldwide with essential skills and knowledge, shaping the future of education through innovative methodologies and accessible learning opportunities for all.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Industry-Relevant Curriculum",
    description:
      "Maximize your time and savings! The Belajar curriculum is thoughtfully crafted for easy comprehension while aligning with industry demands. Our engaging approach demystifies challenging topics, empowering learners with the vital skills needed in a competitive landscape. Embrace education tailored for achievement and streamlined efficiency!",
  },
  {
    order: 2,
    heading: "Dynamic Learning Framework",
    description:
      "At DESIZNIDEAZ, we partner with more than 275 prestigious universities and top-tier companies to provide unparalleled educational opportunities. Our dynamic learning approaches seamlessly integrate academic theory with real-world practice, equipping learners with the essential skills and knowledge to thrive in their professional endeavors. Embark on a transformative educational experience that propels you towards success!",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "At DESIZNIDEAZ, we believe in the power of recognized credentials. Our certification programs are designed to validate your skills and knowledge, providing you with a competitive edge in the job market. Partnering with over 275 leading universities and companies, our certifications are industry-recognized, ensuring that what you learn is not only relevant but also applicable in real-world scenarios. Upon successful completion of our courses, you will receive a certificate that showcases your expertise, enhancing your resume and opening doors to new career opportunities. Join us and take the next step in your professional journey with confidence.",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
];

const LearningGrid: React.FC = () => {
  return (
    <section className="mx-auto flex w-screen h-screen justify-center items-center text-white">
      {/* Learning Grid */}
      <div className="bg-black w-full h-full p-6 md:p-10 flex items-center"> {/* Added flex items-center */}
        <div className="grid mx-auto w-full h-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {LearningGridArray.map((card, i) => (
            <div
              key={i}
              className={`rounded-md p-6 flex flex-col justify-between ${
                card.order < 0 ? "xl:col-span-2 bg-gray-900 h-full" : "bg-gray-800 h-full"
              } transform transition duration-300 hover:scale-95 hover:shadow-lg`}
            >
              {card.order < 0 ? (
                <div className="flex flex-col gap-3 flex-grow justify-center"> {/* Added flex-grow and justify-center */}
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
                    {card.heading}{" "}
                    <span className="text-blue-400">{card.highliteText}</span>
                  </div>
                  <p className="text-gray-400 font-medium text-sm sm:text-base">
                    {card.description}
                  </p>
                  <div className="mt-4 flex justify-center"> {/* Centered button */}
                    {card.BtnText && card.BtnLink && (
                      <a
                        href={card.BtnLink}
                        className="px-4 py-2 text-black bg-yellow-400 rounded-md hover:bg-yellow-500"
                      >
                        {card.BtnText}
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2 flex-grow justify-center"> {/* Added flex-grow and justify-center */}
                  <h2 className="text-white text-lg font-bold">{card.heading}</h2>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {card.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningGrid;
