import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Star, Users, BookOpen } from 'lucide-react';
import { booksData } from '../assets/data/booksData';

const BooksPage: React.FC = () => {
  const courses = booksData;

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

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 group"
            >
              {/* Course Header */}
              <div className={`w-full h-32 bg-gradient-to-r ${course.color} rounded-lg mb-4 flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                <BookOpen className="w-8 h-8 text-white" />
              </div>

              {/* Course Info */}
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                    {course.category}
                  </span>
                  <span className="text-xs text-gray-400">{course.level}</span>
                </div>

                <h3 className="text-lg font-semibold text-white leading-tight">
                  {course.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.hours}h
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    {course.rating}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-green-600 hover:to-emerald-600 px-4 py-2 rounded-lg transition-all duration-300 text-white font-medium">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Start Learning?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of learners who have accelerated their careers through our comprehensive course library.
            </p>
            <Link to="/roadmap">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-8 py-3 rounded-lg transition-all duration-300 font-semibold hover:scale-105">
                View Learning Roadmap
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;