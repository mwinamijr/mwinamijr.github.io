import React from "react";
import Typewriter from "typewriter-effect";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import HeroImage from "./../assets/img/hero-bg.jpg";
import { description } from "./constants";

const Home: React.FC = () => {
  const typewriterStrings = [
    "I love coding and designing",
    "I code cool websites",
    "I develop React Native mobile apps",
    "I use Django Framework",
    "I am a Graphics designer and Video Editor",
    "I am a 3D and VFX artist",
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Mwinami Jr</title>
        <meta name="description" content={description} />
      </Helmet>

      <section id="home" className="min-h-screen">
        <div className="flex flex-col lg:flex-row h-screen">
          {/* Background Image */}
          <div
            className="order-1 lg:order-2 h-64 lg:h-full lg:w-1/2 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${HeroImage})` }}
            role="img"
            aria-label="Hero background"
          ></div>

          {/* Text Content */}
          <div className="order-2 lg:order-1 flex items-center justify-center h-full lg:w-1/2 px-6 py-12 lg:px-12 bg-white">
            <div className="max-w-2xl mx-auto">
              <div className="space-y-6">
                {/* Greeting */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  Hi, I am Athumani Mwinami
                </h2>

                {/* Typewriter */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 min-h-[80px]">
                  <Typewriter
                    options={{
                      strings: typewriterStrings,
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>

                {/* Description */}
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    I am a Full-Stack web developer, working with React for
                    Frontend and Django Framework for Backend development. I
                    also Use React Native for Mobile Apps development. (Android
                    and iOS)
                  </p>
                  <p>
                    I am also a competent Graphics Designer, Video Editor, VFX
                    artist and Blender 3D Modelling artist.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link to="/resume" className="flex-1">
                    <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300 shadow-md hover:shadow-lg">
                      My Resume
                    </button>
                  </Link>
                  <Link to="/contact" className="flex-1">
                    <button className="w-full px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 focus:ring-4 focus:ring-gray-400 transition-all duration-300 shadow-md hover:shadow-lg">
                      Contact Me
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Home;
