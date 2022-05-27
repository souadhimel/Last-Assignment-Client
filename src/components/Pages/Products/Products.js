import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/service")
        .then((res) => res.json())
        .then((data) => setService(data));
    }, []);
    return (
      <div style={{ marginTop: 40 }}>
        <h2 className="text-center heading feature">Tools</h2>
        <Container className="mb-5" >
        
            <Row>
             {service.map((p) => (
            <Product 
            key={p._id} service={p}></Product>
          ))}
            </Row>
          </Container> 
      </div>
    );
};

export default Products;