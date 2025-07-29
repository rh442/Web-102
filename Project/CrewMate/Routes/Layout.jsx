import { Outlet, Link } from "react-router-dom"
import React from 'react';
import './Layout.css';
const Layout = () => {
    return(
        <>
            <div className="sidebar">
                <Link style={{color: "white"}}to='/'><h1 className="headers">Home</h1></Link>
                <Link style={{color: "white"}}to="/Create"><h1  className="headers">Create!</h1></Link>
                <Link style={{color: "white"}}to="/Gallery"><h1  className="headers">Gallery</h1></Link>
            </div>
            <Outlet/>
        </>
    )
}

export default Layout