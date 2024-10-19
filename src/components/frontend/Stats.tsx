import React from "react";

const Stats = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const StatsComponent: React.FC = () => {
  return (
    <div className="bg-black p-6 md:p-10">
      {/* Stats Container */}
      <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto">
        {/* Stats Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-6"> {/* Added gap-6 for spacing between boxes */}
          {Stats.map((data, index) => {
            return (
              <div
                key={index}
                className="flex flex-col py-10 px-6 bg-gray-800 rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <h1 className="text-[30px] font-bold text-gray-100"> {/* Updated text color to gray-100 for better visibility */}
                  {data.count}
                </h1>
                <h2 className="font-semibold text-[16px] text-gray-400"> {/* Updated text color to gray-400 */}
                  {data.label}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
