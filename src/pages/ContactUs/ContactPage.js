import { TextField } from "material-ui";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/WebNav";
import "./contact-page.css";

const ContactPage = () => {
  return (
    <div className="contact">
      <Navbar />
      <div className="contact-container">
        <div className="contact-form">
          <form>
            <h1 className="contact-header1">Contact Us</h1>
            <div className="inputBox">
              <input type="text" name="name" required="required"></input>
              <span>Name</span>
            </div>

            <div className="inputBox">
              <input type="text" name="email" required="required"></input>
              <span>Email</span>
            </div>

            <div className="inputBox">
              <textarea required="required"></textarea>
              <span>Type your message...</span>
            </div>

            <div className="inputBox">
              <input
                type="submit"
                name=""
                required="required"
                value="Send Message"
              ></input>
            </div>
          </form>
        </div>
        <div className="contact-right">
          <h1 className="contact-header2">
            We would love <br /> to hear <br /> from you!
          </h1>
          <p className="contact-paragraph">
            Fill out the form and our team will get back to you <br /> within 24
            hours
          </p>
          <div className="contact-span">
            <h3>Email Us</h3>
            <span>info@alwaysitaly.com</span>
          </div>
          <div className="social-pages">
            <ul>
              <li>
                <a href="/">LinkedIn</a>
              </li>
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ContactPage;