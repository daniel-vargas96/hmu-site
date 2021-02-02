import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import { withRouter } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Services() {

  return (
    <div className='services text-center mb-5'>
      <h1>Services</h1>
      <div className='row d-flex justify-content-center service-boxes'>
        <div className='d-flex col-lg-3 col-md-6 col-xs-12 m-5 overhaul justify-content-center align-items-center'>
          <h2>Overhaul</h2>
          <div className='overlay-testimonial'>
            <div className='learn-more'>
              <Link>Learn More<FiIcons.FiArrowRightCircle className='ml-3' /></Link>
            </div>
          </div>
        </div>
        <div className='d-flex col-lg-3 col-md-6 col-xs-12 m-5 fumigation justify-content-center align-items-center'>
          <h2>Fumigation</h2>
          <div className='overlay-testimonial'>
            <div className='learn-more'>
              <Link>Learn More<FiIcons.FiArrowRightCircle className='ml-3' /></Link>
            </div>
          </div>
        </div>
        <div className='d-flex col-lg-3 col-md-6 col-xs-12 m-5 inspection justify-content-center align-items-center'>
          <h2>Pre-Purchase Inspection</h2>
          <div className='overlay-testimonial'>
            <div className='learn-more'>
              <Link>Learn More<FiIcons.FiArrowRightCircle className='ml-3' /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
