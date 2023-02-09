import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../contexts/Auth';
import Form from './Form';
import NavBar from './NavBar';

const Connexion = () => {
   const { isAuthenticated } = useContext(Auth);
   const navigate = useNavigate();
   useEffect(() => {
      if (isAuthenticated) {
         navigate('/home', { replace: true });
      }
   }, [navigate, isAuthenticated])
   return <div>
      <NavBar />
      <h1>Connexion</h1>
      <Form />
   </div>;
}

export default Connexion;