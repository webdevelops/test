import React, { useState } from 'react';

import { useHttp } from '../hooks/http.hook';

export const AuthPage = () => {
  const { loading, error, request } = useHttp();
  const [form, setForm] = useState({
    email: "", password: ""
  });

  const handleChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleRegister = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form }, {'Content-Type': 'application/json'});
      console.log("handleRegister -> data", data)

    } catch (err) { }
  };

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Shorten Link</h1>
        <div className="card blue darken-3">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>

            <div>
              <div className="input-field">
                <input
                  placeholder="Enter your email"
                  id="email"
                  type="email"
                  name="email"
                  className="yellow-input"
                  onChange={handleChange}
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
                  name="password"
                  className="yellow-input"
                  onChange={handleChange}
                  disabled={loading}
                />
                <label htmlFor="password">First Name</label>
              </div>
            </div>

          </div>
          <div className="card-action">
            <button className="btn yellow darken-4">Enter</button>
            <button
              className="btn green lighten-1"
              onClick={handleRegister}
            >Registration</button>
          </div>
        </div>
      </div>
    </div>
  );
};