import React, { useState } from "react";
import { UserCircle, X, Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LoginPage from "./Login";
import SignupPage from "./Signup";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
  };

  const switchToSignup = () => {
    setActiveTab('signup');
  };

  const switchToLogin = () => {
    setActiveTab('login');
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full z-50 flex p-6 items-center">
        {/* Logo */}
        <div className="relative min-w-[15%]">
          <h2 className="text-white text-4xl font-bold drop-shadow-lg">
            <a href="http://localhost:5174/">NEXTskill</a>
          </h2>
        </div>

        {/* Buttons */}
        <div className="w-full justify-center flex">
          <div className="min-w-[60%] flex justify-center space-x-6 text-white text-md font-border bg-gray-900/50 border border-gray-700/50 backdrop-blur-md transition-all duration-300 shadow-md rounded-xl m-auto">
            <button
              onClick={() => navigate("/")}
              className="px-8 py-3 rounded-xl"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/monitor")}
              className="px-8 py-3 rounded-xl"
            >
              Skills Monitor
            </button>
            <button
              onClick={() => navigate("/roadmap")}
              className="px-8 py-3 rounded-xl"
            >
              Career Roadmap
            </button>
            <button
              onClick={() => navigate("/books")}
              className="px-8 py-3 rounded-xl"
            >
              Course Library
            </button>
            <button
              onClick={() => navigate("/quiz")}
              className="px-8 py-3 rounded-xl"
            >
              Assessments
            </button>
          </div>
        </div>

        {/* Profile */}
        <div className="min-w-[15%] relative flex">
          <button 
            onClick={togglePanel}
            className="text-white ml-auto hover:text-primary transition-colors duration-200"
          >
            <UserCircle className="w-12 h-12" />
          </button>
        </div>
      </div>

      {/* Glassmorphism Overlay for entire screen */}
      {isPanelOpen && (
        <div
          className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40"
          onClick={closePanel}
        />
      )}

      {/* Side Panel with Glassmorphism */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-gray-900/50 border border-gray-700/50 backdrop-blur-md shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isPanelOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
          <div className="flex space-x-4">
            <button
              onClick={switchToLogin}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'login'
                  ? 'bg-blue-600/80 text-white backdrop-blur-sm'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Login
            </button>
            <button
              onClick={switchToSignup}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'signup'
                  ? 'bg-blue-600/80 text-white backdrop-blur-sm'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Sign Up
            </button>
          </div>
          <button
            onClick={closePanel}
            className="p-2 hover:bg-gray-700/50 rounded-full transition-colors"
            aria-label="Close panel"
          >
            <X className="h-5 w-5 text-gray-300 hover:text-white" />
          </button>
        </div>

        {/* Panel Content */}
        <div className="h-full overflow-y-auto">
          {activeTab === 'login' ? (
            <LoginPage onSwitchToSignup={switchToSignup} />
          ) : (
            <SignupPage onSwitchToLogin={switchToLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;