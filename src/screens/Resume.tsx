import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail } from "lucide-react";
import { description } from "./constants";

interface ResumeItemProps {
  title: string;
  period?: string;
  location?: string;
  description?: string;
  items?: string[];
  noBorder?: boolean;
}

const ResumeItem: React.FC<ResumeItemProps> = ({
  title,
  period,
  location,
  description,
  items,
  noBorder = false,
}) => {
  return (
    <div
      className={`relative pl-6 ${
        !noBorder ? "pb-8 border-l-2 border-blue-200" : ""
      }`}
    >
      {!noBorder && (
        <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
      )}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h4 className="text-xl font-bold text-gray-800 mb-2">{title}</h4>
        {period && (
          <h5 className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full mb-3">
            {period}
          </h5>
        )}
        {location && <p className="text-gray-600 italic mb-3">{location}</p>}
        {description && (
          <p className="text-gray-700 leading-relaxed mb-3">{description}</p>
        )}
        {items && items.length > 0 && (
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const Resume: React.FC = () => {
  const contactInfo = [
    { icon: <MapPin className="w-4 h-4" />, text: "Mbezi, Dar es salaam, TZ" },
    { icon: <Phone className="w-4 h-4" />, text: "+255 625 799 380" },
    { icon: <Mail className="w-4 h-4" />, text: "mwinamijr@gmail.com" },
  ];

  const education = [
    {
      title: "Bachelor of Computer Science",
      period: "2024 - 2027",
      location: "Institute of Accountancy Arusha, Dar es salaam campus",
      description:
        "I Studied Computer science, website and mobile applications development and graphics design just to get a certificate.",
    },
    {
      title: "Open Foundation Program (OFP)",
      period: "2023 - 2024",
      location: "The Open University of Tanzania (OUT)",
      description:
        "I studied Foundation program so that I can proceed further with my education",
    },
    {
      title: "Advanced Secondary Education",
      period: "2022 - 2023",
      location: "Hayatul Islamiya SS, Babati",
      description:
        "After a long stay out of school while learning different skills such as web development, graphics design, VFX and 3D modelling I decided to sit For an ACSEE examination so that I can complete my education and properly being certified.",
    },
    {
      title: "Secondary Education",
      period: "2007 - 2010",
      location: "Ibra Secondary School, Kondoa",
      description: "I studied and completed my secondary education",
    },
  ];

  const experience = [
    {
      title: "CEO and Web developer",
      period: "2019 - Present",
      location: "Techdometz, Dar es salaam",
      items: [
        "Head of Techdometz and Senior web developer",
        "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
        "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
        "Video editing, production, VFX and 3D modelling",
      ],
    },
    {
      title: "Head of IT department",
      period: "2017 - 2023",
      location: "Hayatul Islamiya Complex, Babati",
      items: [
        "Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).",
        "Leading the IT department in supervision and production",
        "Website development and management",
      ],
    },
    {
      title: "Teacher",
      period: "2017 - 2023",
      location: "Hayatul Islamiya Complex, Babati",
      items: [
        "Teaching Chemistry subject during my time",
        "Supervise chemistry laboratory and preparations of experiments",
        "Prepared NECTA examination practicals for the school",
      ],
    },
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Resume | Mwinami Jr</title>
        <meta name="description" content={description} />
      </Helmet>

      <section id="resume" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Resume</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              After my Secondary education I followed my passion in Graphics
              design and video editing where I self learned all my skills with
              the help of internet. I further increased my knowledge in website
              development, furthermore I decided to broaden my knowledge by
              learning 3D modelling and VFX. After that I wanted to be
              recognized by getting Certificate from recognized Institutions,
              hence I resumed my studies.
            </p>
          </div>

          {/* Resume Content */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Summary */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2 inline-block">
                  Summary
                </h3>
                <ResumeItem
                  title="Athumani Mwinami"
                  description="Innovative and deadline-driven Web developer and Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable."
                  noBorder
                />
                <div className="mt-4 flex flex-wrap gap-4 pl-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="text-blue-600">{info.icon}</span>
                      <span className="text-sm">{info.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2 inline-block">
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <ResumeItem
                      key={index}
                      title={edu.title}
                      period={edu.period}
                      location={edu.location}
                      description={edu.description}
                      noBorder={index === education.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2 inline-block">
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <ResumeItem
                    key={index}
                    title={exp.title}
                    period={exp.period}
                    location={exp.location}
                    items={exp.items}
                    noBorder={index === experience.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Resume;
