import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebarData';
import './footer.scss';
import { IconContext } from 'react-icons';


export default function Footer() {

  return (
    <>
      <footer className="footer">
        <div className='row'>
          <img src='hmu-logo.png' alt="" width="140" className="mb-3"></img>
          <div className='col-lg-6 col-md-6 mb-lg-0'>
            <ul className="list-unstyled mb-0 d-flex flex-row">
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.class}>
                    <Link to={item.path}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* <!-- Copyrights --> */}
        <div className="py-1">
          <div className="container text-center">
            <p className="mb-0 py-2">© 2021 Helicopter Maintenance Unlimited All rights reserved.</p>
          </div>
        </div>
      </footer>

    </>
  )
}
