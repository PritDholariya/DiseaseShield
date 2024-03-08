import React, { useState } from 'react';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';


const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [profileimage, setProfileimage] = useState('');
  const navigate = useNavigate();

  const handleImageChange = async (e) => {
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
      navigate('/login'); 

      // Handle successful signup, e.g., redirect to login page
    } catch (error) {
      console.error('Signup failed:', error.response.data);
      // Handle signup error, e.g., display an error message
    }
  };

  return (
    // <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
    //   <h2 className="text-2xl font-semibold mb-4">Signup</h2>
    //   <form>
    //     <div className="mb-4">
    //       <label className="block text-sm font-medium text-gray-600">Username:</label>
    //       <input
    //         type="text"
    //         className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-sm font-medium text-gray-600">Password:</label>
    //       <input
    //         type="password"
    //         className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-sm font-medium text-gray-600">Firstname:</label>
    //       <input
    //         type="text"
    //         className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
    //         value={firstname}
    //         onChange={(e) => setFirstname(e.target.value)}
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-sm font-medium text-gray-600">Lastname:</label>
    //       <input
    //         type="text"
    //         className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
    //         value={lastname}
    //         onChange={(e) => setLastname(e.target.value)}
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-sm font-medium text-gray-600">Email:</label>
    //       <input
    //         type="email"
    //         className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-sm font-medium text-gray-600">DOB:</label>
    //       <input
    //         type="date"
    //         className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
    //         value={dob}
    //         onChange={(e) => setDob(e.target.value)}
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-sm font-medium text-gray-600">Thumbnail:</label>
    //       <input
    //         type="file"
    //         className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
    //         onChange={handleImageChange}
    //       />
    //     </div>
    //     <button
    //       type="button"
    //       className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
    //       onClick={handleSignup}
    //     >
    //       Signup
    //     </button>
    //   </form>
    // </div>
    <section className="bg-transparent">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <span className="material-symbols-outlined mr-2">cardiology</span>
          DiseaseShield
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jack_Sophia" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
                <input type="text"  value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder='Jack' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
                <input type="text"  value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder='Sophia' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="abc@xyz.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DOB</label>
                <input type="date"  value={dob} onChange={(e) => setDob(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Pic</label>
                <input type="file" onChange={handleImageChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              
              <button type="button" onClick={handleSignup} name="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpPage

// value={username}
//         onChange={(e) => setUsername(e.target.value)}

//         onChange={handleImageChange}