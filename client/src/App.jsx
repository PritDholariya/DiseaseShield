import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import LoggedHome from './pages/LoggedHome';
import { UserContextProvider } from './UserContext';
import DiseaseSpecialist from './pages/DiseaseSpecialist';
import DiabetesPage from './Disease/DiabetesPage';
import ParkinsonPage from './Disease/ParkinsonPage';
import HeartattackPage from './Disease/HeartattackPage';
import SymtomsPage from './Disease/SymtomsPage';
import HistoryPage from './pages/HistoryPage';
import { useState,useEffect } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('token') !== null
  );

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem('token') !== null);
  }, []);

  return (
    <div className='App w-screen'>
      <BrowserRouter>
        {isAuthenticated ? (
          <UserContextProvider>
            <Routes>
              <Route path="/" element={<LoggedHome />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/disease" element={<DiseaseSpecialist />} />
              <Route path="/symtoms" element={<SymtomsPage />} />
              <Route path="/disease/diabetes" element={<DiabetesPage />} />
              <Route path="/disease/parkinson" element={<ParkinsonPage />} />
              <Route path="/disease/heartattack" element={<HeartattackPage />} />
              <Route path="*" element={<LoginPage />} />
            </Routes>
          </UserContextProvider>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<LoginPage />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  )
}

export default App;
