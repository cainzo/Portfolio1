import React, { useRef, useState, useContext } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Adress from "../../img/address.png";
import emailjs from '@emailjs/browser';
import {ThemeContext} from '../../context'

const Contact = () => {
    const formRef = useRef();
    const [done, setDone]=useState(false);
    const theme = useContext(ThemeContext);
    const darkMode =  theme.state.darkMode;

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3qybe14', 'template_br6hv5l', formRef.current, 'oQC7R0EXPCG5FCdLH')
          .then((result) => {
              console.log(result.text);
              setDone(true)
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +54 381 4 065139
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              cainzog@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Adress} alt="" className="c-icon" />
              San Miguel de Tucuman, Tucuman, Argentina. (GTM -3)
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Send me an email: </b>
          </p>
          <form ref={formRef} onSubmit={sendEmail}>
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name='user_name' />
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name='user_subject' />
              <input style={{backgroundColor: darkMode && "#333"}} type="email" placeholder="Email" name='reply_to' />
                <textarea style={{backgroundColor: darkMode && "#333"}} name="message"  cols="30" rows="5" placeholder="Message"></textarea>
                <button>Submit</button>
                {done && " Mensaje envido..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
