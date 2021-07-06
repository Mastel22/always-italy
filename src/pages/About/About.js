import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/WebNav";
import "./about.css";

const About = () => {
  return (
    <div className="about">
    <Navbar />
    <div className="container-fluid">
      <div className=" row justify-content-end first-section">
        <div className="col-12 col-md-6 align-self-center">
        <h1 className="first-section-title">About Always Italy</h1>
        <p className="paragraph">
        Always Italy represents Italian companies with distinctive high quality 
products or services but with distance to markets outside Italy. We 
offer a transparent, sustainable, fair and long-term business by 
bridging cultures and knowledge.
        </p>
        </div>
        </div>  
        </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md section-padding">
          <h1 className="about-section">Background</h1>
          <p className="black-text">Our products were born from the experience of the Morelli family,in the sale of yarns,including wool,wool blends,cotton and cashmere exactly since 1978. 
             A structured company that follows the production from the origin, even taking care of the choice of the high quality raw materials, directly sourced in various parts of the world in order to get the finest quality of products. The choice of the selected yarns is followed by processing in the company's own plant in Italy, so that they can become the valuable products that distinguish themselves in this market.</p>
          </div>
          <div className="col  gray-bg">
          
          </div>
        </div>
        <div className="row">
          <div className="col pink-bg">
          
          </div>
          <div className="col-12 col-md section-padding">
          <h1 className="mission-title"> Our Mission</h1>
       <p className="black-text">A business world in which open, honest, fair , and true sustainable relationships connect and positively impact Italian producers,companies, economy and employees.</p>
          </div>
        </div>
        <div className="row justify-content-center section-padding">
          <div className="col-12 text-center">
          <h2 className="values-title">Core Values</h2>
          <p className="values text-center">
                <span>-Be Fair</span>
                <span>-Be Transparent</span>
                <span>-Walk The Talk</span>
                <span>-Be Professional</span>
                <span>-Be Sustainable</span>
              </p>            
          </div>
        </div>
      </div>
     
    < Footer />
    </div>
  );
};

export default About;
