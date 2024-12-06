import { useState } from "react";

function Signup() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSignup = () => {
    const { username, email, password } = userData;

    if (username.trim() === "") {
      alert("Please enter your username");
      return;
    }

    if (email.trim() === "") {
      alert("Please enter your email");
      return;
    }

    if (password.trim() === "") {
      alert("Please enter your password");
      return;
    }

    console.log("Signup Successful", userData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Username:
          </label>
          <input
            value={userData.username}
            onChange={handleChange}
            type="text"
            name="username"
            placeholder="Enter your Username"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email:</label>
          <input
            value={userData.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter your Email"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Password:
          </label>
          <input
            value={userData.password}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter your Password"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <button
          onClick={handleSignup}
          className="w-full py-2 px-4 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 transition duration-300"
        >
          Sign Up
        </button>
        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Signup />
    </div>
  );
}

export default App;
