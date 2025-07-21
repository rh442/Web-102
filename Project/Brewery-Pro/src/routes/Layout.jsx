import React from "react";
import { Outlet, Link } from "react-router-dom"
const Layout =() =>{
    return (
        <>
        <div className='navbar'>
          
          <h2>BrewFinder</h2>
          <Link
            to={'/'}>
              <h3>DashBoard</h3>
          </Link>  
          <Link
            to={'/'}>
              <h3>Search</h3>
          </Link>
          <Link
            to={'/'}>
              <h3>About</h3>
          </Link>
      </div>
      <Outlet/>
        </>

    )
}

export default Layout