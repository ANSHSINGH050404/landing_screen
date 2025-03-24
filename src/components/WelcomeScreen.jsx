import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

const WelcomeScreen = () => {

  const naviaget=useNavigate()
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white w-full max-w-md rounded-md shadow-sm border border-gray-100 overflow-hidden">
        {/* Empty space for image/logo area */}
        <div className="h-64 w-full bg-gray-100"></div>
        
        {/* Content area */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Welcome to PopX</h1>
          <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
          {/* Buttons */}
          <div className="space-y-3">
            <button 
            onClick={()=>naviaget('/signup')}
              className="w-full py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
            >
              Create Account
            </button>
            
            <button 
            onClick={()=>naviaget('/login')}
              className="w-full py-3 bg-purple-200 text-gray-700 font-medium rounded-md hover:bg-purple-300 transition-colors"
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;