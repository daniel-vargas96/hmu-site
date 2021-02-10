import React from 'react';
import * as IoIcons from "react-icons/io";

export default function Courses() {

  return (
    <>
      <div className='courses justify-content-center text-center'>
        <h1>Courses</h1>
        <div className='hero d-flex justify-content-center'></div>
        <div className='container-fluid'>
          <div className='row d-flex justify-content-center'>
            <div className='content col-lg-4 justify-content-center'>
              <h2>Who Should Attend?</h2>
              <p className='testimonial-text'>The course is only available to government-licensed airframe mechanics
              or foreign equivalent. This course does not have Transport Canada or EASA approval. See “Other Training”
            for Transport Canada and EASA information.<br></br><br></br> This course is taught
            entirely in English and attendees are required to understand and speak fluent English. Applicants
            not fluent must provide their own experienced interpreter with technical helicopter knowledge or they
            will not be admitted into the course.</p>
            </div>
            <div className='content col-lg-4 justify-content-center'>
              <h2>Course Curriculum</h2>
              <p className='testimonial-text'>The R22/R44/R66 Factory Maintenance Course conducted by RHC is a basic
              “hands-on” course for maintaining the airframe portion of the R22, R44, and R66 helicopters. A thorough
              review and explanation of the Maintenance Manual is provided. Also, a tour of the factory is included for
            attendees only.<br></br><br></br> Course attendance alone does not guarantee passing. Written exams are given
            daily and passing grades are required. Shop sessions will also be used to evaluate student’s practical (“hands-on”)
            performance.</p>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='content col-lg-4 justify-content-center'>
              <h2>Course Duration</h2>
              <p className='testimonial-text'>Course duration is 8 full days. No class held on Saturday or Sunday. All
              registrants must arrive by 7:45 a.m. each day. The class begins promptly at 8:00 a.m. Applicants must attend
            the entire course to receive a certificate of completion. Course concludes at approximately 4:00 p.m. each day.<br></br><br></br>
            RHC provides coffee, tea, and hot chocolate each day. Approximately 1.5 hours of reading homework per night is required.
            Students will fail if they do not pass each exam and, if in the opinion of the course instructor, they cannot safety
            inspect and maintain a Robinson helicopter.</p>
            </div>
            <div className='content col-lg-4 justify-content-center text-left'>
              <h2 className='text-center'>What to Bring</h2>
              <div className='row'>
                <div className='col-lg-1'>
                  <IoIcons.IoIosArrowDropright></IoIcons.IoIosArrowDropright>
                </div>
                <div className='col-lg-11 d-flex align-items-end'>
                  <p className='testimonial-text d-flex align-items-center'>Calculator (most cell phones have adequate calculators)</p>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-1'>
                  <IoIcons.IoIosArrowDropright></IoIcons.IoIosArrowDropright>
                </div>
                <div className='col-lg-11 d-flex align-items-end'>
                  <p className='testimonial-text'>Colored markers or highlighters (at least 4 different colors) for tracing electrical schematics</p>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-1'>
                  <IoIcons.IoIosArrowDropright></IoIcons.IoIosArrowDropright>
                </div>
                <div className='col-lg-11 d-flex align-items-end'>
                  <p className='testimonial-text'>Appropriate “shop” or “work” clothing. No sandals, sleeveless shirts, shorts, etc.</p>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-1'>
                  <IoIcons.IoIosArrowDropright></IoIcons.IoIosArrowDropright>
                </div>
                <div className='col-lg-11 d-flex align-items-end'>
                  <p className='testimonial-text'>Currently, to comply with CDC COVID-19 guidelines, you are requested to bring the following :<br></br>
                    <ul className='pl-5 pr-5 pt-3 text-left'>
                      <li>Face Covering/Mask – RHC will provide if needed</li>
                      <li>Gloves – RHC will provide Latex gloves if needed</li>
                    </ul>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}
