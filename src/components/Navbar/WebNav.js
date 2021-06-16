/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import './web-nav.css';

const Navbar = () => {
  
  useEffect(() => {
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]

    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active')
    })
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/"><h1 className="logo">Always Italy</h1></a>
      </div>
      <a href="#" className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="navbar-links">
        <ul>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contactus">Contact us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
