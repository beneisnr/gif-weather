import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav id="nav">
      <NavLink exact to="/">
        Gif Weather
      </NavLink>
    </nav>
  );
};

export default Nav;
