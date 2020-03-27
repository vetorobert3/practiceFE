import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
      <Link to='/'>Feed</Link>
      <Link to='/signup'>Form</Link>
    </div>
  );
}

export default NavBar;
