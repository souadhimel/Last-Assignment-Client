import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    
    const { register, handleSubmit,reset } = useForm();

    const onSubmit=(data)=>{
        console.log(data.email);
fetch(`https://tranquil-dusk-37882.herokuapp.com/user/makeAdmin/${data.email}`,{
   
method: 'PUT',
headers: {'content-type': 'application/json'},
// body: JSON.stringify(data),
}).then(res=>res.json())
.then(data=>console.log(data));
toast.success('Successfully made an admin')
reset()
navigate('/dashboard')
    }
    return (
        <div className="add-service m-5">
        <h2 className="text-center" style={{marginTop:'20px', color:'blue',fontSize:'30px'}}>Please make admin</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input style={{ height:"50px",border: "1px solid black"}}
            className="form-control"
            name="email"
            {...register("email", { required: true })}
            placeholder="Email"
            type="email"
          />
            <input className="add_button" type="submit" />
        </form>
        <ToastContainer/>
      </div>
    );
};

export default MakeAdmin;