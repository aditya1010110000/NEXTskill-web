/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { booksData } from '../assets/data/booksData';

const BooksPage: React.FC = () => {
  const [suggestedCourses, setSuggestedCourses] = useState(booksData);
  const [yourCourses, setYourCourses] = useState<any[]>([]);

  const handleEnroll = (course: any) => {
    setSuggestedCourses(prev => prev.filter(c => c.title !== course.title));
    setYourCourses(prev => [...prev, course]);
  };

  const handleUnenroll = (course: any) => {
    setYourCourses(prev => prev.filter(c => c.title !== course.title));
    setSuggestedCourses(prev => [...prev, course]);
  };

  const renderCourses = (courses: any[], isSuggested: boolean) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => (
        <div
          key={index}
          className="bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-4 hover:border-green-500 hover:bg-green-50 transition-all duration-300 hover:scale-105 group"
        >
          {/* Course Header */}
          <div className="w-full h-24 bg-[#0a1a2f] rounded-lg mb-3 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
            <BookOpen className="w-6 h-6 text-blue-300" />
          </div>

          {/* Course Info */}
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-medium text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                {course.category}
              </span>
              <span className="text-xs text-gray-700">{course.level}</span>
            </div>

            <h3 className="text-base font-semibold text-gray-900 leading-tight">
              {course.title}
            </h3>

            <p className="text-gray-700 text-xs leading-relaxed">
              {course.description}
            </p>

            {/* Action Button */}
            {isSuggested ? (
              <button
                onClick={() => handleEnroll(course)}
                className="w-full bg-[#064e3b] hover:bg-[#05392f] text-white px-3 py-1.5 rounded-md transition-colors duration-300 text-sm font-medium"
              >
                Enroll Now
              </button>
            ) : (
              <button
                onClick={() => handleUnenroll(course)}
                className="w-full bg-red-700 hover:bg-red-600 text-white px-3 py-1.5 rounded-md transition-colors duration-300 text-sm font-medium"
              >
                Unenroll
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-green-400 hover:text-green-300 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Course Library
            </h1>
          </div>
        </div>

        {/* Your Courses Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Your Courses</h2>
          {yourCourses.length > 0 ? (
            renderCourses(yourCourses, false)
          ) : (
            <p className="text-gray-700">You haven’t enrolled in any courses yet.</p>
          )}
        </div>

        {/* Suggested Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">Suggested</h2>
          {suggestedCourses.length > 0 ? (
            renderCourses(suggestedCourses, true)
          ) : (
            <p className="text-gray-700">No more suggested courses 🎉</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;