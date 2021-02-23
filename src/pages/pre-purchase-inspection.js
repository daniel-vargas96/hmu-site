import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Inspection() {


  return (
    <div className='pre-purchase-container text-center'>
      <div className='row'>
        <div className='info-card col-lg-4 col-md-12 col-xs-12 text-left'>
          <h1 className='inspection-title'>Pre-Purchase Inspection</h1>
          <p className='info-text'>Choose Helicopter Maintenance Unlimited for all major inspections including
          pre-purchase, 100 hour, 12 year inspections, and more. Whether you
          bring your aircraft to us or we come to you, our competitive turnaround
          times and exceptional customer service makes us the number one choice
          for helicopter inspections in the Southern United States and across
            the country.</p>
        </div>
        <div className='hero col-lg-7'></div>
      </div>
      <div className='container d-flex flex-column justify-content-center align-items-center'>
        <div className='row d-flex justify-content-center inspect-body'>
          <div className='col-lg-6 inspect-bg'></div>
          <div className='col-lg-6'>
            <p className='inspect-text'>
              During a scheduled condition inspection, we inspect all components of your aircraft in accordance with the manufacturers’ recommendations. Our thorough observation helps detect cracks, corrosion, and disbonds found in composites which could be caused by fatigue and stress. We also check to make sure all Airworthiness Directives have been addressed.
            <br></br><br></br>
            The safety of the individuals who fly aboard your aircraft relies upon routine maintenance and inspections to stop problems before they happen. Plus, regular servicing helps protect the value of your investment for years to come!
          </p>
          </div>
        </div>
      </div>

    </div>
  );
}
