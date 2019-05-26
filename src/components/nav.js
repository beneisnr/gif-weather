import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            🌤
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
