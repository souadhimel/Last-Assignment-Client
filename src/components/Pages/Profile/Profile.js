
import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth);
    const navigation= useNavigate()
    const logOut = () => {
        signOut(auth);   
      navigation("/home")  
    };
  return (
    <Container style={{ maxWidth: "30rem", marginBottom: "25px" }}>
      <Card className="border-0 shadow">
        <Card.Header as={"h4"} className="text-center border-0 mt-1">
          Profile
        </Card.Header>
        <Card.Body className="card-body">
          <div className="d-flex flex-column align-items-center text-center">
            <img
              src="https://i.ibb.co/5GzXkwq/user.png"
              alt="Admin"
              className="rounded-circle"
              width="150"
            />
            <div className="mt-3">
              <h4>{user?.displayName}</h4>
              <p className="text-secondary mb-1">{user?.email}</p>
            </div>
            <div>  <button
              onClick={ logOut}
            //   className=" my-button"
            style={{padding:'15px',width:'100px' ,backgroundColor:'pink',borderRadius:'15px'}}
            >
               Sign out
            </button></div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;