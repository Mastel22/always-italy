import React from "react";
import Logo from "../../assets/images/logo.png";
import Welcome1 from "../../assets/images/welcome1.png";
import Welcome2 from "../../assets/images/welcome2.png";
import Welcome3 from "../../assets/images/welcome3.png";
import { MdArrowForward } from "react-icons/md";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-logo">
        <a href="/">
          {" "}
          <img src={Logo} alt="logo" />
        </a>
        <h4>Welcome to the webshop</h4>
        <img src={Welcome1} alt="welcome" style={{ width: "400px" }} />
      </div>
      <div className="shop-categories">
        <div className="shop-item">
          <img src={Welcome2} alt="welcome1" />
          <a href="/mainshop">
            <h6>
              Retail Shop <MdArrowForward />
            </h6>
          </a>
        </div>
        <div className="shop-item">
          <img src={Welcome3} alt="welcome1" />
          <h6>
            Customer Shop <MdArrowForward />
          </h6>
        </div>
        <div className="shop-item">
          <img src={Welcome3} alt="welcome1" />
          <h6>
            B2B Request <MdArrowForward />
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
