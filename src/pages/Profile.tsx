import { useState } from 'react';
import { User, X, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import LoginPage from '../component/Login';
import SignupPage from '../component/Signup';;

// Main Profile Component
const Profile = () => {
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
    <div className="fixed top-4 right-4 z-30">
      {/* Profile Icon */}
      <button
        onClick={togglePanel}
        className="flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Open profile panel"
      >
        <User className="h-6 w-6 text-gray-600" />
      </button>

      {/* Overlay */}
      {isPanelOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closePanel}
        />
      )}

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isPanelOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex space-x-4">
            <button
              onClick={switchToLogin}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'login'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Login
            </button>
            <button
              onClick={switchToSignup}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'signup'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Sign Up
            </button>
          </div>
          <button
            onClick={closePanel}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close panel"
          >
            <X className="h-5 w-5 text-gray-500" />
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

export default Profile;