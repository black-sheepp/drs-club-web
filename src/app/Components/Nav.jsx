import React from "react";
import Logo from "./Logo";

const Nav = () => {
     return (
          <>
               <nav className='navbar'>
                    <div className='container'>
                         <div className='navbar-header'>
                              <Logo /> &nbsp;&nbsp;
                              <a href='#'>
                                   <h4>
                                        <span>DR'$</span> Club
                                   </h4>
                              </a>
                         </div>
                         <div className='navbar-menu' id='open-navbar1'>
                              <ul className='navbar-nav'>
                                   <li className='active'>
                                        <a href='#'>Home</a>
                                   </li>
                                   <li className='navbar-dropdown'>
                                        <a href='#facility-section' className='dropdown-toggler' data-dropdown='my-dropdown-id'>
                                            Facilities <i className='fa fa-angle-down' />
                                        </a>
                                   </li>
                                   <li className='navbar-dropdown'>
                                        <a href='#membership-section' className='dropdown-toggler' data-dropdown='blog'>
                                             Membership <i className='fa fa-angle-down' />
                                        </a>
                                   </li>
                                   <li>
                                        <a href='#schedule-section' >Schedule</a>
                                   </li>
                                   <li>
                                        <a href='#contact-heading'>Contact</a>
                                   </li>
                                   <li>
                                        <a href='#about-us-section'>About Us</a>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </nav>
          </>
     );
};

export default Nav;
