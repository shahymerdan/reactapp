import React from 'react';
import { Nav, NavLink, NavIcon, NavIcon2, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'> </NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
        <NavIcon2>
          logo 
        </NavIcon2>
      </Nav>
    </>
  );
};

export default Navbar;
