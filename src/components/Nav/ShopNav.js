import React from 'react';
import {
  MdExpandMore,
  MdSearch,
  MdShoppingCart,
  MdPersonOutline,
} from 'react-icons/md';
import '../../assets/scss/pages/_main-shop.scss';

const MainNav = () => {
  return (
    <nav>
      <div className="mainnav-container">
        <div className="nav-logo" style={{ paddingTop: '20px' }}>
          <a href="/">
            <h1 className="logo">Always Italy</h1>
          </a>
        </div>
        <div className="middle-nav">
          <h5>
            Retail shop
            <MdExpandMore style={{}} />
          </h5>
        </div>
        <div className="left-nav">
          <h6>
            <MdSearch />
            Search
          </h6>
          <h6>
            <MdShoppingCart />
            Cart
          </h6>
          <a href="/register">
            <h6>
              <MdPersonOutline />
              Profile
            </h6>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
