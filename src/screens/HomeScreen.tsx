import React from "react";
import Typewriter from "typewriter-effect";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import HeroImage from "./../assets/img/hero-bg.jpg";
import { companyName, companyUrl, description } from "./constants";

const typewriterStrings = [
  "I build software for Africa",
  "I lead TechDometz",
  "I code full-stack web apps",
  "I build React Native mobile apps",
  "I design brands and graphics",
  "I create 3D and VFX",
];

const Home: React.FC = () => (
  <>
    <Helmet>
      <title>Athumani Mwinami | Founder of TechDometz</title>
      <meta name="description" content={description} />
    </Helmet>

    <section id="home" className="flex flex-col lg:flex-row lg:min-h-[calc(100vh-4rem)]">
      <div
        className="order-1 lg:order-2 h-64 lg:h-auto lg:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
        role="img"
        aria-label="Athumani Mwinami"
      />

      <div className="order-2 lg:order-1 flex items-center justify-center lg:w-1/2 px-6 py-12 lg:px-12 bg-white">
        <div className="max-w-2xl space-y-6">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-accent-600">
            Founder &amp; CEO · {companyName}
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Hi, I am Athumani Mwinami
          </h2>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-600 min-h-[80px]">
            <Typewriter
              options={{
                strings: typewriterStrings,
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </h1>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I founded <strong className="text-gray-800">{companyName}</strong> in 2019 to
              build the software, AI and IT infrastructure behind East Africa's schools,
              hospitals, businesses and government offices — School ERP, HMS, Pharmacy and
              offline-first POS systems among them.
            </p>
            <p>
              Hands-on, I'm a full-stack developer (React, Django, React Native), and a
              graphics designer, video editor and Blender 3D / VFX artist.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/projects"
              className="flex-1 text-center px-6 py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition shadow-md"
            >
              See My Work
            </Link>
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1 px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition shadow-md"
            >
              Visit {companyName} <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Home;
