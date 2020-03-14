import React, { useState, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';

export const AuthPage = () => {
  const { loading, error, request, clearError } = useHttp();
  const message = useMessage();

  const [form, setForm] = useState({
    email: "", password: ""
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const handleChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleRegistration = async () => {
    // console.log("handleRegistration -> data")
    // console.log("handleRegistration -> form", form)
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      message(data.message)
      // console.log("handleRegistration -> data", data)

    } catch (err) { }
  };

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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
                <label htmlFor="password">First Name</label>
              </div>

            </div>
          </div>
          <div className="card-action">
            <button className="btn yellow darken-4" style={{ marginRight: 10 }}>Enter</button>
            <button
              className="btn grey lighten-1 black-text"
              onClick={handleRegistration}
              disabled={loading}
            >
              Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};