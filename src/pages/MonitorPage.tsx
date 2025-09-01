import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, X, Brain, TrendingUp, ArrowLeft, Star } from 'lucide-react';

const MonitorPage: React.FC = () => {
  const [skills, setSkills] = useState<string[]>(['JavaScript', 'React']);
  const [newSkill, setNewSkill] = useState('');
  const [showAdvice, setShowAdvice] = useState(false);

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const generateCareerAdvice = () => {
    setShowAdvice(true);
  };

  const getCareerAdvice = () => {
    if (skills.length === 0) return "Add some skills to get personalized career advice!";
    
    const hasWebSkills = skills.some(skill => 
      ['javascript', 'react', 'html', 'css', 'vue', 'angular'].includes(skill.toLowerCase())
    );
    const hasDataSkills = skills.some(skill => 
      ['python', 'sql', 'analytics', 'data', 'machine learning'].includes(skill.toLowerCase())
    );
    
    if (hasWebSkills) {
      return "Based on your web development skills, consider roles like Frontend Developer, Full Stack Developer, or UI/UX Engineer. The demand for these roles is growing rapidly with average salaries ranging from $70K-$150K.";
    } else if (hasDataSkills) {
      return "Your data-related skills suggest careers in Data Science, Analytics, or Machine Learning Engineering. These high-demand fields offer salaries from $80K-$180K with excellent growth prospects.";
    } else {
      return "Your unique skill combination opens doors to various technology roles. Consider exploring specialized positions that leverage your specific expertise for optimal career growth.";
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills Monitor
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills Section */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400" />
              Your Skills
            </h2>
            
            {/* Add Skill */}
            <div className="flex gap-2 mb-6">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                placeholder="Add a new skill..."
                className="flex-1 bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50"
              />
              <button
                onClick={addSkill}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>

            {/* Skills List */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600 rounded-full px-4 py-2 flex items-center gap-2 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <span className="text-sm text-white">{skill}</span>
                  <button
                    onClick={() => removeSkill(skill)}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {skills.length === 0 && (
              <p className="text-gray-400 text-center py-8">No skills added yet. Start by adding your first skill!</p>
            )}
          </div>

          {/* Quiz Section */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
              <Brain className="w-6 h-6 text-purple-400" />
              Aptitude Assessment
            </h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Take our comprehensive aptitude quiz to discover hidden strengths and get personalized career recommendations based on your cognitive abilities.
            </p>

            <div className="space-y-4">
              <Link to="/quiz">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2 hover:scale-105">
                  <Brain className="w-5 h-5" />
                  Take Aptitude Quiz
                </button>
              </Link>

              <button
                onClick={generateCareerAdvice}
                className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-cyan-500/50 px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Skip Quiz - Generate Advice
              </button>
            </div>
          </div>
        </div>

        {/* Career Advice Section */}
        {showAdvice && (
          <div className="mt-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              Career Insights
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Personalized Advice</h3>
                <p className="text-gray-300 leading-relaxed">{getCareerAdvice()}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3">Future Job Prospects</h3>
                <div className="space-y-3">
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <div className="font-medium text-white">Tech Industry Growth</div>
                    <div className="text-sm text-gray-400">Expected 15% growth in next 5 years</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <div className="font-medium text-white">Remote Opportunities</div>
                    <div className="text-sm text-gray-400">70% of positions offer remote work</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <div className="font-medium text-white">Salary Trends</div>
                    <div className="text-sm text-gray-400">Average increase of 8% annually</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <Link to="/">
                <button className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-6 py-2 rounded-lg transition-all duration-300 flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MonitorPage;