import React from 'react';
// import { Link } from "react-router-dom";  // only for local Links (into SPA) 

export const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Link</h2>

      <p>Your link:
        <a href={link.to} target="_blank" rel="noopener noreferrer"> {link.to}</a>
        {/* <Link to={link.to}> {link.to}</Link>   // only for local Links (into SPA) */}
      </p>

      <p>From:
        <a href={link.from} target="_blank" rel="noopener noreferrer"> {link.from}</a>
        {/* <Link to={link.to}> {link.to}</Link>   // only for local Links (into SPA) */}
      </p>

      <p>Number of links:
        <strong>  {link.clicks}</strong>
      </p>

      <p>Date of creation:
        <strong> {new Date(link.date).toLocaleDateString()}</strong>
      </p> 
    </>
  );
};