import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const HomeShow = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/service")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return (
      <div style={{ marginTop: 40 }}>
        <h2 className="text-center heading feature">Tools</h2>
        <Container className="mb-5" >
        
            <Row>
             {services.map((service) => (
            <Product 
            key={service._id} service={service}></Product>
          )).slice(0,6)}
            </Row>
          </Container> 
      </div>
    );
};

export default HomeShow;