import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/WebNav";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="main-section">
        <Navbar />
        <section className="about-main">
          <div className="about-data">
            <h1 className="about-title">About Always Italy</h1>
            <p className="about-description">
              Always Italy represents Italian companies with distinctive high
              quality products or services but with distance to markets outside
              Italy. We offer a transparent, sustainable, fair and long-term
              business by bridging cultures and knowledge.
            </p>
          </div>
        </section>
      </div>
      <section className="background-container">
        <div className="background-data-sec">
          <h1 className="about-page-title">Background</h1>
          <p className="about-page-description">
            Our products were born from the experience of the Morelli family, in
            the sale of yarns, including wool, wool blends, cottonand cashmere
            exactly since 1978. A structured company that follows the production
            from the origin, even taking care of the choice of the high quality
            raw materials, directly sourced in various parts of the world in
            order to get the finest quality of products. The choice of the
            selected yarns is followed by processing in the company's own plant
            in Italy, so that they can become the valuable products that
            distinguish themselves in this market.
          </p>
        </div>
        {/* <div className="background-section-img">
          <img src={aboutImage} alt="about" className="about-img" />
        </div> */}
      </section>
      <section className="mission-section">
        <div className="mission-img-sec">
          {/* <img src={aboutImage} alt="about" className="about-img" /> */}
        </div>
        <div className="mission-data-sec">
          <h1 className="about-page-title">Our Mission</h1>
          <p className="about-page-description">
            A business world in which open, honest, fair , and true sustainable
            relationships connect and positively impact Italian producers,
            companies, economy and employees.
          </p>
        </div>
      </section>
      <section className="values-section">
        <h1 className="about-page-title">Core Values</h1>
        <p className='core-values'>Be Fair   -   Be Transparent   -   Walk The Talk   -   Be Professional   -   Be sustainable   -   Do the right Thing</p>
      </section>
      <Footer />
    </div>
  );
};

export default About;
