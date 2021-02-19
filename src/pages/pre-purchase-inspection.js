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
    </div>
  );
}
