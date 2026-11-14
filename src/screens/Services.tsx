import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Briefcase,
  Smartphone,
  BarChart3,
  Video,
  Sparkles,
  Box,
} from "lucide-react";
import { companyName, companyUrl, description } from "./constants";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Full-stack web apps and SaaS platforms — React and TypeScript on the frontend, Django and Python APIs on the backend.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description:
        "Cross-platform Android and iOS apps with React Native, connected to the same backend as your web system.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Graphics Design",
      description:
        "Brand identity, logos, UI/UX and marketing material in Photoshop, Illustrator, Inkscape and GIMP.",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Editing",
      description:
        "Promotional, product and event video edited in Adobe Premiere Pro and PowerDirector.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "VFX",
      description:
        "Motion graphics and visual effects with Adobe After Effects and Blender.",
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: "3D Modelling",
      description:
        "3D logos, product renders and architectural visualisation in Blender.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services | Athumani Mwinami</title>
        <meta name="description" content={description} />
      </Helmet>

      <section id="services" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Services</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              What I deliver personally and through my team at{" "}
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                {companyName}
              </a>
              . For ready-made systems (School ERP, HMS, Pharmacy, POS),
              electronics, networking and IT support, see the company site.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
