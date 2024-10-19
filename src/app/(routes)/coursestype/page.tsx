import React from 'react';
import CourseSection from '@/components/frontend/courses';

const App: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl text-white text-center">Welcome to Our E-Learning Platform</h1>
      <CourseSection />
      {/* Other components */}
    </div>
  );
};

export default App;
