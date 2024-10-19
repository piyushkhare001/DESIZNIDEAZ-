import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-black p-6 md:p-10"> {/* Set a black background with padding */}
      <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white"> {/* Updated text color */}
        
        {/* Founding Story Section */}
        <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
          <div className="my-24 flex lg:w-[50%] flex-col gap-10">
            <h1 className="bg-gradient-to-br from-[#FF6F61] via-[#6F5B7F] to-[#88D8B0] bg-clip-text text-4xl font-semibold lg:w-[70%] shadow-lg"> {/* Added shadow */}
              Our Founding Story
            </h1>
            <p className="text-base font-medium text-gray-400 lg:w-[95%]"> {/* Updated text color */}
              Our e-learning platform was born out of a shared vision and
              passion for transforming education. It all began with a group of
              educators, technologists, and lifelong learners who recognized the
              need for accessible, flexible, and high-quality learning
              opportunities in a rapidly evolving digital world.
            </p>
            <p className="text-base font-medium text-gray-400 lg:w-[95%]"> {/* Updated text color */}
              As experienced educators ourselves, we witnessed firsthand the
              limitations and challenges of traditional education systems. We
              believed that education should not be confined to the walls of a
              classroom or restricted by geographical boundaries. We envisioned
              a platform that could bridge these gaps and empower individuals
              from all walks of life to unlock their full potential.
            </p>
          </div>

          {/* Founding Story Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1537861295351-76bb831ece99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
              alt="Founding Story"
              className="" // Normal image without any shadow or fixed height
            />
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
          {/* Vision Section */}
          <div className="my-24 flex lg:w-[40%] flex-col gap-10">
            <h1 className="bg-gradient-to-b from-[#00BFFF] to-[#1E90FF] bg-clip-text text-4xl font-semibold lg:w-[70%] shadow-lg"> {/* Added shadow */}
              Our Vision
            </h1>
            <p className="text-base font-medium text-gray-400 lg:w-[95%]"> {/* Updated text color */}
              With this vision in mind, we set out on a journey to create an
              e-learning platform that would revolutionize the way people learn.
              Our team of dedicated experts worked tirelessly to develop a
              robust and intuitive platform that combines cutting-edge
              technology with engaging content, fostering a dynamic and
              interactive learning experience.
            </p>
          </div>

          {/* Mission Section */}
          <div className="my-24 flex lg:w-[40%] flex-col gap-10">
            <h1 className="bg-gradient-to-b from-[#FFA07A] to-[#FF4500] bg-clip-text text-4xl font-semibold lg:w-[70%] shadow-lg"> {/* Added shadow */}
              Our Mission
            </h1>
            <p className="text-base font-medium text-gray-400 lg:w-[95%]"> {/* Updated text color */}
              Our mission goes beyond just delivering courses online. We wanted
              to create a vibrant community of learners, where individuals can
              connect, collaborate, and learn from one another. We believe that
              knowledge thrives in an environment of sharing and dialogue, and
              we foster this spirit of collaboration through forums, live
              sessions, and networking opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
