import React from 'react';

export const AuthPage = () => {
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Shorten link</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>

            <div>
              <div className="input-field">
                <input
                  placeholder="Enter your email"
                  id="email"
                  type="email"
                  className="yellow-input"
                />
                  <label htmlFor="email">First Name</label>
              </div>
            </div>

            <div>
              <div className="input-field">
                <input
                  placeholder="Enter your password"
                  id="password"
                  type="password"
                  className="yellow-input"
                />
                  <label htmlFor="password">First Name</label>
              </div>
            </div>

          </div>
          <div className="card-action">
            <button className="btn yellow darken-4" style={{marginRight: 10}}>Enter</button>
            <button className="btn grey lighten-1 text-black">Registration</button>
          </div>
        </div>
      </div>
    </div>
  );
};