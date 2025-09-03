import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Target, Zap } from 'lucide-react';
import { roadmapData } from '../assets/data/roadmapData';

const RoadmapPage: React.FC = () => {
  // Keep roadmap steps in state so status can be updated
  const [steps, setSteps] = useState(roadmapData);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-400" />;
      case 'current':
        return <Zap className="w-6 h-6 text-blue-400" />;
      default:
        return <Target className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500/50 bg-green-500/5';
      case 'current':
        return 'border-blue-500/50 bg-blue-500/5';
      default:
        return 'border-gray-600/50 bg-gray-800/20';
    }
  };

  const handleStatusChange = (index: number, newStatus: string) => {
    const updated = [...steps];
    updated[index].status = newStatus;
    setSteps(updated);
  };

  // const getDropdownClasses = (status: string) => {
  //   switch (status) {
  //     case 'completed':
  //       return 'bg-green-500/20 text-green-300 border border-green-500/40 focus:ring-green-500';
  //     case 'current':
  //       return 'bg-blue-500/20 text-blue-300 border border-blue-500/40 focus:ring-blue-500';
  //     default:
  //       return 'bg-gray-700/30 text-gray-300 border border-gray-600 focus:ring-gray-500';
  //   }
  // };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(157,78,221,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(157,78,221,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-purple-400 hover:text-purple-300 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Career Roadmap
            </h1>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 to-transparent" />

            {/* Timeline Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline Node */}
                  <div className="flex-shrink-0 relative">
                    <div
                      className={`w-16 h-16 rounded-full border-2 ${getStatusColor(
                        step.status
                      )} flex items-center justify-center backdrop-blur-sm`}
                    >
                      {getStatusIcon(step.status)}
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-x-[110%] -translate-y-1/2 text-base font-semibold text-gray-300 whitespace-nowrap">
                      Step {index + 1}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{step.description}</p>
                      </div>
                      <div className="flex items-center gap-1 text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{step.timeAllocation}</span>
                      </div>
                    </div>

                    {/* Tasks */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Key Tasks:</h4>
                      {step.tasks.map((task, taskIndex) => (
                        <div
                          key={taskIndex}
                          className="flex items-center gap-2 text-sm text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                          {task}
                        </div>
                      ))}
                    </div>

                    {/* Progress Indicator with styled dropdown */}
                    <div className="mt-4 pt-4 border-t border-gray-700/50">
  <div className="flex items-center justify-between w-full">
    <label className="text-sm text-gray-400 mr-2">Status:</label>
    <div className="relative w-44">
      <select
        value={step.status}
        onChange={(e) => handleStatusChange(index, e.target.value)}
        className={`
          w-full appearance-none px-4 py-3 text-sm font-semibold cursor-pointer transition-all duration-200
          rounded-full shadow-md pr-8
          focus:outline-none focus:ring-2
          ${
            step.status === 'completed'
              ? 'bg-green-600/90 text-white border border-green-500 focus:ring-green-400'
              : step.status === 'current'
              ? 'bg-blue-600/90 text-white border border-blue-500 focus:ring-blue-400'
              : 'bg-gray-700 text-white border border-gray-600 focus:ring-gray-400'
          }
        `}
      >
        <option value="completed" className="bg-[#0a192f] text-white">
          Completed
        </option>
        <option value="current" className="bg-[#0a192f] text-white">
          In Progress
        </option>
        <option value="upcoming" className="bg-[#0a192f] text-white">
          Upcoming
        </option>
      </select>

      {/* Custom dropdown arrow */}
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <svg
          className="w-4 h-4 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  </div>
</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to Begin Your Journey?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              This roadmap is designed to take you from beginner to job-ready professional. Each
              step builds upon the previous one, ensuring steady progress toward your career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/books">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-lg transition-all duration-300 font-semibold hover:scale-105">
                  Browse Courses
                </button>
              </Link>
              <Link to="/quiz">
                <button className="bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-purple-500/50 px-6 py-3 rounded-lg transition-all duration-300 font-medium">
                  Take Assessment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;