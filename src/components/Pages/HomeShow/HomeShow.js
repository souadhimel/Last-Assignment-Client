import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Rotate } from 'react-reveal';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import "./HomeShow.css"

const HomeShow = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/service")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return (
      <div style={{ marginTop: 40 }}>
       <Rotate bottom cascade> <h2 className="text-center heading feature">Tools</h2></Rotate>
        <Container className="mb-5" >
        
            <Row>
             {services.map((service) => (
            <Product 
            key={service._id} service={service}></Product>
          )).slice(0,6)}
            </Row>
          </Container> 
          <div className="rating_btn"><button style={{borderRadius:"30px"}} className="btn_text"><Link to="/services" className="link_text">Explore</Link></button></div>
      </div>
    );
};

export default HomeShow;