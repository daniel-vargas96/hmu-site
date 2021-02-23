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
      <div className='container mb-5 mt-5 d-flex flex-column justify-content-center align-items-center'>
        <div className='row d-flex justify-content-center inspect-body'>
          <div className='col-lg-6'>
            <div className='inspect-bg'></div>
          </div>
          <div className='col-lg-6'>
            <h2>SCHEDULED CONDITION INSPECTIONS</h2>
            <p className='inspect-text'>
              During a scheduled condition inspection, we inspect all components of your aircraft in accordance with the manufacturers’ recommendations. Our thorough observation helps detect cracks, corrosion, and disbonds found in composites which could be caused by fatigue and stress. We also check to make sure all Airworthiness Directives have been addressed.
            <br></br><br></br>
            The safety of the individuals who fly aboard your aircraft relies upon routine maintenance and inspections to stop problems before they happen. Plus, regular servicing helps protect the value of your investment for years to come!
          </p>
          </div>
        </div>
      </div>
      <div className='container mb-5 mt-5 d-flex flex-column justify-content-center align-items-center'>
        <div className='row d-flex justify-content-center inspect-body'>
          <div className='col-lg-6'>
            <h2>ROBINSON 12 YEAR INSPECTION</h2>
            <p className='inspect-text'>
              Robinson recommends that their aircraft be overhauled and inspected every 12 years or 2200 hours of flight time, whichever comes first.
            <br></br><br></br>
            As a Robinson Authorized Service Center, we have the capabilities to perform an in-depth inspection on R22, R44, and R66 model airframes. After your inspection and overhaul are complete, your helicopter will be restored to like-new conditions!
            <br></br><br></br>
            If a problem is detected during the inspection that requires a new part, we supply genuine Robinson parts at competitive prices. Go to our helicopter parts page to browse our vast selection of parts.
          </p>
          </div>
          <div className='col-lg-6'>
            <div className='inspect-bg1'></div>
          </div>
        </div>
      </div>

    </div>
  );
}
