import React from 'react';

export const AuthPage = () => {
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Auth Page</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <div>

              <div className="input-field">
                <input
                  placeholder="Enter email"
                  id="email"
                  type="email"
                  name="email"
                  className="yellow-input"
                />
                <label htmlFor="email">First Name</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Enter pasword"
                  id="password"
                  type="password"
                  name="password"
                  className="yellow-input"
                />
                <label htmlFor="password">First Name</label>
              </div>

            </div>
          </div>
          <div className="card-action">
            <button className="btn yellow darken-4" style={{ marginRight: 10 }}>Enter</button>
            <button className="btn grey lighten-1 black-text">Registration</button>
          </div>
        </div>
      </div>
    </div>
  );
};