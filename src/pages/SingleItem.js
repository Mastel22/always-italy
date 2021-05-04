import React from 'react';
import Navbar from '../components/Navbar';
import FooterPage from '../components/Footer';

const SingleItem = (params) => {
  return (
    <div>
      <Navbar />
      <div className="item-container">
        <div className="item-image">
          {/* <img src={boldYarn} alt="yarn" /> */}
        </div>
        <div className="item-description">
          <div className="description-header">
            <h1>Delfino yarn</h1>
            <span>50$</span>
          </div>
          <div className="description-middle">
            <h3>
              Colour:
              <span style={{ fontWeight: 'normal', paddingLeft: 10 }}>Red</span>
            </h3>
            <h3>
              Weight:
              <span style={{ fontWeight: 'normal', paddingLeft: 10 }}>
                50gram
              </span>
            </h3>
            <h3>
              Height:
              <span style={{ fontWeight: 'normal', paddingLeft: 10 }}>1m</span>
            </h3>
            <h3>
              Composition:
              <span style={{ fontWeight: 'normal', paddingLeft: 10 }}>
                100% cotton
              </span>
            </h3>
          </div>
          <div className="add-cart">
            <button>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="suggestion">
          <h1>You may also Like</h1>
          {/* <img src={yarn} alt="yarn" /> */}
        </div>
      <FooterPage />
    </div>
  );
};

export default SingleItem;
