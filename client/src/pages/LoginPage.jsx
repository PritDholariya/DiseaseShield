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
      <div>
        <h2>Login</h2>
        <form>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    );
};

export default LoginPage;