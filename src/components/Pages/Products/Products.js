import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("https://tranquil-dusk-37882.herokuapp.com/service")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return (
      <div style={{ marginTop: 40 }}>
        <h2 className="text-center heading feature">More Tools</h2>
        <Container className="mb-5" >
        
            <Row>
             {services.map((service) => (
            <Product 
            key={service._id} service={service}></Product>
          ))}
            </Row>
          </Container> 
      </div>
    );
};

export default Products;