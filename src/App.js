
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Shared Pages/Footer/Footer';
import Header from './components/Shared Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Blogs from './components/Pages/Blogs/Blogs';
import AddProducts from './components/Pages/AddProducts/AddProducts';
import NotFound from './components/NotFound/NotFound';
import Products from './components/Pages/Products/Products';
import Summary from './components/Pages/Summary/Summary';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import MyOrders from './components/Pages/My orders/MyOrders';
import RequireAuth from './components/Firebase/RequireAuth';
import Purchase from './components/Pages/Purchase/Purchase';
import AddReviews from './components/Pages/Add Reviews/AddReviews';
import Profile from './components/Pages/Profile/Profile';
import Dashboard from './components/Pages/Dashboard/Dashboard';


function App() {
  return (
  <div>
  <Header></Header>
  <Routes>
<Route path="/" element={<Home></Home>}></Route>
<Route path="/home" element={<Home></Home>}></Route>
<Route path="/blogs" element={<Blogs></Blogs>}></Route>
<Route path="/addProducts" element={<AddProducts></AddProducts>}></Route>
<Route path="/addReviews" element={<AddReviews></AddReviews>}></Route>
<Route path="/profile" element={<Profile></Profile>}></Route>
<Route path="/summary" element={<Summary></Summary>}></Route>
<Route path="/purchase" element={<Purchase></Purchase>}></Route>
<Route path="/myOrders" element={<MyOrders></MyOrders>}></Route>
<Route path="/service/:id" element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
<Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}></Route>
<Route path="/login" element={<Login></Login>}></Route>
<Route path="/register" element={<Register></Register>}></Route>
<Route path="/services" element={<Products></Products>}></Route>
<Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
<Route path="*" element={<NotFound></NotFound>}></Route>


  </Routes>
   <Footer></Footer>
  </div>
   

  );
}

export default App;
