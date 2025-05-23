import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import News from './pages/News';
import Profile from './pages/Profile';
import Navigation from './components/Navigation';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // Проверяем авторизацию при загрузке
    const authStatus = localStorage.getItem('isAuth') === 'true';
    setIsAuth(authStatus);
  }, []);

  return (
    <Router>
      <Navigation isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/news" element={<News isAuth={isAuth} />} />
        <Route 
          path="/profile" 
          element={isAuth ? <Profile /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;