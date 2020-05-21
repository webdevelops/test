import React from 'react';

export function AuthPage() {
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <div>

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
}