import React from 'react';

export const CreatePage = () => {
  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{ paddingTop: "2rem" }}>
        <div className="input-field">
          <input
            type="text"
            id="link"
            palceholder="Enter link"
          />
          <label htmlFor="link">E</label>
        </div>
      </div>
    </div>
  );
};