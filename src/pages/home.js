import React from 'react';
import * as FaIcons from "react-icons/fa";
import { withRouter } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";


export default function Home() {

  const btnColor = {
    color: 'white',
  };

  return (
    <>
      <div className='home'>
        <div className='intro-content row'>
          <div className="justify-content-center align-items-center h-100 col-lg-6 col-lg-offset-3">
            <h1 className="d-flex display-4 justify-content-center text-center">Robinson Authorized Distributor and Service Center</h1>
            <p className="d-flex lead text-center">Our highly skilled and trained technicians rely on quality and precision to deliver you with exceptional service that keeps you safe. We assure you that our FAA certified technicians complete thorough training before any maintenance.</p>
            <p className='d-flex lead text-center'>Our goal is to keep your downtime to a minimum, delivering quality maintenance services with fast turn-around times. You rely on your helicopters for transport. Our diverse clientele and experience providing service at our FAA repair station leaves you with complete satisfaction.</p>
            <p className='d-flex justify-content-center'>
              <Link activeClass="active" spy={true} smooth={true} offset={500} duration={1000} to='testimonials'><FaIcons.FaChevronDown className='down-btn' /></Link>
            </p>
          </div>
        </div>
        <div className='container-fluid align-items-center' id='testimonials'>
          <div className='row col-lg-offset-1'>
            <div className='col-1 d-flex justify-content-center align-items-center'>
              <FaIcons.FaAward className='testimonial-icons d-flex align-items-center' />
            </div>
            <div className='content d-flex flex-column col-lg-10 pl-5'>
              <h2>Top Performance</h2>
              <p className='testimonial-text'>After your service is completed, your aircraft is ready to be safely operated.
              Our priority is to keep your downtime to a minimum with timely responses and 24-hour accessibility.
             Our repairs of Airbus, Sikorsky, Agusta, MD, and Bell helicopters focus on safety and quality.</p>
            </div>
          </div>
          <div className='content row col-lg-offset-1'>
            <div className='col-1 d-flex justify-content-center align-items-center'>
              <FaIcons.FaTools className='testimonial-icons d-flex align-items-center' />
            </div>
            <div className='content d-flex flex-column col-lg-10 pl-5'>
              <h2>Trained Team</h2>
              <p className='testimonial-text'>
              You want your helicopter in the hands of a company you can trust. Our team is factory trained and certified to
              deliver you with quality and versatility. Our constant communication and customer support exceeds your
              expectations and completes the repair quickly.</p>
            </div>
          </div>
          <div className='content row col-lg-offset-1'>
            <div className='col-1 d-flex justify-content-center align-items-center'>
              <FaIcons.FaTools className='testimonial-icons d-flex align-items-center' />
            </div>
            <div className='content d-flex flex-column col-lg-10 pl-5'>
              <h2>Quality Prices</h2>
              <p className='testimonial-text'>
              You want your helicopter in the hands of a company you can trust. Our team is factory trained and certified to
              deliver you with quality and versatility. Our constant communication and customer support exceeds your
              expectations and completes the repair quickly.</p>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}
