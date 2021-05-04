/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from 'react';

const Navbar = (props) => {
  return (
    <div className="nav-container">
      <div className="logo">
        <a href="/"><h1 className="logo">Always Italy</h1></a>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contactus">Contact us</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
