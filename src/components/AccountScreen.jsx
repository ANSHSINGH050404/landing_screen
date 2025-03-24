import React, { useContext } from 'react'
import { useState } from 'react';
import { Camera } from 'lucide-react';
import { UserDataContext } from '../Contexts/UserContext';
export const AccountScreen = () => {

  const {email,fullname,bio}=useContext(UserDataContext)

    const [userData, setUserData] = useState({
        fullName: fullname,
        email: email,
        bio: bio,
      });
  

    
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
          <div className="bg-white w-full max-w-md rounded-md shadow-sm border border-gray-100">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-xl font-medium text-gray-700">Account Settings</h1>
            </div>
            
            {/* Profile section */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                {/* Profile image with camera icon */}
                <div className="relative mr-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden relative">
                    <img 
                      src="/api/placeholder/64/64" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-1">
                    <Camera size={14} color="white" />
                  </div>
                </div>
                
                {/* User info */}
                <div>
                  <h2 className="font-medium text-gray-800">{userData.fullName}</h2>
                  <p className="text-gray-600 text-sm">{userData.email}</p>
                </div>
              </div>
              
              {/* Bio text */}
              <div className="mt-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {userData.bio}
                </p>
              </div>
            </div>
            
            {/* Empty space for additional settings */}
            <div className="h-64"></div>
          </div>
        </div>
      );
    };

    
    export default AccountScreen;   
