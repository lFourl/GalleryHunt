import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/mountain">Mountain</NavLink></li>
        <li><NavLink to="/ducati">Ducati</NavLink></li>
        <li><NavLink to="/rain">Rain</NavLink></li>
        <li><NavLink to="/food">Food</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
