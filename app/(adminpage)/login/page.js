"use client";
import crypto from "crypto";
import { useState } from "react";
import Router from "next/navigation"; 
const Login = () => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
async function handleSubmit(event) {
  event.preventDefault();

  // Reset error state
  setError("");

  // Validation
  if (!name || !email || !phone || !password) {
    setError("All fields are required");
    return;
  }
  if (password.length < 3) {
    setError("Password must be at least 3 characters long");
    return;
  }
  if (password.length > 20) {
    setError("Password must be at most 20 characters long");
    return;
  }
  if (password.includes(" ")) {
    setError("Password must not contain spaces");
    return;
  }
  if (name.length < 3) {
    setError("Name must be at least 3 characters long");
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    setError("Email is invalid");
    return;
  }
  if (!/^\d{10}$/.test(phone)) {
    setError("Phone number must be 10 digits");
    return;
  }

  // If all validations pass
  const userData = {
    name,
    password,
    email,
    phone,
  };
  const token = crypto.createHash("sha256").update(password).digest("hex");

  // Store the token in localStorage
  localStorage.setItem("accessToken", token);
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to login. Please try again.");
    }
     const data = await response.json();
     console.log("Login successful:", data);

   
    // Handle successful login (e.g., redirect or show success message)
  } catch (err) {
    console.error(err.message);
    setError(err.message);
  }
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        {/* Display Error Message */}
        {error && (
          <div className="mb-4 text-red-500 text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password" // Changed to "password" for security
              id="password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

       
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
