import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/login/', {
          username,
          password
        });
        console.log(response.data);
        // Handle successful login, e.g., store user token and redirect to home page
      } catch (error) {
        // console.error('Login failed:', error.response.data);
        // Handle login error, e.g., display an error message
      }
    };
  
    return (
      <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
  <h2 className="text-2xl font-semibold mb-4">Login</h2>
  <form>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600">Username:</label>
      <input
        type="text"
        className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600">Password:</label>
      <input
        type="password"
        className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <button
      type="button"
      className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
      onClick={handleLogin}
    >
      Login
    </button>
  </form>
</div>

    );
};

export default LoginPage;