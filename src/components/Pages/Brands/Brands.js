import React from 'react';
import "./Brands.css";
import {Bounce} from 'react-reveal';
import {Rotate} from 'react-reveal';
import { Zoom } from 'react-reveal';

const Brands = () => {
    return (
        <div>
      <div className="container">
        <Rotate><Bounce top cascade ><h2 style={{fontSize:'45px'}} className="text-center m-5 feature" >Our Global Partners</h2></Bounce></Rotate>
        <div className="partner">
          <Zoom bottom>
          <img style={{width: '50%', height: '100%', borderRadius:"50%"}}src="https://i.ibb.co/rc7FpqQ/hadi-yazdi-aznaveh-O19zg-Bvj6-PM-unsplash.jpg" alt="" />
          <img style={{width: '50%', height: '100%', borderRadius:'50%'}} src="https://i.ibb.co/yfxprVh/chris-kursikowski-ze5w-HM9kplc-unsplash.jpg" alt="" />
          <img style={{width: '50%', height: '100%', borderRadius:'50%'}}src="https://i.ibb.co/kSMWYBd/kenny-eliason-O2-IHYag-Cj5g-unsplash.jpg" alt="" />
          <img style={{width: '50%', height: '100%', borderRadius:'50%'}} src="https://i.ibb.co/xXJhVYc/hello-i-m-nik-Q4ka-IBtbz-Xk-unsplash.jpg" alt="" />
          </Zoom>
          
        </div>
      </div>
        </div>
    );
};

export default Brands;