import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />}>
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
