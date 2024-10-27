"use client";
import React from 'react';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="bg-white w-[320px] p-4 border-r border-gray-200 hidden lg:block pt-[130px]">
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
            <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '97%' }}></div>
        </div>
        <p className='font-bold mb-4'>97% <span className='font-normal'> completed in</span> 204h 13m</p>
        <hr class="w-full" />
        <div className='h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600'>
            <h2 className="text-lg font-bold pt-[80px]">Tailwind Project</h2>
            <ul className="mt-4 ml-6">
                <li className="py-2"><input type="checkbox" className="mr-2" />Nodejs Installation [Windows]</li>
                <li className="py-2"><input type="checkbox" className="mr-2" />Tailwind Installation [Windows]</li>
                <li className="py-2"><input type="checkbox" className="mr-2" />Tailwind Installation [macOS]</li>
                <li className="py-2"><input type="checkbox" className="mr-2" />Tailwind - Class I [HD]</li>
                <li className="py-2"><input type="checkbox" className="mr-2" />Razorpay Clone [Code Part-1]</li>
            </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-4">
          <div className=" text-black sm:text-lg lg:text-2xl font-bold">Web Development Bootcamp</div>
          <div className="flex space-x-4">
          <button className="px-4 py-2 text-blue-600 rounded">Discuss(9)</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Previous</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Next</button>
          </div>
        </div>
        <hr />


        {/* Video Section */}
        <div className='pt-10 ml-[80px]'>
            <div className="bg-black sm:w-[350px] lg:w-[850px] rounded-lg overflow-hidden relative shadow-lg items-center justify-center">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        className="sm:w-[350px] sm:h-[250px] lg:w-[850px] lg:h-[500px]"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Tailwind Class"
                        allowFullScreen
                    ></iframe>
                </div>
                
            </div>
        </div>
      </main>

      {/* Mobile Sidebar (Hidden on large screens) */}
      <aside className="fixed bottom-0 left-0 w-full bg-white p-4 border-t border-gray-200 lg:hidden">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Tailwind Project</h2>
          <button className="text-blue-600">View More</button>
        </div>
        <ul className="mt-2">
          <li className="py-2">Nodejs Installation [Windows]</li>
          <li className="py-2">Tailwind Installation [Windows]</li>
          <li className="py-2">Tailwind Installation [macOS]</li>
          <li className="py-2">Tailwind - Class I [HD]</li>
        </ul>
      </aside>
    </div>
  );
};

export default Layout;
