import React, { useState, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';

export const AuthPage = () => {
  const message = useMessage();
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = useState({
    email: '', password: ''
  });

  useEffect(() => {
    message(error);
    clearError(null);
  }, [error]);

 

  const handleChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleRegistration = async () => {
    try {
      // const data = await request('http://localhost:5000/api/auth/register', 'POST', { ...form });
      const data = await request('/api/auth/register', 'POST', { ...form });
      console.log("handleRegistration -> data", data)

    } catch (err) { }
  };

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
                />
                <label htmlFor="password">First Name</label>
              </div>
            </div>

          </div>
          <div className="card-action">
            <button className="btn yellow darken-4" style={{ marginRight: 10 }}>Enter</button>
            <button
              className="btn grey lighten-1 text-black"
              disabled={loading}
              onClick={handleRegistration}
            >
              Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};