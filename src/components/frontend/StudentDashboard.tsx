'use client';
import React, { useState, useEffect } from 'react';
import {
  BookOpen, Bookmark, MessageSquare, Search,
  User, ChevronRight, BarChart2, Calendar,
  Settings, LogOut, Briefcase, Award, Video
} from 'lucide-react';

interface Course {
  id: number;
  title: string;
  nextLesson: string;
  instructor: string;
  startDate: string;
  progress: number;
  category: string;
}

const courses: Course[] = [
  { id: 1, title: "Introduction to Programming", nextLesson: "Variables and Data Types", instructor: "Jane Doe", startDate: "2024-10-30", progress: 0, category: "CS" },
  { id: 2, title: "Web Development Basics", nextLesson: "HTML Fundamentals", instructor: "John Smith", startDate: "2024-11-15", progress: 0, category: "Web" },
  { id: 3, title: "Mathematics for Computer Science", nextLesson: "Set Theory", instructor: "Alice Johnson", startDate: "2024-11-05", progress: 0, category: "Math" },
];

const StudentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    console.log("Fetching user data...");
  }, []);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 hidden md:block">
        <h1 className="text-2xl font-bold mb-10 text-blue-400">LearnHub</h1>
        <nav>
          <ul className="space-y-4">
            {[
              { name: 'Courses', icon: BookOpen },
              { name: 'Bookmarks', icon: Bookmark },
              { name: 'Messages', icon: MessageSquare },
              { name: 'Analytics', icon: BarChart2 },
              { name: 'Career', icon: Briefcase },
              { name: 'Settings', icon: Settings },
            ].map((item) => (
              <li key={item.name}>
                <button
                  className={`flex items-center w-full py-2 px-4 rounded-lg transition-colors ${
                    activeTab === item.name.toLowerCase()
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveTab(item.name.toLowerCase())}
                  aria-label={item.name} // Added aria-label for accessibility
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="mt-8 flex items-center text-gray-400 hover:text-white transition-colors"
          aria-label="Log out" // Added aria-label for the logout button
        >
          <LogOut className="mr-3 h-5 w-5" />
          <span className="sr-only">Log out</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-blue-400">My Dashboard</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <button className="flex items-center space-x-2" aria-label="Profile">
              <User className="h-6 w-6 text-gray-400" />
              <span className="text-sm font-medium">Profile</span>
            </button>
          </div>
        </header>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Enrolled Courses</h3>
            <div className="text-3xl font-bold text-blue-400">{courses.length}</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Overall Progress</h3>
            <div className="text-3xl font-bold text-green-400">0%</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Completed Tasks</h3>
            <div className="text-3xl font-bold text-yellow-400">0</div>
          </div>
        </div>

        {/* Course Grid */}
        <h3 className="text-2xl font-bold mb-4">My Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-blue-400">{course.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-300">
                    <BookOpen className="mr-2 h-4 w-4 text-blue-400" />
                    <span>First Lesson: {course.nextLesson}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <User className="mr-2 h-4 w-4 text-blue-400" />
                    <span>Instructor: {course.instructor}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Calendar className="mr-2 h-4 w-4 text-blue-400" />
                    <span>Starts: {course.startDate}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Award className="mr-2 h-4 w-4 text-blue-400" />
                    <span>Category: {course.category}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-blue-400">Progress</span>
                    <span className="text-sm font-medium text-blue-400">0%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center group"
                    aria-label={`Start course: ${course.title}`}
                  >
                    Start Course
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-1" />
                  </button>
                  <button
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                    aria-label="Watch Video"
                  >
                    <Video className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Welcome Message */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-4">Welcome to LearnHub!</h3>
          <p className="text-gray-400">
            Congratulations on taking the first step towards your learning journey! Here are some tips to get started:
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>Explore courses relevant to your career goals.</li>
            <li>Bookmark courses for quick access later.</li>
            <li>Track your progress and strive to complete tasks regularly.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
