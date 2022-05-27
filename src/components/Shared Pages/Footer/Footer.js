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

//     <>
{/* <div className="footer-top pb-4">
<Container>
  <Row>
    <Col sm={12} md={6} lg={3}>
      <Zoom>
        <h4 className="col-title">Wanna a member?</h4>
        <h5 className="text-muted">Sign up for our Newsletter</h5>
        <form className="d-flex">
          <input
            placeholder="Enter your email"
            className="form-control rounded-0"
            type="text"
          />
          <button className="btn rounded-0 btn-primary">Subs</button>
        </form>
        <h5 className="text-muted mt-4">Follow us on</h5>
        <div>
          <ul className="social-icons">
            <li>
              <a href="/d">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="/d">
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="/d">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/d">
                <i className="fab fa-twitter-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </Zoom>
    </Col>
    <Col sm={12} md={6} lg={3}>
      <Zoom>
        <h4 className="col-title">INFORMATION</h4>
        <ul className="information">
          <li>
            <a href="/home">bKash Payments</a>
          </li>
          <li>
            <a href="/home">TERMS & CONDITIONS</a>
          </li>
          <li>
            <a href="/home">bKash Payments</a>
          </li>
          <li>
            <a href="/home">Payment Options</a>
          </li>
          <li>
            <a href="/home">Privacy Policy</a>
          </li>
          <li>
            <a href="/home">Refund Policy</a>
          </li>
        </ul>
      </Zoom>
    </Col>

    <Col sm={12} md={6} lg={3}>
      <Zoom>
        <h4 className="col-title">CUSTOMER SERVICE</h4>
        <ul className="information">
          <li>
            <a href="/home">FAQs</a>
          </li>
          <li>
            <a href="/home">ETechHouse</a>
          </li>
          <li>
            <a href="/home">Store Locator</a>
          </li>
          <li>
            <a href="/home">All About Feet</a>
          </li>
          <li>
            <a href="/home">Contact Info</a>
          </li>
          <li>
            <a href="/home">Delivery</a>
          </li>
        </ul>
      </Zoom>
    </Col>
    <Col sm={12} md={6} lg={3}>
      <Zoom>
        <h4 className="col-title">Reach us</h4>
        <div className="">
          <img width="100px" src={contactNow} alt="" />
        </div>
        <ul className="information contact-info">
          <li>
            <i className="fas fa-map-marker-alt"></i>
            Dhaka, Bangladesh
          </li>
          <li>
            <i className="fas fa-envelope"></i>
            Official: etech@gmail.com
          </li>
          <li>
            <i className="fas fa-phone"></i>
            Helpline: +880170000000
          </li>
        </ul>
      </Zoom>
    </Col>
  </Row>
</Container>
</div>
<div className="footer">
<p className="text-center">Copyright &copy; All reserved</p>
</div>
</> */}