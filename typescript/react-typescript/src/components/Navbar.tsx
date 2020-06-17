import React from 'react';

// export function Navbar() {
//   return null;
// }

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper #4db6ac teal lighten-2 px1">
      <a href="/" className="brand-logo">React + TypeScript</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">To-Do list </a></li>
        <li><a href="/">Information</a></li>
      </ul>
    </div>
  </nav>
);