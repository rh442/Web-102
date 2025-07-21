import React from "react";
import { Link } from "react-router-dom"; 

const NotFound = () =>{
    return (
        <>
            <h2>There's nothing here</h2>
            <Link
                to={'/'}
               >
                Back to Home
            </Link>
        </>
    ) 
    
}
export default NotFound