import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import SingleReview from "./SingleReview";
import { Row } from "react-bootstrap";
import "./Review.css";
import { Rotate } from "react-reveal";

const DisplayReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/rating")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div>
       <Rotate bottom cascade> <h2 className="text-center mt-8 feature" style={{ color: "black", fontSize: "5rem", marginTop: "50px" }}>
          Customer Rating
        </h2></Rotate>
        {reviews.length === 0 ? (
          <Spinner animation="border" />
        ) : (
          <div className="container ">
            <Row xs={1} md={4} className="g-4 mt-5">
              {reviews.map((review) => (
                <SingleReview key={review._id} review={review}></SingleReview>
              ))}
            </Row>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayReview;