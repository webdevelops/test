import React, { useState } from 'react';

import { useHttp } from '../hooks/http.hook';

export const CreatePage = () => {
  const { request } = useHttp();
  const [link, setLink] = useState('');

  const handleKeyPress = async event => {
    if (event.key === 'Enter') {
      try {
        const data = await request('/api/link/generate', 'POST', { from: link });
        console.log("CreatePage -> data", data)

      } catch (err) { }
    }
  };

  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{ paddingTop: "2rem" }}>
        <div className="input-field">
          <input
            type="text"
            placeholder="Enter link"
            id="link"
            value={link}
            onChange={e => setLink(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <label htmlFor="link">Enter link</label>
        </div>
      </div>
    </div>
  );
};