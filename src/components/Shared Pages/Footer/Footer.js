import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import { BsFacebook,BsTwitter,BsInstagram,BsPinterest,BsLinkedin,BsMedium,BsYoutube,BsWhatsapp } from "react-icons/bs";
import { Roll, Slide } from 'react-reveal';

const Footer = () => {
    return (
        <div>
       <section className="footer">
       <Roll top>
        <div className="shares">
          <Link to="#" className="btn"><BsFacebook></BsFacebook></Link>
          <Link to="#" className="btn"><BsTwitter></BsTwitter></Link>
          <Link to="#" className="btn"><BsInstagram></BsInstagram></Link>
          <Link to="#" className="btn"><BsPinterest></BsPinterest></Link>
          <Link to="#" className="btn"><BsLinkedin></BsLinkedin></Link>
          <Link to="#" className="btn"><BsMedium></BsMedium></Link>
          <Link to="#" className="btn"><BsYoutube></BsYoutube></Link>
          <Link to="#" className="btn"><BsWhatsapp></BsWhatsapp></Link>
        </div>
        </Roll>
  
       <Slide right> <h1 className="credit">
          copyright@ | all rights reserved! @2022
        </h1></Slide>
      </section>
      </div>
    );
};

export default Footer;

