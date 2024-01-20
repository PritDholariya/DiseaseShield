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
      console.log(profileimage)
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
      <div>
        <h2>Signup</h2>
        <form>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <label>Firstname:</label>
          <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
          <br />
          <label>Lastname:</label>
          <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
          <br />
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <label>DOB:</label>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
          <br />
          <label>Thumbnail:</label>
          <input type="file"  onChange={handleImageChange} />
          <br />
          <button type="button" value={profileimage} onClick={handleSignup}>
            Signup
          </button>
        </form>
      </div>
    );
}

export default SignUpPage