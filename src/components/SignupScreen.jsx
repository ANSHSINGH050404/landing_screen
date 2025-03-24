import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../Contexts/UserContext";

const SignupScreen = () => {
  const { email, setEmail, fullname, setFullname ,setBio,bio} = useContext(UserDataContext);
  const navigate = useNavigate();
  

  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [isAgency, setIsAgency] = useState("");
   // new state for radio selection

  const handleRadioChange = (value) => {
    setIsAgency(value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(email, password);
    // Navigate after processing form submission
    navigate("/account");

    setEmail(email);
    setCompanyname("");
    setFullname(fullname);
    setPassword("");
    setPhone("");
    setIsAgency("");
    setBio(bio)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white w-full max-w-md rounded-md shadow-sm border border-gray-100 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Create your
          <br />
          PopX account
        </h1>

        <form onSubmit={submitHandler}>
          <div className="space-y-4">
            <div>
              <label className="block text-purple-500 text-sm mb-1">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-purple-500 text-sm mb-1">
                Phone number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <label className="block text-purple-500 text-sm mb-1">
                Email address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="emailAddress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your email address"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Create a password"
                required
              />
            </div>

            <div>
              <label className="block text-purple-500 text-sm mb-1">
                Company name
              </label>
              <input
                type="text"
                name="companyName"
                value={companyname}
                onChange={(e) => setCompanyname(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter company name (optional)"
              />
            </div>
            <div>
              <label className="block text-purple-500 text-sm mb-1">
                Bio
              </label>
              <input
                type="text"
                name="companyName"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter company name (optional)"
              />
            </div>

            <div className="mt-4">
              <p className="text-gray-700 mb-2">
                Are you an Agency?<span className="text-red-500">*</span>
              </p>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <div className="relative">
                    <input
                      type="radio"
                      name="isAgency"
                      checked={isAgency === "Yes"}
                      onChange={() => handleRadioChange("Yes")}
                      className="opacity-0 absolute h-5 w-5"
                      required
                    />
                    <div
                      className={`border-2 rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
                        isAgency === "Yes" ? "border-purple-600" : "border-gray-300"
                      }`}
                    >
                      {isAgency === "Yes" && (
                        <div className="bg-purple-600 rounded-full w-3 h-3"></div>
                      )}
                    </div>
                  </div>
                  <span className="ml-2">Yes</span>
                </label>

                <label className="flex items-center">
                  <div className="relative">
                    <input
                      type="radio"
                      name="isAgency"
                      checked={isAgency === "No"}
                      onChange={() => handleRadioChange("No")}
                      className="opacity-0 absolute h-5 w-5"
                    />
                    <div
                      className={`border-2 rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
                        isAgency === "No" ? "border-purple-600" : "border-gray-300"
                      }`}
                    >
                      {isAgency === "No" && (
                        <div className="bg-purple-600 rounded-full w-3 h-3"></div>
                      )}
                    </div>
                  </div>
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupScreen;