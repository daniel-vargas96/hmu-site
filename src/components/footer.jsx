import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebarData';
import './footer.css';
import { IconContext } from 'react-icons';


export default function Footer() {

  const footerLinks = {
    color: "black"
  }

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className='row'>
            <div className='col-lg-10 col-md-6 mb-lg-0 col-lg-offset-6 mt-5'>
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
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-lg-0 d-flex align-items-center text-center">
              <img src='hmu-logo.png' alt="" width="250" className="mb-3"></img>
              <ul className="list-inline mt-4">
                <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fa fa-twitter"></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fa fa-facebook"></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fa fa-instagram"></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest"></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fa fa-vimeo"></i></a></li>
              </ul>
            </div>
            <div className="col-lg-9 col-md-6 mb-lg-0  d-flex align-items-center text-center">
              <h1>HELICOPTER MAINTENANCE UNLIMITED</h1>
            </div>
          </div>
        </div>
        {/* <!-- Copyrights --> */}
        <div className="py-3">
          <div className="container text-center">
            <p className="mb-0 py-2">© 2021 Helicopter Maintenance Unlimited All rights reserved.</p>
          </div>
        </div>
      </footer>

    </>
  )
}
