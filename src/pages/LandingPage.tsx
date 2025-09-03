import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Monitor, BookOpen, Map, Brain, ArrowRight } from "lucide-react";
import backimge2 from "../assets/1 - Copy.jpg";
// import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const LandingPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate zoom based on scroll position
  const zoomFactor = 1 + scrollY * 0.0005;

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Grid Background with Parallax Zoom */}
      <div className="fixed inset-0 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-transform duration-75 ease-out"
          style={{
            backgroundImage: `url(${backimge2})`,
            transform: `scale(${zoomFactor})`,
            transformOrigin: "center center",
          }}
        />
      </div>

      <Navbar />

      {/* Main Content - Split Layout */}
      <div className="relative z-10 container mx-auto pt-10 pb-20 px-6 flex-grow">
        <div className="flex items-center justify-between h-full max-w-6xl mx-auto min-h-[70vh]">
          {/* Left Side - Text Content */}
          <div className="w-1/2 pr-12">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Personalised AI Guidance
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover your potential, assess your skills, and accelerate your
              career with AI-powered insights and personalized learning paths.
            </p>
          </div>

          {/* Right Side - Navigation Cards in 2x2 Grid */}
          <div className="w-1/2 pl-12">
            <div className="grid grid-cols-2 gap-4">
              {/* Skills Monitor */}
              <Link to="/monitor" className="group">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 h-full hover:border-cyan-500/50 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                    <Monitor className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Skills Monitor
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Track your skills and take aptitude assessments.
                  </p>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>

              {/* Course Library */}
              <Link to="/books" className="group">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 h-full hover:border-green-500/50 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Course Library
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Explore curated courses and learning resources.
                  </p>
                  <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>

              {/* Career Roadmap */}
              <Link to="/roadmap" className="group">
                <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-4 h-full hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                    <Map className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Career Roadmap
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Get a personalized step-by-step career path.
                  </p>
                  <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>

              {/* Assessments */}
              <Link to="/quiz" className="group">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 h-full hover:border-orange-500/50 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Assessments
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Take comprehensive quizzes to evaluate your knowledge.
                  </p>
                  <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
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

        <div className="w-full border-t-2 border-white mt-10"></div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;