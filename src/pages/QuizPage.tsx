import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, ChevronRight, Award, RotateCcw } from 'lucide-react';
import { quizData } from '../assets/data/quizData';


interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  category: string;
}

const QuizPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const questions: Question[] = quizData;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        correct++;
      }
    });
    return correct;
  };

  const getScoreMessage = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) {
      return {
        title: "Excellent Performance!",
        message: "You have a strong foundation in technology concepts. Consider advanced roles in software development or technical leadership.",
        color: "text-green-400"
      };
    } else if (percentage >= 60) {
      return {
        title: "Good Knowledge Base",
        message: "You have solid understanding with room to grow. Focus on hands-on practice and specialized training.",
        color: "text-blue-400"
      };
    } else {
      return {
        title: "Building Foundation",
        message: "Great start! Consider beginning with fundamental courses to build a stronger knowledge base.",
        color: "text-orange-400"
      };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResult(false);
    setQuizStarted(true);
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-8 flex items-center justify-center min-h-screen">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 max-w-2xl w-full text-center">
            <div className="flex items-center gap-4 mb-6 justify-center">
              <Link to="/" className="text-orange-400 hover:text-orange-300 transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Aptitude Quiz
              </h1>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4">
              Ready to Discover Your Potential?
            </h2>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              This comprehensive aptitude quiz will assess your technical knowledge and problem-solving abilities. 
              It takes about 10 minutes to complete and provides personalized career recommendations.
            </p>

            <div className="bg-gray-800/50 rounded-lg p-4 mb-8">
              <h3 className="text-lg font-medium text-white mb-3">Quiz Overview:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-orange-400 font-semibold">{questions.length}</div>
                  <div className="text-gray-400">Questions</div>
                </div>
                <div className="text-center">
                  <div className="text-orange-400 font-semibold">~10 min</div>
                  <div className="text-gray-400">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-orange-400 font-semibold">Multiple Choice</div>
                  <div className="text-gray-400">Format</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setQuizStarted(true)}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-8 py-3 rounded-lg transition-all duration-300 font-semibold hover:scale-105 flex items-center gap-2 mx-auto"
            >
              Start Quiz
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const score = calculateScore();
    const result = getScoreMessage(score);

    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-8 flex items-center justify-center min-h-screen">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 max-w-2xl w-full text-center">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-3xl font-semibold text-white mb-4">
              Quiz Completed!
            </h2>

            <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
              <div className="text-4xl font-bold text-orange-400 mb-2">
                {score} / {questions.length}
              </div>
              <div className="text-gray-300">Questions Correct</div>
              <div className="text-2xl font-semibold text-white mt-2">
                {Math.round((score / questions.length) * 100)}% Score
              </div>
            </div>

            <div className="text-left mb-8">
              <h3 className={`text-xl font-semibold mb-3 ${result.color}`}>
                {result.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {result.message}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={resetQuiz}
                className="bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-orange-500/50 px-6 py-3 rounded-lg transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Retake Quiz
              </button>
              
              <Link to="/monitor" className="flex-1">
                <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-6 py-3 rounded-lg transition-all duration-300 font-semibold hover:scale-105">
                  View Career Advice
                </button>
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <Link to="/">
                <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 mx-auto">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-orange-400 hover:text-orange-300 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Aptitude Quiz
            </h1>
          </div>
          
          <div className="text-sm text-gray-400">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-orange-500 to-red-500 h-full transition-all duration-500 ease-out"
              style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="text-xs font-medium text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full">
                {questions[currentQuestion].category}
              </span>
            </div>

            {/* Question */}
            <h2 className="text-2xl font-semibold text-white mb-8 leading-relaxed">
              {questions[currentQuestion].question}
            </h2>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {questions[currentQuestion].options.map((option, index) => (
                <label
                  key={index}
                  className={`block bg-gray-800/50 border rounded-lg p-4 cursor-pointer transition-all duration-300 hover:bg-gray-700/50 ${
                    selectedAnswer === index
                      ? 'border-orange-500 bg-orange-500/10'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="answer"
                      value={index}
                      checked={selectedAnswer === index}
                      onChange={() => handleAnswerSelect(index)}
                      className="w-4 h-4 text-orange-500 border-gray-600 focus:ring-orange-500 focus:ring-offset-0 bg-gray-700"
                    />
                    <span className="text-white">{option}</span>
                  </div>
                </label>
              ))}
            </div>

            {/* Next Button */}
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-400">
                {selectedAnswer !== null ? "Answer selected" : "Please select an answer"}
              </div>
              
              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className={`px-6 py-3 rounded-lg transition-all duration-300 font-semibold flex items-center gap-2 ${
                  selectedAnswer !== null
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 hover:scale-105 text-white'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;