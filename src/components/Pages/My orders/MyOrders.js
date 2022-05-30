import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
// import {Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../Firebase/firebase.init';
import "./MyOrders.css"


const MyOrders = () => {
  const [user]=useAuthState(auth)
  console.log(user);
    const [services,setServices]=useState([])
    

 const navigate = useNavigate()
const updateStock=()=>{
  navigate('/payment')
}
    

useEffect(() => {
        fetch(`https://tranquil-dusk-37882.herokuapp.com/myOrders/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[user?.email])

    const orderCancel=id=>{
        const proceed=window.confirm('Are you sure you want to delete?')
       if (proceed) {
         const url=`https://tranquil-dusk-37882.herokuapp.com/myOrders/${id}`;
        fetch(url,{
            method: 'DELETE'
        }) 
        .then(res => res.json())
        .then(data=>{
            if (data.deletedCount > 0) {
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
                const remainingProducts = services?.filter(
                  (service) => service?._id !== id
                );
                setServices(remainingProducts);
              }
        })    
       }
    }
    return (
        <>
        <div>
<div className="py-5">
 <div className="container">
   <div>
   
    <div className="add">
    <Link to="/services"> <button style={{backgroundColor:"#516be9",color:"white", margin:"0 auto",justifyContent:"center",alignItems:"center"}} className="delivered_click">Order more</button></Link>
    </div>
     <h2 className="heading">My Orders</h2>
   </div>
   <div className="mx-auto">
     <Table striped bordered responsive hover>
       <thead>
         <tr>
           <th style={{textAlign: 'center'}}>Product Id</th>
           <th style={{textAlign: 'center'}}>Name</th>
           <th style={{textAlign: 'center'}}>Order Quantity</th>
           <th style={{textAlign: 'center'}}>Actions</th>
         </tr>
       </thead>
       <tbody>
         {services?.map((service) => (
           <tr key={service._id}>
             <td style={{textAlign: 'center'}}>{service?._id}</td>
             <td style={{textAlign: 'center'}}>{service?.name}</td>
             <td style={{textAlign: 'center'}}>{service?.orderQuantity}</td>
             <td>
            <div className="d-flex">  
             <button 
             onClick={() =>updateStock(service?._id)}
              style={{margin:"15px",padding:"12px", backgroundColor:"green",borderRadius:"5px", color:"white", width:"50%"}}>Payment</button>
               <button
                 onClick={() => orderCancel(service?._id)}
                 style={{margin:"15px",padding:"12px", backgroundColor:"red",borderRadius:"5px", color:"white", width:"50%"}} >Cancel</button></div>
             </td>
           </tr>
         ))}
       </tbody>
     </Table>
   </div>
 </div>
</div>
</div>
 </>
    );
};

export default MyOrders;




