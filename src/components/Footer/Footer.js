/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { MdMailOutline, MdCall } from 'react-icons/md';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-section footer-contact">
          <h4>Contact us</h4>
          <div className="contacts">
            <MdCall style={{paddingRight: "10px"}} />
            <span >00 316 15 53 52 36</span>
          </div>
          <div className="contacts">
            <MdMailOutline style={{paddingRight: "10px"}}/>
            <span>info@alwaysitaly.com</span>
          </div>
        </div>
        <div className="footer-section footer-shop">
          <h4>Shop</h4>
          <ul>
            <li>
              <a href="/shop/wool">Wool</a>
            </li>
            <li>
              <a href="/shop/yarn">Yarn</a>
            </li>
            <li>
              <a href="/shop/acrylic">Acrylic</a>
            </li>
            <li>
              <a href="/shop/accessories">Accessories</a>
            </li>
          </ul>
        </div>
        <div className="footer-section footer-disclaimer">
          <h4>Disclaimer</h4>
          <p>
            The information contained in this website is for general
            information purposes only. We endeavour to keep the information up
            to date and correct. We make no representations or warranties of
            any kind, express or implied, about the completeness, accuracy,
            reliability, suitability or availability with respect to the
            website or the information, products, services, or related
            graphics contained on the website for any purpose. Any reliance
            you place on such information is therefore strictly at your own
            risk. In no event will we be liable for any loss or damage
            including without limitation, indirect or consequential loss or
            damage, or any loss or damage whatsoever arising from loss of data
            or profits arising out of, or in connection with, the use of this
            website. Every effort is made to keep the website up and running
            smoothly. However, Always Italy takes no responsibility for, and
            will not be liable for, the website being temporarily unavailable
            due to technical issues beyond our control.
            </p>
        </div>
      </div>
      <div className="social-links">
        <a href="https://www.facebook.com/">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com/">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/">
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
      <div className="footer-bottom">
        <p className="footer__copy">
          &#169; 2021 Always Italy B.V.. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
