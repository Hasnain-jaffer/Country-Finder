// import React from 'react'
// import { NavLink } from "react-router-dom";
// import "./Header.css"
// import { GiHamburgerMenu } from "react-icons/gi";
// import { useState } from 'react';
// import { IoCloseCircle } from "react-icons/io5";



// const Header = () => {
//   const [show, setshow] = useState(false)

//   const hamburgerToggle =()=>{
//     setshow(!show)
//   }
// const closeToggle = () =>{
//   setshow(!show)
// }
//   return (
//     <div>
//     <nav className="navbar">
//       <div className="hamburger" onClick={hamburgerToggle}>
//         {<GiHamburgerMenu  style={{ width: '20px', height: '20px' }}/>}
//       </div>
//       <div className="navbar-logo"><NavLink to="/">Place Finder</NavLink></div>
//       <ul className={show ? "nav-links-mob" :  "navbar-links"}>
//         <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
//         <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
//         <li><NavLink to="/country" className={({ isActive }) => isActive ? "active" : ""}>Country</NavLink></li>
//         <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
//         <div className="close" onClick={closeToggle}>
//           {<IoCloseCircle style={{ width: '30px', height: '30px' }}/> }
//         </div>
//       </ul>
//     </nav>
//     </div>
//   )
// }

// export default Header

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseCircle } from 'react-icons/io5';

const Header = () => {
  const [show, setShow] = useState(false);

  // Toggle hamburger menu
  const hamburgerToggle = () => {
    setShow(!show);
  };

  // Close mobile menu (used for both close icon and nav links)
  const closeToggle = () => {
    setShow(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="hamburger" onClick={hamburgerToggle}>
          <GiHamburgerMenu style={{ width: '20px', height: '20px' }} />
        </div>
        <div className="navbar-logo">
          <NavLink to="/" onClick={closeToggle}>  Place Finder </NavLink>
        </div>
        <ul className={show ? 'nav-links-mob' : 'navbar-links'}>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeToggle} // Close menu on click
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeToggle} // Close menu on click
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/country"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeToggle} // Close menu on click
            >
              Country
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeToggle} // Close menu on click
            >
              Contact
            </NavLink>
          </li>
          <div className="close" onClick={closeToggle}>
            <IoCloseCircle style={{ width: '30px', height: '30px' }} />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;