import React from 'react';
import Route from 'react-router-dom';

function App() {
  return (
    <div className="NavBar">
      <Link to='/'>Feed</Link>
      <Link to='/signup'>Form</Link>
    </div>
  );
}

export default NavBar;
