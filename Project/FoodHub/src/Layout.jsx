import React from "react";
import {Link, Outlet} from 'react-router-dom'

import Knife from './assets/knifey.webp'
import Fork from './assets/forky.webp'
import './Layout.css'
const Layout = () =>{
    return(

        <>
            <div className="banner">
                <h1>FoodHub</h1>
                    <div className="navbar">
                        <Link to="/" style={{color:"white"}}><h3>Explore</h3></Link>
                        <Link to="/Create" style={{color:"white"}}><h3>Create</h3></Link>
                </div>
            </div>
            <div className="Fork">
                <img src={Fork} alt='fork'/>
            </div>
            <div className="Knife">
                <img src={Knife} alt='knife'/>
            </div>
            <div>

            </div>
            <Outlet/>
        </>
    )
}
export default Layout