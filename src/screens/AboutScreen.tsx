import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ChevronRight } from "lucide-react";
import image from "./../assets/img/my-profile-img.jpg";
import { description } from "./constants";

interface SkillProps {
  name: string;
  percentage: number;
}

const SkillBar: React.FC<SkillProps> = ({ name, percentage }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-800">{name}</span>
        <span className="text-gray-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-blue-600 h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const leftSkills: SkillProps[] = [
    { name: "HTML", percentage: 100 },
    { name: "CSS", percentage: 80 },
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 85 },
    { name: "Python", percentage: 85 },
  ];

  const rightSkills: SkillProps[] = [
    { name: "Django", percentage: 90 },
    { name: "Blender", percentage: 80 },
    { name: "Graphics Design", percentage: 85 },
    { name: "Video Editing", percentage: 95 },
    { name: "Visual Effects (VFX)", percentage: 75 },
  ];

  const personalInfo = [
    { label: "Website", value: "mwinamijr.github.io" },
    { label: "Phone", value: "+255 625 799 380" },
    { label: "City", value: "Dar es salaam, TZ" },
  ];

  const professionalInfo = [
    { label: "Degree", value: "Bachelor in CS" },
    { label: "Email", value: "mwinamijr@gmail.com" },
    { label: "Freelance", value: "Available" },
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Mwinami Jr</title>
        <meta name="description" content={description} />
      </Helmet>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About</h2>
            <p className="text-lg italic text-gray-600 max-w-3xl mx-auto">
              I am an enthusiastic and creative website and Graphics designer.
              Also VFX and 3D modelling artist.
            </p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Profile Image */}
            <div className="lg:col-span-4">
              <img
                src={image}
                className="w-full rounded-lg shadow-lg"
                alt="Athumani Mwinami profile"
              />
            </div>

            {/* Info Content */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Web Developer &amp; Graphics Designer.
              </h2>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                {/* Left Column */}
                <ul className="space-y-3">
                  {personalInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-800">{info.label}:</strong>{" "}
                        <span className="text-gray-600">{info.value}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Right Column */}
                <ul className="space-y-3">
                  {professionalInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-800">{info.label}:</strong>{" "}
                        <span className="text-gray-600">{info.value}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Get all designs from scratch. From websites, Logo and video
                editing with stunning Visual Effects created with best tools
                available. Also 3D models of different objects like Logo and
                Architecture building maps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These are skills that I have which I perform them with Industry
              standard softwares.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              {leftSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>

            {/* Right Column */}
            <div>
              {rightSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default About;
