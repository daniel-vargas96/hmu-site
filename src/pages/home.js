import React from 'react';
import * as FaIcons from "react-icons/fa";

export default function Home() {

  return (
    <>
      <div className="home justify-content-center align-items-center h-100 col-lg-6 col-lg-offset-3">
        <h1 className="d-flex display-4 justify-content-center text-center">Robinson Authorized Distributor and Service Center</h1>
        <p className="d-flex lead text-center">Our highly skilled and trained technicians rely on quality and precision to deliver you with exceptional service that keeps you safe. We assure you that our FAA certified technicians complete thorough training before any maintenance.</p>
        <p className='d-flex lead text-center'>Our goal is to keep your downtime to a minimum, delivering quality maintenance services with fast turn-around times. You rely on your helicopters for transport. Our diverse clientele and experience providing service at our FAA repair station leaves you with complete satisfaction.</p>
        <p className='d-flex justify-content-center'>
          <a className="btn btn-primary btn-lg" href="#" role="button"><FaIcons.FaChevronDown /></a>
        </p>
      </div>
    </>
  );
}
