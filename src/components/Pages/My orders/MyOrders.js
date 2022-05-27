import React from 'react';
// import {Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
import auth from '../../Firebase/firebase.init';
import "./MyOrders.css"


const MyOrders = () => {
  const [user]=useAuthState(auth)
  console.log(user);
    // const [services,setServices]=useState([])
    

//  const navigate = useNavigate()
// const updateStock=(id)=>{
//   navigate(`/service/${id}`)
// }
    

// useEffect(() => {
//         fetch(`http://localhost:5000/myOrders/${user?.email}`)
//         .then(res=>res.json())
//         .then(data=>console.log(data))
//     },[user?.email])

    // const orderCancel=id=>{
    //     const proceed=window.confirm('Are you sure you want to delete?')
    //    if (proceed) {
    //      const url=`http://localhost:5000/order/${id}`;
    //     fetch(url,{
    //         method: 'DELETE'
    //     }) 
    //     .then(res => res.json())
    //     .then(data=>{
    //         if (data.deletedCount > 0) {
    //             Swal.fire({
    //               title: "Are you sure?",
    //               text: "You won't be able to revert this!",
    //               icon: "warning",
    //               showCancelButton: true,
    //               confirmButtonColor: "#3085d6",
    //               cancelButtonColor: "#d33",
    //               confirmButtonText: "Yes, delete it!",
    //             }).then((result) => {
    //               if (result.isConfirmed) {
    //                 Swal.fire("Deleted!", "Your file has been deleted.", "success");
    //               }
    //             });
    //             const remainingProducts = services?.filter(
    //               (service) => service?._id !== id
    //             );
    //             setServices(remainingProducts);
    //           }
    //     })    
    //    }
    // }
    return (
        <div><h2>My orders</h2></div>
    );
};

export default MyOrders;




