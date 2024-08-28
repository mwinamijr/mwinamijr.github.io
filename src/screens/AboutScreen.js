import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import image from './../assets/img/my-profile-img.jpg'
import { description } from './constants';

function About() {
  
  return (
    <HelmetProvider className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Mwinami Jr</title>
        <meta name="description" content={description} />
      </Helmet>
      <div id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p className="fst-italic py-3">
            I am an enthusiastic and creative website and Graphics designer. Also VFX and 3D modelling artist.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src={image} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 content">
              <h2>Web Developer &amp; Graphics Designer.</h2>
              <p className='py-3'></p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>mwinamijr.github.io</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+255 625 799 380</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Dar es salaam, TZ</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor in CS</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>mwinamijr@gmail.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
                Get all designs from scratch. From websites, Logo  and video editing with stunning Vissual  Effects created with best tools available. Also 3D models of different objects like Logo and Architecture building maps.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div id="skills" className="skills section light-background">

        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p>These are skills that I have which I perform them with Industry standard softwares.</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row skills-content skills-animation">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>CSS</span> <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>JavaScript</span> <i className="val">85%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>React</span> <i className="val">85%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Python</span> <i className="val">85%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill"><span>Django</span> <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Blender</span> <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Garphics Design</span> <i className="val">85%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Video Editing</span> <i className="val">95%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} style={{width: '95%'}}></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Visual Effects (VFX)</span> <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </HelmetProvider>
  );
}

export default About;
