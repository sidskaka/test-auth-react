import React, { useState } from 'react';
import Home from './components/Home';
import Connexion from './components/Connexion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { hasAuthenticated } from './services/AuthApi';
import Auth from './contexts/Auth';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  console.log(props);
  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }} >
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Connexion />} />
          <Route exact path='/home' element={<AuthenticatedRoute><Home /></AuthenticatedRoute>} />
        </Routes>
      </BrowserRouter>
    </Auth.Provider>
  );
}

export default App;
