import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = event => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };

  return (
    <nav>
      <div className="nav-wrapper blue darken-1">
        <span href="/" className="brand-logo">Shorten Links</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/create">Craete</NavLink></li>
          <li><NavLink to="/link">Links</NavLink></li>
          <li><a href="/" onClick={handleLogout}>Exit</a></li>
        </ul>
      </div>
    </nav>
  );
};