import React from 'react';

interface QuoteProps {
  highlightedText: string;
}

const Quote: React.FC<QuoteProps> = ({ highlightedText }) => {
  return (
    <div className="text-xl md:text-4xl font-semibold mx-auto py-10 text-center text-gray-400">
      AT DESIZNIDEAZ, WE ARE PASSIONATE ABOUT REVOLUTIONIZING EDUCATION THROUGH 
      INNOVATIVE TECHNOLOGY. OUR MISSION IS TO MAKE LEARNING{" "}
      <span className="highlight">{highlightedText}</span>{" "}
      <span className="font-bold">
        ACCESSIBLE, ENGAGING & EFFECTIVE 
      </span>
      , FOR EVERYONE
    </div>
  );
};

const App = () => {
  return (
    <section className="border-b border-richblack-700 py-10 bg-black"> {/* Set background to bg-black */}
      <div className="mx-auto mt-4 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-gray-400"> {/* Applied mt-4 and text-gray-400 */}
        <div className="h-[100px]"></div>
        <Quote highlightedText="YOUR HIGHLIGHTED TEXT HERE" />
      </div>
    </section>
  );
};

export default App;
