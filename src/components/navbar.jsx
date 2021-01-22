import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebarData';
import './navbar.css';
import { IconContext } from 'react-icons';


export default function Navbar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);



  return (
    <>
      <div className="nav-bar">
        <div className='col-md-11 d-flex pl-5'>
          <img src='hmu-logo.png' className='logo' alt="logo"></img>
          <h1 className='hmu-title'>Helicopter Maintenance Unlimited</h1>
        </div>
        <div className='col-1'>
          <Link to="#" className="menu-bars" style={{ color: 'black' }}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to="#" className='menu-bars' style={{ color: 'white' }}>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={sidebar ? 'overlay' : 'overlay hidden'}></div>
    </>
  );
}
