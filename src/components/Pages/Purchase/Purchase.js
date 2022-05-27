import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';


const Purchase = () => {
  const {id}=useParams();
  const [service,setService]=useState({});
 
  


useEffect(() => {
const url=`http://localhost:5000/services/${id}`;
fetch(url)
.then((res) => res.json())
.then((data) =>setService(data))
},[])



  return (
    <div>
      <h2>Purchase</h2>


    </div>
  );
};

export default Purchase;