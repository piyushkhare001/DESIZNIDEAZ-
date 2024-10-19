import React from 'react';
import OTP from '@/components/frontend/OTP';  // Adjust the path based on your actual file structure

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full max-w-4xl bg-gray-800 p-12 rounded-xl shadow-2xl border border-gray-700">
          <h1 className="text-4xl text-white text-center mb-8 font-bold">OTP Verification</h1>
          <OTP />
        </div>
      </div>
    </div>
  );
};

export default App;
