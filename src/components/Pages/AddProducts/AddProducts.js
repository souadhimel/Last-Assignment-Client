import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import "./AddProducts.css"

const AddProducts = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url=`http://localhost:5000/service`;
    console.log(url);
    fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then (res=>res.json())
    .then(result => {
        console.log("success",result);
        toast('Successfully added')
        reset()
    })

  };
    return (
        <div className="add-service m-5">
        <h2 className="text-center" style={{marginTop:'20px', color:'blue',fontSize:'30px'}}>Please add your desired items</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input style={{ height:"50px",border: "2px solid red"}}
            className="form-control"
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Product Name"
          />
            <input
            className="form-control"
            {...register("img")}
            placeholder="image url"
          />
          <textarea  className="text" {...register("description")} placeholder="Description" />
          <input
            className="form-control"
            type="number"
            {...register("price")}
            placeholder="Price"
          />
          <input
            className="form-control"
            type="number"
            {...register("avQuantity")}
            placeholder="Available Quantity"
          />
          <input
            className="form-control"
            type="number"
            {...register("minQuantity")}
            placeholder="Minimum Quantity"
          />
        
          <input className="add_button" type="submit" />
        </form>
        <ToastContainer/>
      </div>
    );
};

export default AddProducts;