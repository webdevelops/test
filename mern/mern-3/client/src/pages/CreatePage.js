import React, { useState, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';

export const CreatePage = () => {
  const { request } = useHttp();
  const [link, setLink] = useState('');

  useEffect(() => {
    window.M.updateTextFields();
  });

  const handlePressKey = async event => {
    if (event.key === 'Enter') {
      try {
        const data = await request('/api/auth/link/generate', 'POST', { from: link });
        console.log("CreatePage -> data", data)

      } catch (err) { }
    }
  };

  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{ paddingTop: "2rem" }}>
        <div className="input-field">
          <input
            placeholder="Enter link"
            type="text"
            id="link"
            onChange={e => setLink(e.target.value)}
            onKeyPress={handlePressKey}
          />
          <label htmlFor="link">Enter link</label>
        </div>
      </div>
    </div>
  );
};