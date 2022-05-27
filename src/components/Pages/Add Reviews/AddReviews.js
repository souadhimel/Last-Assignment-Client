import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const AddReviews = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url=`http://localhost:5000/rating`;

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
        <h2 className="text-center" style={{marginTop:'20px', color:'blue',fontSize:'30px'}}>Please add your reviews</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input style={{ height:"50px",border: "2px solid red"}}
            className="form-control"
            {...register("name", { required: true})}
            placeholder=" Name"
          />
           <input
            className="form-control"
            type="number"
            {...register("rating")}
            placeholder="Rating"
          />
          
          <textarea  className="text" {...register("comment")} placeholder="Comment" />
        
          <input className="add_button" type="submit" />
        </form>
        <ToastContainer/>
      </div>
    );
};

export default AddReviews;