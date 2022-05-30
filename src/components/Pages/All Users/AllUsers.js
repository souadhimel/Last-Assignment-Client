import React from 'react';
import { Table } from 'react-bootstrap';
import {useQuery} from 'react-query';
import { Flip } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared Pages/Loading/Loading';

const AllUsers = ({user}) => {
    const navigate = useNavigate()
    const admin=()=>{
      navigate('/makeAdmin')
    }
    const{data:users,isLoading}=useQuery('users',()=>fetch('https://tranquil-dusk-37882.herokuapp.com/user').then(res=>res.json()))
    if (isLoading) {
        return<Loading></Loading>
    }
    

   
    
    return (
        <div>
             <Flip> <h2 className="heading feature">All Users:{users.length}</h2></Flip>
              <div className="mx-auto">
     <Table striped bordered responsive hover>
       <thead>
         <tr>
           <th style={{textAlign: 'center'}}>Product Id</th>
           <th style={{textAlign: 'center'}}>Email</th>
           <th style={{textAlign: 'center'}}>Actions</th>
         </tr>
       </thead>
       <tbody>
         {users?.map((user) => (
           <tr key={user._id}>
             <td style={{textAlign: 'center'}}>{user?._id}</td>
             <td style={{textAlign: 'center'}}>{user?.email}</td>
             <td>
            <div className="d-flex">  
             {user?.role !== 'admin' ? 
             (<button onClick={() =>admin(user?._id)}

              style={{margin:"15px",padding:"12px", backgroundColor:"green",borderRadius:"5px", color:"white", width:"50%"}}>Make Admin</button>)
              :(<button style={{margin:"15px",padding:"12px", backgroundColor:"pink",borderRadius:"5px", color:"blue", width:"50%"}} >Already Admin</button>)}
               <button
                //  onClick={() => orderCancel(service?._id)}

                 style={{margin:"15px",padding:"12px", backgroundColor:"red",borderRadius:"5px", color:"black", width:"50%"}} >Remove user</button></div>
             </td>
           </tr>
         ))}
       </tbody>
     </Table>
   </div>


        </div>
    );
};

export default AllUsers;