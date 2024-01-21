import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import LoggedHome from './pages/LoggedHome';

function App() {

  return (
    <div className='App w-screen h-screen'>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout/>} />
          <Route path="/loggedhome" element={<LoggedHome/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
