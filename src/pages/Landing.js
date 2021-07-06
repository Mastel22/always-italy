/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from '../Components/Navbar/WebNav';
import aboutImage from '../assets/images/about.png';
import Footer from '../Components/Footer/Footer';
import ButtonArrow from '../Components/templates/ButtonArrow/ButtonArrow';
import acrylic from '../assets/images/acrylic.png';
import cotton from '../assets/images/cotton.png';
import wool from '../assets/images/wool.png';
import pins from '../assets/images/pins.png';
import serviceIcon from '../assets/images/service-icon.png';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { left } from '@popperjs/core';



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

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-xs-12 gray-bg">
          <img src={aboutImage} alt="about" className="img-fluid" />
          </div>
          <div className="col-lg-8 col-md-12 col-xs-12">
            <div className="aboutus-container">
                <span className="section-subtitle about-subtitle landing-aboutus-title">About us</span>
            </div>
            <h2 className="section-tags">
              Sì, siamo pazzi per la bella Italia.
              </h2>
            <p className='description'>
              Always Italy represents Italian companies with distinctive high
              quality products or services but with distance to markets
              outside Italy. We offer a transparent, sustainable, fair and
              long-term business by bridging cultures and knowledge.
              </p>
            <ButtonArrow name="Read More" href='./about' />
          </div>
        </div>
      </div>

        <div className="landing-products-wraper">
          <div className="landing-products-wraper_title">
            <div className="landing-products-wraper_title-categories">
          <h4 className="section-subtitle service-subtitle">Categories</h4>
          </div>
          <h2 className="section-title service-title landing-products-wraper_title-products">Our Products</h2>
          </div>
          <div className="landing-products-wraper_content">
          <div className="d-flex landing-products-container">
             <div>
                <div className="landing-products-items">
                <img src={acrylic} alt='acrylic' className='product-img' />
                </div>
                <div>
                <ButtonArrow name="Acrylic" href='/' />
                </div>
            </div>
            <div>
                <div className="landing-products-items">
                <img src={cotton} alt='cotton' className='product-img' />
                </div>
                <div>
                  <ButtonArrow name="Cotton" href='/' />
                </div>
            </div>
            </div>
          <div className="d-flex landing-products-container">
              <div>
                  <div className="landing-products-items">
                    <img src={wool} alt='wool' className='product-img ' />
                  </div>
                  <div>
                  <ButtonArrow name="Wool" href='/' />
                  </div>
              </div>
              <div>
              <div className="landing-products-items">
              <img  src={pins} alt='knitting pins' className='product-img' />
              </div>
              <div>
              <ButtonArrow name="Knitting Pins" href='/' />
              </div>
              </div>
          </div>
   
                  
                    
          </div> 
                 

          {/* <Row>
            <Col>
            <p>loremorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis velit lectus. In a mauris nunc. Donec enim lectus, tristique eu viverra eget, dignissim id nibh. Cras orci turpis, commodo sit amet orci ut, vehicula fringilla odio.</p>
            </Col>
            <Col>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis velit lectus. In a mauris nunc. Donec enim lectus, tristique eu viverra eget, dignissim id nibh. Cras orci turpis, commodo sit amet orci ut, vehicula fringilla odio.</p>
            </Col>
          </Row> */}
          
          
        </div>




      {/* <div className="row">
          <div className="col-lg-4 col-md-12 col-xs-12">
          <h4 className="section-subtitle service-subtitle">Categories</h4>
          <h2 className="section-title service-title">Our Products</h2>
          </div>
          <div className="col-lg-8 col-md-12 col-xs-12 pink-bg">
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                <img src={acrylic} alt='acrylic' className='product-img' />
                <ButtonArrow name="Acrylic" href='/' />
                </div>

                <div className="col">
                <img src={cotton} alt='cotton' className='product-img' />
                <ButtonArrow name="Cotton" href='/' />
                </div>
              </div>
              <div className="row">
                <div className="col">
                <img src={wool} alt='wool' className='product-img' />
                <ButtonArrow name="Wool" href='/' />
                </div>
                <div className="col">
                <img src={pins} alt='knitting pins' className='product-img' />
                <ButtonArrow name="Knitting Pins" href='/' />
                </div>
              </div>
            </div>
          </div>
      </div> */}

      <div className="row">
      <div className="col-lg-4 col-md-12 col-xs-12">
        <h4 className="section-subtitle service-subtitle landing-products_title-offer">Offering</h4>
          <h2 className="section-title service-title landing-products_title-services">Our services</h2>
        </div>
        <div className="col-lg-8 col-md-12 col-xs-12 gray-bg">
          <div className="container-fluid">

            <div className="row">
              <div className="col-lg-3 col-md-12 col-xs-12">
              <img src={serviceIcon} alt='service icon' />
              </div>
              <div className="col-lg-9 col-md-12 col-xs-12">
              <h4 className="section-tags">Export From Italy</h4>
              <p className='description'>We support and represent Italian companies with international ambition and potential</p>
              </div>
            </div>
            <div className="row">
            <div className="col-lg-3 col-md-12 col-xs-12">
            <img src={serviceIcon} alt='service icon' />
              </div>
              <div className="col-lg-9 col-md-12 col-xs-12">
              <h4 className="section-tags">Doing business in Italy</h4>
                <p className='description'>Doing business in Italy
                Italy offers many opportunities for companies abroad; but where
                to start? Always Italy offers our knowledge, experiences and
              network in Italy to set-up a successful sustainable business</p>
              </div>
            </div>
          </div>       
        
        </div>
       
      </div>
      {/* 
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
      </section> */}
       <Footer /> 
    </div>
  );
};

export default Landing;
