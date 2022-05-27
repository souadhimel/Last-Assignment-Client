import React from 'react';
import { Rotate } from 'react-reveal';
import "./Summary.css";
import {BiUserCircle} from "react-icons/bi";
import {FcCurrencyExchange,FcRegisteredTrademark} from "react-icons/fc";
import {FaTools} from "react-icons/fa"


const Summary = () => {
    return (
        <section >
           <h2 className="text-center feature" style={{fontSize:'50px'}}>Summary</h2> 

           <div className=" subscriber mt-5" >
         <Rotate left><div>
           <h2 className="number" style={{fontSize:'30px'}}>100k+</h2>
          <span style={{fontSize:'60px', color:'rgb(68, 11, 173)'}}><BiUserCircle></BiUserCircle> </span><span style={{fontSize:'30px'}}>Customer</span>
         </div></Rotate>
         
        <Rotate bottom> <div>
           <h2 className="number"style={{fontSize:'30px'}}>120M+</h2>
           <span style={{fontSize:'60px', color:'rgb(68, 11, 173)'}}><FcCurrencyExchange></FcCurrencyExchange></span><span style={{fontSize:'30px'}}>Annual Revenue</span>
         </div></Rotate>
         <Rotate top><div>
           <h2 className="number"style={{fontSize:'30px'}}>33k+</h2>
           <span style={{fontSize:'60px', color:'rgb(68, 11, 173)'}}><FcRegisteredTrademark></FcRegisteredTrademark></span><span style={{fontSize:'30px'}}>Review</span>
         </div></Rotate>
        <Rotate right> <div>
           <h2 className="number"style={{fontSize:'30px'}}>50+</h2>
           <span style={{fontSize:'60px', color:'rgb(68, 11, 173)'}}><FaTools></FaTools></span><span style={{fontSize:'30px'}}>Tools</span>
         </div></Rotate>
       </div>
           </section>
    );
};

export default Summary;