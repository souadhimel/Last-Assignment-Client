import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import "./Dashboard.css"

const Dashboard = () => {

    const { logOut, admin, user } = useAuthState(auth);
    const navigation = useNavigate();
    const location = "/home";
    return (
        <div>
            {/* <div style={{backgroundColor: 'pink'}}><h1 style={{fontSize:'40px', textAlign:'center',marginTop: '10px'}}>Dashboard</h1></div> */}
            <>
      <Navbar
        className="py-0 navbar "
        fixed="top"
        bg="dark"
        collapseOnSelect
        expand="lg"
        variant="dark"
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
              <li>
                <i className="fas fa-home"></i>{" "}
                <Link to="/home"> Home</Link>
              </li>
              {!admin &&
                <div>

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
              {admin && (
                <div>
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
            </ul>
            <button
              onClick={() => logOut(navigation, location)}
              className="btn my-button"
            >
              <i className="fas fa-sign-out-alt"></i> Sign out
            </button>
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