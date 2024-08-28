import React from 'react';
import Typewriter from "typewriter-effect";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import HeroImage from './../assets/img/hero-bg.jpg'
import { description } from './constants';

function Home() {
  return (
    <HelmetProvider className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Mwinami Jr</title>
        <meta name="description" content={description} />
      </Helmet>
      <section id="home" className="home">
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${HeroImage})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">Hi, I am Athumani Mwinami</h2>
         
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        "I love coding and designing",
                        "I code cool websites",
                        "I develop React Native mobile apps",
                        "I use Django Framework",
                        "I am a Graphics designer and Video Editor",
                        "I am a 3D and VFX artist",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">I am a Full-Stack web developer, working with React for Frontend and Djange Framework for Backend development. I also Use React Native for Mobile Apps development. (Android and IOS)</p>
                <p className="mb-1x">I am a also a competent Graphics Designer, Video Editor,VFX artist and Blender 3D Modelling artist.</p>
                <div className="intro_btn-action p-5">
                  <Link to="/resume" className="text_2 p-2">
                    <div className="btn btn-primary">
                      My Resume
                    </div>
                  </Link>
                  <Link to="/contact" className='p-2'>
                    <div className="btn btn-primary">
                      Contact Me
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}

export default Home;
