/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from '../components/Navbar/WebNav';
import aboutImage from '../assets/images/about.png';
import Footer from '../../src/components/Footer/Footer';
import ButtonArrow from '../components/templates/ButtonArrow/ButtonArrow';
import acrylic from '../assets/images/acrylic.png';
import cotton from '../assets/images/cotton.png';
import wool from '../assets/images/wool.png';
import pins from '../assets/images/pins.png';
import serviceIcon from '../assets/images/service-icon.png';


const Landing = () => {
  return (
    <div className="landing">
      <div className="first-section">
        <Navbar />
        <section className="home">
          <div className="home-container ">
            <div className="home-data">
              <h1 className="home-title">Always Italy</h1>
              <h2 className="home-subtitle">
                Crazy about the beauty of Italy,
                  <br />
                  Serious about fair business with a purpose
                </h2>
              <a href="/shop" className="button">
                Go to WebShop
                </a>
            </div>
          </div>
        </section>
      </div>
      <section className="about-container">
        <div className='about-section-img'>
          <img src={aboutImage} alt="about" className="about-img" />
        </div>
        <div className='about-data-sec'>
          <div className="about-data">
            <span className="section-subtitle about-subtitle">About us</span>
            <h2 className="section-tags">
              Sì, siamo pazzi per la bella Italia.
              </h2>
            <p className="description">
              Always Italy represents Italian companies with distinctive high
              quality products or services but with distance to markets
              outside Italy. We offer a transparent, sustainable, fair and
              long-term business by bridging cultures and knowledge.
              </p>
            <ButtonArrow name="Read More" href='./about' />
          </div>
        </div>
      </section>
      <section className="products-container">
        <div className='product-data'>
          <span className="section-subtitle product-subtitle">Categories</span>
          <h2 className="section-title product-title">Our Products</h2>
        </div>
        <div className="landing-products">
          <div className="first-line">
            <div>
              <div className='product-image'>
                <img src={acrylic} alt='acrylic' className='product-img' />
              </div>
              <ButtonArrow name="Acrylic" href='/' />
            </div>
            <div>
              <div className='product-image'>
                <img src={cotton} alt='cotton' className='product-img' />
              </div>
              <ButtonArrow name="Cotton" href='/' />
            </div>
          </div>
          <div className="second-line">
            <div>
              <div className='product-image'>
                <img src={wool} alt='wool' className='product-img' />
              </div>
              <ButtonArrow name="Wool" href='/' />
            </div>
            <div>
              <div className='product-image'>
                <img src={pins} alt='knitting pins' className='product-img' />
              </div>
              <ButtonArrow name="Knitting Pins" href='/' />
            </div>
          </div>
        </div>
      </section>
      <section className="service-container">
        <div className='service-data'>
          <div>
            <div className='service-data-sec'>
              <div>
                <img src={serviceIcon} alt='service icon' />
              </div>
              <div>
              <h2 className="section-tags">Export From Italy</h2>
              <p className='description'>We support and represent Italian companies with international ambition and potential</p>
              </div>
            </div>
            <div className='service-data-sec'>
              <div>
                <img src={serviceIcon} alt='service icon' />
              </div>
              <div>
                <h2 className="section-tags">Doing business in Italy</h2>
                <p className='description'>Doing business in Italy
                Italy offers many opportunities for companies abroad; but where
                to start? Always Italy offers our knowledge, experiences and
              network in Italy to set-up a successful sustainable business</p>
              </div>
            </div>
          </div>
        </div>
        <div className='service-heading'>
          <span className="section-subtitle service-subtitle">Offering</span>
          <h2 className="section-title service-title">Our services</h2>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
