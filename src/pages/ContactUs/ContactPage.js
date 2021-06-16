import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/WebNav";
import "./contact-page.css";

const ContactPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="contact-container">
        <div className="contact-form">
          <h1 className="contact-header1">Contact Us</h1>
          <label>
            Name
            <input type="text" name="name" placeholder='Type your name'/>
          </label>
          <label>
            Email
            <input type="text" name="email" placeholder='Type your email'/>
          </label>
          <label>
            Message
            <input type="text" name="message" placeholder='Type your message'/>
          </label>
          <button className='message-button'>Send Message</button>
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
            <span>info@alwaysitaly.con</span>
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
      <Footer />
    </div>
  );
};

export default ContactPage;
