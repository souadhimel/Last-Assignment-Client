import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    
    const { register, handleSubmit,reset } = useForm();

    const onSubmit=(data)=>{
        console.log(data.email);
fetch(`http://localhost:5000/user/makeAdmin/${data.email}`,{
   
method: 'PUT',
headers: {'content-type': 'application/json'},
// body: JSON.stringify(data),
}).then(res=>res.json())
.then(data=>setEmail(data));
console.log(data);
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
      </div>
    );
};

export default MakeAdmin;