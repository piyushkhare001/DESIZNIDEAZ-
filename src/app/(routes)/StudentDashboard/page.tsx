import React from 'react';
import StudentDashboard from '@/components/frontend/StudentDashboard';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <h1 className="text-3xl text-white text-center mb-8">Welcome to Our E-Learning Platform</h1>
      <StudentDashboard />
      {/* Other components can be added here */}
    </div>
  );
};

export default Home;