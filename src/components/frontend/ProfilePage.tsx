'use client'; // Add this line to specify it's a Client Component

import React, { useState } from 'react';
import { Save, Upload, Eye } from 'lucide-react';
import { motion } from 'framer-motion';


interface StudentProfileProps {}

interface StudentData {
  name: string;
  age: string;
  grade: string;
  bio: string;
  photoUrl: string;
  email: string;
  phone: string;
  address: string;
  gpa: string;
  extracurriculars: string[];
  major: string;
  achievements: string[];
  languages: string[];
  skills: string[];
}

const StudentProfile: React.FC<StudentProfileProps> = () => {
  const [studentData, setStudentData] = useState<StudentData>({
    name: '',
    age: '',
    grade: '',
    bio: '',
    photoUrl: '',
    email: '',
    phone: '',
    address: '',
    gpa: '',
    extracurriculars: [],
    major: '',
    achievements: [],
    languages: [],
    skills: [],
  });

  const [isViewing, setIsViewing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setStudentData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudentData((prev) => ({ ...prev, photoUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleArrayChange = (field: keyof StudentData, index: number, value: string) => {
    const newArray = [...(studentData[field] as string[])];
    newArray[index] = value;
    setStudentData((prev) => ({ ...prev, [field]: newArray }));
  };

  const addArrayItem = (field: keyof StudentData) => {
    setStudentData((prev) => ({
      ...prev,
      [field]: [...(prev[field] as string[]), ''],
    }));
  };

  const removeArrayItem = (field: keyof StudentData, index: number) => {
    const newArray = (studentData[field] as string[]).filter((_, i) => i !== index);
    setStudentData((prev) => ({ ...prev, [field]: newArray }));
  };

  const saveProfile = () => {
    console.log('Saving profile:', studentData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-8"
    >
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-xl p-8 text-gray-200">
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="text-4xl font-bold text-blue-400"
          >
            Student Profile
          </motion.h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsViewing(!isViewing)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200 flex items-center"
          >
            <Eye size={18} className="mr-2" />
            {isViewing ? 'Edit' : 'View'}
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <label className="block mb-2 font-semibold text-gray-300">Photo</label>
              <div className="flex items-center space-x-4">
                {studentData.photoUrl && (
                  <img
                    src={studentData.photoUrl}
                    alt="Student"
                    className="w-30 h-30 rounded-full object-cover"
                  />
                )}
                {!isViewing && (
                  <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center transition-colors duration-200">
                    <Upload size={18} className="mr-2" />
                    Upload Photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            {['name', 'age', 'grade', 'major', 'gpa', 'email', 'phone'].map((field) => (
              <div key={field}>
                <label className="block mb-2 font-semibold text-gray-300 capitalize">
                  {field}
                </label>
                {isViewing ? (
                  <p className="text-gray-200">{studentData[field as keyof StudentData]}</p>
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={studentData[field as keyof StudentData] as string}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 transition duration-200 text-white"
                    placeholder={`Enter your ${field}`}
                  />
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <label className="block mb-2 font-semibold text-gray-300">Address</label>
              {isViewing ? (
                <p className="text-gray-200">{studentData.address}</p>
              ) : (
                <textarea
                  name="address"
                  value={studentData.address}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 transition duration-200 h-24 text-white"
                  placeholder="Enter your address"
                />
              )}
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-300">Bio</label>
              {isViewing ? (
                <p className="text-gray-200">{studentData.bio}</p>
              ) : (
                <textarea
                  name="bio"
                  value={studentData.bio}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 transition duration-200 h-32 text-white"
                  placeholder="Enter a short bio about yourself"
                />
              )}
            </div>

            {['extracurriculars', 'achievements', 'languages', 'skills'].map((field) => (
              <div key={field}>
                <label className="block mb-2 font-semibold text-gray-300 capitalize">
                  {field}
                </label>
                {isViewing ? (
                  <ul className="list-disc list-inside text-gray-200">
                    {(studentData[field as keyof StudentData] as string[]).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-2">
                    {(studentData[field as keyof StudentData] as string[]).map((item, index) => (
                      <div key={index} className="flex space-x-2">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => handleArrayChange(field as keyof StudentData, index, e.target.value)}
                          className="flex-grow p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 transition duration-200 text-white"
                          placeholder={`Enter ${field} item`}
                        />
                        <button
                          onClick={() => removeArrayItem(field as keyof StudentData, index)}
                          className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => addArrayItem(field as keyof StudentData)}
                      className="mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                    >
                      Add {field.slice(0, -1)}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {!isViewing && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex justify-end"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={saveProfile}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center transition-colors duration-200 text-lg font-semibold"
            >
              <Save size={24} className="mr-2" />
              Save Profile
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default StudentProfile;