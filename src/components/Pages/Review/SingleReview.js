import React from "react";
import Rating from "react-rating";
import { Card, Col } from "react-bootstrap";
import "./Review.css"
import { Fade } from "react-reveal";

const SingleReview = (props) => {
  const { name, rating, comment } = props.review;

  return (
    <div className="single rating">
      <Col>
       <Fade right> <Card>
          <Card.Body style={{backgroundColor:"rgb(214, 173, 243)", borderRadius:"10px", border:"3px dotted black"}}>
            <Card.Title style={{color: 'black', fontSize:'20px'}} className=" text-center fw-bold p-2 rounded">
              {name}
            </Card.Title>
            <Card.Text className="text-dark text-center fw-bold">
              {comment}
            </Card.Text>
            <p className="text-primary text-center fw-bold">
              Rating : {rating}/5
            </p>
            <Rating
              className="text-warning"
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              initialRating={rating}
              readonly
            />
          </Card.Body>
        </Card></Fade>
      </Col>
    </div>
  );
};

export default SingleReview;