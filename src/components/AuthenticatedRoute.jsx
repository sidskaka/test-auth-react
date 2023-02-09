import React, { useContext } from 'react';
import Auth from '../contexts/Auth';
import { Navigate } from 'react-router-dom';

const AuthenticatedRoute = ({ children }) => {
   console.log(children);
   const { isAuthenticated } = useContext(Auth);

   if (!isAuthenticated) {
      return <Navigate to='/login' />
   }

   return children;
}

export default AuthenticatedRoute;