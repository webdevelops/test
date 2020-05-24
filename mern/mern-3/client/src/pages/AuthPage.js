import React, { useState } from 'react';
import { useHttp } from '../hooks/http.hook';

export function AuthPage() {
  const { request, loading, error } = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const handleRegister = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', form);
      console.log("handleRegister -> data", data)

    } catch (err) { }
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <div>
              <div className="input-field">
                <input
                  placeholder="Enter email"
                  id="email"
                  type="text"
                  name="email"
                  className="yellow-input"
                  onChange={handleChange}
                />
                <label htmlFor="first_name">Email</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Enter password"
                  id="password"
                  type="password"
                  name="password"
                  className="yellow-input"
                  onChange={handleChange}
                />
                <label htmlFor="first_name">Email</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn yellow darken-4"
              style={{ marginRight: 10 }}
              disabled={loading}
            >
              Enter
            </button>
            <button
              className="btn grey lighten-1 black-text"
              onClick={handleRegister}
              disabled={loading}
            >
              Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}