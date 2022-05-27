import React from 'react';
import {
    
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";

const CustomLink = ({to,children,...props}) => {
    let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
             <Link
        style={{margin: '20px',textDecoration: "none",color:"white",fontWeight:"bold",borderBottom: match ? "3px solid red" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
        </div>
    );
};

export default CustomLink;