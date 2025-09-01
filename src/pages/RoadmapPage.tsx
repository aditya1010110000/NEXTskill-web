import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Target, Zap } from 'lucide-react';
import { roadmapData } from '../assets/data/roadmapData';

const RoadmapPage: React.FC = () => {
  
  const roadmapSteps = roadmapData;

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

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(157,78,221,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(157,78,221,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 to-transparent"></div>

            {/* Timeline Steps */}
            <div className="space-y-8">
              {roadmapSteps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline Node */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-16 h-16 rounded-full border-2 ${getStatusColor(step.status)} flex items-center justify-center backdrop-blur-sm`}>
                      {getStatusIcon(step.status)}
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-400">
                      Step {index + 1}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {step.description}
                        </p>
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
                        <div key={taskIndex} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          {task}
                        </div>
                      ))}
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-4 pt-4 border-t border-gray-700/50">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400 capitalize">{step.status}</span>
                        {step.status === 'completed' && (
                          <div className="text-green-400 text-sm font-medium">✓ Completed</div>
                        )}
                        {step.status === 'current' && (
                          <div className="text-blue-400 text-sm font-medium">🔄 In Progress</div>
                        )}
                        {step.status === 'upcoming' && (
                          <div className="text-gray-400 text-sm font-medium">⏳ Upcoming</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              This roadmap is designed to take you from beginner to job-ready professional. Each step builds upon the previous one, ensuring steady progress toward your career goals.
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