import React from "react";
import "./Review.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuthState(auth);
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/rating", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Congratz!Your comment has been added",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };
  return (
    <div className="add-service" style={{ marginTop: 50 }}>
      <h2 className="text-center">Please leave your comment here</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
      <input
          className="form-control mb-3"
          {...register("name")}
          value={user?.displayName}
          required
        />
        
        <input
          className="form-control mb-3"
          {...register("email")}
          value={user?.email}
          required
        />
        
        <input
          className="form-control mb-3"
          type="number"
          {...register("rating")}
          placeholder="rating(0-5)"
          required
        />
        <input
          rows="4"
          className="form-control mb-3"
          {...register("comment")}
          placeholder="Please write your comment here"
          required
        />
        <input className="btn btn-success w-25 fw-bold" type="submit" />
      </form>
    </div>
  );
};

export default Review;