import React from 'react';

export default ({ posts }) => {
  if (!posts.length) {
    return (
      <div>
        <p className="">No posts yet.</p>
        <button className="btn btn-primary">Loading</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Featched Posts</h1>
    </div>
  );
}