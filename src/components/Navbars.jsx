import React from 'react'
import logo from '../assets/img/logo.svg';
function Navbars() {


  return (
    <>
      <div className="navbar bg-transparent fixed  z-40 backdrop-blur-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-xl  dropdown-content mt-5 z-[1] p-2 shadow bg-base-100 rounded-box w-96 ">
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl"><img src={logo} alt="logo" /></a>
        </div>
        
          
       
      </div>

    </>
  )
}

export default Navbars