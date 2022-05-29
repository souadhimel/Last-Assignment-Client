import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import Loading from '../../Shared Pages/Loading/Loading';
import "./Dashboard.css"

const Dashboard = () => {

    const [user,isLoading]= useAuthState(auth);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {

        fetch(`http://localhost:5000/user/${user?.email}`)
        .then(res=>res.json())
        .then((data) => {
            console.log(data);
            if (data.role==='admin') {
                setIsAdmin(true);         
            }
            else{
                setIsAdmin(false);
            }

        })
    },[user?.email]);
    console.log(isAdmin);

    const navigation = useNavigate();
    const logOut = () => {
        signOut(auth);   
      navigation("/home")  
    };

    if (isLoading) {
        return<Loading></Loading>
    }


    return (
        <div>
            <div style={{backgroundColor: 'pink'}}><h1 style={{fontSize:'40px', textAlign:'center',marginTop: '10px'}}>Dashboard</h1></div>
            <>
      <Navbar
        className="py-0 navbar "
        fixed="top"
        bg="light"
        collapseOnSelect
        expand="lg"
        variant="light"
      >
        <>
          <Navbar.Brand>
            <button
              className="btn btn-light bg-dark toggle_btn ms-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <span
                className="navbar-toggler-icon"
                data-bs-target="#offcanvasExample"
              ></span>
            </button>
            <h5 className="text ps-3">Dashboard</h5>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <small>
                <img
                  style={{
                    width: "40px",
                    borderRadius: "50%",
                    marginRight: "20px",
                  }}
                  src={user?.photoURL}
                  alt=""
                />
              </small>
            </Nav>
          </Navbar.Collapse>
        </>
      </Navbar>

      <div
        className="offcanvas offcanvas-start bg-dark text-white sidebar-nav"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header"></div>
        <div className="offcanvas-body ">
          <Nav className="justify-content-start flex-grow-1 pe-3 my-dashboard">
            <ul className="p-0">
            
              {!isAdmin &&
                <div>
                      <li>
                <i className="fas fa-home"></i>{" "}
                <Link to="/home"> Home</Link>
              </li>
                  <li>
                    <i className="fas fa-align-justify"></i>{" "}
                    <Link to="/dashboard/profile">My Profile</Link>
                  </li>
                  <li>
                    <i className="fas fa-align-justify"></i>{" "}
                    <Link to="/dashboard/myOrders">MyOrders</Link>
                  </li>
                  <li>
                    <i className="fas fa-pen-square"></i>{" "}
                    <Link to="/dashboard/addReviews">Add a Review</Link>
                  </li>
                  <li>
                    <i className="far fa-credit-card"></i>
                    <Link to="/dashboard/payment">Payment</Link>
                  </li>
                </div>
              }
              { isAdmin && (
                <div>
                    <h2>Admin Dashboard</h2>
                    <li>
                <i className="fas fa-home"></i>{" "}
                <Link to="/home"> Home</Link>
              </li>
              <li>
                    <i className="fas fa-align-justify"></i>{" "}
                    <Link to="/dashboard/profile">My Profile</Link>
                  </li>
                  <li>
                    <i className="fas fa-align-justify"></i>{" "}
                    <Link to="/dashboard/manageOrders">ManageAllOrders</Link>
                  </li>
                  <li>
                    <i className="fas fa-plus-circle"></i>{" "}
                    <Link to="/dashboard/addProducts">Add A Product</Link>
                  </li>
                  <li>
                    <i className="fas fa-user-shield"></i>{" "}
                    <Link to="/dashboard/makeAdmin">Make admin</Link>
                  </li>
                  <li>
                    <i className="fas fa-luggage-cart"></i>{" "}
                    <Link to="/dashboard/manageProducts">ManageProducts</Link>
                  </li>
                </div>
              )}
               <div>  <button
              onClick={ logOut}
              style={{padding:'15px',width:'100px' ,backgroundColor:'pink',borderRadius:'15px'}}
            >
               Sign out
            </button></div>
            </ul>
          
         
          </Nav>
        </div>
      </div>
      <div className="main mt-5">
        <Outlet></Outlet>
      </div>
    </>
        </div>
    );
};

export default Dashboard;