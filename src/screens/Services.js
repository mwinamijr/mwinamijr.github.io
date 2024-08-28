import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { description } from './constants';

function Services() {
  return (
    <HelmetProvider className="container">
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Services | Mwinami Jr</title>
          <meta name="description" content={description} />
        </Helmet>
        
        <section id="services" class="services section">

          <div class="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>I use all standard softwares for my works. From Website developing tools and softwares to graphics designing and modelling softwares. Welcome so that I can work with you to create what you need. We use Industry standard softwares like React, React Native and Django for web and mobile apps development. We use Adobe Photoshop, Illustrator, Inkscape and GIMP for Graphics Design. We use Adobe Premiere Pro and Power Director for video editing, Adobe After Effects for VFX and Blender for 3D modelling.</p>
          </div>

          <div class="container">

            <div class="row gy-4">

              <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                <div class="icon flex-shrink-0"><i class="bi bi-briefcase"></i></div>
                <div>
                  <h4 class="title">Web development</h4>
                  <p class="description">I create cool websites and mobile applications using React for website frontend and Django framework for backend development</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <div class="icon flex-shrink-0"><i class="bi bi-card-checklist"></i></div>
                <div>
                  <h4 class="title">Mobile Apps</h4>
                  <p class="description">React Native works well to create mobile applications which works well in both Android and IOS.</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <div class="icon flex-shrink-0"><i class="bi bi-bar-chart"></i></div>
                <div>
                  <h4 class="title">Graphics Design</h4>
                  <p class="description">Logo design, photoshop and all related designs using industry standard sotwares such as Adobe Photoshop and Illustrator.</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <div class="icon flex-shrink-0"><i class="bi bi-binoculars"></i></div>
                <div>
                  <h4 class="title">Video Editing</h4>
                  <p class="description">We create stunning videos using industry standard softwares such as Adobe Premiere Pro and Power Director.</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
                <div class="icon flex-shrink-0"><i class="bi bi-brightness-high"></i></div>
                <div>
                  <h4 class="title">VFX</h4>
                  <p class="description">Web bring uniqueness to your videos using stunning and creative visual effects using Adobe after effects and Blender.</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
                <div class="icon flex-shrink-0"><i class="bi bi-calendar4-week"></i></div>
                <div>
                  <h4 class="title">3D Modelling</h4>
                  <p class="description">Blender is Free open source software which is multipurpose but works well in 3D modelling, VFX, compositing and video editing</p>
                </div>
              </div>

            </div>

          </div>

        </section>
      </Container>
    </HelmetProvider>
  );
}

export default Services;
