import React from 'react';
import { Bounce, Fade, Rotate } from 'react-reveal';

const Portfolio = () => {
    return (
        <>
          <section className="home">
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" style={{marginRight:"30px"}} className="image">
        <img src="https://i.ibb.co/j5HBzLc/young-handsome-smiling-happy-man-holding-vintage-photo-camera-isolated-on-white-studio-background-we.jpg" alt="" />
      </div>

     <Fade right> <div className="content">
        <h3>Hi, I am Shahidul Alam Himel</h3>
        <h5>Email:souad.anam@gmail.com</h5>
        <h5>Address: 25/A, Farmgate, Dhaka</h5>
        <h5>Educational Qualification: English Graduate</h5>
        <h5>Skill sets: React, NodeJS,ExpressJS,MongoDB</h5>

        <span style={{fontSize:'20px'}}>Junior web developer</span>
        <p>
          I’m desirous to develop in a challenging workplace that welcomes
          innovative ideas and offers growth opportunities and a positive
          environment as a leader or team member. It’s my passion to work on
          real-time web applications using JavaScript (ES6, React, Next) &
          Node.js is really awesome backend technology that I always prefer.
        </p>
       
      </div></Fade>
    </section>
    <section className="portfolio">
     <Rotate><Bounce top cascade> <h1 className="heading feature"><span>my</span> work</h1></Bounce></Rotate>

      <div style={{textAlign: 'center', justifyContent: 'center'}} className="box-container">
    <button style={{fontSize:'30px', width:'200px'}} ><a style={{color: 'blue', textDecoration:"none"}} href="https://grocery-service-5e808.web.app/">Link 1</a></button>
        
    <button style={{fontSize:'30px', width:'200px'}} ><a style={{color: 'blue', textDecoration:"none"}} href="https://independent-service-prov-34818.web.app/">Link 2</a></button>
    
    <button style={{fontSize:'30px', width:'200px'}} ><a style={{color: 'blue', textDecoration:"none"}} href="https://cocky-jepsen-a00f17.netlify.app/">Link 3</a></button>
        </div>

       
    </section>
 
    
        </>
    );
};

export default Portfolio;