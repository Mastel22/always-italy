import React from 'react';
import MainNav from '../../components/Navbar/ShopNav';
import NewProduct from  '../../assets/images/new-product.png';

const MainShop = (params) => {
  return (
    <div>
      <div>
        <MainNav />
      </div>
      <div className="shop-middle">
        <div>
          <h1>Retail</h1>
        </div>
        <div className="product-nav">
          <h6>Wool</h6>
          <h6>Yarn</h6>
          <h6>Acrylic</h6>
          <h6>Accessories</h6>
        </div>
        <div className="new-section">
          <div className="new-tagline">
            <h1>New Quality Wool</h1>
            <h6>Choose from a range of our industrial Standard quality wool</h6>
          </div>
          <div className="new-image">
            <img src={NewProduct} alt="new-product" />
          </div>
        </div>
        <div>
          <h6 style={{fontSize:"16px"}}>No new products</h6>
        </div>
      </div>
    </div>
  );
};

export default MainShop;
