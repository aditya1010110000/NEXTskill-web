import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Monitor, BookOpen, Map, Brain, ArrowRight } from "lucide-react";
import backimge from "../assets/1.jpg";
import backimge2 from "../assets/1 - Copy.jpg"; // Add the profile logo image
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const LandingPage: React.FC = () => {

  return (
    <div className="h-screen relative flex flex-col">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 mx"
          style={{ backgroundImage: `url(${backimge2})` }}
        ></div>
      </div>

      <Navbar />

      {/* Main Content */}
      <div className="relative z-8 container mx-auto my-36 px-6 py flex-grow">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Personalised AI Guidance
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover your potential, assess your skills, and accelerate your
            career with AI-powered insights and personalized learning paths.
          </p>
        </header>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Link to="/monitor" className="group">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 h-full hover:border-cyan-500/50 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Skills Monitor
              </h3>
              <p className="text-gray-400 mb-4">
                Track your skills and take aptitude assessments to discover your
                strengths.
              </p>
              <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>

          <Link to="/books" className="group">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 h-full hover:border-green-500/50 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Course Library
              </h3>
              <p className="text-gray-400 mb-4">
                Explore curated courses and learning resources tailored to your
                career goals.
              </p>
              <ArrowRight className="w-5 h-5 text-green-400 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>

          <Link to="/roadmap" className="group">
            <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 h-full hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                <Map className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Career Roadmap
              </h3>
              <p className="text-gray-400 mb-4">
                Get a personalized step-by-step path to achieve your career
                objectives.
              </p>
              <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>

          <Link to="/quiz" className="group">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 h-full hover:border-orange-500/50 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Assessments
              </h3>
              <p className="text-gray-400 mb-4">
                Take comprehensive quizzes to evaluate your knowledge and
                aptitude.
              </p>
              <ArrowRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">10K+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
            <div className="text-gray-400">Career Paths</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
        </div>

        <div className="w-full h-0 border border-white border-3 mt-14"></div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
