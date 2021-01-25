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
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-lg-0 d-flex align-items-center text-center">
              <img src='hmu-logo.png' alt="" width="380" className="mb-3"></img>
              <ul className="list-inline mt-4">
                <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fa fa-twitter"></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fa fa-facebook"></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fa fa-instagram"></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest"></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fa fa-vimeo"></i></a></li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 mb-lg-0  d-flex align-items-center text-center">
              <h1>HELICOPTER MAINTENANCE UNLIMITED</h1>
            </div>
            <div className="col-lg-2 col-md-6 mt-4 mb-2 mb-lg-0 pt-4">
              {/* <h6 className="text-uppercase font-weight-bold mb-4">HMU</h6> */}
              <ul className="list-unstyled mb-0">
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.class}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Copyrights --> */}
        <div className="py-4 footer">
          <div className="container text-center">
            <p className="text-muted mb-0 py-2">© 2021 Helicopter Maintenance Unlimited All rights reserved.</p>
          </div>
        </div>
      </footer>

    </>
  )
}
