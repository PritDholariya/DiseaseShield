import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
      try {
        setLoading(true)
        const response = await axios.post('http://localhost:8000/api/login/', {
          username,
          password
        });
<<<<<<< HEAD
        console.log(response.data);
        
=======
        setLoading(false);
        if (response.data?.status == "success") {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.userInfo));
          toast.success("Login successful",  {position: toast.POSITION.TOP_RIGHT})
          navigate("/")
        } else {
          toast.error(response.data?.message, {position: toast.POSITION.BOTTOM_LEFT})
        }
>>>>>>> a86b7d2fecfa4ca23b7eb9a36cdd7377fc0d4aeb
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
            isLoading={loading}
            isDisabled={loading}
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