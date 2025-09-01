import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

// Updated Login Component with dark theme colors
const LoginPage = ({ onSwitchToSignup }: { onSwitchToSignup: () => void }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Login</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-12 py-2 bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>
        <button
          onClick={() => console.log('Login submitted', { email, password })}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-300">
          Don't have an account?{' '}
          <button
            onClick={onSwitchToSignup}
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;