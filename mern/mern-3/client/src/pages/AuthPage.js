import React, { useState, useEffect, useContext } from 'react';

import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContext';

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "", password: ""
  });

  useEffect(() => {
    message(error);
    clearError(null);
    window.M.updateTextFields();
  }, [error, message, clearError]);

  const handleChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleLogin = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      message(data.message);
      auth.login(data.token, data.userId);

    } catch (err) { }
  };

  const handleRegister = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      message(data.message);

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
                  value={form.email}
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
                  value={form.password}
                  onChange={handleChange}
                />
                <label htmlFor="password">First Name</label>
              </div>
            </div>

          </div>
          <div className="card-action">
            <button
              className="btn yellow darken-4"
              onClick={handleLogin}
              disabled={loading}
            >
              Enter
            </button>
            <button
              className="btn green lighten-1"
              onClick={handleRegister}
              disabled={loading}
            >Registration</button>
          </div>
        </div>
      </div>
    </div>
  );
};