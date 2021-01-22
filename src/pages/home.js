import React from 'react';
import * as FaIcons from "react-icons/fa";

export default function Home() {

  return (
    <>
      <div className='home container-fluid'>
          <div className='col'>
            <div className='title'>
              <h1>Robinson Authorized Distributor and Service Center</h1>
            </div>
            <div className='content-text'>
              <p>Our highly skilled and trained technicians rely on quality and precision to deliver you with exceptional service that keeps you safe. We assure you that our FAA certified technicians complete thorough training before any maintenance.
                Our goal is to keep your downtime to a minimum, delivering quality maintenance services with fast turn-around times. You rely on your helicopters for transport. Our diverse clientele and experience providing service at our FAA repair station leaves you with complete satisfaction</p>
            </div>
            <div className='arrow-down'>
              <a className='btn btn-lg down-btn'>
                <FaIcons.FaChevronDown />
              </a>
            </div>
          </div>

        </div>

    </>
  );
}
