import React from 'react'
import { Link,Navigate } from 'react-router-dom'

const LoginScreen = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
    <div className="bg-white w-full max-w-md rounded-md shadow-sm border border-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Create your<br />
        PopX account
      </h1>

      <form >
      <div className="space-y-4">
                <div>
                  <label className="block text-purple-500 text-sm mb-1">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your Email"
                    required
                  />
                </div>


                <div>
                  <label className="block text-purple-500 text-sm mb-1">
                    Password<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Create a password"
                    required
                  />
                </div>

    
                </div>
                <div className="mt-8">
                <button
                onClick={() => <Navigate to="/account" />}
                  type="submit"
                  className="w-full py-3 bg-[#eee] text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
                >
                  Login
                </button>
              </div>
      </form>
      </div>
      </div>
        
  )
}

export default LoginScreen