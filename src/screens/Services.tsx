import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  Briefcase,
  Smartphone,
  BarChart3,
  Video,
  Sparkles,
  Box,
} from "lucide-react";
import { description } from "./constants";

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
        "I create cool websites and mobile applications using React for website frontend and Django framework for backend development",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description:
        "React Native works well to create mobile applications which works well in both Android and iOS.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Graphics Design",
      description:
        "Logo design, photoshop and all related designs using industry standard softwares such as Adobe Photoshop and Illustrator.",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Editing",
      description:
        "We create stunning videos using industry standard softwares such as Adobe Premiere Pro and Power Director.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "VFX",
      description:
        "We bring uniqueness to your videos using stunning and creative visual effects using Adobe After Effects and Blender.",
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: "3D Modelling",
      description:
        "Blender is Free open source software which is multipurpose but works well in 3D modelling, VFX, compositing and video editing",
    },
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Services | Mwinami Jr</title>
        <meta name="description" content={description} />
      </Helmet>

      <section id="services" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Services</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              I use all standard softwares for my works. From Website developing
              tools and softwares to graphics designing and modelling softwares.
              Welcome so that I can work with you to create what you need. We
              use Industry standard softwares like React, React Native and
              Django for web and mobile apps development. We use Adobe
              Photoshop, Illustrator, Inkscape and GIMP for Graphics Design. We
              use Adobe Premiere Pro and Power Director for video editing, Adobe
              After Effects for VFX and Blender for 3D modelling.
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
    </HelmetProvider>
  );
};

export default Services;
