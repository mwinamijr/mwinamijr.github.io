import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { description } from './constants';

function Resume() {
  
  return (
    <HelmetProvider className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Resume | Mwinami Jr</title>
        <meta name="description" content={description} />
      </Helmet>
    <div className="container">
      <div id="resume" className="resume section">

        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>After my Secondary education I followed my passion in Graphics design and video editing where I self learned all my skills with the help of internet. I further increased my knowledge in website development, further more I decided to broaden my knowledge by learning 3D modelling and VFX. After that I wanted to be recognized by getting Certificate form recognized Institutions, hence I resumed my studies.</p>
        </div>

        <div className="container">

          <div className="row">

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Sumary</h3>

              <div className="resume-item pb-0">
                <h4>Athumani Mwinami</h4>
                <p><em>Innovative and deadline-driven Web developer and Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                <ul>
                  <li>Mbezi, Dar es salaam, TZ</li>
                  <li>+255 625 799 380</li>
                  <li>mwinamijr@gmail.com</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Bachelor of Computer Science</h4>
                <h5>2024 - 2027</h5>
                <p><em>Institute of Accountancy Arusha, Dar es salaam campus</em></p>
                <p>I Studied Computer science, website and mobile applications development and graphics design just to get a certificate.</p>
              </div>

              <div className="resume-item">
                <h4>Open Foundation Program (OFP)</h4>
                <h5>2023 - 2024</h5>
                <p><em>The Open University of Tanzania (OUT)</em></p>
                <p>I studied Foundation program so that I can proceed further with my education</p>
              </div>

              <div className="resume-item">
                <h4> Advanced Secondary Education</h4>
                <h5>2022 - 2023</h5>
                <p><em>Hayatul Islamiya SS, Babati</em></p>
                <p>After a long stay out of school while learning different skills such as web development, graphics design, VFX and 3D modelling I decided to sit For an ACSEE examination so that I can complete my education and properly being cerified.</p>
              </div>

              <div className="resume-item">
                <h4>Secondary Education</h4>
                <h5>2007 - 2010</h5>
                <p><em>Ibra Secondary School, Kondoa</em></p>
                <p>I studied and completed my secondary education</p>
              </div>

            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>CEO and Web developer</h4>
                <h5>2019 - Present</h5>
                <p><em>Techdometz, Dar es salaam </em></p>
                <ul>
                  <li>Head of Tachdometz and Senior web developer</li>
                  <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                  <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                  <li>Video editing, production, VFX and 3D modelling</li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Head of IT department</h4>
                <h5>2017 - 2023</h5>
                <p><em>Hayatul Islamiya Complex, Babati</em></p>
                <ul>
                  <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                  <li>Leading the IT department in supervision and production</li>
                  <li>Website developmet and management</li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Teacher</h4>
                <h5>2017 - 2023</h5>
                <p><em>Hayatul Islamiya Complex, Babati</em></p>
                <ul>
                  <li>Teaching Chemistry subject during my time</li>
                  <li>Supervise chemistry laboratory and preparations of experiments </li>
                  <li>Prepared NECTA examination practicals for the school</li>
                </ul>
              </div>

            </div>

          </div>

        </div>

        </div>
      </div>
    </HelmetProvider>
  );
}

export default Resume;
