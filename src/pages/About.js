import React from 'react';
import FooterPage from '../components/Footer';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-page">
        <div className="inner-section">
          <h1>About Always Italy</h1>
          <p className="text">
            Always Italy represents Italian companies with distinctive high
            quality products or services but with distance to markets <br/> outside
            Italy. We offer a transparent, sustainable, fair and
            long-term business by bridging cultures and knowledge.
          </p>
          <h1>Background</h1>
          <p className="text">
            Our products were born from the experience of the Morelli family, in
            the sale of yarns, including wool, wool blends, cotton <br/> and cashmere
            exactly since 1978. A structured company that follows the production
            from the origin, even taking care of the <br/> choice of the high quality
            raw materials, directly sourced in various parts of the world in
            order to get the finest quality of <br/> products. The choice of the
            selected yarns is followed by processing in the company's own plant
            in Italy, so that <br/> they can become the valuable products that
            distinguish themselves in this market.
          </p>
          <h1>Our Mission</h1>
          <p className="text">
            A business world in which open, honest, fair , and true sustainable
            relationships connect and positively impact Italian <br/> producers,
            companies, economy and employees.
          </p>
          <div className="core-values">
            <h1>Core Values</h1>
            <div className="content">
              <div>
                <li>Be Fair</li>
                <li>Be Transparent</li>
                <li>Walk The Talk</li>
              </div>
              <div style={{ marginLeft: '16rem' }}>
                <li>Be Professional</li>
                <li>Be sustainable</li>
                <li>Do the right Thing</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default About;
