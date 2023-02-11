import React, { useContext } from 'react';
import Auth from '../contexts/Auth';
import { logout } from '../services/AuthApi';

const NavBar = () => {
   const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

   const handleLogout = () => {
      logout();
      setIsAuthenticated(false);
   }
   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
               <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                     <a className="nav-link active" href="#">Home
                        <span className="visually-hidden">(current)</span>
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">Features</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">Pricing</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                     <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                     </div>
                  </li>
               </ul>
               {
                  (!isAuthenticated && (
                     <span></span>
                  )) || (
                     <button onClick={handleLogout}>Déconnexion</button>
                  )
               }
            </div>
         </div>
      </nav>
   )
}

export default NavBar;