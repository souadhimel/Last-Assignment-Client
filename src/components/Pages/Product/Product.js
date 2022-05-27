import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Zoom } from 'react-reveal';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const { img, name, description, price,avQuantity,minQuantity,_id } = props.service;
    const navigate = useNavigate();
    const go=id=>{
      navigate(`/service/${id}`)
    }
    return (
        <Col className="my-5 text-center"  sm={12} md={6} lg={4}>
      
       <Zoom> <Card style={{ height: "450px" }} className="mx-1  shadow">
          <div className="text-center">
            <Card.Img
              style={{ width: "300px", height: "200px", margin:'20px 0' }}
              variant="top"
              src={img}
            />
          </div>
          <div style={{backgroundColor:"rgb(174, 167, 167)"}}>
          <Card.Body style={{marginTop:"30px"}}>
            <Card.Title className="text-uppercase">{name}</Card.Title>
            <Card.Title>Price: {price}</Card.Title>
            <Card.Title>Available Quantity: {avQuantity}</Card.Title>
            <Card.Title>Minimum Quantity: {minQuantity}</Card.Title>
            <Card.Text>{description.slice(0,50)}...</Card.Text> 
            <button className="go" style={{margin:"15px",padding:"12px", backgroundColor:"#5a189a",borderRadius:"5px", color:"white", width:"50%"}}  onClick={()=>go(_id)}>
              Order Now</button>
            
          </Card.Body>
          </div>
        </Card></Zoom>
    
    </Col>
    );
};

export default Product;