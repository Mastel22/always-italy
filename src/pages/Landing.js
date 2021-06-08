/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from '../components/Navbar/WebNav';
import aboutImage from '../assets/images/about.png';
import { ReactComponent as ServiceImage } from '../assets/images/svg.svg';
import Footer from '../components/Footer';
import yarn from '../assets/images/yarn.jpg';
import wool from '../assets/images/wool.jpg';
import acrylic from '../assets/images/acrylic.jpg';
import knitting from '../assets/images/knitting.jpg';

const Landing = () => {
  return (
    <div className="landing">
      <div className="main">
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
                <a href="/shop" className="button" style={{ width: '120px' }}>
                  Go to WebShop
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className="about section bd-container">
          <div className="about-container bd-grid">
            <div className="about-data">
              <span className="section-subtitle about-initial">About us</span>
              <h2 className="section-title about-initial">
                Sì, siamo pazzi per la bella Italia.
              </h2>
              <p className="about-description">
                Always Italy represents Italian companies with distinctive high
                quality products or services but with distance to markets
                outside Italy. We offer a transparent, sustainable, fair and
                long-term business by bridging cultures and knowledge.
              </p>
              <a href="/about" className="button">
                Read More
              </a>
            </div>
            <img src={aboutImage} alt="aboutImage" className="about-img" />
          </div>
        </div>
        <section className="services section bd-container">
          <span className="section-subtitle">Offering</span>
          <h2 className="section-title">Our services</h2>
          <div className="services-container bd-grid">
            <div className="services-content">
              <ServiceImage className="services-img" />
              <h3 className="services-title">Export from Italy</h3>
              <p className="services-description">
                We support and represent Italian companies with international
                ambitions and potential
              </p>
            </div>
            <div className="services-content">
              <ServiceImage className="services-img" />
              <h3 className="services-title">Doing business in Italy</h3>
              <p className="services-description">
                Italy offers many opportunities for companies abroad; but where
                to start? Always Italy offers our knowledge, experiences and
                network in Italy to set-up a successful sustainable business
              </p>
            </div>
          </div>
        </section>
        <section className="menu-container ">
          <span className="section-subtitle">Categories</span>
          <h2 className="section-title">Our Products</h2>
          <div className="menu-container bd-grid">
            <div>
              <div className="menu-content">
                <img src={yarn} alt="" className="menu-img" />
              </div>
              <h3 className="menu-name">Yarn</h3>
            </div>
            <div>
              <div className="menu-content">
                <img src={wool} alt="" className="menu-img" />
              </div>
              <h3 className="menu-name">Wool</h3>
            </div>
            <div>
              <div className="menu-content">
                <img src={acrylic} alt="" className="menu-img" />
              </div>
              <h3 className="menu-name">Acrylic</h3>
            </div>
            <div>
              <div className="menu-content">
                <img src={knitting} alt="" className="menu-img" />
              </div>
              <h3 className="menu-name">Accessories</h3>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
