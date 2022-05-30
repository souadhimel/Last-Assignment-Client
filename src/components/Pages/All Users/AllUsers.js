import React from 'react';
import {useQuery} from 'react-query';
import Loading from '../../Shared Pages/Loading/Loading';

const AllUsers = () => {
    const{data:users,isLoading}=useQuery('users',()=>fetch('https://tranquil-dusk-37882.herokuapp.com/user').then(res=>res.json()))
    if (isLoading) {
        return<Loading></Loading>
    }
    
    return (
        <div>
           
            <h2>All users</h2>
              <h2>All Users:{users.length}</h2>


        </div>
    );
};

export default AllUsers;