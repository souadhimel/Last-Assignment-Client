import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const [order, setOrder] = useState({});
  const [isUpdate, setIsUpdated] = useState(null);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const url = `http://localhost:5000/update/order/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [id, isUpdate]);

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/update/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Status updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsUpdated(true);
          reset();
        } else {
          setIsUpdated(false);
        }
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <form style={{ textAlign: "center" }} > 
        <input
          className="form-control m-3 w-50 justify-content-center align-items-center"
          defaultValue={order?.status}
          {...register("status")}
          required
        />

        <input className="btn btn-success  w-25" type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
// onSubmit={handleSubmit(onSubmit)}