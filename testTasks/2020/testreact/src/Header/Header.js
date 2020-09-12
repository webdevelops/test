import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';
import image from '../assets/logo.svg';

export const Header = () => {
  return (
    <nav>
      <div className="header">
        <NavLink to="/">
          <img src={image} alt="logo"/>
        </NavLink>

        <ul className="navbar">
          <li><NavLink to="/about">About me</NavLink></li>
          <li><NavLink to="/relationships">Relationships</NavLink></li>
          <li><NavLink to="/requirements">Requirenments</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}