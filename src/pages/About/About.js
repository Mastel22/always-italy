import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/WebNav";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="first-section">   
      <Navbar />  
      <section className="homes">
      <div className="homes-container ">
      <div className="homes-data">
      <h1 className="homes-title">About Always Italy</h1>
      <h2 className="homes-subtitle">
          Always Italy represents Italian companies with distinctive high
            quality products or services but with distance to markets outside
            Italy. We offer a transparent, sustainable, fair and
            long-term business by bridging cultures and knowledge.
            </h2>

      </div>
      </div>
        </section>  
         </div>
         <div className="about-container">
           <div className="about-section-container">
             <h1>Background</h1>
             <hr></hr>
             <p className="black-text">Our products were born from the experience of the Morelli family,in the sale of yarns,including wool,wool blends,cotton and cashmere exactly since 1978. 
             A structured company that follows the production from the origin, even taking care of the choice of the high quality raw materials, directly sourced in various parts of the world in order to get the finest quality of products. The choice of the selected yarns is followed by processing in the company's own plant in Italy, so that they can become the valuable products that distinguish themselves in this market.</p>
           </div>
         </div>

       <section className="mission-container">   
       <div className='mission-data'> 
       <h2 className="mission-title"> Our Mission</h2>
       <hr id="hr-mission"></hr>
       <p className="black-text">A business world in which open, honest, fair , and true sustainable relationships connect and positively impact Italian producers,companies, economy and employees.
       </p>
       </div>       
       </section> 
           
            <div className="values-container">
             <div className="values-data">
              <h2>Core Values</h2>
              </div>
               <hr id="hr-core"></hr>
              <ul className="values">
                <li>-Be Fair</li>
                <li>-Be Transparent</li>
                <li>-Walk The Talk</li>
                <li>-Be Professional</li>
                <li>-Be Sustainable</li>
              </ul>            
              </div> 

    < Footer />
    </div>  
  );
};

export default About;
