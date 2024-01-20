import React, { useState } from 'react';
import axios from 'axios';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [profileimage, setProfileimage] = useState('');

    const handleImageChange = async(e) => {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setProfileimage(reader.result);
      }
    }
  
    const handleSignup = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/signup/', {
          username, password, firstname, lastname, email, dob, profileimage
        });
        console.log(response.data);
        // Handle successful signup, e.g., redirect to login page
      } catch (error) {
        console.error('Signup failed:', error.response.data);
        // Handle signup error, e.g., display an error message
      }
    };
  
    return (
      <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
  <h2 className="text-2xl font-semibold mb-4">Signup</h2>
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
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600">Firstname:</label>
      <input
        type="text"
        className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600">Lastname:</label>
      <input
        type="text"
        className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600">Email:</label>
      <input
        type="email"
        className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600">DOB:</label>
      <input
        type="date"
        className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600">Thumbnail:</label>
      <input
        type="file"
        className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
        onChange={handleImageChange}
      />
    </div>
    <button
      type="button"
      className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
      onClick={handleSignup}
    >
      Signup
    </button>
  </form>
</div>

    );
}

export default SignUpPage