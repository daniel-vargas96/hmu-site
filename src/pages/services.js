import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Services() {

  return (
    <div className='services text-center mb-5'>
      <h1>Services</h1>
      <div className='row d-flex justify-content-center service-boxes'>
        <div className='d-flex col-lg-3 col-md-6 col-xs-12 m-5 overhaul justify-content-center align-items-center'>
          <h2>Overhaul</h2>
          <div className='overlay-testimonial'>
            <div className='learn-more'>
              <Link to='/overhaul'>Learn More<FiIcons.FiArrowRightCircle className='ml-3' /></Link>
            </div>
          </div>
        </div>
        <div className='d-flex col-lg-3 col-md-6 col-xs-12 m-5 fumigation justify-content-center align-items-center'>
          <h2>Fumigation</h2>
          <div className='overlay-testimonial'>
            <div className='learn-more'>
              <Link to='/fumigation'>Learn More<FiIcons.FiArrowRightCircle className='ml-3' /></Link>
            </div>
          </div>
        </div>
        <div className='d-flex col-lg-3 col-md-6 col-xs-12 m-5 inspection justify-content-center align-items-center'>
          <h2>Pre-Purchase Inspection</h2>
          <div className='overlay-testimonial'>
            <div className='learn-more'>
              <Link to='/inspection'>Learn More<FiIcons.FiArrowRightCircle className='ml-3' /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row d-flex justify-content-center align-items-center'>
          <h4 className='service-content'>
            Our helicopter service department has highly qualified, factory trained mechanics
            on staff who work full time to maintain our helicopters
            in optimum flight safety condition. Within our helicopter service center,
            we provide all levels of FAA regulated services and support to include 100 hours,
            annual and manufacturer specified inspections.
            Outside maintenance to individual helicopter operators is also offered.
        </h4>
        </div>
      </div>

    </div>
  );
}
