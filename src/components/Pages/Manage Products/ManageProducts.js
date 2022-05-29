import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { AiFillDelete } from "react-icons/ai";
import { Zoom } from 'react-reveal';

const ManageProducts = () => {
    const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/service/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };


    return (
        <div>
        <h2 className="text-center mb-3 feature ">Manage products</h2>
  
        <Row xs={1} md={3} className="g-4">
          {services.map((service) => (
              <Col className="my-5 text-center"  sm={12} md={6} lg={4}>
      
              <Zoom> <Card style={{ height: "450px" }} className="mx-1  shadow">
                 <div className="text-center">
                   <Card.Img
                     style={{ width: "300px", height: "200px", margin:'20px 0' }}
                     variant="top"
                     src={service?.img}
                   />
                 </div>
                 <div style={{backgroundColor:"rgb(174, 167, 167)"}}>
                 <Card.Body style={{marginTop:"30px"}}>
                   <Card.Title className="text-uppercase">{service?.name}</Card.Title>
                   <Card.Title>Price: {service?.price}</Card.Title>
                   <Card.Title>Available Quantity: {service?.avQuantity}</Card.Title>
                   <Card.Title>Minimum Quantity: {service?.minQuantity}</Card.Title>
                   <Card.Text>{service?.description.slice(0,50)}...</Card.Text> 
                   <button className="go" style={{margin:"15px",padding:"12px", backgroundColor:"rgb(229, 20, 20)",borderRadius:"5px", color:"black", width:"50%", fontSize:'20px'}}  onClick={() => handleDelete(service?._id)}
                   >
                     Delete <AiFillDelete></AiFillDelete></button>
                   
                 </Card.Body>
                 </div>
               </Card></Zoom>
           
           </Col>
          ))}
        </Row>
      </div>
    );
};

export default ManageProducts;

